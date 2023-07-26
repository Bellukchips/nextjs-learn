export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>Header</div>
        {children}
        <div>Footer</div>
        </body>
    </html>
  )
}
