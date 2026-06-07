"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

const instructors = [
  {
    nameKey: "honPrakashKarale",
    titleKeys: ["presidentTypingShorthandAssociationMumbai"],
    image: "/images/prakash-karale.jpeg",
    bgColor: "from-blue-500 to-blue-700",
  },
  {
    nameKey: "mrVaibhavDattatrayaJagtap",
    titleKeys: [
      "founderPrincipal",
      "vaibhavInstituteAndAssociation",
    ],
    image: "/images/vaibhav-jagtap.jpeg",
    bgColor: "from-green-500 to-green-700",
  },
  {
    nameKey: "drNandkumarjiBedse",
    titleKeys: ["chairmanMscePune"],
    image: "/images/nandkumarji-bedse.jpeg",
    bgColor: "from-amber-500 to-amber-700",
  },
  {
    nameKey: "mrVijaySakharamSupare",
    titleKeys: ["instructor"],
    image: "/images/vijay-supare.jpeg",
    bgColor: "from-purple-500 to-purple-700",
  },
  {
    nameKey: "mrsBhaktiSureshShinde",
    titleKeys: ["instructor"],
    image: "/images/bhakti-shinde.jpeg",
    bgColor: "from-pink-500 to-pink-700",
  },
  {
    nameKey: "mrsKaveriPrashantDarunkar",
    titleKeys: ["instructor"],
    image: "/images/kaveri-darunkar.jpeg",
    bgColor: "from-red-500 to-red-700",
  },
];

export default function AllInstructorsRow() {
  const { t } = useLanguage();

  return (
    <div className="flex justify-center my-12 px-4">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center mb-8">{t("ourTrainingTeam")}</h2>
        <div className="flex overflow-x-auto gap-6 pb-4">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className={`flex-shrink-0 bg-gradient-to-r ${instructor.bgColor} text-white rounded-lg shadow-lg p-6 w-64`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Image
                    src={instructor.image}
                    alt={t(instructor.nameKey)}
                    width={120}
                    height={140}
                    className="rounded-lg shadow-lg object-cover"
                    priority
                  />
                </div>
                <h3 className="font-bold mb-2 text-sm">{t(instructor.nameKey)}</h3>
                <p className="text-xs font-semibold leading-relaxed">
                  {instructor.titleKeys.map((titleKey) => (
                    <span key={titleKey} className="block">
                      {t(titleKey)}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
