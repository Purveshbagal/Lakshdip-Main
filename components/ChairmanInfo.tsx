"use client";

import React from "react";
import Image from "next/image";

export default function ChairmanInfo() {
  return (
    <div className="flex justify-center my-12">
      <div className="bg-gradient-to-r from-amber-500 to-amber-700 text-white rounded-lg shadow-lg p-8 max-w-3xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/nandkumarji-bedse.jpeg"
              alt="Dr. Nandkumarji Bedse"
              width={200}
              height={240}
              className="rounded-lg shadow-lg object-cover w-auto h-auto"
              priority
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <p className="text-2xl font-bold mb-4">
              Dr. Nandkumarji Bedse
            </p>
            <p className="text-xl font-semibold mb-4">
              Chairman
            </p>
            <p className="text-lg font-semibold">
              Chairman Maharashtra State Council of examination Pune
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
