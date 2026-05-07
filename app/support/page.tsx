"use client"

import { useState } from "react"

type Message = {
  text: string
  sender: "user" | "bot"
}

export default function SupportPage() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Xin chào 👋 Bạn cần hỗ trợ gì?", sender: "bot" },
  ])
  const [input, setInput] = useState("")

  const sendMessage = () => {
    if (!input.trim()) return

    const newMessages: Message[] = [
      ...messages,
      { text: input, sender: "user" },
    ]

    // fake bot reply
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { text: "Shop sẽ phản hồi bạn sớm nhất 💬", sender: "bot" },
      ])
    }, 500)

    setMessages(newMessages)
    setInput("")
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      <div className="bg-black text-white p-4 text-center font-bold">
        💬 Hỗ trợ khách hàng
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs p-3 rounded-lg ${
              msg.sender === "user"
                ? "bg-black text-white ml-auto"
                : "bg-white border"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 flex gap-2 bg-white">
        <input
          type="text"
          placeholder="Nhập tin nhắn..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-lg px-3"
        />
        <button
          onClick={sendMessage}
          className="bg-black text-white px-4 rounded-lg"
        >
          Gửi
        </button>
      </div>
    </div>
  )
}