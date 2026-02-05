"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Work_Sans, Inter } from 'next/font/google';
import { Recycle } from 'lucide-react'; // Ikon recycle untuk kartu di atas gambar

// Konfigurasi Font
const workSans = Work_Sans({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function About() {
  const { ref } = useSectionInView("Solutions");


  return (
    <motion.section
      ref={ref}
      className=""
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="solutions"
    >
      <section className={`w-full py-16 md:py-24  ${inter.className}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">

          {/* 1. TOP PARTNERS / BRANDS */}
          {/* Menggunakan Flexbox agar rapi dan responsif (turun ke bawah saat di HP) */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-green-700/80 text-sm md:text-lg font-medium mb-16 md:mb-24 text-center">
            <span>GreenTech Co</span>
            <span className="hidden md:inline text-green-300">|</span>
            <span>EcoBuild</span>
            <span className="hidden md:inline text-green-300">|</span>
            <span>SmartGrid</span>
            <span className="hidden md:inline text-green-300">|</span>
            <span>AgriNext</span>
            <span className="hidden md:inline text-green-300">|</span>
            <span>Solarix</span>
          </div>

          {/* 2. MAIN CONTENT GRID */}
          {/* Layout 2 Kolom: Kiri Teks, Kanan Gambar. Di HP jadi 1 kolom. */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* === LEFT COLUMN (Text) === */}
            <div className="flex flex-col items-start gap-6">
              <span className={`${workSans.className} text-green-700 text-lg md:text-xl font-bold tracking-tight`}>
                Our Mission
              </span>

              <h2 className={`${workSans.className} text-green-900 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1]`}>
                We build smart technology to protect the planet
              </h2>

              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg">
                We are a technology-driven initiative focused on creating sustainable solutions through AI, IoT, and smart systems to reduce environmental impact and support a greener future.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <button className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-3.5 rounded-full font-semibold transition shadow-lg hover:shadow-lime-500/30">
                  Learn More
                </button>
                <button className="border-2 border-lime-500 text-lime-600 hover:bg-lime-50 px-8 py-3.5 rounded-full font-semibold transition">
                  About Us
                </button>
              </div>
            </div>

            {/* === RIGHT COLUMN (Image Composition) === */}
            <div className="relative w-full">

              {/* Background Blob Decoration (Efek blur di belakang gambar) */}
              <div className="absolute -top-10 -right-10 w-3/4 h-3/4 bg-gray-100 rounded-[50px] -z-10 transform rotate-3" />

              {/* Main Image Container */}
              <div className="relative w-full h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="https://i.ibb.co.com/VccLsJGZ/image-14.png"
                  alt="Smart Agriculture Technology"
                  fill
                  className="object-cover"
                />

                {/* Overlay Card (Pojok Kiri Bawah Gambar) */}
                <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 bg-gradient-to-r from-lime-600/90 to-green-700/90 backdrop-blur-sm p-6 rounded-3xl text-white flex items-center justify-between gap-4 shadow-lg border border-white/20">
                  <div>
                    <h3 className={`${workSans.className} text-xl md:text-2xl font-medium leading-tight`}>
                      Turning data into sustainable action
                    </h3>
                  </div>
                  <div className="shrink-0 bg-white/20 p-2 rounded-full">
                    <Recycle className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
