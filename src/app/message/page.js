"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const chats = [
    { id: 1, name: "Dang", message: "Bu nanti saya ambil ya.." },
    { id: 2, name: "Nayla", message: "Ibu sambelnya dipisah aja" },
    { id: 3, name: "Annisa Rachimi R", message: "Terima Kasih" },
    { id: 4, name: "Panji", message: "Bu esnya dikit aja" },
  ];

  const [selectedChat, setSelectedChat] = useState(null);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() && selectedChat) {
      selectedChat.messages.push({ sender: "user", text: inputMessage });
      setInputMessage("");
    }
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full flex flex-col">
      {/* Header */}
      <div className="bg-yellow-500 text-white flex items-center p-4 rounded-b-3xl">
        <Link href="/dashboard-penjual" passHref>
          <Image src="/svg/back.svg" alt="Back" width={24} height={24} />
        </Link>
        <h1 className="text-xl font-bold mx-auto">
          {selectedChat ? selectedChat.name : "Chat"}
        </h1>
      </div>

      {/* Jika chat dipilih */}
      {selectedChat ? (
        <div className="flex flex-col flex-1">
          {/* Pesan */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {selectedChat.messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.sender === "user"
                    ? "bg-gray-200 self-end"
                    : "bg-yellow-300 self-start"
                } rounded-lg px-4 py-2 max-w-xs`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Pesan */}
          <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Ketik Pesan..."
                className="flex-1 border rounded-full px-4 py-2 mr-2 focus:outline-none"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <button
                className="text-black"
                onClick={handleSendMessage}
              >
                &#9658;
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Daftar Chat
        <div className="p-5 space-y-4 flex-1">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="bg-white shadow rounded-lg flex items-center p-4 cursor-pointer"
              onClick={() =>
                setSelectedChat({
                  ...chat,
                  messages: [{ sender: "system", text: chat.message }],
                })
              }
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold">
                {chat.name[0]}
              </div>
              {/* Chat Details */}
              <div className="ml-4">
                <p className="font-bold text-gray-800">{chat.name}</p>
                <p className="text-sm text-gray-600">{chat.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
