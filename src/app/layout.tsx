import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/shared/theme-provider'
import { Header } from '@/components/shared/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Druide500',
  description: 'Plateforme musicale nodale',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main className="p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}