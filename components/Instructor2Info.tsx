"use client";

import React from "react";
import Image from "next/image";

export default function Instructor2Info() {
  return (
    <div className="flex justify-center my-12">
      <div className="bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-lg shadow-lg p-8 max-w-3xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/bhakti-shinde.jpeg"
              alt="Mrs. Bhakti Suresh Shinde"
              width={200}
              height={240}
              className="rounded-lg shadow-lg object-cover w-auto h-auto"
              priority
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <p className="text-2xl font-bold mb-4">
              Mrs. Bhakti Suresh Shinde
            </p>
            <p className="text-xl font-semibold">
              Instructor
            </p>
            <p className="text-lg font-semibold mt-2">
              Lakshadeep Computer Typing Institute
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
