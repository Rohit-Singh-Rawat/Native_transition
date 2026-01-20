"use client"

import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { products } from "@/lib/shop/products"

export type MarqueeProps = {
  children: React.ReactNode
  gap?: number
  duration?: number
  reverse?: boolean
  className?: string
}

export function Marquee({
  children,
  gap = 16,
  duration = 35,
  reverse = false,
  className,
}: MarqueeProps) {
  const marqueeId = React.useId()
  const animationName = `marquee-${marqueeId.replace(/:/g, "")}`

  return (
    <>
      <div className={cn("overflow-hidden", className)}>
        <div
          className="flex w-max gap-4"
          style={{
            gap: `${gap}px`,
            animation: `${animationName} ${duration}s linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {children}
          {children}
        </div>
      </div>
      <style jsx>{`
        @keyframes ${animationName} {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  )
}

export function ProductMarquee() {
  const displayProducts = React.useMemo(() => products.slice(0, 8), [])

  return (
    <Marquee duration={35} gap={50} >
      {displayProducts.map((product) => (
        <div
          key={product.id}
          className="relative h-44 w-44 shrink-0 overflow-hidden rounded-xl sm:h-52 sm:w-52 lg:h-64 lg:w-64 bg-[#F0F1F3] dark:bg-white corner-squircle supports-corner-shape:rounded-[20%]"
        >
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            fill
            sizes="200px"
            className="object-cover"
          />
        </div>
      ))}
    </Marquee>
  )
}
