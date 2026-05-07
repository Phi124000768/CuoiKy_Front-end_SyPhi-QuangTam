"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Eye } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { type Product, formatPrice } from "@/lib/data"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div
      className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.badge === "hot" && (
            <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
              HOT
            </span>
          )}
          {product.badge === "new" && (
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          )}
          {product.badge === "sale" && discount > 0 && (
            <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
              -{discount}%
            </span>
          )}
          {!product.badge && discount > 0 && (
            <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
              -{discount}%
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div
          className={`absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-white/90 hover:bg-white"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart
              className={`h-4 w-4 ${isWishlisted ? "fill-primary text-primary" : ""}`}
            />
          </Button>
          <Link href={`/product/${product.id}`}>
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full bg-white/90 hover:bg-white"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Color Options */}
        {product.colors && product.colors.length > 0 && (
          <div className="absolute bottom-2 left-2 flex gap-1">
            {product.colors.slice(0, 4).map((color, index) => (
              <span
                key={index}
                className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs bg-white/90 px-1 rounded">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-card-foreground line-clamp-2 min-h-[2.5rem] hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-2 flex-wrap">
          <span className="text-base font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {product.soldCount && (
          <p className="mt-1 text-xs text-muted-foreground">
            Đã bán {product.soldCount} sản phẩm
          </p>
        )}
      </div>
    </div>
  )
}
