"use client";

import { useState } from "react";
import CallbackPopup from "./CallbackPopup";

type Props = {
  label: string;
  className?: string;
};

export default function NotifyButton({ label, className }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      {open && <CallbackPopup onClose={() => setOpen(false)} />}
    </>
  );
}
