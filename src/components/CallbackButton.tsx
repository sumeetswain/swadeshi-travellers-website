// // components/CallbackButton.jsx

// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
// } from "@/components/ui/dialog";
// import ConnectForm from "@/components/ConnectForm";

// export default function CallbackButton({
//   buttonText = "Request a Callback",
//   className = "",
// }) {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <button className={`${className}`}>{buttonText}</button>
//       </DialogTrigger>
//       <DialogContent className="w-[90%]">
//         <DialogHeader>
//           <ConnectForm />
//         </DialogHeader>
//       </DialogContent>
//     </Dialog>
//   );
// }

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
