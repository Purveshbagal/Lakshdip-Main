"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from './LanguageProvider'

const instructors = [
  {
    nameKey: "mrVijaySakharamSupare",
    titleKey: "instructor",
    image: "/images/vijay-supare.jpeg",
    bgColor: "from-purple-500 to-purple-700",
  },
  {
    nameKey: "mrsBhaktiSureshShinde",
    titleKey: "instructor",
    image: "/images/bhakti-shinde.jpeg",
    bgColor: "from-pink-500 to-pink-700",
  },
  {
    nameKey: "mrsKaveriPrashantDarunkar",
    titleKey: "instructor",
    image: "/images/kaveri-darunkar.jpeg",
    bgColor: "from-red-500 to-red-700",
  },
];

export default function OurTeam() {
  const { t } = useLanguage()
  return (
    <div className="w-full">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="section-kicker">{t('faculty')}</p>
            <h3 className="mt-1 text-2xl font-black text-slate-900">{t('ourTrainingTeam')}</h3>
          </div>
          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-black text-danger">{t('practicalBadge')}</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`h-2 bg-gradient-to-r ${instructor.bgColor}`} />
              <div className="p-4 text-center">
                <div className="mx-auto mb-4 h-32 w-28 overflow-hidden rounded-2xl bg-slate-100 shadow-md">
                  <Image
                    src={instructor.image}
                    alt={t(instructor.nameKey)}
                    width={120}
                    height={150}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
                <h3 className="text-sm font-black leading-snug text-slate-900">{t(instructor.nameKey)}</h3>
                <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-500">{t(instructor.titleKey)}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
