"use client";

import { useState } from "react";
import CallbackPopup from "./CallbackPopup";

const CallbackButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-brand text-black px-6 py-3 rounded-full font-semibold"
      >
        Request Callback
      </button>

      {/* Popup */}
      {open && <CallbackPopup onClose={() => setOpen(false)} />}
    </>
  );
};

export default CallbackButton;
