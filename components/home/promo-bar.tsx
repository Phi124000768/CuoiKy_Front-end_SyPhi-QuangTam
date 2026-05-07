import { Gift, Truck, Percent, CreditCard } from "lucide-react"

const promos = [
  {
    icon: Gift,
    title: "TẶNG",
    description: "Túi giữ nhiệt cho đơn từ 599K",
  },
  {
    icon: Truck,
    title: "TẶNG",
    description: "Miễn phí ship đơn từ 500K",
  },
  {
    icon: Percent,
    title: "VOUCHER",
    description: "Giảm 20% cho đơn đầu tiên",
  },
  {
    icon: CreditCard,
    title: "MÃ: APR20",
    description: "Giảm 50K cho thành viên mới",
  },
]

export function PromoBar() {
  return (
    <section className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {promos.map((promo, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <promo.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-white">
                <p className="font-bold text-sm">{promo.title}</p>
                <p className="text-xs opacity-90">{promo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
