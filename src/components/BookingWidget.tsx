"use client";

import Script from "next/script";
import { useEffect } from "react";
declare global {
  interface Window {
    logout?: {
      widget?: {
        setConfig: (config: {
          eventSlug: string;
          placement: string;

          customClass?: string;
          btnId?: string;
          downloadBtnId?: string;
          enquiryBtnId?: string;

          showEverything?: boolean;
          onlyButton?: boolean;
          showItineraryButton?: boolean;
          showEnquiryButton?: boolean;
          showDownloadButton?: boolean;

          bookNowButtonColor?: string;
          itineraryButtonColor?: string;

          booknowButtonName?: string;
          buttonName?: string;
          itineraryButtonName?: string;
          enquiryButtonName?: string;
        }) => void;

        init: () => void;
      };
    };
  }
}

export default function BookingWidget({ eventSlug }: { eventSlug: string }) {
  useEffect(() => {
    const initializeWidget = () => {
      if (window.logout && window.logout.widget) {
        window.logout.widget.setConfig({
          eventSlug: eventSlug,
          placement: "#book-container",
          customClass: "btn-custom",
          btnId: "logout-bnb",
          downloadBtnId: "logout-download-button",
          enquiryBtnId: "logout-enquiry-button",
          showEverything: true,
          onlyButton: false,
          showItineraryButton: true,
          showEnquiryButton: true,
          bookNowButtonColor: "black",
          itineraryButtonColor: "black",
          booknowButtonName: "Book Now",
          itineraryButtonName: "Itinerary",
          enquiryButtonName: "Enquire",
        });
        window.logout.widget.init();
      }
    };

    if (window.logout && window.logout.widget) {
      initializeWidget();
    }
  }, [eventSlug]);

  return (
    <div>
      <Script
        src="https://logout.world/static/widget/logout-booking.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("Booking widget script loaded!");
          if (window.logout && window.logout.widget) {
            window.logout.widget.setConfig({
              eventSlug: eventSlug,
              placement: "#book-container",
              customClass: "btn-custom",
              btnId: "logout-bnb",
              downloadBtnId: "logout-download-button",
              enquiryBtnId: "logout-enquiry-button",
              showEverything: true,
              onlyButton: false,
              showItineraryButton: true,
              showEnquiryButton: true,
              bookNowButtonColor: "black",
              itineraryButtonColor: "black",
              booknowButtonName: "Book Now",
              itineraryButtonName: "Itinerary",
              enquiryButtonName: "Request Callback",
            });
            window.logout.widget.init();
          }
        }}
      />
      <div id="book-container"></div>
    </div>
  );
}
