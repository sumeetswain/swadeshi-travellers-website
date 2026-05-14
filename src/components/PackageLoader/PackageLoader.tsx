"use client";

import * as React from "react";
import axios from "axios";
import { API_KEY, API_ENDPOINT } from "@/api/api";
import { useState, useEffect } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import TripCard from "../Tripcard";

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

type PackageLoaderProps = {
  title: string;
  category?: string;
};

export function PackageLoader({ title, category }: PackageLoaderProps) {
  const [dataArray, setDataArray] = useState<Trip[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params: {
          api_key: string;
          category?: string;
        } = {
          api_key: API_KEY,
        };

        // only add category if present
        if (category) {
          params.category = category;
        }

        const res = await axios.get(`${API_ENDPOINT}/event-details/`, {
          params,
        });

        setDataArray([Object.values(res.data) as Trip[]]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [category]);

  const data = dataArray[0];

  return (
    <div className="flex flex-col w-full h-full relative items-center">
      {title && (
        <div className="text-3xl lg:text-4xl text-center font-bold text-black pt-2">
          {title}

          <div
            className="h-6 w-full bg-brand"
            style={{
              maskImage: "url('/underline.svg')",
              WebkitMaskImage: "url('/underline.svg')",
            }}
          />
        </div>
      )}

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-10/12 mb-20 lg:mb-8 py-8 min-h-[500px]"
      >
        <CarouselContent>
          {Array.from({ length: data?.length || 0 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <TripCard trip={data[index]} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="text-white" />
        <CarouselNext className="md:translate-x-1 text-white" />
      </Carousel>
    </div>
  );
}
