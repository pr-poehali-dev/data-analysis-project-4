import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import CallbackForm from "@/components/CallbackForm";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/313ee654-585a-476a-b6e6-a522aa083d68/files/992851e8-6e90-4f75-b700-638360bfc66d.jpg"
          alt="Грузчики за работой"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ГРУЗЧИКИ В НОВОСИБИРСКЕ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-8">
          Профессиональные грузчики, разнорабочие и уборщицы. Быстро, надёжно, качественно.
        </p>
        <CallbackForm />
      </div>
    </div>
  );
}