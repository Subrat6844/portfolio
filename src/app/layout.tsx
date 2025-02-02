import "./globals.css"
import { Red_Hat_Display } from "next/font/google"
import Navbar  from "@/components/navbar"
import type React from "react"

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display",
})

export const metadata = {
  title: "Subrat Chaudhary - Full Stack Developer",
  description: "Portfolio of Subrat Chaudhary, a passionate full-stack developer crafting digital experiences.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${redHatDisplay.variable}`}>
      <body className="font-sans bg-background text-foreground">
        <Navbar />
        {children}
      </body>
    </html>
  )
}

