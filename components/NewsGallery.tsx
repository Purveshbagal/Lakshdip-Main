"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaSearchPlus, FaTimes } from "react-icons/fa";
import { useLanguage } from './LanguageProvider'

const newsItems = [
  {
    id: 1,
    title: "Institute News & Updates",
    image: "/images/news/news-1.jpeg",
    date: "06 June 2026",
  },
  {
    id: 2,
    title: "Student Success Stories",
    image: "/images/news/news-2.jpeg",
    date: "06 June 2026",
  },
  {
    id: 3,
    title: "Latest Achievements",
    image: "/images/news/news-3.jpeg",
    date: "06 June 2026",
  },
  {
    id: 4,
    title: "Training Programs",
    image: "/images/news/news-4.jpeg",
    date: "06 June 2026",
  },
  {
    id: 5,
    title: "Campus Highlights",
    image: "/images/news/news-5.jpeg",
    date: "06 June 2026",
  },
];

export default function NewsGallery() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [selectedImage]);

  return (
    <div className="bg-white px-4 py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="section-kicker">{t('campusHighlights')}</p>
          <h2 className="section-title mt-2">{t('ourInstituteLatestNews')}</h2>

          <p className="section-copy mx-auto mt-3 max-w-2xl">
            {t('stayUpdatedWithOurRecentActivities')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {newsItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/10"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative h-52 w-full bg-gray-200">
                <Image
                  src={item.image}
                  alt={t(item.title)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-primary opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    <FaSearchPlus /> {t('view')}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-black text-slate-900 line-clamp-2 transition-colors group-hover:text-primary">
                  {t(item.title)}
                </h3>
                <p className="mt-2 text-xs font-semibold text-gray-500">{item.date}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/gallery" className="btn-primary px-8 py-3 text-sm">
            {t('viewAllGallery')} <FaArrowRight />
          </Link>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-hidden bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-black transition-colors hover:bg-gray-200"
            aria-label="Close gallery image"
          >
            <FaTimes />
          </button>

          <div className="relative flex h-[85vh] w-[90vw] items-center justify-center rounded-3xl bg-black/40">
            <Image
              src={selectedImage}
              alt="Full size view"
              fill
              className="object-contain"
              sizes="90vw"
              priority
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-semibold text-white">
            {t('clickToCloseOrPressESC')}
          </div>
        </div>
      )}
    </div>
  );
}
