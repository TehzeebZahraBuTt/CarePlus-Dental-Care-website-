import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function Services() {
  const servicesList = [
    {
      title: "General Dentistry",
      description: "Comprehensive check-ups, cleanings, and preventive care to maintain your oral health.",
      features: ["Dental Exams & X-Rays", "Professional Teeth Cleaning", "Fillings & Sealants"]
    },
    {
      title: "Cosmetic Dentistry",
      description: "Enhance the appearance of your smile with our advanced cosmetic treatments.",
      features: ["Teeth Whitening", "Porcelain Veneers", "Dental Bonding"]
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth and correct your bite for a perfect smile.",
      features: ["Traditional Braces", "Clear Aligners", "Retainers"]
    },
    {
      title: "Oral Surgery",
      description: "Expert surgical procedures performed with precision and care.",
      features: ["Tooth Extractions", "Wisdom Teeth Removal", "Dental Implants"]
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-secondary dark:text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Comprehensive dental care solutions tailored to your needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
