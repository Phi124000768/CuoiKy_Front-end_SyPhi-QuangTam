"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, User, ShoppingCart, MapPin, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCartStore } from "@/lib/cart-store"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const menuItems = [
  { label: "Hàng Mới", href: "/category/new", isNew: true },
  {
    label: "Sản Phẩm",
    href: "/category/all",
    submenu: [
      { label: "Áo Thun", href: "/category/ao-thun" },
      { label: "Áo Polo", href: "/category/ao-polo" },
      { label: "Áo Sơ Mi", href: "/category/ao-so-mi" },
      { label: "Áo Khoác", href: "/category/ao-khoac" },
      { label: "Xem tất cả", href: "/category/all" },
    ],
  },
  {
    label: "Áo Nam",
    href: "/category/all?type=ao",
    submenu: [
      { label: "Áo Thun", href: "/category/ao-thun" },
      { label: "Áo Polo", href: "/category/ao-polo" },
      { label: "Áo Sơ Mi", href: "/category/ao-so-mi" },
      { label: "Áo Khoác", href: "/category/ao-khoac" },
    ],
  },
  {
    label: "Quần Nam",
    href: "/category/all?type=quan",
    submenu: [
      { label: "Quần Short", href: "/category/quan-short" },
      { label: "Quần Tây", href: "/category/quan-tay" },
      { label: "Quần Jogger", href: "/category/quan-jogger" },
      { label: "Quần Jeans", href: "/category/jeans" },
    ],
  },
  { label: "Phụ Kiện", href: "/category/phu-kien" },
  { label: "Đồ Hè", href: "/category/do-he", isSummer: true },
  { label: "Sale 30-04", href: "/category/sale-30-4", isSale: true },
  { label: "Collection", href: "/category/collection" },
  { label: "Jeans", href: "/category/jeans" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const totalItems = useCartStore((state) => state.getTotalItems())

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Hotline: 0375126141</span>
            <span className="hidden lg:inline">|</span>
            <span className="hidden lg:inline">Miễn phí vận chuyển đơn từ 500K</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/orders" className="hover:text-primary transition-colors">
              Tra cứu đơn hàng
            </Link>
            <span>|</span>
            <Link href="/support" className="hover:text-primary transition-colors">
              Hỗ trợ
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl font-bold text-primary">TP</span>
              <span className="text-2xl md:text-3xl font-bold text-secondary">STORE</span>
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Bạn đang tìm gì..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 h-11 rounded-full border-2 border-border focus:border-primary"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-primary hover:bg-primary/90"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href="/stores"
              className="hidden lg:flex flex-col items-center text-sm hover:text-primary transition-colors"
            >
              <MapPin className="h-5 w-5 mb-1" />
              <span>Cửa hàng</span>
            </Link>
            <Link
              href="/login"
              className="hidden lg:flex flex-col items-center text-sm hover:text-primary transition-colors"
            >
              <User className="h-5 w-5 mb-1" />
              <span>Đăng nhập</span>
            </Link>
            <Link
              href="/cart"
              className="flex flex-col items-center text-sm hover:text-primary transition-colors relative"
            >
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden lg:inline mt-1">Giỏ hàng</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden mt-4">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Bạn đang tìm gì..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-12 h-10 rounded-full border-2 border-border focus:border-primary"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-primary hover:bg-primary/90 h-8 w-8"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:block bg-white border-t border-border">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-1">
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center gap-1 px-4 py-3 text-sm font-medium hover:text-primary transition-colors">
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.label} asChild>
                          <Link href={subItem.href}>{subItem.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-3 text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                      item.isSale
                        ? "text-primary font-bold"
                        : item.isNew
                        ? "text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    {item.isSummer && <span className="text-base">☀️</span>}
                    {item.label}
                    {item.isNew && (
                      <span className="text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded">
                        New
                      </span>
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/stores"
                  className="flex items-center gap-2 py-2 text-sm font-medium hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MapPin className="h-4 w-4" />
                  Cửa hàng
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="flex items-center gap-2 py-2 text-sm font-medium hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="h-4 w-4" />
                  Đăng nhập
                </Link>
              </li>
              <li className="border-t border-border pt-2">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">Danh mục</span>
              </li>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`block py-2 text-sm font-medium ${
                      item.isSale ? "text-primary font-bold" : "hover:text-primary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.isSummer && <span className="mr-1">☀️</span>}
                    {item.label}
                    {item.isNew && (
                      <span className="ml-2 text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded">
                        New
                      </span>
                    )}
                  </Link>
                  {item.submenu && (
                    <ul className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            href={subItem.href}
                            className="block py-1 text-sm text-muted-foreground hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
