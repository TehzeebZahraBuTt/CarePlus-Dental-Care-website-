import { motion } from "framer-motion"

export function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white mb-6">About CarePlus</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Dedicated to providing exceptional dental care with a gentle touch.
          </p>
          
          <div className="prose prose-lg dark:prose-invert mx-auto text-left">
            <p>
              At CarePlus Dental Care, we believe that a healthy smile is the foundation of overall well-being. 
              Established with a vision to revolutionize dental healthcare, our clinic combines state-of-the-art 
              technology with compassionate care.
            </p>
            <p>
              Our team of highly qualified and experienced dental professionals is committed to delivering 
              personalized treatment plans tailored to each patient's unique needs. From routine check-ups to 
              complex oral surgeries, we ensure a comfortable and pain-free experience.
            </p>
            <h3>Our Mission</h3>
            <p>
              To provide accessible, high-quality dental care in a welcoming environment, empowering our patients 
              to achieve and maintain optimal oral health for a lifetime.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
