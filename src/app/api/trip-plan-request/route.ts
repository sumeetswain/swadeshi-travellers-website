import axios from "axios";
import { NextResponse } from "next/server";

const SEMBARK_URL =
  "https://api.sembark.com/integrations/v1/trip-plan-requests";

type TripPlanRequestBody = {
  name: string;
  phone_number: string;
  email?: string | null;
  start_date?: string | null;
  no_of_days?: number | null;
  no_of_adults?: number | null;
  no_of_children?: number | null;
  destination?: string | null;
  comments?: string | null;
  reference_id?: string | null;
};

export async function POST(request: Request) {
  const token = process.env.SEMBARK_API_TOKEN;

  if (!token) {
    return NextResponse.json(
      { message: "Trip plan service is not configured." },
      { status: 500 },
    );
  }

  let body: TripPlanRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const { name, phone_number } = body;

  if (!name?.trim() || !phone_number?.trim()) {
    return NextResponse.json(
      { message: "Name and phone number are required." },
      { status: 422 },
    );
  }

  try {
    const response = await axios.post(
      `${SEMBARK_URL}?name=${encodeURIComponent(name)}&phone_number=${encodeURIComponent(phone_number)}`,
      body,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    return NextResponse.json(
      { message: response.data?.message ?? "Request submitted successfully." },
      { status: 200 },
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status ?? 500;
      const message =
        error.response?.data?.message ??
        error.response?.data?.error ??
        "Something went wrong. Please try again.";

      return NextResponse.json({ message }, { status });
    }

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
