import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'delish dish',
  description: 'recipe ideas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-bg-clr">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
