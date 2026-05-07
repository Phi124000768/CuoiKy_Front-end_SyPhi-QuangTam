import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroBanner } from "@/components/home/hero-banner"
import { StoreLocations } from "@/components/home/store-locations"
import { PromoBar } from "@/components/home/promo-bar"
import { Lookbook } from "@/components/home/lookbook"
import { CategoryBanner } from "@/components/home/category-banner"
import { ProductSection } from "@/components/product/product-section"
import {
  getBestSellers,
  getNewArrivals,
  getProductsByCategory,
} from "@/lib/data"

export default function HomePage() {
  const bestSellers = getBestSellers()
  const newArrivals = getNewArrivals()
  const shirts = getProductsByCategory("ao-thun")
  const shorts = getProductsByCategory("quan-short")
  const dressShirts = getProductsByCategory("ao-so-mi")
  const jackets = getProductsByCategory("ao-khoac")
  const polos = getProductsByCategory("ao-polo")
  const pants = getProductsByCategory("quan-tay")
  const joggers = getProductsByCategory("quan-jogger")
  const accessories = getProductsByCategory("phu-kien")
  const summer = getProductsByCategory("do-he")
  const jeans = getProductsByCategory("jeans")
  const sale304 = getProductsByCategory("sale-30-4")
  const collection = getProductsByCategory("collection")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Store Locations */}
        <StoreLocations />

        {/* Promo Bar */}
        <PromoBar />

        {/* Sale 30-4 */}
        <section id="sale-30-4" className="py-8 bg-gradient-to-r from-red-50 to-orange-50">
          <div className="container mx-auto px-4 mb-6">
            <CategoryBanner
              title="SALE LỄ 30-4"
              subtitle="GIẢM ĐẾN 50%"
              image="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&h=400&fit=crop"
              variant="orange"
            />
          </div>
          <ProductSection
            title="Sale Lễ 30-4"
            products={sale304}
            seeMoreLink="/category/sale-30-4"
          />
        </section>

        {/* Best Sellers */}
        <section className="py-8">
          <div className="container mx-auto px-4 mb-6">
            <CategoryBanner
              title="HÀNG BÁN CHẠY"
              subtitle="VỀ LIÊN TỤC"
              image="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&h=400&fit=crop"
              variant="orange"
            />
          </div>
          <ProductSection
            title="Sản Phẩm Bán Chạy"
            products={bestSellers}
            seeMoreLink="/category/all"
          />
        </section>

        {/* New Arrivals */}
        <section id="hang-moi" className="py-8 bg-muted">
          <div className="container mx-auto px-4 mb-6">
            <CategoryBanner
              title="HÀNG MỚI"
              subtitle="VỀ LIÊN TỤC"
              image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=400&fit=crop"
              variant="dark"
            />
          </div>
          <ProductSection
            title="Sản Phẩm Mới"
            products={newArrivals}
            seeMoreLink="/category/new"
            bgColor="bg-muted"
          />
        </section>

        {/* Áo Polo */}
        <ProductSection
          id="ao-polo"
          title="Áo Polo"
          products={polos.slice(0, 4)}
          seeMoreLink="/category/ao-polo"
        />

        {/* Áo Thun */}
        <ProductSection
          id="ao-thun"
          title="Áo Thun"
          products={shirts.slice(0, 4)}
          seeMoreLink="/category/ao-thun"
          bgColor="bg-muted"
        />

        {/* Quần Tây */}
        <ProductSection
          id="quan-tay"
          title="Quần Tây"
          products={pants.slice(0, 4)}
          seeMoreLink="/category/quan-tay"
        />

        {/* Quần Jogger */}
        <ProductSection
          id="quan-jogger"
          title="Quần Jogger"
          products={joggers.slice(0, 4)}
          seeMoreLink="/category/quan-jogger"
          bgColor="bg-muted"
        />

        {/* Quần Short */}
        <ProductSection
          id="quan-short"
          title="Quần Short"
          products={shorts.slice(0, 4)}
          seeMoreLink="/category/quan-short"
        />

        {/* Áo Sơ Mi */}
        <ProductSection
          id="ao-so-mi"
          title="Áo Sơ Mi"
          products={dressShirts.slice(0, 4)}
          seeMoreLink="/category/ao-so-mi"
          bgColor="bg-muted"
        />

        {/* Áo Khoác */}
        <ProductSection
          id="ao-khoac"
          title="Áo Khoác"
          products={jackets.slice(0, 4)}
          seeMoreLink="/category/ao-khoac"
        />

        {/* Phụ Kiện */}
        <ProductSection
          id="phu-kien"
          title="Phụ Kiện"
          products={accessories.slice(0, 4)}
          seeMoreLink="/category/phu-kien"
          bgColor="bg-muted"
        />

        {/* Đồ Hè */}
        <ProductSection
          id="do-he"
          title="Đồ Hè"
          products={summer.slice(0, 4)}
          seeMoreLink="/category/do-he"
        />

        {/* Jeans */}
        <ProductSection
          id="jeans"
          title="Jeans"
          products={jeans.slice(0, 4)}
          seeMoreLink="/category/jeans"
          bgColor="bg-muted"
        />

        {/* Collection */}
        <ProductSection
          id="collection"
          title="Collection"
          products={collection.slice(0, 4)}
          seeMoreLink="/category/collection"
        />

        {/* Lookbook */}
        <Lookbook />
      </main>

      <Footer />
    </div>
  )
}
