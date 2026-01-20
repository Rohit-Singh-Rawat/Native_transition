"use client"

import { createContext, useContext, useEffect, useState, useCallback, useSyncExternalStore } from "react"

type CartItem = {
  productId: number
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  addToCart: (productId: number) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  getItemQuantity: (productId: number) => number
  getTotalItems: () => number
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = "shop-cart"

function loadCartFromStorage(): CartItem[] {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function saveCartToStorage(items: CartItem[]) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  } catch {
    // Storage quota exceeded or unavailable
  }
}

const subscribe = () => () => {}
const getSnapshot = () => true
const getServerSnapshot = () => false

export function CartProvider({ children }: { children: React.ReactNode }) {
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const [items, setItems] = useState<CartItem[]>(() => loadCartFromStorage())

  useEffect(() => {
    if (mounted) {
      saveCartToStorage(items)
    }
  }, [items, mounted])

  const addToCart = useCallback((productId: number) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.productId === productId)
      if (existing) {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { productId, quantity: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((productId: number) => {
    setItems((prev) => prev.filter((item) => item.productId !== productId))
  }, [])

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    )
  }, [removeFromCart])

  const getItemQuantity = useCallback(
    (productId: number) => {
      return items.find((item) => item.productId === productId)?.quantity ?? 0
    },
    [items]
  )

  const getTotalItems = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }, [items])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        getItemQuantity,
        getTotalItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
