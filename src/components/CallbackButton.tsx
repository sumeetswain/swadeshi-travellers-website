// components/CallbackButton.jsx

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import ConnectForm from "@/components/ConnectForm";

export default function CallbackButton({
  buttonText = "Request a Callback",
  className = "",
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={`${className}`}>{buttonText}</button>
      </DialogTrigger>
      <DialogContent className="w-[90%]">
        <DialogHeader>
          <ConnectForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
