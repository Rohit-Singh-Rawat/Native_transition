import { ViewTransition } from "react"
import { Link } from "@/components/ui/link"

export function ProductBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
     
        <Link
        href="/shop"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
      >
        <span aria-hidden="true">←</span>
       <ViewTransition name="shop-header"><span>Shop</span></ViewTransition>
      </Link>
    </nav>
  )
}
