import type { Product } from "@/lib/shop/types"
import { ProductCard } from "./product-card"
import { ViewTransition } from "react"

type ProductGridProps = {
  products: Product[]
  totalCount: number
}

export function ProductGrid({ products, totalCount }: ProductGridProps) {
  return (
    <section aria-label="Products" className="flex-1 md:pl-2 lg:pl-4">
         
      <header className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
       
        <h1 className="text-2xl font-semibold tracking-tight">
          <ViewTransition name="shop-header">Shop</ViewTransition>
          <span className="text-base font-normal text-muted-foreground">
           {" "} ({products.length})
          </span>
        </h1>
        <p className="text-xs text-muted-foreground">
          Showing {products.length} of {totalCount} items
        </p>
      </header>

      {products.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No products match your search. Adjust your filters and try again.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ViewTransition key={product.id} name={`product-card-${product.id}`}>
              <ProductCard
                product={product}
                href={`/shop/${product.slug}`}
              />
            </ViewTransition>
          ))}
        </div>
      )}
    </section>
  )
}
