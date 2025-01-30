import "./globals.css"
import { Poppins } from "next/font/google"
import { Navbar } from "@/components/navbar"
import type React from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Full Stack Developer Portfolio",
  description: "Showcasing my skills and projects in web development",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans bg-background text-foreground`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

