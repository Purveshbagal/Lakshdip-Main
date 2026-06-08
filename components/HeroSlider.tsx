'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaArrowRight, FaCheck, FaPhoneAlt } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'
import { heroSlides, site } from '../lib/siteData'
import { useLanguage } from './LanguageProvider'

export default function HeroSlider() {
  const { t } = useLanguage()
  return (
    <div className="w-full relative overflow-hidden bg-[#071426]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="hero-swiper"
      >
        {heroSlides.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative h-[320px] sm:h-[420px] md:h-[560px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: s.image 
                  ? `url('${s.image}')`
                  : 'linear-gradient(135deg, #e5edf9 0%, #f8fafc 45%, #ffffff 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/95 via-[#071426]/70 to-[#071426]/20" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7fbff] to-transparent" />

              <div className="container relative z-10 grid h-full items-center gap-6 py-6 sm:gap-8 sm:py-8 md:gap-8 md:py-14 lg:grid-cols-[1fr_360px]">
                <div className="max-w-3xl text-white">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-yellow-200 backdrop-blur sm:mb-5 sm:px-4 sm:py-2 sm:text-xs md:text-xs">
                    <span className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_18px_rgba(250,204,21,0.9)]" />
                    {t(s.badge)}
                  </div>
                  {idx === 1 ? (
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 flex-shrink-0">
                        <Image src="/images/simboll/simboll.jpg" alt="Maharashtra Council Symbol" width={96} height={96} className="object-contain" />
                      </div>
                      <div>
                        <h1 className="text-xl font-black leading-[1.04] tracking-tight sm:text-2xl md:text-3xl">
                          {t(s.title)}
                        </h1>
                        <p className="mt-2 max-w-2xl text-sm font-semibold text-white/90 sm:mt-3 sm:text-base md:mt-3 md:text-lg">
                          {t(s.subtitle)}
                        </p>
                        <p className="mt-2 max-w-2xl text-xs leading-6 text-white/75 sm:mt-3 sm:text-sm md:mt-3 md:text-base md:leading-8">
                          {t(s.banner)}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h1 className="text-xl font-black leading-[1.04] tracking-tight sm:text-2xl md:text-3xl">
                        {t(site.fullName)}
                      </h1>
                      <p className="mt-2 max-w-2xl text-sm font-semibold text-white/90 sm:mt-3 sm:text-base md:mt-4 md:text-2xl">
                        {t(s.title)}
                      </p>
                      <p className="mt-2 max-w-2xl text-xs leading-6 text-white/75 sm:mt-3 sm:text-sm md:mt-3 md:text-base md:leading-8">
                        {t(s.subtitle)} {t(s.banner)}
                      </p>
                    </>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 md:mt-7 md:gap-3">
                    {s.checks.map((item) => (
                      <span key={item} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1.5 text-[10px] font-bold text-white ring-1 ring-white/20 backdrop-blur sm:px-3 sm:py-2 sm:text-xs md:gap-2 md:px-4 md:py-2 md:text-sm">
                        <FaCheck className="text-yellow-300" />
                        {t(item)}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 md:mt-8 md:gap-3">
                    <Link href="/admission" className="btn-primary px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm md:px-7 md:py-3 md:text-sm">
                      {t(s.cta)} <FaArrowRight />
                    </Link>
                    <a href={`tel:+91${site.phone.replace(/\s/g, '')}`} className="btn-secondary px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm md:px-7 md:py-3 md:text-sm">
                      <FaPhoneAlt /> +91 {site.phone}
                    </a>
                  </div>
                </div>

                {idx !== 0 && (
                  <div className="hidden lg:block">
                    <div className="rounded-[2rem] border border-white/20 bg-white/10 p-5 text-white shadow-2xl shadow-black/20 backdrop-blur-md">
                      <div className="text-[10px] font-black uppercase tracking-[0.22em] text-yellow-200 md:text-xs">Popular Courses</div>
                      <div className="mt-4 grid gap-3">
                        {['GCC-TBC Typing', 'CCC Certification', 'Tally Prime', 'Advanced Excel'].map((item) => (
                          <div key={item} className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold">
                            <span>{item}</span>
                            <FaArrowRight className="text-xs text-yellow-300" />
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 rounded-2xl bg-yellow-300 px-4 py-3 text-center text-sm font-black text-[#071426]">
                        Government job oriented training
                      </div>
                    </div>
                    {!s.image && (
                      <Image
                        src="/hero-student.svg"
                        alt="Student at computer"
                        className="mt-4 max-h-[280px] object-contain"
                        width={280}
                        height={280}
                        priority
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
