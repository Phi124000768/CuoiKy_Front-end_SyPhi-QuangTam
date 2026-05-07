import Link from "next/link"
import { Phone, Mail, Clock, MapPin, Facebook, Youtube, Instagram } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { storeLocations } from "@/lib/data"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter */}
      <div className="border-b border-secondary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Đăng Ký Nhận Tin</h3>
              <p className="text-sm text-secondary-foreground/80">
                Nhận thông tin khuyến mãi và sản phẩm mới
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-md gap-2">
              <Input
                type="email"
                placeholder="Email của bạn"
                className="bg-white text-foreground"
              />
              <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                Đăng Ký
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com/tran.quang.tam.29228"
                className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@T%C3%A2mTr%E1%BA%A7n-e6k"
                className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/quangtam_tran?igsh=b3V3dWo3YXZvdzg0&utm_source=qr"
                className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Giới thiệu */}
          <div>
            <h4 className="text-lg font-bold mb-4">Giới Thiệu</h4>
            <div className="space-y-3 text-sm">
              <p className="font-semibold">TPSTORE - Chuỗi Phân Phối Thời Trang Nam Chuẩn Hiệu</p>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>0375126141</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>cs@tpstore.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Giờ mở cửa: 08:30 - 22:00</span>
              </div>
              <p className="text-secondary-foreground/80">
                Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi ngày)
              </p>
            </div>
          </div>

          {/* Chính sách */}
          <div>
            <h4 className="text-lg font-bold mb-4">Chính Sách</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/policy/order" className="hover:text-primary transition-colors">
                  Hướng dẫn đặt hàng
                </Link>
              </li>
              <li>
                <Link href="/policy/return" className="hover:text-primary transition-colors">
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link href="/policy/privacy" className="hover:text-primary transition-colors">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/policy/shipping" className="hover:text-primary transition-colors">
                  Chính sách vận chuyển
                </Link>
              </li>
              <li>
                <Link href="/policy/payment" className="hover:text-primary transition-colors">
                  Chính sách thanh toán
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>

          {/* Địa chỉ cửa hàng */}
          <div>
            <h4 className="text-lg font-bold mb-4">
              <Link href="/stores" className="hover:text-primary transition-colors">
                Địa Chỉ Cửa Hàng ({storeLocations.reduce((a, b) => a + b.count, 0)} CH)
              </Link>
            </h4>
            <div className="space-y-3 text-sm">
              {storeLocations.slice(0, 4).map((location) => (
                <div key={location.city}>
                  <Link href="/stores" className="flex items-center gap-2 font-semibold hover:text-primary transition-colors">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>
                      {location.city} ({location.count} CH)
                    </span>
                  </Link>
                  <p className="ml-6 text-secondary-foreground/80">{location.addresses[0]}</p>
                </div>
              ))}
              <Link href="/stores" className="inline-block ml-6 text-primary hover:underline">
                Xem tất cả cửa hàng
              </Link>
            </div>
          </div>

          
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-secondary-foreground/80">
            © 2024 TPSTORE. Tất cả quyền được bảo lưu. | Thiết kế bởi Student Frontend
          </p>
        </div>
      </div>
    </footer>
  )
}
