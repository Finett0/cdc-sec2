export default function Hero() {
  return (
    <section className="pt-48 pb-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* NEW Badge */}
        <div className="mb-8 inline-flex items-center">
          <a
            href="#features"
            className="group inline-flex items-center gap-3 bg-gray-900/80 backdrop-blur-sm border border-gray-800 hover:border-primary-600/50 rounded-full px-6 py-3 transition-all duration-300"
          >
            <span className="bg-primary-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              NEW
            </span>
            <span className="text-gray-300 text-sm font-medium">
              Dashboard local de métricas agora disponível
            </span>
            <svg 
              className="w-4 h-4 text-gray-400 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Seu MVP está no ar.
          <br />
          Mas está
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600"> seguro?</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
          Escaneie vulnerabilidades, detecte credenciais expostas e identifique bibliotecas inseguras.
          <br className="hidden sm:block" />
          Tudo com um único comando via CLI.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#demo"
            className="bg-primary-600 hover:bg-primary-700 px-10 py-5 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-600/50 inline-flex items-center font-mono"
          >
            npx sec2agent
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a
            href="#how"
            className="border border-gray-700 hover:border-primary-600 hover:bg-gray-900/50 px-10 py-5 rounded-full text-white font-semibold text-lg transition-all duration-300 inline-flex items-center"
          >
            Ver como funciona
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Scan em 1 minuto</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Sem setup complexo</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Suporte do founder</span>
          </div>
        </div>
      </div>
    </section>
  )
}
