"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Kaushan_Script, Work_Sans, Inter } from 'next/font/google';
import { ArrowRight, Leaf, Sun, Globe, Sparkles, MoveRight } from 'lucide-react';
import { useSectionInView } from "@/lib/hooks";


// Konfigurasi Font Google (Next.js Optimization)
const kaushan = Kaushan_Script({ weight: '400', subsets: ['latin'] });
const workSans = Work_Sans({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });


export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className={`relative w-full min-h-[5vh]  md:min-h-screen flex items-center  ${inter.className}`}
    >

      
        {/* 1. BACKGROUND IMAGE */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/hero.png"
            alt="Verdant Background"
            fill
            className="object-cover rounded-[3vw]"
            priority
          />
          {/* Overlay Gradient agar teks terbaca */}
          <div className="absolute rounded-[3vw] inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        </div>

        {/* 2. MAIN CONTENT GRID */}
        <div className="mx-auto md:px-12 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* === LEFT COLUMN (Text Content) === */}
          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-10">

            {/* Headline */}
            <h1 className={`${workSans.className} text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] drop-shadow-lg`}>
              Building a greener future <br />
              <span className="font-medium">with smart technology</span>
            </h1>

            {/* CTA Button */}
            <div>
              <button className="bg-white hover:bg-gray-100 text-green-800 px-8 py-4 rounded-full flex items-center gap-3 font-semibold text-lg transition shadow-xl group">
                Explore Green Tech
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Bottom Floating Stats (Glass Pill) */}
            <div className="mt-4 md:mt-8 inline-flex flex-wrap items-center bg-white/80 backdrop-blur-md rounded-full px-5 py-3 md:px-6 md:py-4 gap-4 max-w-fit shadow-lg border border-white/20">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-lime-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(132,204,22,0.8)]" />
                <span className="text-green-900 font-bold text-sm md:text-base">Live System Active</span>
              </div>
              <span className="hidden sm:block text-green-800/50">|</span>
              <div className="text-green-900 text-sm md:text-base">
                Carbon Reduced Today: <span className="font-extrabold">1.4T</span>
              </div>
            </div>
          </div>

          {/* === RIGHT COLUMN (Cards/Widgets) === */}
          <div className="lg:col-span-5 flex flex-col gap-6 items-center lg:items-end mt-8 lg:mt-0">

            {/* Card 1: Main Feature Card (Green Gradient) */}
            <div 
              className="relative w-full max-w-[380px] rounded-[40px] p-8 text-white shadow-2xl overflow-hidden group hover:shadow-lime-500/20 transition-all duration-300"
              style={{
                backgroundImage: 'url(/rectangle_hero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40 rounded-[40px]" />
              
              {/* Background Decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-lime-400/30 rounded-full blur-3xl group-hover:bg-lime-400/40 transition" />

              {/* Content */}
              <div className="relative z-10">
                <h2 className={`${workSans.className} text-5xl md:text-6xl font-medium mb-1`}>120+</h2>
                <p className="text-lime-100 font-medium mb-8 text-lg">Smart Systems Deployed</p>

                {/* Icons Row */}
                <div className="flex items-center gap-3 mb-10 bg-black/10 w-fit px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                  <Leaf className="w-5 h-5 text-lime-300" />
                  <Sun className="w-5 h-5 text-yellow-300" />
                  <Globe className="w-5 h-5 text-sky-300" />
                </div>

                {/* Bottom Action */}
                <div className="flex items-center justify-end gap-2 text-sm font-semibold cursor-pointer hover:gap-4 transition-all opacity-90 hover:opacity-100">
                  View Impact <MoveRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 2: AI Insight (Glassmorphism) */}
            <div className="w-full max-w-[380px] bg-white/80 backdrop-blur-xl rounded-3xl p-5 shadow-xl border border-white/40 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300">
              {/* Icon Box */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shrink-0">
                <Sparkles className="text-white w-6 h-6" />
              </div>

              {/* Text Info */}
              <div>
                <h3 className="text-green-800 font-bold text-sm mb-0.5">AI Insight</h3>
                <p className="text-green-700 text-xs font-medium">Energy Saved <span className="text-green-900 font-bold">+ 18%</span> this week</p>
              </div>
            </div>

          </div>
        </div>

   
    </section>
  );
}
