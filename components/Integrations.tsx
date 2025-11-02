export default function Integrations() {
  const integrationCategories = [
    {
      title: "CI/CD Platforms",
      description: "Integração nativa com as principais plataformas de CI/CD",
      integrations: [
        "GitHub Actions",
        "GitLab CI", 
        "CircleCI",
        "Jenkins",
        "Azure DevOps",
        "Bitbucket Pipelines"
      ]
    },
    {
      title: "Comunicação",
      description: "Receba alertas onde sua equipe já trabalha",
      integrations: [
        "Slack",
        "Discord",
        "Microsoft Teams",
        "Email",
        "PagerDuty"
      ]
    },
    {
      title: "Gerenciamento",
      description: "Conecte com suas ferramentas de gestão de projetos",
      integrations: [
        "Jira",
        "Linear",
        "Asana",
        "Notion",
        "ClickUp"
      ]
    }
  ]

  return (
    <section id="Integrations" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
              Integrações
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Conecte com suas ferramentas favoritas
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            sec2 se integra perfeitamente com as ferramentas que você já usa no dia a dia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {integrationCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-primary-600/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {category.title}
              </h3>
              
              <p className="text-gray-400 mb-6">
                {category.description}
              </p>

              <div className="space-y-3">
                {category.integrations.map((integration, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <svg 
                      className="w-5 h-5 mr-3 text-primary-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span>{integration}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

