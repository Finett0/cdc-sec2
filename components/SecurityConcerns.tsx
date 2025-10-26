export default function SecurityConcerns() {
  const concerns = [
    "Uso indevido de bibliotecas e dependências vulneráveis",
    "Dependência cega e falsa sensação de segurança", 
    "Geração de código com credenciais expostas"
  ]

  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
              Garanta que seu software está sendo desenvolvido com segurança
            </h2>
          </div>

          {/* Right Column - Concerns List */}
          <div>
            <ul className="space-y-8">
              {concerns.map((concern, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-6 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white text-xl leading-relaxed">
                    {concern}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
