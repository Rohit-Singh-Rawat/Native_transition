import { filterAndSortProducts } from "@/lib/shop/filters"
import { products } from "@/lib/shop/products"
import { ProductGrid } from "@/components/shop/product-grid"
import { SearchBar, SortBy } from "@/components/shop/filters"
import type { SortOption } from "@/lib/shop/types"
import { ViewTransition } from "react"

type ShopPageProps = {
  searchParams: Promise<{ q?: string; sort?: string }>
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams
  const searchQuery = params.q ?? ""
  const sortBy = (params.sort as SortOption) ?? "latest"

  const visibleProducts = filterAndSortProducts(products, searchQuery, sortBy)

  return (
    <main className="bg-background text-foreground">
      {/* Mobile Header */}
      <div className="md:hidden px-4 pt-8 pb-4 sm:px-6">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <SearchBar />
          </div>
          <div className="shrink-0">
            <SortBy />
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full flex-col gap-8 px-4 py-8 sm:px-6 md:flex-row">
        <aside
          aria-label="Filters"
          className="hidden md:block md:w-64 md:shrink-0 md:pr-6"
        >
          <SearchBar />
          <SortBy />
        </aside>

<ViewTransition>
        <ProductGrid products={visibleProducts} totalCount={products.length} /></ViewTransition>
      </div>
    </main>
  )
}
