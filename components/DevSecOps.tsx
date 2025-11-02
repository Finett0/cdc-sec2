import { Zap, DollarSign, Headphones } from 'lucide-react'

export default function DevSecOps() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary-400" />,
      title: "10x mais rápido",
      description: "Implemente segurança no seu SaaS rapidamente",
      cta: "Acelere segurança no seu SaaS →",
      href: "#speed"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary-400" />,
      title: "60% mais acessível", 
      description: "Maior custo-benefício e menor complexidade para implementação",
      cta: "Otimize Custos →",
      href: "#cost"
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary-400" />,
      title: "Suporte Premium",
      description: "Founder Support para dúvidas de Implementação",
      cta: "Fale conosco →",
      href: "#support"
    }
  ]

  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Desenvolveu com IA? Garanta que está seguro.
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Agent CLI que identifica problemas de segurança no código do seu MVP
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-hover bg-gray-900/50 border border-gray-700 rounded-xl p-8 text-center group"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                {feature.description}
              </p>
              
              <a
                href={feature.href}
                className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium group-hover:translate-x-1 transition-all duration-200 text-lg"
              >
                {feature.cta}
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
