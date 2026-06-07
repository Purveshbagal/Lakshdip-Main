"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

const leadership = [
  {
    nameKey: "drNandkumarjiBedse",
    titleKeys: ["chairmanMscePune"],
    image: "/images/nandkumarji-bedse.jpeg",
    bgColor: "from-amber-500 to-amber-700",
  },
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
];


export default function LeadershipTeam() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="section-kicker">{t("leadership")}</p>
            <h3 className="mt-1 text-2xl font-black text-slate-900">{t("guidingAuthority")}</h3>
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-primary">{t("trustedBadge")}</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {leadership.map((leader, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`h-2 bg-gradient-to-r ${leader.bgColor}`} />
              <div className="p-4 text-center">
                <div className="mx-auto mb-4 h-32 w-28 overflow-hidden rounded-2xl bg-slate-100 shadow-md">
                  <Image
                    src={leader.image}
                    alt={t(leader.nameKey)}
                    width={120}
                    height={150}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
                <h3 className="text-sm font-black leading-snug text-slate-900">{t(leader.nameKey)}</h3>
                <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-500">
                  {leader.titleKeys.map((titleKey) => (
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
  );
}
