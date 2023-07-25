import './globals.css'

export const metadata = {
  title: 'DelishDish',
  description: 'Recipe ideas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}