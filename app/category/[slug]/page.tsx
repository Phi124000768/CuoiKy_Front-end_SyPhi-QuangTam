"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { useState, useMemo } from "react"
import { ChevronRight, SlidersHorizontal, Grid3X3, LayoutList, X } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductCard } from "@/components/product/product-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  products, 
  categories, 
  getProductsByCategory, 
  getNewArrivals, 
  getSaleProducts,
  getAllProducts 
} from "@/lib/data"

const categoryNames: Record<string, string> = {
  "all": "Tất Cả Sản Phẩm",
  "ao-thun": "Áo Thun",
  "ao-polo": "Áo Polo",
  "ao-so-mi": "Áo Sơ Mi",
  "ao-khoac": "Áo Khoác",
  "quan-short": "Quần Short",
  "quan-tay": "Quần Tây",
  "quan-jogger": "Quần Jogger",
  "phu-kien": "Phụ Kiện",
  "do-he": "Đồ Hè",
  "jeans": "Jeans",
  "sale-30-4": "Sale 30-4",
  "collection": "Collection",
  "new": "Hàng Mới",
  "sale": "Sản Phẩm Sale"
}

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const [sortBy, setSortBy] = useState("newest")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedPrices, setSelectedPrices] = useState<string[]>([])
  const [selectedBadges, setSelectedBadges] = useState<string[]>([])

  const categoryName = categoryNames[slug] || "Sản Phẩm"

  const filteredProducts = useMemo(() => {
    let result = []
    
    if (slug === "all") {
      result = getAllProducts()
    } else if (slug === "new") {
      result = getNewArrivals()
    } else if (slug === "sale") {
      result = getSaleProducts()
    } else {
      result = getProductsByCategory(slug)
    }

    // Apply price filters
    if (selectedPrices.length > 0) {
      result = result.filter(product => {
        if (selectedPrices.includes("under-200") && product.price < 200000) return true
        if (selectedPrices.includes("200-400") && product.price >= 200000 && product.price < 400000) return true
        if (selectedPrices.includes("400-600") && product.price >= 400000 && product.price < 600000) return true
        if (selectedPrices.includes("over-600") && product.price >= 600000) return true
        return false
      })
    }

    // Apply badge filters
    if (selectedBadges.length > 0) {
      result = result.filter(product => {
        if (selectedBadges.includes("hot") && product.badge === "hot") return true
        if (selectedBadges.includes("new") && product.badge === "new") return true
        if (selectedBadges.includes("sale") && product.badge === "sale") return true
        return false
      })
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case "name":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name))
        break
      case "bestseller":
        result = [...result].sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0))
        break
      default:
        break
    }

    return result
  }, [slug, sortBy, selectedPrices, selectedBadges])

  const togglePriceFilter = (price: string) => {
    setSelectedPrices(prev => 
      prev.includes(price) ? prev.filter(p => p !== price) : [...prev, price]
    )
  }

  const toggleBadgeFilter = (badge: string) => {
    setSelectedBadges(prev => 
      prev.includes(badge) ? prev.filter(b => b !== badge) : [...prev, badge]
    )
  }

  const clearFilters = () => {
    setSelectedPrices([])
    setSelectedBadges([])
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Trang chủ
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground font-medium">{categoryName}</span>
            </nav>
          </div>
        </div>

        {/* Category Header */}
        <div className="bg-gradient-to-r from-primary to-orange-500 py-8">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">{categoryName}</h1>
            <p className="opacity-90">{filteredProducts.length} sản phẩm</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="bg-card rounded-xl p-6 shadow sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">Bộ lọc</h3>
                  {(selectedPrices.length > 0 || selectedBadges.length > 0) && (
                    <button onClick={clearFilters} className="text-sm text-primary hover:underline">
                      Xóa tất cả
                    </button>
                  )}
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Danh mục</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        href="/category/all" 
                        className={`block py-1 text-sm hover:text-primary transition-colors ${slug === "all" ? "text-primary font-medium" : ""}`}
                      >
                        Tất cả sản phẩm
                      </Link>
                    </li>
                    {categories.map(cat => (
                      <li key={cat.id}>
                        <Link 
                          href={`/category/${cat.id}`} 
                          className={`block py-1 text-sm hover:text-primary transition-colors ${slug === cat.id ? "text-primary font-medium" : ""}`}
                        >
                          {cat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Mức giá</h4>
                  <div className="space-y-2">
                    {[
                      { id: "under-200", label: "Dưới 200K" },
                      { id: "200-400", label: "200K - 400K" },
                      { id: "400-600", label: "400K - 600K" },
                      { id: "over-600", label: "Trên 600K" }
                    ].map(price => (
                      <label key={price.id} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox 
                          checked={selectedPrices.includes(price.id)}
                          onCheckedChange={() => togglePriceFilter(price.id)}
                        />
                        <span className="text-sm">{price.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Badge Filter */}
                <div>
                  <h4 className="font-semibold mb-3">Loại sản phẩm</h4>
                  <div className="space-y-2">
                    {[
                      { id: "hot", label: "Bán chạy" },
                      { id: "new", label: "Hàng mới" },
                      { id: "sale", label: "Đang giảm giá" }
                    ].map(badge => (
                      <label key={badge.id} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox 
                          checked={selectedBadges.includes(badge.id)}
                          onCheckedChange={() => toggleBadgeFilter(badge.id)}
                        />
                        <span className="text-sm">{badge.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="lg:hidden"
                    onClick={() => setShowFilters(true)}
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Bộ lọc
                  </Button>
                  
                  {(selectedPrices.length > 0 || selectedBadges.length > 0) && (
                    <div className="flex items-center gap-2 flex-wrap">
                      {selectedPrices.map(price => (
                        <span key={price} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          {price === "under-200" && "Dưới 200K"}
                          {price === "200-400" && "200K - 400K"}
                          {price === "400-600" && "400K - 600K"}
                          {price === "over-600" && "Trên 600K"}
                          <button onClick={() => togglePriceFilter(price)}>
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                      {selectedBadges.map(badge => (
                        <span key={badge} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          {badge === "hot" && "Bán chạy"}
                          {badge === "new" && "Hàng mới"}
                          {badge === "sale" && "Đang giảm"}
                          <button onClick={() => toggleBadgeFilter(badge)}>
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sắp xếp" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Mới nhất</SelectItem>
                      <SelectItem value="bestseller">Bán chạy</SelectItem>
                      <SelectItem value="price-asc">Giá thấp đến cao</SelectItem>
                      <SelectItem value="price-desc">Giá cao đến thấp</SelectItem>
                      <SelectItem value="name">Tên A-Z</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="hidden sm:flex items-center gap-1 border rounded-lg p-1">
                    <button 
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded ${viewMode === "list" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                    >
                      <LayoutList className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className={
                  viewMode === "grid" 
                    ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4" 
                    : "space-y-4"
                }>
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <SlidersHorizontal className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Không tìm thấy sản phẩm</h3>
                  <p className="text-muted-foreground mb-4">Thử thay đổi bộ lọc hoặc xem danh mục khác</p>
                  <Button onClick={clearFilters}>Xóa bộ lọc</Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filter Modal */}
        {showFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
            <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-card p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Bộ lọc</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Danh mục</h4>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      href="/category/all" 
                      onClick={() => setShowFilters(false)}
                      className={`block py-1 text-sm hover:text-primary transition-colors ${slug === "all" ? "text-primary font-medium" : ""}`}
                    >
                      Tất cả sản phẩm
                    </Link>
                  </li>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <Link 
                        href={`/category/${cat.id}`}
                        onClick={() => setShowFilters(false)}
                        className={`block py-1 text-sm hover:text-primary transition-colors ${slug === cat.id ? "text-primary font-medium" : ""}`}
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Mức giá</h4>
                <div className="space-y-2">
                  {[
                    { id: "under-200", label: "Dưới 200K" },
                    { id: "200-400", label: "200K - 400K" },
                    { id: "400-600", label: "400K - 600K" },
                    { id: "over-600", label: "Trên 600K" }
                  ].map(price => (
                    <label key={price.id} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox 
                        checked={selectedPrices.includes(price.id)}
                        onCheckedChange={() => togglePriceFilter(price.id)}
                      />
                      <span className="text-sm">{price.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Badge Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Loại sản phẩm</h4>
                <div className="space-y-2">
                  {[
                    { id: "hot", label: "Bán chạy" },
                    { id: "new", label: "Hàng mới" },
                    { id: "sale", label: "Đang giảm giá" }
                  ].map(badge => (
                    <label key={badge.id} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox 
                        checked={selectedBadges.includes(badge.id)}
                        onCheckedChange={() => toggleBadgeFilter(badge.id)}
                      />
                      <span className="text-sm">{badge.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" onClick={clearFilters} className="flex-1">
                  Xóa tất cả
                </Button>
                <Button onClick={() => setShowFilters(false)} className="flex-1">
                  Áp dụng
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
