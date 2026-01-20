"use client"

import Image from "next/image"
import { useCart } from "@/contexts/cart-context"
import type { Product } from "@/lib/shop/types"
import { Link } from "@/components/ui/link"
import type { SVGProps } from "react"
import { useId, useState, ViewTransition } from "react"
import { TransitionLink } from "../transition-link"

function CircleArrowLeft(props: SVGProps<SVGSVGElement>) {
  const id = useId()
  const prefix = id.replace(/:/g, "-")
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <title>circle-arrow-left</title>
      <g fill="none">
        <path d="M16.0001 7.61319C15.9999 5.90661 13.9844 4.90601 12.5177 5.88467L5.94444 10.2714C4.68584 11.1112 4.68584 12.8886 5.94444 13.7284L12.5177 18.1151C13.9845 19.0939 16.0001 18.0934 16.0001 16.3866V13.4999H21.0001L21.1534 13.4921C21.9098 13.4153 22.5001 12.7766 22.5001 11.9999C22.5 11.2233 21.9098 10.5845 21.1534 10.5077L21.0001 10.4999H16.0001V7.61319Z" fill={`url(#${prefix}_circle-arrow-left_existing_0)`} data-glass="origin" mask={`url(#${prefix}_circle-arrow-left_mask)`}></path>
        <path d="M16.0001 7.61319C15.9999 5.90661 13.9844 4.90601 12.5177 5.88467L5.94444 10.2714C4.68584 11.1112 4.68584 12.8886 5.94444 13.7284L12.5177 18.1151C13.9845 19.0939 16.0001 18.0934 16.0001 16.3866V13.4999H21.0001L21.1534 13.4921C21.9098 13.4153 22.5001 12.7766 22.5001 11.9999C22.5 11.2233 21.9098 10.5845 21.1534 10.5077L21.0001 10.4999H16.0001V7.61319Z" fill={`url(#${prefix}_circle-arrow-left_existing_0)`} data-glass="clone" filter={`url(#${prefix}_circle-arrow-left_filter)`} clipPath={`url(#${prefix}_circle-arrow-left_clipPath)`} />
        <path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM15 15.6387C15 17.0545 13.406 17.8842 12.2461 17.0723L7.04785 13.4336C6.05282 12.7369 6.05286 11.2631 7.04785 10.5664L12.2461 6.92773C13.406 6.11583 15 6.94554 15 8.36133V15.6387Z" fill={`url(#${prefix}_circle-arrow-left_existing_1)`} data-glass="blur"></path>
        <path d="M22.25 12C22.25 6.33908 17.6609 1.75 12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25V23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1L12.5664 1.01465C18.3783 1.30945 23 6.11484 23 12L22.9854 12.5664C22.6906 18.3783 17.8852 23 12 23V22.25C17.6609 22.25 22.25 17.6609 22.25 12Z" fill={`url(#${prefix}_circle-arrow-left_existing_2)`}></path>
        <defs>
          <linearGradient id={`${prefix}_circle-arrow-left_existing_0`} x1="13.75" y1="5.5" x2="13.75" y2="18.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#575757"></stop>
            <stop offset="1" stopColor="#151515"></stop>
          </linearGradient>
          <linearGradient id={`${prefix}_circle-arrow-left_existing_1`} x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E3E3E5" stopOpacity=".6"></stop>
            <stop offset="1" stopColor="#BBBBC0" stopOpacity=".6"></stop>
          </linearGradient>
          <linearGradient id={`${prefix}_circle-arrow-left_existing_2`} x1="12" y1="1" x2="12" y2="13.74" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff"></stop>
            <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
          </linearGradient>
          <filter id={`${prefix}_circle-arrow-left_filter`} x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
          </filter>
          <clipPath id={`${prefix}_circle-arrow-left_clipPath`}>
            <path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM15 15.6387C15 17.0545 13.406 17.8842 12.2461 17.0723L7.04785 13.4336C6.05282 12.7369 6.05286 11.2631 7.04785 10.5664L12.2461 6.92773C13.406 6.11583 15 6.94554 15 8.36133V15.6387Z" fill={`url(#${prefix}_circle-arrow-left_existing_1)`}></path>
          </clipPath>
          <mask id={`${prefix}_circle-arrow-left_mask`}>
            <rect width="100%" height="100%" fill="#FFF"></rect>
            <path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM15 15.6387C15 17.0545 13.406 17.8842 12.2461 17.0723L7.04785 13.4336C6.05282 12.7369 6.05286 11.2631 7.04785 10.5664L12.2461 6.92773C13.406 6.11583 15 6.94554 15 8.36133V15.6387Z" fill="#000"></path>
          </mask>
        </defs>
      </g>
    </svg>
  )
}

function CircleArrowRight(props: SVGProps<SVGSVGElement>) {
  const id = useId()
  const prefix = id.replace(/:/g, "-")
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <title>circle-arrow-right</title>
      <g fill="none">
        <path d="M8 7.61307C8.0002 5.90648 10.0157 4.90589 11.4824 5.88455L18.0557 10.2713C19.3143 11.1111 19.3143 12.8884 18.0557 13.7283L11.4824 18.115C10.0157 19.0938 8 18.0933 8 16.3865V13.4998H3L2.84668 13.492C2.09029 13.4152 1.5 12.7764 1.5 11.9998C1.50011 11.2232 2.09035 10.5844 2.84668 10.5076L3 10.4998H8V7.61307Z" fill={`url(#${prefix}_circle-arrow-right_existing_0)`} data-glass="origin" mask={`url(#${prefix}_circle-arrow-right_mask)`}></path>
        <path d="M8 7.61307C8.0002 5.90648 10.0157 4.90589 11.4824 5.88455L18.0557 10.2713C19.3143 11.1111 19.3143 12.8884 18.0557 13.7283L11.4824 18.115C10.0157 19.0938 8 18.0933 8 16.3865V13.4998H3L2.84668 13.492C2.09029 13.4152 1.5 12.7764 1.5 11.9998C1.50011 11.2232 2.09035 10.5844 2.84668 10.5076L3 10.4998H8V7.61307Z" fill={`url(#${prefix}_circle-arrow-right_existing_0)`} data-glass="clone" filter={`url(#${prefix}_circle-arrow-right_filter)`} clipPath={`url(#${prefix}_circle-arrow-right_clipPath)`} />
        <path fillRule="evenodd" clipRule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9 15.6387C9 17.0545 10.594 17.8842 11.7539 17.0723L16.9521 13.4336C17.9472 12.7369 17.9471 11.2631 16.9521 10.5664L11.7539 6.92773C10.594 6.11583 9 6.94554 9 8.36133V15.6387Z" fill={`url(#${prefix}_circle-arrow-right_existing_1)`} data-glass="blur"></path>
        <path d="M22.25 12C22.25 6.33908 17.6609 1.75 12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25V23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1L12.5664 1.01465C18.3783 1.30945 23 6.11484 23 12L22.9854 12.5664C22.6906 18.3783 17.8852 23 12 23V22.25C17.6609 22.25 22.25 17.6609 22.25 12Z" fill={`url(#${prefix}_circle-arrow-right_existing_2)`}></path>
        <defs>
          <linearGradient id={`${prefix}_circle-arrow-right_existing_0`} x1="10.25" y1="5.5" x2="10.25" y2="18.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#575757"></stop>
            <stop offset="1" stopColor="#151515"></stop>
          </linearGradient>
          <linearGradient id={`${prefix}_circle-arrow-right_existing_1`} x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E3E3E5" stopOpacity=".6"></stop>
            <stop offset="1" stopColor="#BBBBC0" stopOpacity=".6"></stop>
          </linearGradient>
          <linearGradient id={`${prefix}_circle-arrow-right_existing_2`} x1="12" y1="1" x2="12" y2="13.74" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff"></stop>
            <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
          </linearGradient>
          <filter id={`${prefix}_circle-arrow-right_filter`} x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
          </filter>
          <clipPath id={`${prefix}_circle-arrow-right_clipPath`}>
            <path fillRule="evenodd" clipRule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9 15.6387C9 17.0545 10.594 17.8842 11.7539 17.0723L16.9521 13.4336C17.9472 12.7369 17.9471 11.2631 16.9521 10.5664L11.7539 6.92773C10.594 6.11583 9 6.94554 9 8.36133V15.6387Z" fill={`url(#${prefix}_circle-arrow-right_existing_1)`}></path>
          </clipPath>
          <mask id={`${prefix}_circle-arrow-right_mask`}>
            <rect width="100%" height="100%" fill="#FFF"></rect>
            <path fillRule="evenodd" clipRule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9 15.6387C9 17.0545 10.594 17.8842 11.7539 17.0723L16.9521 13.4336C17.9472 12.7369 17.9471 11.2631 16.9521 10.5664L11.7539 6.92773C10.594 6.11583 9 6.94554 9 8.36133V15.6387Z" fill="#000"></path>
          </mask>
        </defs>
      </g>
    </svg>
  )
}

type ProductDetailsProps = {
  product: Product
}

export function ProductHeader({ product }: ProductDetailsProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
        {product.company}
      </p>
      <h1 className="text-3xl font-semibold tracking-tight">
        {product.name}
      </h1>
    </div>
  )
}

type ProductImageProps = ProductDetailsProps & {
  previousProduct: Product | null
  nextProduct: Product | null
}

export function ProductImage({ product, previousProduct, nextProduct }: ProductImageProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary corner-squircle supports-corner-shape:rounded-[10%]">
      <Image
        src={product.imageSrc}
        alt={product.imageAlt}
        fill
        className="object-cover corner-squircle supports-corner-shape:rounded-[10%] rounded-lg"
        priority
        style={{
          viewTransitionName: `product-image-${product.id}`,
        }}
       
      />
      
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        {previousProduct ? (
          <TransitionLink
            type="backwards"
            href={`/shop/${previousProduct.slug}`}
            variant="nav"
            className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-background/20 backdrop-blur-md border border-border/50 text-foreground transition-all hover:bg-background/30 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Previous product"
          >
            <CircleArrowLeft className="w-6 h-6" />
          </TransitionLink>
        ) : (
          <div className="w-12" />
        )}
        
        {nextProduct ? (
            <TransitionLink
              type="forwards"
            href={`/shop/${nextProduct.slug}`}
            variant="nav"
            className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-background/20 backdrop-blur-md border border-border/50 text-foreground transition-all hover:bg-background/30 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Next product"
          >
            <CircleArrowRight className="w-6 h-6" />
          </TransitionLink>
        ) : (
          <div className="w-12" />
        )}
      </div>
    </div>
  )
}

export function ProductInfo({ product }: ProductDetailsProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-base text-muted-foreground">
        {product.description}
      </p>

      <dl className="grid gap-3 border-t border-border pt-4">
        <div className="flex justify-between">
          <dt className="text-sm font-medium text-muted-foreground">
            Price
          </dt>
          <dd className="text-base font-semibold tabular-nums">
            ${product.price.toFixed(2)}
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-sm font-medium text-muted-foreground">
            Company
          </dt>
          <dd className="text-sm">{product.company}</dd>
        </div>
      </dl>
    </div>
  )
}

export function ProductActions({ productId }: { productId: number }) {
  const { addToCart } = useCart()
  const [isSuccess, setIsSuccess] = useState(false)

  const handleAddToCart = () => {
    addToCart(productId)
    setIsSuccess(true)
    setTimeout(() => setIsSuccess(false), 2000)
  }

  return (
            <ViewTransition update={'none'}>
    <button
      type="button"
      onClick={handleAddToCart}
      className="w-full rounded-md bg-foreground px-4 py-3 text-sm font-medium text-background  hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none"
    >
      {isSuccess ? "Added to Cart ✓" : "Add to Cart"}
    </button> </ViewTransition>
  )
}

