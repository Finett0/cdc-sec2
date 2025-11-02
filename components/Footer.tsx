import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#github", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#linkedin", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#twitter", label: "Twitter" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:contact@sec2.com", label: "Email" },
  ]

  const productLinks = [
    { name: 'Features', href: '#Features' },
    { name: 'Como funciona', href: '#how' },
    { name: 'Docs', href: '#docs' },
    { name: 'GitHub', href: '#github' },
  ]

  const companyLinks = [
    { name: 'Blog', href: '#blog' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' },
    { name: 'Suporte', href: '#support' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">sec2</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                CLI agent que escaneia vulnerabilidades, detecta credenciais expostas e identifica bibliotecas inseguras no seu MVP.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary-400" />
                <a href="mailto:contact@sec2.com" className="hover:text-white transition-colors">
                  contact@sec2.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary-400" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-primary-400 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produto</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Security Badge */}
          <div>
            <h4 className="text-white font-semibold mb-4">Conecte-se</h4>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
                  aria-label={social.label}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Security Badge */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-semibold text-sm">Seguro & Confiável</span>
              </div>
              <p className="text-gray-400 text-xs">
                Dados criptografados e conformidade SOC 2
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 sec2. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
