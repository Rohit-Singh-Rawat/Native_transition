"use client"

import { useSearchParams } from "next/navigation"
import { useMemo } from "react"
import { filterAndSortProducts } from "@/lib/shop/filters"
import { products } from "@/lib/shop/products"
import { ProductGrid } from "@/components/shop/product-grid"
import { SearchBar } from "@/components/shop/search-bar"
import { SortBy } from "@/components/shop/sort-by"
import type { SortOption } from "@/lib/shop/types"

export default function ShopPage() {
  const searchParams = useSearchParams()

  const searchQuery = searchParams.get("q") ?? ""
  const sortBy = (searchParams.get("sort") as SortOption) ?? "latest"

  const visibleProducts = useMemo(
    () => filterAndSortProducts(products, searchQuery, sortBy),
    [searchQuery, sortBy]
  )

  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto flex w-full flex-col gap-8 px-4 py-8 sm:px-6nfo md:flex-row ">
        <aside
          aria-label="Filters"
          className="md:w-64 md:shrink-0 md:pr-6"
        >
          <SearchBar />
          <SortBy />
        </aside>

        <ProductGrid products={visibleProducts} totalCount={products.length} />
      </div>
    </main>
  )
}
