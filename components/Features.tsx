import { Shield, Lock, Eye, GitBranch, AlertTriangle, CheckCircle } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      label: "CLI Agent",
      title: "Execute via npx",
      description: "Um único comando no terminal: npx sec2agent. Sem instalação, sem dependências extras, sem configuração."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      label: "Credenciais",
      title: "Detecta credenciais expostas",
      description: "Identifica API keys, tokens, senhas e secrets expostos no código antes que causem problemas."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      label: "Bibliotecas",
      title: "Scan de dependências vulneráveis",
      description: "Analisa todas as bibliotecas e dependências do seu projeto em busca de CVEs conhecidos."
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      label: "Dashboard",
      title: "Dashboard local interativo",
      description: "Abre automaticamente no localhost com métricas, gráficos e lista detalhada de todas as vulnerabilidades."
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      label: "Vulnerabilidades",
      title: "Relatório completo de riscos",
      description: "Exibe todas as vulnerabilidades encontradas com nível de severidade e recomendações de correção."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      label: "Boas Práticas",
      title: "Exemplos de código seguro",
      description: "Fornece exemplos práticos de como corrigir cada vulnerabilidade seguindo as melhores práticas."
    }
  ]

  return (
    <section id="Features" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
              Features
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Tudo que você precisa para garantir a segurança do seu MVP
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-black/40 border border-gray-800 rounded-2xl p-8 hover:border-primary-600/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary-600/10 rounded-xl mb-6 text-primary-400 group-hover:bg-primary-600/20 transition-colors">
                {feature.icon}
              </div>

              <div className="mb-3">
                <span className="text-primary-400 text-sm font-semibold uppercase tracking-wider">
                  {feature.label}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

