"use client";

import { cn } from "@/functions";
import { useClickOutside } from "@/hooks";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ isOpen, setIsOpen }: Props) => {
  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[98] w-full h-full bg-background/90 backdrop-blur-xl p-6 pt-28 overflow-y-auto"
        >
          <ul className="flex flex-col gap-6 text-lg text-white">
            <li onClick={() => setIsOpen(false)}>
              <Link href="/" className="block">Home</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href="#benefits" className="block">Services</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href="#cta" className="block">Contact</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
