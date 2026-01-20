import type { Product } from "@/lib/shop/types"
import { ProductCard } from "./product-card"
import { ViewTransition } from "react"

type ProductNavigationProps = {
  similarProducts: Product[]
}

export function ProductNavigation({ similarProducts }: ProductNavigationProps) {
  if (similarProducts.length === 0) return null

  return (
    <section aria-label="Similar products" className="mt-16">
      <h2 className="mb-8 text-2xl font-semibold">Similar Products</h2>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
        {similarProducts.map((similarProduct) => (
          <ViewTransition key={similarProduct.id} name={`product-compact-card-${similarProduct.id}`}>
          <ProductCard
            variant="compact"
            key={similarProduct.id}
            product={similarProduct}
            href={`/shop/${similarProduct.slug}`}
          /></ViewTransition>
        ))}
      </div>
    </section>
  )
}
