"use client";

import React from "react";
import Image from "next/image";

export default function PresidentInfo() {
  return (
    <div className="flex justify-center my-12">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg p-8 max-w-3xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/prakash-karale.jpeg"
              alt="Hon. Prakash Karale"
              width={200}
              height={240}
              className="rounded-lg shadow-lg object-cover w-auto h-auto"
              priority
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h3 className="text-xl font-bold mb-2">Affiliation</h3>
            <p className="text-lg font-semibold">
              President Maharashtra State Computer Typing and Shorthand Association
            </p>
            <p className="text-lg font-semibold">
              Of Government Recognized Institutions, Mumbai
            </p>
            <p className="text-2xl font-bold mt-4">
              Hon. Prakash Karale
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
