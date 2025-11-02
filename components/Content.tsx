export default function Content() {
  const articles = [
    {
      title: "Por que seu MVP precisa de um scan de segurança",
      description: "Todo mundo está desenvolvendo com IA, mas poucos se preocupam com segurança. Credenciais expostas, bibliotecas vulneráveis... descubra como proteger seu MVP.",
      cta: "Ler artigo completo →",
      href: "#blog"
    }
  ]

  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
          Confira nossos conteúdos
        </h2>
        
        <div className="grid gap-8">
          {articles.map((article, index) => (
            <div 
              key={index}
              className="card-hover bg-gray-900/50 border border-gray-700 rounded-xl p-8 group"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {article.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                {article.description}
              </p>
              
              <a
                href={article.href}
                className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium group-hover:translate-x-1 transition-all duration-200 text-lg"
              >
                {article.cta}
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
