"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"

import BlurGradient from "@/components/blur-grdient"
import { CartIcon } from "@/components/icons/cart"
import { ShopLogo } from "@/components/logo"
import { cn } from "@/lib/utils"
import { Link } from "@/components/ui/link"
import { Switch } from "@/components/ui/switch"
import { useCart } from "@/contexts/cart-context"
import { products } from "@/lib/shop/products"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const effectiveTheme = theme ?? resolvedTheme ?? "system"

  const switchLabel = useMemo(
    () =>
      effectiveTheme === "dark"
        ? "Switch to light mode"
        : effectiveTheme === "light"
          ? "Switch to dark mode"
          : "Toggle theme",
    [effectiveTheme]
  )

  const isDark = effectiveTheme === "dark"

  return (
    <div className="flex items-center gap-2">
      <Switch
        aria-label={switchLabel}
        checked={mounted ? isDark : false}
        disabled={!mounted}
        className={'rounded-sm [&_span]:rounded h-5 w-8 [&_span]:h-4 [&_span]:w-4 [&_span]:data-checked:translate-x-3'}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <span className="hidden text-xs font-medium sm:inline sr-only">
        {isDark ? "Dark" : effectiveTheme === "light" ? "Light" : "System"}
      </span>
    </div>
  )
}

export function Header() {
  const { items, getTotalItems, removeFromCart } = useCart()
  const totalItems = getTotalItems()

  const cartItemsDetailed = useMemo(
    () =>
      items
        .map((item) => {
          const product = products.find((p) => p.id === item.productId)
          if (!product) return null
          return { ...item, product }
        })
        .filter((x): x is { productId: number; quantity: number; product: (typeof products)[number] } => x !== null),
    [items]
  )

  const subtotal = useMemo(
    () =>
      cartItemsDetailed.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      ),
    [cartItemsDetailed]
  )

  return (
    <>
      <BlurGradient position="top" height="h-24 sm:h-32 md:h-40" />
      <BlurGradient position="bottom" height="h-24 sm:h-32 md:h-40" />
      <header className="fixed top-0 z-50 w-full">
        <div className="mx-auto flex h-14 max-w-8xl items-center justify-between px-4">
          <nav aria-label="Primary" className="flex items-center gap-3">
            <Link
              href="/shop"
              variant="nav"
            >
              Shop
            </Link>
          </nav>

          <Link
            href="/"
            aria-label="Home"
            className="focus-visible:ring-ring/50 rounded-full p-2 transition hover:scale-105"
          >
            <ShopLogo className="dark:invert" />
          </Link>

          <TooltipProvider delay={120}>
            <div className="flex items-center gap-3">
              <Tooltip>
                <TooltipTrigger
                  render={(triggerProps) => {
                    const { className: triggerClassName, ...triggerRest } = triggerProps
                    return (
                      <Link
                        href="/cart"
                        variant="nav"
                        size="none"
                        className={cn(
                          "relative p-2 flex items-center gap-2",
                          typeof triggerClassName === "string" ? triggerClassName : undefined
                        )}
                        {...triggerRest}
                      >
                        <CartIcon className="size-4 invert-0 dark:invert transition" />
                        <span className="sr-only">Cart</span>
                        {totalItems > 0 && (
                          <span className="absolute -top-1 -right-1 flex size-3 items-center justify-center rounded-full bg-foreground text-background text-[10px] font-medium">
                            {totalItems > 99 ? "99+" : totalItems}
                          </span>
                        )}
                      </Link>
                    )
                  }}
                />
                <TooltipContent side="bottom" sideOffset={10} className="w-80 p-0">
                  <div className="p-3 text-xs">
                    <h3 className="mb-2 text-sm font-semibold">Cart</h3>
                    {cartItemsDetailed.length === 0 ? (
                      <p className="text-muted-foreground">Your cart is empty.</p>
                    ) : (
                      <>
                        <ul className="max-h-64 space-y-2 overflow-auto">
                          {cartItemsDetailed.map(({ product, quantity }) => (
                            <li key={product.id} className="flex gap-2">
                              <div className="relative h-12 w-12 overflow-hidden rounded bg-secondary">
                                <Image
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  fill
                                  sizes="48px"
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-start justify-between gap-2">
                                  <span className="line-clamp-1 text-xs font-medium">
                                    {product.name}
                                  </span>
                                  <span className="text-xs font-semibold">
                                    ${Number(product.price * quantity).toFixed(2)}
                                  </span>
                                </div>
                                <p className="mt-0.5 text-[11px] text-muted-foreground line-clamp-1">
                                  Qty {quantity} · ${Number(product.price).toFixed(2)} each
                                </p>
                                <button
                                  type="button"
                                  onClick={(event) => {
                                    event.preventDefault()
                                    event.stopPropagation()
                                    removeFromCart(product.id)
                                  }}
                                  className="mt-1 text-[11px] text-destructive hover:underline"
                                >
                                  Remove
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3 flex items-center justify-between border-t pt-3">
                          <div className="text-[11px] text-muted-foreground">
                            Subtotal (excl. taxes)
                          </div>
                          <div className="text-sm font-semibold">
                            ${subtotal.toFixed(2)}
                          </div>
                        </div>
                        <Link
                          href="/cart"
                          variant="nav"
                          size="none"
                          className="mt-3 block w-full rounded-md bg-foreground py-2 text-center text-xs font-medium text-background hover:bg-foreground/90"
                        >
                          Go to cart
                        </Link>
                      </>
                    )}
                  </div>
                </TooltipContent>
              </Tooltip>

              <ThemeSwitch />
            </div>
          </TooltipProvider>
        </div>
      </header>
    </>
  )
}
