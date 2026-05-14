import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { useState } from "react";

type Batch = {
  startdate: string;
};

type Trip = {
  slug: string;
  name: string;
  number_of_nights: number;
  number_of_days: number;
  startpoint: string;
  batches: Batch[];
  price: string;
  price_striked?: string;
  list_pic: string;
};

type TripCardProps = {
  trip: Trip;
  redirect?: boolean;
};

const TripCard = ({ trip, redirect = true }: TripCardProps) => {
  const [open, setOpen] = useState(false);

  if (!trip) return null;
  return (
    <div className="flex flex-col h-full p-5">
      <div className="overflow-hidden rounded-xl transform text-white movie-card relative h-full w-full transition-transform duration-300 hover:scale-110 hover:z-10">
        <div
          onClick={(e) => {
            if (!redirect) {
              e.preventDefault();
              setOpen(true);
            }
          }}
          className="h-full w-full"
        >
          <Link
            href={redirect ? `/tour/${trip?.slug}` : "#"}
            onClick={(e) => {
              if (!redirect) e.preventDefault();
            }}
            className={`${!redirect ? "pointer-events-none" : ""}`}
          >
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black via-black to-transparent h-1/2"></div>
            <div className="relative cursor-pointer group z-10 px-4 pt-10 space-y-6 movie_info h-full flex flex-col justify-between">
              <div className="h-40"></div>
              <div>
                <h6 className="text-base font-bold text-white">{trip.name}</h6>

                <div className="flex flex-col justify-center pt-1 nb-4">
                  <div className="flex flex-wrap lg:justify-between">
                    <div className="flex flex-wrap gap-2 items-center">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="h-5 text-brand"
                      />
                      <div className="lg:font-medium">
                        {trip.number_of_nights}N/{trip.number_of_days}D
                      </div>
                    </div>
                    <div className="flex flex-wrap pl-2 gap-2 items-center">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="h-5 text-brand"
                      />
                      <div className="lg:font-medium">{trip.startpoint}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap pt-1 gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="h-5 text-brand"
                    />
                    <div className="w-4/5 lg:font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                      {trip.batches.length
                        ? trip.batches
                            .map((batch: Batch) =>
                              moment.utc(batch.startdate).format("D MMM"),
                            )
                            .join(", ")
                        : "Dates on Request"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-end text-black">
                {trip.price_striked ? (
                  <div className="absolute top-0 right-0 p-2 text-sm lg:text-base bg-brand text-white text-center rounded-md font-bold">
                    <span className="line-through decoration-red-500 decoration-2 mr-1">
                      ₹{parseFloat(trip.price_striked)}
                    </span>
                    ₹{parseFloat(trip.price)}/-onwards
                  </div>
                ) : (
                  <div className="absolute top-0 right-0 text-sm lg:text-base bg-brand text-white text-center p-1 rounded-md font-bold">
                    Price on Request
                  </div>
                )}
              </div>
            </div>

            <img
              className="absolute inset-0 transform w-full h-full object-cover"
              src={trip.list_pic}
              alt={trip.name}
              style={{ filter: "grayscale(0)" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
