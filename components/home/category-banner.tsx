import Image from "next/image"

interface CategoryBannerProps {
  title: string
  subtitle?: string
  image: string
  variant?: "orange" | "dark" | "blue"
}

export function CategoryBanner({
  title,
  subtitle,
  image,
  variant = "orange",
}: CategoryBannerProps) {
  const bgColors = {
    orange: "from-orange-500 to-red-600",
    dark: "from-gray-800 to-gray-900",
    blue: "from-blue-600 to-blue-800",
  }

  return (
    <div className={`relative h-[200px] md:h-[250px] rounded-xl overflow-hidden bg-gradient-to-r ${bgColors[variant]}`}>
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover mix-blend-overlay opacity-40"
      />
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center p-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">{title}</h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-yellow-300 font-semibold">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
