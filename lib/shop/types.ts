export type SortOption = "latest" | "price-asc" | "price-desc"

export type Product = {
  id: number
  slug: string
  name: string
  description: string
  company: string
  price: number
  imageSrc: string
  imageAlt: string
}
