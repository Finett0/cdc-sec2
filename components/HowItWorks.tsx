import { Shield, Code, Zap } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Execute o comando",
      description: "Digite npx sec2agent no terminal do seu projeto. Sem instalação, sem configuração. Apenas rode e pronto.",
      cta: "Ver documentação",
      href: "#docs",
      icon: <Code className="w-12 h-12 text-primary-400" />
    },
    {
      number: "2", 
      title: "Varredura automática",
      description: "O agent escaneia todo seu código em segundos: bibliotecas vulneráveis, credenciais expostas, dependências inseguras e mais.",
      cta: "Como funciona",
      href: "#how",
      icon: <Shield className="w-12 h-12 text-primary-400" />
    },
    {
      number: "3",
      title: "Dashboard local com métricas",
      description: "Abre automaticamente um dashboard no localhost com todas as vulnerabilidades encontradas, exemplos de boas práticas e recomendações.",
      cta: "Ver exemplo",
      href: "#demo",
      icon: <Zap className="w-12 h-12 text-primary-400" />
    }
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
              Como Funciona
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            De código inseguro a protegido em 3 passos
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Um comando. Um scan. Um dashboard completo com todas as vulnerabilidades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-600 to-transparent" />
              )}
              
              <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-primary-600/50 transition-all duration-300">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-600/50">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <a
                  href={step.href}
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-all duration-200"
                >
                  {step.cta}
                  <svg 
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

