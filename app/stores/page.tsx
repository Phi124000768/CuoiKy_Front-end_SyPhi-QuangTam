import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { storeLocations } from "@/lib/data"

export default function StoresPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              HỆ THỐNG CỬA HÀNG TPSTORE
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              {storeLocations.reduce((a, b) => a + b.count, 0)} cửa hàng trên toàn quốc - Sẵn sàng phục vụ bạn!
            </p>
          </div>
        </section>

        {/* Store List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8">
              {storeLocations.map((location) => (
                <div key={location.city} className="bg-card rounded-2xl shadow-lg overflow-hidden">
                  {/* City Header */}
                  <div className="bg-secondary text-secondary-foreground p-4 md:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold">{location.city}</h2>
                          <p className="text-secondary-foreground/80">{location.count} cửa hàng</p>
                        </div>
                      </div>
                      {location.city === "Hà Nội" && (
                        <span className="bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Addresses */}
                  <div className="p-4 md:p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {location.addresses.map((address, idx) => (
                        <div
                          key={idx}
                          className="border border-border rounded-xl p-4 hover:border-primary transition-colors"
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-sm font-bold text-primary">{idx + 1}</span>
                            </div>
                            <p className="text-sm font-medium">{address}</p>
                          </div>
                          
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>08:30 - 22:00</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              <span>0287 100 6789</span>
                            </div>
                          </div>

                          <div className="mt-4 flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1 text-xs">
                              <Phone className="h-3 w-3 mr-1" />
                              Gọi ngay
                            </Button>
                            <Button size="sm" className="flex-1 text-xs">
                              <Navigation className="h-3 w-3 mr-1" />
                              Chỉ đường
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Liên Hệ Với Chúng Tôi</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card rounded-xl p-6 shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Hotline</h3>
                  <p className="text-primary font-bold text-lg">0287 100 6789</p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Giờ mở cửa</h3>
                  <p className="text-muted-foreground">08:30 - 22:00 hàng ngày</p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Tổng cửa hàng</h3>
                  <p className="text-primary font-bold text-lg">{storeLocations.reduce((a, b) => a + b.count, 0)} chi nhánh</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
