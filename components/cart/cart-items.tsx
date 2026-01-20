"use client"

import Image from "next/image"
import type { Product } from "@/lib/shop/types"

type CartQuantityControlProps = {
  quantity: number
  price: number
  onDecrease: () => void
  onIncrease: () => void
}

function CartQuantityControl({
  quantity,
  price,
  onDecrease,
  onIncrease,
}: CartQuantityControlProps) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] text-muted-foreground">
      <span>Qty</span>
      <div className="inline-flex items-center gap-1 rounded px-1">
        <button
          type="button"
          className="px-1 text-xs hover:text-foreground"
          onClick={onDecrease}
        >
          −
        </button>
        <span className="min-w-6 text-center text-xs text-foreground">
          {quantity}
        </span>
        <button
          type="button"
          className="px-1 text-xs hover:text-foreground"
          onClick={onIncrease}
        >
          +
        </button>
      </div>
      <span>· ${Number(price).toFixed(2)} each</span>
    </div>
  )
}

type CartItemProps = {
  product: Product
  quantity: number
  onUpdateQuantity: (quantity: number) => void
  onRemove: () => void
}

function CartItem({
  product,
  quantity,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <article className="flex gap-4 rounded-lg bg-card p-3 text-sm">
      <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded bg-secondary corner-squircle supports-corner-shape:rounded-[10%]">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          fill
          sizes="128px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h2 className="text-sm font-medium leading-snug">
              {product.name}
            </h2>
            <p className="text-[11px] text-muted-foreground line-clamp-1">
              {product.description}
            </p>
          </div>
          <div className="text-right text-sm font-semibold">
            ${Number(product.price * quantity).toFixed(2)}
          </div>
        </div>

        <div className="mt-1 flex items-center justify-between gap-3">
          <CartQuantityControl
            quantity={quantity}
            price={product.price}
            onDecrease={() => onUpdateQuantity(quantity - 1)}
            onIncrease={() => onUpdateQuantity(quantity + 1)}
          />

          <button
            type="button"
            onClick={onRemove}
            className="text-[11px] text-destructive hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  )
}

type CartItemWithProduct = {
  productId: number
  quantity: number
  product: Product
}

type CartItemsListProps = {
  items: CartItemWithProduct[]
  onUpdateQuantity: (productId: number, quantity: number) => void
  onRemove: (productId: number) => void
}

export function CartItemsList({
  items,
  onUpdateQuantity,
  onRemove,
}: CartItemsListProps) {
  return (
    <section aria-label="Cart items" className="space-y-4">
      {items.map(({ product, quantity }) => (
        <CartItem
          key={product.id}
          product={product}
          quantity={quantity}
          onUpdateQuantity={(newQuantity) =>
            onUpdateQuantity(product.id, newQuantity)
          }
          onRemove={() => onRemove(product.id)}
        />
      ))}
    </section>
  )
}
