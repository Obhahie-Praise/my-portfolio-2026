import Image from "next/image";
import React from "react";

const Reachout = () => {
  return (
    <section id="reachout" className="space-y-[70px]">
      <div className="grid grid-cols-2">
        <h3 className="text-[150px] tracking-[1%] leading-none font-mono flex items-center">
          Reach out
        </h3>
        <p className="text-[28px] tracking-[1%] leading-[122%] flex items-center">
          Have an idea worth building, a problem worth solving, or just want to
          talk? I’d love to hear from you.
        </p>
      </div>

      <div className="flex items-start justify-between gap-[50px]">
        <form action="" className="space-y-[24px] flex flex-col w-full">
          <input
            type="text"
            placeholder="Full name"
            className="text-[32px] leading-none tracking-[1%] border-b border-foreground outline-none py-[18px]"
          />
          <input
            type="text"
            placeholder="Email"
            className="text-[32px] leading-none tracking-[1%] border-b border-foreground outline-none py-[18px]"
          />
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="text-[32px] leading-none tracking-[1%] resize-none border-b border-foreground outline-none py-[18px]"
          />
          <button
            type="submit"
            className="text-[32px] leading-none tracking-[1%] flex items-center gap-[10px] text-white bg-foreground rounded-[5px] py-[15px] px-[30px] w-fit"
          >
            <p className="">Send it</p>
            <Image
              src={"/arrow-white.svg"}
              alt="send btn"
              width={20}
              height={20}
            />
          </button>
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
              alt="github"
              width={36}
              height={36}
            />
            <p>Benin, Nigeria</p>
          </div>
          <div className="flex items-center gap-[24px]">
            <Image
              src={"/icons/calendar.svg"}
              alt="github"
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
