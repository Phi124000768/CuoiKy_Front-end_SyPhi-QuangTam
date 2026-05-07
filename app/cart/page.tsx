"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Trash2,
  Minus,
  Plus,
  ShoppingBag,
  ArrowLeft,
  Tag,
  Truck,
  CreditCard,
  CheckCircle,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCartStore } from "@/lib/cart-store"
import { formatPrice } from "@/lib/data"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } =
    useCartStore()
  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null)
  const [showCheckoutForm, setShowCheckoutForm] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const subtotal = getTotalPrice()
  const shipping = subtotal >= 500000 ? 0 : 30000
  const discount = appliedCoupon === "APR20" ? 50000 : 0
  const total = subtotal + shipping - discount

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === "APR20") {
      setAppliedCoupon("APR20")
      setCouponCode("")
    } else {
      alert("Mã giảm giá không hợp lệ")
    }
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault()
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Đặt hàng thành công!
            </h1>
            <p className="text-muted-foreground mb-6">
              Cảm ơn bạn đã mua hàng tại 160STORE. Chúng tôi sẽ liên hệ với bạn
              trong thời gian sớm nhất để xác nhận đơn hàng.
            </p>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90">
                Tiếp tục mua sắm
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Giỏ hàng trống
            </h1>
            <p className="text-muted-foreground mb-6">
              Bạn chưa có sản phẩm nào trong giỏ hàng. Hãy khám phá các sản phẩm
              của chúng tôi!
            </p>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90">
                Tiếp tục mua sắm
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-muted py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Trang chủ
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Giỏ hàng</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Giỏ hàng của bạn ({items.length} sản phẩm)
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="bg-card rounded-xl p-4 md:p-6 flex gap-4"
                >
                  {/* Product Image */}
                  <Link
                    href={`/product/${item.product.id}`}
                    className="flex-shrink-0"
                  >
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${item.product.id}`}>
                      <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                        {item.product.name}
                      </h3>
                    </Link>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {item.size && <span>Size: {item.size}</span>}
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                      {/* Quantity */}
                      <div className="flex items-center border rounded-lg">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none rounded-l-lg"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-10 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none rounded-r-lg"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="font-bold text-primary">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-xs text-muted-foreground">
                            {formatPrice(item.product.price)} / cái
                          </p>
                        )}
                      </div>

                      {/* Remove */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue Shopping */}
              <Link href="/">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Tiếp tục mua sắm
                </Button>
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-6 sticky top-24">
                <h2 className="text-lg font-bold mb-6">Tóm tắt đơn hàng</h2>

                {/* Coupon */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">
                    Mã giảm giá
                  </label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Nhập mã..."
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button variant="outline" onClick={handleApplyCoupon}>
                      <Tag className="h-4 w-4" />
                    </Button>
                  </div>
                  {appliedCoupon && (
                    <p className="text-sm text-green-600 mt-2">
                      Đã áp dụng mã APR20 - Giảm 50.000đ
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">
                    Thử mã: APR20
                  </p>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 border-t pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tạm tính</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Phí vận chuyển</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600">Miễn phí</span>
                      ) : (
                        formatPrice(shipping)
                      )}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Giảm giá</span>
                      <span className="text-green-600">
                        -{formatPrice(discount)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg border-t pt-3">
                    <span>Tổng cộng</span>
                    <span className="text-primary">{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Shipping Info */}
                {subtotal < 500000 && (
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg text-sm">
                    <Truck className="h-4 w-4 inline mr-2 text-primary" />
                    Mua thêm{" "}
                    <span className="font-semibold text-primary">
                      {formatPrice(500000 - subtotal)}
                    </span>{" "}
                    để được miễn phí ship
                  </div>
                )}

                {/* Checkout Button */}
                <Button
                  className="w-full mt-6 bg-primary hover:bg-primary/90"
                  size="lg"
                  onClick={() => setShowCheckoutForm(true)}
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  Thanh toán
                </Button>

                {/* Payment Methods */}
                
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Checkout Modal */}
      {showCheckoutForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-6">Thông tin giao hàng</h2>
            <form onSubmit={handlePlaceOrder} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Họ và tên *
                </label>
                <Input placeholder="Nguyễn Văn A" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Số điện thoại *
                </label>
                <Input placeholder="0912345678" type="tel" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Địa chỉ giao hàng *
                </label>
                <Input placeholder="Số nhà, đường, phường/xã..." required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Quận/Huyện *
                  </label>
                  <Input placeholder="Quận 1" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Tỉnh/Thành *
                  </label>
                  <Input placeholder="TP. Hồ Chí Minh" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Ghi chú</label>
                <Input placeholder="Ghi chú đơn hàng (nếu có)" />
              </div>

              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between font-bold text-lg mb-4">
                  <span>Tổng thanh toán:</span>
                  <span className="text-primary">{formatPrice(total)}</span>
                </div>
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setShowCheckoutForm(false)}
                  >
                    Hủy
                  </Button>
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                    Đặt hàng
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
