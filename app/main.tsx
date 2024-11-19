'use client'
import { FloatingDock } from "@/components/dock";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";
import { RiZzzFill } from "react-icons/ri";
import { SiCodeforces } from "react-icons/si";
import Image from "next/image";

export default function Main() {
  const flapDuration = 0.6;
  const links = [
    {
      title: "GitHub",
      icon: (
        <IoLogoGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Kanna-Neko",
    },
    {
      title: "email",
      icon: (
        <HiOutlineMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:moonandxinxixn@gmail.com",
    },
    {
      title: "codeforces",
      icon: (
        <SiCodeforces className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://codeforces.com/profile/kannaneko",
    },
  ];
  return (
    <motion.div
      className="p-[clamp(0rem,15vw,5rem)] backdrop-blur-md border-2 dark:border-base-200 rounded-3xl flex flex-col gap-24 items-center"
      initial={{ rotateY: 90 }}
      animate={{ rotateY: 0 }}
      exit={{ rotateY: -90 }}
      transition={{
        duration: flapDuration,
      }}
    >
      <motion.div className="flex flex-col gap-8 items-center">
        <motion.div className="relative">
          <Image
            src={"/avatar.png"}
            height={160}
            width={160}
            quality={100}
            alt="avatar"
            className="w-[calc(10rem+4vw)] mask mask-circle object-cover"
          />
          <RiZzzFill className="absolute bg-base-200 mask mask-circle box-content p-2 right-3 bottom-3 size-[clamp(0.3rem,0.3rem+1.2vw,2rem)]" />
        </motion.div>
        <motion.p className="text-4xl self-start text-[clamp(1rem,1rem+3vw,2rem)]">
          Kannaneko
        </motion.p>
      </motion.div>
      <FloatingDock items={links} />
    </motion.div>
  );
}
