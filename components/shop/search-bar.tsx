"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useTransition } from "react"

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
    <div className="mb-6">
      <label
        htmlFor="product-search"
        className="block text-sm font-medium text-muted-foreground"
      >
        Search
      </label>
      <div className="mt-2">
        <input
          id="product-search"
          type="search"
          autoComplete="off"
          spellCheck={false}
          placeholder="Search products…"
          className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none ring-0 transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
          value={searchQuery}
          onChange={handleChange}
          disabled={isPending}
        />
      </div>
    </div>
  )
}
