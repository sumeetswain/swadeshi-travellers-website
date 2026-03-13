"use client";

import { API_ENDPOINT, API_KEY } from "@/api/api";
import axios from "axios";
import { useState, FormEvent, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Errors = {
  fullname?: string;
  phone?: string;
  email?: string;
  date?: string;
};

const validatePhone = (value: string) => {
  return /^\d{10}$/.test(value);
};

const CallbackPopup: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [people, setPeople] = useState("1");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Errors = {};

    if (!fullname.trim()) newErrors.fullname = "Full name is required";
    if (!validatePhone(phone)) newErrors.phone = "Enter a valid phone number";
    if (email && !/^\S+@\S+\.\S+$/.test(email))
      newErrors.email = "Enter a valid email address";
    if (!date) newErrors.date = "Please select a preferred date";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("fullname", fullname);
      formData.append("mobile", phone);
      formData.append("email", email);
      formData.append("no_of_guests", people);
      formData.append("preferred_start_date", date ? date.toISOString() : "");
      formData.append("message", message);
      formData.append("api_key", API_KEY);
      formData.append("is_expecting_call_back", "yes");
      formData.append("from_url", window.location.href);

      await axios.post(`${API_ENDPOINT}/website/save-event-enquiry/`, formData);

      setSuccess(true);

      // reset form
      setFullname("");
      setPhone("");
      setDate(null);
      setPeople("1");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch (error) {
      console.error("Form submit error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);
  const inputBase =
    "w-full mt-1 p-3 bg-green-50 border-2 border-brand rounded-full outline-none focus:outline-none focus:border-brand";

  return (
    <div
      className="fixed inset-0 z-[9999]
                 bg-black/40 backdrop-blur-md
                 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative bg-white w-full max-w-lg
               rounded-3xl shadow-2xl p-8"
        onClick={(e) => e.stopPropagation()} // ❗ REQUIRED
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl
                     font-bold text-gray-500 hover:text-black"
          aria-label="Close"
        >
          &times;
        </button>

        <h1 className="text-2xl font-bold text-[#22aa22] mb-2 text-center">
          Request a Callback
        </h1>
        <p className="text-gray-600 text-center mb-5">
          Leave your details and our travel specialist will call you back.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold">Full Name</label>
              <input
                autoFocus
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className={inputBase}
              />
              {errors.fullname && (
                <p className="text-xs text-red-500 mt-1">{errors.fullname}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold">Phone</label>

              <div className="flex mt-1">
                {/* Country code */}
                <span
                  className="flex items-center px-4 bg-green-50
                 border-2 border-brand border-r-0
                 rounded-l-full text-sm 
                 text-brand select-none"
                >
                  +91
                </span>

                {/* Number input */}
                <input
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 10) setPhone(value);
                  }}
                  placeholder="9876543210"
                  className="w-full py-3 bg-green-50
                 border-2 border-brand border-l-0
                 rounded-r-full outline-none
                 focus:border-brand"
                />
              </div>

              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold">Preferred Date</label>
              <DatePicker
                selected={date}
                onChange={(d) => setDate(d)}
                minDate={new Date()}
                placeholderText="Select date"
                className={inputBase}
              />
              {errors.date && (
                <p className="text-xs text-red-500 mt-1">{errors.date}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold">Travellers</label>
              <select
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className={inputBase}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold">Email (optional)</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputBase}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold">Message</label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-1 p-3 bg-green-50 border-2 border-brand rounded-2xl outline-none focus:outline-none focus:border-brand"
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-gradient-to-r from-brand to-[#33cc33]
                       text-black p-3 rounded-full font-semibold
                       disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Request Callback"}
          </button>

          {success && (
            <p className="text-green-600 font-semibold text-center">
              ✅ Your request has been submitted!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CallbackPopup;
