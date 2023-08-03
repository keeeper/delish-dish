import './globals.css'
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Delish dish',
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
        <main className="flex-1">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
