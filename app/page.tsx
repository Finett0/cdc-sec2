import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SecurityConcerns from '@/components/SecurityConcerns'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import DevSecOps from '@/components/DevSecOps'
import Content from '@/components/Content'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <SecurityConcerns />
      <HowItWorks />
      <Features />
      <DevSecOps />
      <Content />
      <FinalCTA />
      <Footer />
    </main>
  )
}
