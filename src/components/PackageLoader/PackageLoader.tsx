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
export function PackageLoader() {
  const [dataArray, setDataArray] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `${API_ENDPOINT}/event-details/?api_key=${API_KEY}&category=international-trips`
        ) // just need to add &category=intenational
        .then((res: any) => {
          setDataArray([Object.values(res.data)]);
        });
    };
    fetchData();
  }, []);
  const data = dataArray[0];

  return (
    <>
      {/* Card layout for small screens */}
      <div className="flex flex-col w-full h-full relative items-center">
        {/* Card layout for small screens */}
        <div className="flex flex-col items-center justify-center p-4 mt-5  mb-3 gap-2">
          <div className=" text-3xl lg:text-4xl text-center font-bold text-black pt-2 ">
            International Trips
            <div
              className="h-6 w-full bg-brand"
              style={{
                maskImage: "url('/underline.svg')",
                WebkitMaskImage: "url('/underline.svg')",
              }}
            />
          </div>
        </div>
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
