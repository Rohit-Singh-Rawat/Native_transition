"use client"

import type { SortOption } from "@/lib/shop/types"
import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useTransition } from "react"
import { cn } from "@/lib/utils"

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
        "relative px-2 py-1.5 text-left text-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md",
        isActive ? "text-foreground" : "text-muted-foreground",
        "after:absolute after:bottom-0 after:left-2 after:right-2 after:h-px after:bg-foreground after:-translate-x-4 after:transition-transform after:origin-left",
        isActive ? "after:scale-x-100" : "after:scale-x-0"
      )}
    >
      {label}
    </button>
  )
}

export function SortBy() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const sortBy = (searchParams.get("sort") as SortOption) ?? "latest"

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
    },
    [router, searchParams]
  )

  return (
    <fieldset disabled={isPending}>
      <div className="flex flex-col gap-1 text-sm">
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
