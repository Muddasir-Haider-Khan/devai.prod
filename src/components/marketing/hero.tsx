import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../global/container";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center w-full max-w-7xl min-h-screen mx-auto z-40 relative px-4">
            <BlurText
                word={"WE ARE DEVAI"}
                className="text-4xl sm:text-6xl lg:text-7xl xl:text-[7rem] 2xl:text-[8rem] bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-tight font-semibold tracking-tight font-heading"
            />
            <Container delay={0.1}>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mt-6 text-accent-foreground/60 max-w-3xl mx-auto">
                    Redefining the digital landscape with bespoke designs and innovative solutions tailored for your success.
                </p>
            </Container>
        </div>
    );
};

export default Hero;
