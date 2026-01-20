"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useTransition, useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import type { SortOption } from "@/lib/shop/types"

function MagnifierIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <title>magnifier</title>
      <g fill="none">
        <path d="M10.586 10.5859C11.3671 9.80486 12.6331 9.80486 13.4142 10.5859L21.9142 19.0859L22.0519 19.2373C22.6926 20.0228 22.6464 21.1818 21.9142 21.914C21.1819 22.6463 20.0229 22.6925 19.2374 22.0517L19.086 21.914L10.586 13.414C9.80498 12.633 9.80498 11.367 10.586 10.5859Z" fill="url(#1752500502796-6054278_magnifier_existing_0_gpzbpr1b3)" data-glass="origin" mask="url(#1752500502796-6054278_magnifier_mask_u1j50qeck)"></path>
        <path d="M10.586 10.5859C11.3671 9.80486 12.6331 9.80486 13.4142 10.5859L21.9142 19.0859L22.0519 19.2373C22.6926 20.0228 22.6464 21.1818 21.9142 21.914C21.1819 22.6463 20.0229 22.6925 19.2374 22.0517L19.086 21.914L10.586 13.414C9.80498 12.633 9.80498 11.367 10.586 10.5859Z" fill="url(#1752500502796-6054278_magnifier_existing_0_gpzbpr1b3)" data-glass="clone" filter="url(#1752500502796-6054278_magnifier_filter_u6qjvmab1)" clipPath="url(#1752500502796-6054278_magnifier_clipPath_k96ejzfu8)"></path>
        <path d="M18.5 10C18.5 14.6943 14.6943 18.5 10 18.5C5.30567 18.5 1.5 14.6943 1.5 10C1.5 5.30567 5.30567 1.5 10 1.5C14.6943 1.5 18.5 5.30567 18.5 10Z" fill="url(#1752500502796-6054278_magnifier_existing_1_82nwa6xrf)" data-glass="blur"></path>
        <path d="M17.75 10C17.75 5.71989 14.2801 2.25 10 2.25C5.71989 2.25 2.25 5.71989 2.25 10C2.25 14.2801 5.71989 17.75 10 17.75V18.5C5.30567 18.5 1.5 14.6943 1.5 10C1.5 5.30567 5.30567 1.5 10 1.5C14.6943 1.5 18.5 5.30567 18.5 10C18.5 14.6943 14.6943 18.5 10 18.5V17.75C14.2801 17.75 17.75 14.2801 17.75 10Z" fill="url(#1752500502796-6054278_magnifier_existing_2_8ve8k2etb)"></path>
        <defs>
          <linearGradient id="1752500502796-6054278_magnifier_existing_0_gpzbpr1b3" x1="16.25" y1="10" x2="16.25" y2="22.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#575757"></stop>
            <stop offset="1" stopColor="#151515"></stop>
          </linearGradient>
          <linearGradient id="1752500502796-6054278_magnifier_existing_1_82nwa6xrf" x1="10" y1="1.5" x2="10" y2="18.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E3E3E5" stopOpacity=".6"></stop>
            <stop offset="1" stopColor="#BBBBC0" stopOpacity=".6"></stop>
          </linearGradient>
          <linearGradient id="1752500502796-6054278_magnifier_existing_2_8ve8k2etb" x1="10" y1="1.5" x2="10" y2="11.345" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff"></stop>
            <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
          </linearGradient>
          <filter id="1752500502796-6054278_magnifier_filter_u6qjvmab1" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
          </filter>
          <clipPath id="1752500502796-6054278_magnifier_clipPath_k96ejzfu8">
            <path d="M18.5 10C18.5 14.6943 14.6943 18.5 10 18.5C5.30567 18.5 1.5 14.6943 1.5 10C1.5 5.30567 5.30567 1.5 10 1.5C14.6943 1.5 18.5 5.30567 18.5 10Z" fill="url(#1752500502796-6054278_magnifier_existing_1_82nwa6xrf)"></path>
          </clipPath>
          <mask id="1752500502796-6054278_magnifier_mask_u1j50qeck">
            <rect width="100%" height="100%" fill="#FFF"></rect>
            <path d="M18.5 10C18.5 14.6943 14.6943 18.5 10 18.5C5.30567 18.5 1.5 14.6943 1.5 10C1.5 5.30567 5.30567 1.5 10 1.5C14.6943 1.5 18.5 5.30567 18.5 10Z" fill="#000"></path>
          </mask>
        </defs>
      </g>
    </svg>
  )
}

export function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const searchQuery = searchParams.get("q") ?? ""

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      const params = new URLSearchParams(searchParams.toString())

      if (value) {
        params.set("q", value)
      } else {
        params.delete("q")
      }

      startTransition(() => {
        router.push(`/shop?${params.toString()}`, { scroll: false })
      })
    },
    [router, searchParams]
  )

  return (
    <div className="md:mb-6">
      <label htmlFor="product-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifierIcon className="h-4 w-4" />
        </div>
        <input
          id="product-search"
          type="search"
          autoComplete="off"
          spellCheck={false}
          placeholder="Search products…"
          className="block w-full rounded-none border-0 border-b border-input bg-transparent py-2 pl-10 pr-3 text-sm outline-none ring-0 transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none disabled:opacity-50"
          value={searchQuery}
          onChange={handleChange}
          disabled={isPending}
        />
      </div>
    </div>
  )
}

type SortButtonProps = {
  label: string
  value: SortOption
  currentValue: SortOption
  onChange: (value: SortOption) => void
}

function SortButton({ label, value, currentValue, onChange }: SortButtonProps) {
  const isActive = currentValue === value

  return (
    <button
      type="button"
      onClick={() => onChange(value)}
      className={cn(
        "relative px-2 py-1.5 text-left text-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-b focus-visible:ring-ring rounded-md",
        isActive ? "text-foreground" : "text-muted-foreground",
        "after:absolute after:bottom-0 after:left-2 after:right-2 after:h-px after:bg-foreground after:-translate-x-4 after:transition-transform after:origin-left",
        isActive ? "after:scale-x-100" : "after:scale-x-0"
      )}
    >
      {label}
    </button>
  )
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "latest", label: "Latest Arrivals" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
]

export function SortBy() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const sortBy = (searchParams.get("sort") as SortOption) ?? "latest"
  const currentLabel = sortOptions.find((opt) => opt.value === sortBy)?.label ?? "Latest Arrivals"

  const handleSortChange = useCallback(
    (value: SortOption) => {
      const params = new URLSearchParams(searchParams.toString())

      if (value === "latest") {
        params.delete("sort")
      } else {
        params.set("sort", value)
      }

      startTransition(() => {
        router.push(`/shop?${params.toString()}`, { scroll: false })
      })
      setIsOpen(false)
    },
    [router, searchParams]
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <fieldset disabled={isPending}>
      {/* Mobile Dropdown */}
      <div className="md:hidden relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between rounded-none border-0 border-b border-input bg-transparent px-3 py-2 text-sm outline-none ring-0 transition-colors focus-visible:border-ring focus-visible:outline-none disabled:opacity-50"
        >
          <span className="text-muted-foreground">Sort:</span>
          <span className="flex items-center gap-2">
            {currentLabel}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn("transition-transform", isOpen && "rotate-180")}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 z-10 mt-1 rounded-md border border-border bg-background shadow-lg">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSortChange(option.value)}
                className={cn(
                  "w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted",
                  sortBy === option.value ? "bg-muted text-foreground" : "text-muted-foreground"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Button List */}
      <div className="hidden md:flex flex-col gap-1 text-sm">
        <SortButton
          label="Sort by: Latest Arrivals"
          value="latest"
          currentValue={sortBy}
          onChange={handleSortChange}
        />
        <SortButton
          label="Sort by: Price: Low → High"
          value="price-asc"
          currentValue={sortBy}
          onChange={handleSortChange}
        />
        <SortButton
          label="Sort by: Price: High → Low"
          value="price-desc"
          currentValue={sortBy}
          onChange={handleSortChange}
        />
      </div>
    </fieldset>
  )
}
