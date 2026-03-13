"use client";
import * as React from "react";
import moment from "moment";
import axios from "axios";
import { API_KEY, API_ENDPOINT } from "@/api/api";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import TripCard from "../Tripcard";
export function PackageLoader({
  title,
  category,
}: {
  title: string;
  category?: string; // make optional if it might not exist
}) {
  const [dataArray, setDataArray] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params: any = {
          api_key: API_KEY,
        };

        // ✅ Only add category if provided
        if (category) {
          params.category = category;
        }

        const res = await axios.get(`${API_ENDPOINT}/event-details/`, {
          params,
        });

        setDataArray([Object.values(res.data)]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [category]); // ✅ refetch if category changes

  const data = dataArray[0];

  return (
    <>
      {/* Card layout for small screens */}
      <div className="flex flex-col w-full h-full relative items-center">
        {/* Card layout for small screens */}
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
          {/* down is the carousal copied from upcoming trips */}
          <CarouselContent>
            {Array.from({ length: data?.length }).map((_, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <TripCard trip={data[index]} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" text-white" />
          <CarouselNext className="md:translate-x-1 text-white" />
        </Carousel>
      </div>
    </>
  );
}
