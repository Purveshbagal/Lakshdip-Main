"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "../components/LanguageProvider";

const HeroSlider = dynamic(() => import("../components/HeroSlider"), {
  ssr: false,
  loading: () => <div className="h-40" />,
});

const CoursesSection = dynamic(() => import("../components/CoursesSection"), {
  ssr: false,
  loading: () => <div className="h-40" />,
});

const StatsCounters = dynamic(() => import("../components/StatsCounters"), {
  ssr: false,
  loading: () => <div />,
});

const LeadershipTeam = dynamic(() => import("../components/LeadershipTeam"), {
  ssr: false,
  loading: () => <div />,
});

const OurTeam = dynamic(() => import("../components/OurTeam"), {
  ssr: false,
  loading: () => <div />,
});

const NewsGallery = dynamic(() => import("../components/NewsGallery"), {
  ssr: false,
  loading: () => <div />,
});

const NoticeBoard = dynamic(() => import("../components/NoticeBoard"), {
  ssr: false,
  loading: () => <div />,
});

export default function HomeClient() {
  const { t } = useLanguage();

  return (
    <>
      <HeroSlider />

      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 xl:grid-cols-[1fr_380px]">
            <div>
            <CoursesSection />
            </div>
            <div className="xl:sticky xl:top-24 xl:self-start">
              <NoticeBoard />
            </div>
          </div>
        </div>
      </section>

      <StatsCounters />

      <section className="py-12">
        <div className="container">
          <div className="mb-8 text-center">
            <p className="section-kicker">{t("peopleBehindInstitute")}</p>
            <h2 className="section-title mt-2">{t("trustedGuidancePracticalTraining")}</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <LeadershipTeam />
            <OurTeam />
          </div>
        </div>
      </section>

      <NewsGallery />
    </>
  );
}
