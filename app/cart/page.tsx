"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { useCart } from "@/contexts/cart-context"
import { products } from "@/lib/shop/products"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart()
  const [showClearDialog, setShowClearDialog] = useState(false)

  const cartItems = items
    .map((item) => {
      const product = products.find((p) => p.id === item.productId)
      if (!product) return null
      return { ...item, product }
    })
    .filter(
      (
        x
      ): x is {
        productId: number
        quantity: number
        product: (typeof products)[number]
      } => x !== null
    )

  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  )

  const hasItems = cartItems.length > 0

  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-8 sm:px-6">
        <header className="flex items-baseline justify-between gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">Cart</h1>
          {hasItems && (
            <AlertDialog open={showClearDialog} onOpenChange={setShowClearDialog}>
              <AlertDialogTrigger
                className="text-xs text-destructive hover:underline"
              >
                Clear cart
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Clear cart?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to remove all items from your cart? This
                    action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      clearCart()
                      setShowClearDialog(false)
                    }}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Clear cart
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </header>

        {!hasItems ? (
          <div className="rounded-lg bg-card p-6 text-sm text-muted-foreground">
            <p>Your cart is empty.</p>
            <Link
              href="/shop"
              className="mt-3 inline-flex items-center text-xs font-medium text-foreground hover:underline"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <section aria-label="Cart items" className="space-y-4">
              {cartItems.map(({ product, quantity }) => (
                <article
                  key={product.id}
                  className="flex gap-4 rounded-lg bg-card p-3 text-sm"
                >
                  <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded bg-secondary">
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
                      <div className="inline-flex items-center gap-2 text-[11px] text-muted-foreground">
                        <span>Qty</span>
                        <div className="inline-flex items-center gap-1 rounded px-1">
                          <button
                            type="button"
                            className="px-1 text-xs hover:text-foreground"
                            onClick={() =>
                              updateQuantity(product.id, quantity - 1)
                            }
                          >
                            −
                          </button>
                          <span className="min-w-6 text-center text-xs text-foreground">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            className="px-1 text-xs hover:text-foreground"
                            onClick={() =>
                              updateQuantity(product.id, quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <span>· ${Number(product.price).toFixed(2)} each</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(product.id)}
                        className="text-[11px] text-destructive hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <aside
              aria-label="Cart summary"
              className="space-y-3 rounded-lg bg-card p-4 text-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Subtotal (excl. taxes)
                </span>
                <span className="text-base font-semibold">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground">
                Taxes and shipping are calculated at checkout.
              </p>
              <button
                type="button"
                className="mt-2 w-full rounded-md bg-foreground py-2 text-xs font-medium text-background hover:bg-foreground/90"
              >
                Checkout
              </button>
              <Link
                href="/shop"
                className="block text-center text-[11px] text-muted-foreground hover:underline"
              >
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  )
}

