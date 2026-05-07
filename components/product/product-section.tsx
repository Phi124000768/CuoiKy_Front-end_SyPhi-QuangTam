import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "./product-card"
import type { Product } from "@/lib/data"

interface ProductSectionProps {
  title: string
  products: Product[]
  seeMoreLink?: string
  bgColor?: string
  id?: string
}

export function ProductSection({
  title,
  products,
  seeMoreLink,
  bgColor = "bg-background",
  id,
}: ProductSectionProps) {
  return (
    <section id={id} className={`py-8 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">{title}</h2>
          {seeMoreLink && (
            <Link href={seeMoreLink}>
              <Button variant="outline" size="sm" className="gap-1">
                Xem tất cả
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
