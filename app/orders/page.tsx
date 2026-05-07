"use client"

import { useState } from "react"

type Order = {
  id: string
  status: string
  customer: string
  total: number
}

export default function OrdersPage() {
  const [orderId, setOrderId] = useState("")
  const [result, setResult] = useState<Order | null>(null)
  const [error, setError] = useState("")

  const handleSearch = () => {
    const orders: Order[] = JSON.parse(
      localStorage.getItem("orders") || "[]"
    )

    const found = orders.find(
      (o) => o.id.toLowerCase() === orderId.toLowerCase()
    )

    if (found) {
      setResult(found)
      setError("")
    } else {
      setResult(null)
      setError("Không tìm thấy đơn hàng!")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          📦 Tra cứu đơn hàng
        </h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Nhập mã đơn (VD: DH...)"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="flex-1 border p-2 rounded-lg"
          />
          <button
            onClick={handleSearch}
            className="bg-black text-white px-4 rounded-lg"
          >
            Tìm
          </button>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {result && (
          <div className="mt-6 p-4 border rounded-lg bg-gray-50">
            <p><b>Mã đơn:</b> {result.id}</p>
            <p><b>Khách hàng:</b> {result.customer}</p>
            <p><b>Trạng thái:</b> {result.status}</p>
            <p><b>Tổng tiền:</b> {result.total.toLocaleString()} VND</p>
          </div>
        )}
      </div>
    </div>
  )
}