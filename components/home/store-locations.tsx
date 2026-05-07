"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { storeLocations } from "@/lib/data"

export function StoreLocations() {
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <section className="py-8 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-br from-red-700 to-orange-600 rounded-2xl p-6 md:p-10 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Side */}
              <div className="lg:w-1/3">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  HỆ THỐNG
                  <br />
                  CỬA HÀNG TPSTORE
                </h2>
                <div className="flex flex-col gap-3 text-sm md:text-base">
                  <div className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-2">
                    <Phone className="h-5 w-5" />
                    <span>0287 100 6789</span>
                    <span className="mx-2">|</span>
                    <Mail className="h-5 w-5" />
                    <span>cskh@tpstore.com</span>
                  </div>
                </div>
                <Link href="/stores">
                  <Button className="mt-4 bg-yellow-400 text-yellow-900 hover:bg-yellow-300">
                    Xem tất cả cửa hàng
                  </Button>
                </Link>
              </div>

              {/* Right Side - Store Grid */}
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {storeLocations.map((location) => (
                    <Link
                      key={location.city}
                      href="/stores"
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                          {location.city.toUpperCase()}
                        </span>
                        {location.city === "Hà Nội" && (
                          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                      <ul className="space-y-2 text-sm">
                        {location.addresses.slice(0, 3).map((address, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-70" />
                            <span className="opacity-90">{address}</span>
                          </li>
                        ))}
                        {location.addresses.length > 3 && (
                          <li className="text-yellow-300 text-xs">
                            +{location.addresses.length - 3} địa chỉ khác
                          </li>
                        )}
                      </ul>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30"
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((dot) => (
                  <button
                    key={dot}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      dot === currentPage ? "bg-white" : "bg-white/40"
                    }`}
                    onClick={() => setCurrentPage(dot)}
                  />
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30"
                onClick={() => setCurrentPage(Math.min(4, currentPage + 1))}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
