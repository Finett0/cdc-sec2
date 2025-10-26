import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#github", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#linkedin", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#twitter", label: "Twitter" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:contact@sec2.com", label: "Email" },
  ]

  const quickLinks = [
    { name: 'Integration', href: '#integration' },
    { name: 'Blog', href: '#blog' },
    { name: 'Docs', href: '#docs' },
    { name: 'Get Demo', href: '#demo' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Support', href: '#support' },
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
                Security solutions for your software. Implementing DevSecOps with AI-powered vulnerability scanning.
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

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
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

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
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

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
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

            {/* Newsletter Signup */}
            <div>
              <p className="text-gray-400 text-sm mb-3">Stay updated with our latest news</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:border-primary-500"
                />
                <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-r-lg text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 sec2. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
