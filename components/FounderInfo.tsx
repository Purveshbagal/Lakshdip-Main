"use client";

import React from "react";
import Image from "next/image";

export default function FounderInfo() {
  return (
    <div className="flex justify-center my-12">
      <div className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-lg p-8 max-w-3xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/vaibhav-jagtap.jpeg"
              alt="Mr. Vaibhav Dattatraya Jagtap"
              width={200}
              height={240}
              className="rounded-lg shadow-lg object-cover w-auto h-auto"
              priority
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <p className="text-2xl font-bold mb-4">
              Mr. Vaibhav Dattatraya Jagtap
            </p>
            <p className="text-lg font-semibold mb-2">
              Founder / Principal
            </p>
            <p className="text-lg font-semibold mb-6">
              Lakshadeep Computer Typing Institute
            </p>
            <div className="border-t border-white pt-4 mt-4">
              <p className="text-lg font-semibold mb-2">
                District Publicity Chief and Taluka President
              </p>
              <p className="text-lg font-semibold">
                Maharashtra State Government-Recognized Association of Computer Typing and Shorthand Institutes, Mumbai
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
