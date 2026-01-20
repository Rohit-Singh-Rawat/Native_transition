"use client"
import { Link } from "@/components/ui/link"
import { ProductMarquee } from "@/components/marquee"

export default function HomePage() {
  return (
    <div className="flex-1 justify-center items-center flex flex-col">
      <div className="w-full px-4">
        <ProductMarquee />
      </div>

      <div className="rounded-2xl bg-background/50 p-6 backdrop-blur-lg sm:p-8 opacity-80">
        <div className="text-center">
          <h1 className="font-sans text-2xl font-light tracking-tight sm:text-3xl">
            Curated<span className="font-normal"> Essentials</span>
          </h1>
          <Link
            href="/shop"

            className="mt-4 group inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-2 text-sm font-medium text-background hover:text-background transition-all hover:bg-foreground/90 hover:scale-[1.02]"
          >
            Explore
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" className="group-hover:stroke-background opacity-0 group-hover:opacity-100 transition-opacity duration-200 inset-y-none group-hover:inset-y-auto" />
              <path d="m12 5 7 7-7 7" className="group-hover:stroke-background  -translate-x-1 group-hover:translate-x-0 transition-transform duration-200" />
            </svg>
          </Link>
        </div>
      </div></div>
  )
}