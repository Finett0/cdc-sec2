import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SecurityConcerns from '@/components/SecurityConcerns'
import DevSecOps from '@/components/DevSecOps'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <SecurityConcerns />
      <DevSecOps />
      <Content />
      <Footer />
    </main>
  )
}
