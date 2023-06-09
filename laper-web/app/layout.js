import "./globals.css"
import { Inter } from "next/font/google"
import { Footer, Header } from "@/components"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Laper",
    description: "Laper"
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
