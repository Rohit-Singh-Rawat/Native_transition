import { Link } from "@/components/ui/link"

type CartSummaryProps = {
  subtotal: number
}

export function CartSummary({ subtotal }: CartSummaryProps) {
  return (
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
        className="mt-2 w-full rounded-md bg-foreground py-2 text-xs font-medium text-background squircle hover:bg-foreground/90"
      >
        Checkout
      </button>
      <Link
        href="/shop"
        className="block text-center text-[11px] text-muted-foreground hover:underline"
        variant="underline"
      >
        Continue shopping
      </Link>
    </aside>
  )
}
