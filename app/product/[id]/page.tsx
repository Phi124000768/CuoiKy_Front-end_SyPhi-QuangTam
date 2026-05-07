"use client"

import { use, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ChevronLeft,
  Heart,
  Share2,
  Minus,
  Plus,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  Star,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { ProductSection } from "@/components/product/product-section"
import { getProductById, products, formatPrice } from "@/lib/data"
import { useCartStore } from "@/lib/cart-store"

const sizes = ["S", "M", "L", "XL", "XXL"]

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const router = useRouter()
  const product = getProductById(id)
  const addItem = useCartStore((state) => state.addItem)

  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [showAddedMessage, setShowAddedMessage] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Sản phẩm không tồn tại</h1>
            <Link href="/">
              <Button>Quay lại trang chủ</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 5)

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Vui lòng chọn size")
      return
    }
    addItem(product, quantity, selectedSize)
    setShowAddedMessage(true)
    setTimeout(() => setShowAddedMessage(false), 2000)
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Vui lòng chọn size")
      return
    }
    addItem(product, quantity, selectedSize)
    router.push("/cart")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Trang chủ
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                {product.category === "ao-thun"
                  ? "Áo Thun"
                  : product.category === "quan-short"
                  ? "Quần Short"
                  : product.category === "ao-so-mi"
                  ? "Áo Sơ Mi"
                  : product.category === "ao-khoac"
                  ? "Áo Khoác"
                  : "Sản phẩm"}
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium line-clamp-1">
                {product.name}
              </span>
            </nav>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.badge === "hot" && (
                      <span className="bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded">
                        HOT
                      </span>
                    )}
                    {product.badge === "new" && (
                      <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded">
                        NEW
                      </span>
                    )}
                    {discount > 0 && (
                      <span className="bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded">
                        -{discount}%
                      </span>
                    )}
                  </div>
                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full bg-white/90 hover:bg-white"
                      onClick={() => setIsWishlisted(!isWishlisted)}
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          isWishlisted ? "fill-primary text-primary" : ""
                        }`}
                      />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full bg-white/90 hover:bg-white"
                    >
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                {/* Thumbnail Gallery - Mock */}
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 ${
                        i === 1 ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <Image
                        src={product.image}
                        alt={`${product.name} - ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <span className="ml-1 text-muted-foreground">(128)</span>
                    </div>
                    {product.soldCount && (
                      <span className="text-muted-foreground">
                        Đã bán {product.soldCount}
                      </span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded font-semibold">
                        Tiết kiệm {formatPrice(product.originalPrice - product.price)}
                      </span>
                    </>
                  )}
                </div>

                {/* Size Selection */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold">Kích thước:</span>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      Hướng dẫn chọn size
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[48px] h-10 px-4 rounded-lg border-2 font-medium transition-colors ${
                          selectedSize === size
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background hover:border-primary"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <span className="font-semibold mb-3 block">Số lượng:</span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-none rounded-l-lg"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-none rounded-r-lg"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Còn 99 sản phẩm
                    </span>
                  </div>
                </div>

                {/* Add to Cart / Buy Now */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Thêm vào giỏ
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={handleBuyNow}
                  >
                    Mua ngay
                  </Button>
                </div>

                {/* Added to cart message */}
                {showAddedMessage && (
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-center">
                    Đã thêm sản phẩm vào giỏ hàng!
                  </div>
                )}

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Truck className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold">Miễn phí ship</p>
                      <p className="text-muted-foreground">Đơn từ 500K</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <RotateCcw className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold">Đổi trả miễn phí</p>
                      <p className="text-muted-foreground">Trong 30 ngày</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold">Bảo hành</p>
                      <p className="text-muted-foreground">Chính hãng 100%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Description */}
        <section className="py-8 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-4">Mô tả sản phẩm</h2>
            <div className="bg-card rounded-xl p-6">
              <div className="prose max-w-none">
                <p className="text-muted-foreground">
                  <strong>{product.name}</strong> - Sản phẩm thời trang nam cao cấp từ
                  160STORE. Được thiết kế với chất liệu cotton cao cấp, thoáng mát và
                  co giãn tốt, phù hợp với thời tiết Việt Nam.
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>Chất liệu: Cotton 100% cao cấp</li>
                  <li>Kiểu dáng: Regular fit, form chuẩn</li>
                  <li>Màu sắc: Đa dạng, phù hợp với nhiều phong cách</li>
                  <li>Bảo quản: Giặt máy ở nhiệt độ thường, không sử dụng chất tẩy</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  Sản phẩm phù hợp với các hoạt động hàng ngày, đi làm, đi chơi, hoặc
                  tham gia các sự kiện. Kết hợp dễ dàng với quần jeans, quần kaki, hoặc
                  quần short để tạo nên phong cách trẻ trung, năng động.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <ProductSection
            title="Sản phẩm liên quan"
            products={relatedProducts}
            seeMoreLink="#"
          />
        )}
      </main>

      <Footer />
    </div>
  )
}
