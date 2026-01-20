"use client"

import { useState } from "react"
import { Link } from "@/components/ui/link"
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

type CartHeaderProps = {
  hasItems: boolean
  onClearCart: () => void
}

export function CartHeader({ hasItems, onClearCart }: CartHeaderProps) {
  const [showClearDialog, setShowClearDialog] = useState(false)

  return (
    <header className="flex items-baseline justify-between gap-2">
      <h1 className="text-2xl font-semibold tracking-tight">Cart</h1>
      {hasItems && (
        <AlertDialog open={showClearDialog} onOpenChange={setShowClearDialog}>
          <AlertDialogTrigger className="text-xs text-destructive hover:underline">
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
              <AlertDialogCancel className="squircle">Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  onClearCart()
                  setShowClearDialog(false)
                }}
                className="bg-destructive text-white squircle hover:bg-destructive/90"
              >
                Clear cart
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </header>
  )
}

export function CartEmpty() {
  return (
    <div className="rounded-lg bg-card p-6 text-sm text-muted-foreground">
      <p>Your cart is empty.</p>
      <Link
        href="/shop"
        className="mt-3 inline-flex items-center text-xs font-medium text-foreground hover:underline"
      >
        Continue shopping
      </Link>
    </div>
  )
}
