import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/shop/types"

type ProductCardProps = {
  product: Product
  href?: string
}

export function ProductCard({ product, href }: ProductCardProps) {
  const content = (
    <article className="group flex h-full flex-col">
      <div className="relative mb-4 overflow-hidden rounded-lg bg-secondary">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={400}
          height={400}
          className="aspect-4/5 w-full object-cover transition-transform duration-200 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          style={{
            viewTransitionName: href ? `product-image-${product.id}` : undefined,
          }}
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {product.company}
        </p>
        <h2 className="text-sm font-semibold">
          <span className="line-clamp-1">
            {product.name}
            <span className="text-muted-foreground">
              {" "}
              · {product.description}
            </span>
          </span>
        </h2>
      </div>
    </article>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md transition-opacity hover:opacity-90"
        aria-label={`View ${product.name} by ${product.company}`}
      >
        {content}
      </Link>
    )
  }

  return content
}
