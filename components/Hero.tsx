export default function Hero() {
  return (
    <section className="pt-48 pb-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-12 leading-tight">
          <div>Security Solutions</div>
          <div className="text-5xl sm:text-6xl lg:text-7xl">For</div>
          <div>Your Software</div>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed">
          sec2 help founders and indie hackers it is a implementation security for yours micro-saas and saas. 
          wich one-line code is implement DevSecOps in code e consiga fazer pentest automatizados.
        </p>
        
        <div className="flex justify-center">
          <a
            href="#demo"
            className="bg-primary-600 hover:bg-primary-700 px-10 py-5 rounded-full text-white font-semibold text-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Testing Now
          </a>
        </div>
      </div>
    </section>
  )
}
