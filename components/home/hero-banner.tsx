"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const banners = [
  {
    id: 1,
    title: "Sale Lễ Đón Hè",
    subtitle: "Đồng Giá Chỉ Từ 149K",
    description: "Combo Du Lịch Việt Nam",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1600&h=600&fit=crop",
    bgColor: "from-orange-500 to-red-600",
  },
  {
    id: 2,
    title: "Hàng Mới Về Liên Tục",
    subtitle: "Nhẹ Mát Chuẩn Gu",
    description: "Đồ Hè 2024",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=600&fit=crop",
    bgColor: "from-red-500 to-orange-500",
  },
  {
    id: 3,
    title: "Collection Mới",
    subtitle: "Phong Cách Streetwear",
    description: "Cá Tính - Năng Động",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=600&fit=crop",
    bgColor: "from-gray-800 to-gray-900",
  },
]

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  return (
    <section className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${banner.bgColor}`}>
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover mix-blend-overlay opacity-50"
              priority={index === 0}
            />
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <p className="text-sm md:text-lg mb-2 opacity-90">{banner.description}</p>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 text-balance">
                  {banner.title}
                </h1>
                <p className="text-xl md:text-3xl font-semibold text-yellow-300">
                  {banner.subtitle}
                </p>
                <Button className="mt-6 bg-white text-foreground hover:bg-white/90 font-semibold">
                  Mua Ngay
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white h-10 w-10 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white h-10 w-10 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
