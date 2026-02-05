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

export default function section4() {
  const { ref } = useSectionInView("Impact");
  

  const CheckIcon = () => (
    <svg
      className="w-6 h-6 text-green-600 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  const ArrowIcon = () => (
    <svg
      className="w-5 h-5 text-green-700 group-hover:translate-x-1 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );

  return (
    <motion.section
      ref={ref}
      className=""
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="impact"
    >
      <div className={`max-w-[1200px] mx-auto px-4 py-12 ${inter.className}`}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-green-800 text-3xl md:text-4xl font-semibold mb-4 ${workSans.className}`}>
            Smart solutions for measurable environmental impact
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We provide end-to-end smart systems that help organizations monitor, optimize, and reduce their environmental footprint using data-driven technology.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Smart Farm Intelligence */}
          <div className="relative flex flex-col items-center">
            <img
              src="https://media.springernature.com/lw1200/springer-static/image/art%3A10.1007%2Fs44430-025-00006-0/MediaObjects/44430_2025_6_Fig2_HTML.png"
              alt="Smart Farm Intelligence"
              className="w-full h-72 object-cover rounded-[40px] shadow-sm"
            />
            <div className={`bg-white rounded-[32px] p-8 shadow-xl w-full -mt-24 z-10 relative flex flex-col h-full border border-gray-100 ${inter.className}`}>
              <h3 className={`text-green-800 text-2xl font-semibold mb-4 ${workSans.className}`}>
                Smart Farm Intelligence
              </h3>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Real-time monitoring and AI-powered insights to help farms and agribusinesses make smarter decisions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-gray-700 font-medium">soil & weather sensors</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-gray-700 font-medium">real-time dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-gray-700 font-medium">AI-based recommendations</span>
                </li>
              </ul>
              <div className="mt-auto mb-6">
                <p className="text-green-800 text-lg">
                  Up to <span className="text-3xl font-bold">30%</span><br />
                  <span className="font-medium">resource efficiency improvement</span>
                </p>
              </div>
              <a
                href="#"
                className="group flex items-center justify-between border border-gray-200 rounded-full px-6 py-3 hover:border-green-600 transition-colors"
              >
                <span className="text-green-700 font-medium">View Solution</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Card 2: Energy Optimization System */}
          <div className="relative flex flex-col items-center">
            <img
              src="https://galooli.com/wp-content/uploads/2022/07/Galooli-Remote-Monitoring-Dashboard-Energy-Management-1024x576.png"
              alt="Energy Optimization System"
              className="w-full h-72 object-cover rounded-[40px] shadow-sm"
            />
            <div className={`bg-white rounded-[32px] p-8 shadow-xl w-full -mt-24 z-10 relative flex flex-col h-full border border-gray-100 ${inter.className}`}>
              <h3 className={`text-green-800 text-2xl font-semibold mb-4 ${workSans.className}`}>
                Energy Optimization System
              </h3>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                An intelligent system that tracks, analyzes, and optimizes energy consumption across buildings.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-gray-700 font-medium">energy monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-gray-700 font-medium">efficiency alerts</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-gray-700 font-medium">actionable AI insights</span>
                </li>
              </ul>
              <div className="mt-auto mb-6">
                <p className="text-green-800 text-lg">
                  Reduce energy usage by<br />
                  <span className="text-3xl font-bold">18%</span>{' '}
                  <span className="font-medium">or more</span>
                </p>
              </div>
              <a
                href="#"
                className="group flex items-center justify-between border border-gray-200 rounded-full px-6 py-3 hover:border-green-600 transition-colors"
              >
                <span className="text-green-700 font-medium">View Solution</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Card 3: Carbon Impact & Reporting */}
          <div className="relative flex flex-col items-center">
            <img
              src="https://www.nusconsulting.com/assets/images/inline/nus-carbon-footprint-dashboard-scope3.png"
              alt="Carbon Impact & Reporting"
              className="w-full h-72 object-cover rounded-[40px] shadow-sm"
            />
            <div className={`bg-white rounded-[32px] p-8 shadow-xl w-full -mt-24 z-10 relative flex flex-col h-full border border-gray-100 ${inter.className}`}>
              <h3 className={`text-green-800 text-2xl font-semibold mb-4 ${workSans.className}`}>
                Carbon Impact & Reporting
              </h3>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Track carbon emissions, measure sustainability impact, and generate clear reports for compliance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-gray-700 font-medium">carbon tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-gray-700 font-medium">automated reports</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-gray-700 font-medium">ESG-ready data</span>
                </li>
              </ul>
              <div className="mt-auto mb-6">
                <p className="text-green-800 text-lg">
                  Accurate, auditable<br />
                  <span className="text-2xl font-semibold">environmental insights</span>
                </p>
              </div>
              <a
                href="#"
                className="group flex items-center justify-between border border-gray-200 rounded-full px-6 py-3 hover:border-green-600 transition-colors"
              >
                <span className="text-green-700 font-medium">View Solution</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
