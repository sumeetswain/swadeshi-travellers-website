import type { Metadata } from "next";
import type { ReactNode } from "react";

type TourLayoutProps = {
  children: ReactNode;
};

type TourMetadataProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: TourMetadataProps): Promise<Metadata> {
  const { slug } = await params;

  return {
    alternates: {
      canonical: `/tour/${slug}`,
    },
  };
}

export default function TourLayout({ children }: TourLayoutProps) {
  return children;
}
