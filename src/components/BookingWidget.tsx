import Script from "next/script";
import { useEffect } from "react";

export default function BookingWidget({ eventSlug }) {
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
