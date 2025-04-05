"use client";
import { motion } from "framer-motion"
import Link from "next/link";
const MotionLink = motion(Link);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
      >
        CryptoWeather Nexus
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-6 mb-8 text-xl text-gray-300 max-w-xl text-center"
      >
        Your one-stop dashboard for real-time <span className="text-blue-400 font-semibold">Weather</span> & <span className="text-purple-400 font-semibold">Crypto</span> data.
      </motion.p>
      <MotionLink
        href="/dashboard"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 hover:bg-blue-800 transition duration-300 px-8 py-4 rounded-xl text-white font-medium shadow-md"
      >
        🚀 Go to Dashboard
      </MotionLink>
    </main>
  )
}