import type { Product, SortOption } from "./types"

export function filterAndSortProducts(
  products: Product[],
  searchQuery: string,
  sortBy: SortOption
): Product[] {
  const normalizedQuery = searchQuery.trim().toLowerCase()

  const filtered = normalizedQuery
    ? products.filter((product) => {
        const haystack = `${product.name} ${product.description} ${product.company}`.toLowerCase()
        return haystack.includes(normalizedQuery)
      })
    : products

  const sorted = [...filtered]

  if (sortBy === "price-asc") {
    sorted.sort((a, b) => a.price - b.price)
  } else if (sortBy === "price-desc") {
    sorted.sort((a, b) => b.price - a.price)
  }

  return sorted
}
