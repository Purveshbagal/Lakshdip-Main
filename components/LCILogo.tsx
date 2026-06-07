import React from 'react'
import Image from 'next/image'

export default function LCILogo({ size = 80 }: { size?: number }) {
  return (
    <Image
      src="/images/logo/logo.png"
      alt="LCI Logo"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  )
}
