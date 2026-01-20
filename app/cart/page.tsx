"use client"

import { useCart } from "@/contexts/cart-context"
import { products } from "@/lib/shop/products"
import { CartHeader, CartEmpty } from "@/components/cart/cart-layout"
import { CartItemsList } from "@/components/cart/cart-items"
import { CartSummary } from "@/components/cart/cart-summary"

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart()

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
        <CartHeader hasItems={hasItems} onClearCart={clearCart} />

        {!hasItems ? (
          <CartEmpty />
        ) : (
          <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <CartItemsList
              items={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
            <CartSummary subtotal={subtotal} />
          </div>
        )}
      </div>
    </main>
  )
}

