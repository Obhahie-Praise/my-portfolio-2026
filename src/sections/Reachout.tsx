"use client";

import Image from "next/image";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "motion/react";

type Status = "idle" | "sending" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Reachout = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [validationError, setValidationError] = useState<string | null>(null);

  const isSending = status === "sending";

  const clearFeedback = () => {
    if (validationError) setValidationError(null);
    if (status === "error" || status === "success") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (isSending) return;

    // Client-side validation
    if (!fullName.trim()) {
      setValidationError("Please enter your full name.");
      return;
    }
    if (!email.trim() || !EMAIL_RE.test(email.trim())) {
      setValidationError("Please enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      setValidationError("Please enter a message.");
      return;
    }

    setValidationError(null);
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          full_name: fullName,
          email: email,
          message: message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      setFullName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  const feedbackMessage =
    status === "success"
      ? "Message sent."
      : validationError ?? (status === "error" ? "Something went wrong. Try again." : null);

  const showFeedback = feedbackMessage !== null;

  return (
    <section id="reachout" className="space-y-[70px] px-[50px] ">
      <div className="grid grid-cols-2">
        <h3 className="text-[150px] tracking-[1%] leading-none font-mono flex items-center">
          Reach out
        </h3>
        <p className="text-[28px] tracking-[1%] leading-[122%] flex items-center">
          Have an idea worth building, a problem worth solving, or just want to
          talk? I&apos;d love to hear from you.
        </p>
      </div>

      <div className="flex items-start justify-between gap-[40px]">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-[24px] flex flex-col w-full"
        >
          <input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              clearFeedback();
            }}
            disabled={isSending}
            className="cursor-none text-[32px] leading-none tracking-[1%] border-b border-foreground outline-none py-[18px] bg-transparent disabled:opacity-50 transition-opacity duration-200"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearFeedback();
            }}
            disabled={isSending}
            className="cursor-none text-[32px] leading-none tracking-[1%] border-b border-foreground outline-none py-[18px] bg-transparent disabled:opacity-50 transition-opacity duration-200"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              clearFeedback();
            }}
            disabled={isSending}
            className="cursor-none text-[32px] leading-none tracking-[1%] resize-none border-b border-foreground outline-none py-[18px] bg-transparent disabled:opacity-50 transition-opacity duration-200"
          />

          {/* Quiet inline feedback */}
          <AnimatePresence mode="wait">
            {showFeedback && (
              <motion.p
                key={feedbackMessage}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className={`text-[18px] leading-none tracking-[1%] ${
                  status === "success" ? "opacity-50" : "opacity-70"
                }`}
              >
                {feedbackMessage}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={isSending}
            animate={{ opacity: isSending ? 0.55 : 1 }}
            transition={{ duration: 0.2 }}
            className="text-[32px] leading-none tracking-[1%] flex items-center gap-[10px] text-white bg-foreground rounded-[5px] py-[15px] px-[30px] w-fit disabled:cursor-not-allowed"
          >
            <p>{isSending ? "Sending…" : "Send it"}</p>
            {!isSending && (
              <Image
                src={"/arrow-white.svg"}
                alt="send btn"
                width={20}
                height={20}
              />
            )}
          </motion.button>
        </form>

        <div className="text-[40px] font-mono font-medium space-y-[32px] w-fit">
          <div className="flex items-center gap-[24px]">
            <Image
              src={"/icons/phone.svg"}
              alt="phone"
              width={36}
              height={36}
            />
            <p>+234 905 331 2182</p>
          </div>
          <div className="flex items-center gap-[24px]">
            <Image src={"/icons/mail.svg"} alt="mail" width={36} height={36} />
            <p>obhahiepraise@gmail.com</p>
          </div>
          <div className="  flex items-center gap-[24px]">
            <Image
              src={"/icons/location.svg"}
              alt="location"
              width={36}
              height={36}
            />
            <p>Benin, Nigeria</p>
          </div>
          <div className="flex items-center gap-[24px]">
            <Image
              src={"/icons/calendar.svg"}
              alt="calendar"
              width={36}
              height={36}
            />
            <p>Reply within 1–2 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reachout;
