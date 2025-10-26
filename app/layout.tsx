import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'sec2 - Security Solutions For Your Software',
  description: 'sec2 help founders and indie hackers implement security for your micro-saas and saas. With one-line code implementation, DevSecOps in code and automated pentesting.',
  keywords: 'security, devsecops, saas, micro-saas, pentesting, vulnerability scanning',
  authors: [{ name: 'sec2' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
