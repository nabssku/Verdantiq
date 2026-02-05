"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Work_Sans, Inter } from 'next/font/google';
import { Sprout, Settings, Leaf, BarChart3, Recycle } from 'lucide-react';// Ikon recycle untuk kartu di atas gambar

// Konfigurasi Font
const workSans = Work_Sans({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function section3() {
  const { ref } = useSectionInView("Technology");
  // Data untuk 4 Kolom agar kodenya lebih bersih (DRY)
  const features = [
    {
      step: 1,
      label: "Collect Data",
      type: "image",
      imageSrc: "https://i.ibb.co.com/VccLsJGZ/image-14.png", // Gambar wanita tani
      icon: Sprout,
      desc: "Accurate data is the foundation of every smart decision."
    },
    {
      step: 2,
      label: "Analyze",
      type: "stat_dark",
      mainStat: "18%",
      subStat: "Energy Saved This Week",
      icon: Settings,
      desc: "Turning raw data into meaningful insights."
    },
    {
      step: 3,
      label: "Optimize",
      type: "image",
      imageSrc: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop", // Gambar bola lampu/globe
      icon: Leaf,
      desc: "Optimized systems lead to sustainable growth."
    },
    {
      step: 4,
      label: "Impact",
      type: "stat_light",
      topText: "1.4T",
      topLabel: "Carbon Reduced",
      subTitle: "120+ Smart Systems",
      desc: "Real-time monitoring and automation reduce impact."
    }
  ];

  return (
    <motion.section
      ref={ref}
      className=""
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="technology"
    >
      <section className={`w-full py-16 md:py-24  ${inter.className}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">

          {/* 1. SECTION HEADING */}
          <h2 className={`${workSans.className} text-center text-green-900 text-3xl md:text-5xl font-semibold mb-16 md:mb-20 leading-tight`}>
            How smart technology creates sustainable impact
          </h2>

          {/* 2. GRID CONTENT (Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">

            {features.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 group">

                {/* === TOP CARD (Visual/Stat) === */}
                <div className={`h-64 rounded-[35px] overflow-hidden shadow-lg relative transition-transform hover:-translate-y-2 duration-300 w-full`}>

                  {/* Tipe 1: Gambar */}
                  {item.type === 'image' && item.imageSrc && (
                    <Image
                      src={item.imageSrc}
                      alt={item.label}
                      fill
                      className="object-cover"
                    />
                  )}

                  {/* Tipe 2: Statistik Hijau Gelap */}
                  {item.type === 'stat_dark' && (
                    <div className="w-full h-full bg-[#1e5e43] p-6 flex flex-col justify-center text-white">
                      <span className={`${workSans.className} text-6xl font-semibold mb-2`}>{item.mainStat}</span>
                      <span className={`${workSans.className} text-xl font-medium leading-tight`}>{item.subStat}</span>
                      <div className="absolute bottom-6 left-6 opacity-20">
                        <Recycle className="w-12 h-12" />
                      </div>
                    </div>
                  )}

                  {/* Tipe 3: Statistik Hijau Terang */}
                  {item.type === 'stat_light' && (
                    <div className="w-full h-full bg-lime-500 p-6 flex flex-col justify-center text-white relative">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className={`${workSans.className} text-5xl font-semibold`}>{item.topText}</span>
                        <span className="text-sm font-medium opacity-90">{item.topLabel}</span>
                      </div>
                      <p className="text-sm opacity-90 font-medium leading-relaxed">
                        Real-time monitoring automation.
                      </p>
                    </div>
                  )}
                </div>

                {/* === BOTTOM CARD (Description) === */}
                {/* Khusus kartu ke-4 (Impact) punya layout sedikit beda di desain, tapi kita samakan strukturnya agar rapi */}
                <div className={`flex-1 bg-neutral-50 rounded-[35px] p-6 shadow-md border border-neutral-100 flex flex-col justify-between min-h-[160px] hover:shadow-lg transition-shadow`}>

                  {/* Jika tipe stat_light (Card 4), tampilkan sub-judul hijau */}
                  {item.type === 'stat_light' ? (
                    <div className="flex flex-col h-full justify-center">
                      <h4 className="text-lime-600 text-xl font-bold mb-2">{item.subTitle}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ) : (
                    /* Default Layout (Icon + Text) */
                    <>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      {item.icon && (
                        <div className="w-fit p-2 bg-white rounded-full shadow-sm">
                          <item.icon className="w-5 h-5 text-gray-400" />
                        </div>
                      )}
                    </>
                  )}
                </div>

              </div>
            ))}

          </div>

          {/* 3. TIMELINE / STEPS INDICATOR */}
          {/* Menggunakan Grid yang sama agar posisi angka sejajar dengan kartu di atasnya */}
          <div className="hidden lg:grid grid-cols-4 gap-8 mt-12 relative">

            {/* Garis Abu-abu (Background Line) */}
            <div className="absolute top-[14px] left-0 w-full h-[2px] bg-gray-200 -z-10" />
            {/* Garis Hijau (Progress - Opsional, misal hanya sampai step 1) */}
            <div className="absolute top-[14px] left-0 w-[12%] h-[2px] bg-green-700 -z-10" />

            {features.map((item, index) => (
              <div key={index} className="flex flex-col gap-3 px-4">
                <div className="flex items-center gap-4">
                  {/* Circle Number */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 
                  ${index === 0 ? 'bg-green-700 text-white shadow-[0_0_0_4px_white]' : 'bg-gray-200 text-gray-500 bg-white border border-gray-200'}`}>
                    {item.step}
                  </div>
                </div>
                {/* Label */}
                <span className={`text-sm font-bold ${index === 0 ? 'text-green-800' : 'text-gray-900'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </motion.section>
  );
}
