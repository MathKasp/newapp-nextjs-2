'use client'

import * as React from "react"
import { useTheme } from "next-themes"

import { useRouter } from 'next/navigation'
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"; 
import { NavBar } from "@/components/navbar"

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const { setTheme } = useTheme()
  const router = useRouter()
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" themes={['light','dark','blue','red-orange']} enableSystem disableTransitionOnChange>

          <NavBar/>

          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
