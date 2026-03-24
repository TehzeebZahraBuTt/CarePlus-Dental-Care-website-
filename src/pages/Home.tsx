import { motion } from "framer-motion"
import { Star, ArrowRight, Calendar } from "lucide-react"
import { cn } from "../lib/utils"

export function Home() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Raza",
      role: "Patient",
      content: "The best dental experience I've ever had. The staff is incredibly professional and the clinic is spotless. Highly recommend Dr. Ali!",
      rating: 5,
    },
    {
      id: 2,
      name: "Fatima Noor",
      role: "Patient",
      content: "I was always afraid of dentists, but the team at CarePlus made me feel so comfortable. My root canal was completely painless.",
      rating: 5,
    },
    {
      id: 3,
      name: "Bilal Khan",
      role: "Patient",
      content: "Excellent service and very reasonable prices. They explained every step of the procedure clearly. Very satisfied with my new smile.",
      rating: 4,
    },
  ]

  const doctors = [
    {
      id: 1,
      name: "Dr. Ali Hassan",
      qualification: "BDS, FCPS (Orthodontics)",
      specialty: "Orthodontist",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 2,
      name: "Dr. Ayesha Tariq",
      qualification: "BDS, RDS",
      specialty: "General Dentist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 3,
      name: "Dr. Usman Saeed",
      qualification: "BDS, MDS (Oral Surgery)",
      specialty: "Oral Surgeon",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=400&q=80",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 dark:from-primary/20 dark:via-background dark:to-secondary/20 pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-secondary dark:text-white mb-6">
                CarePlus <span className="text-primary">Dental Care</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-medium">
                Healthy teeth. Confident smile.
              </p>
              <p className="text-lg text-muted-foreground mb-10 max-w-lg">
                Experience world-class dental care with our team of expert professionals. We provide comprehensive treatments in a comfortable and hygienic environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>
                <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Dentist analyzing patient's teeth"
                className="rounded-3xl shadow-2xl object-cover w-full h-auto border-4 border-white dark:border-secondary"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-border"
              >
                <div className="bg-primary/10 p-3 rounded-full">
                  <Star className="w-8 h-8 text-primary fill-primary" />
                </div>
                <div>
                  <p className="font-bold text-xl text-foreground">4.9/5</p>
                  <p className="text-sm text-muted-foreground">Patient Rating</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Services Highlight (Optional but good for flow) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">Comprehensive Dental Services</h2>
            <p className="text-lg text-muted-foreground">We offer a wide range of treatments to keep your smile healthy and beautiful.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics'].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-full border-2 border-current"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service}</h3>
                <p className="text-muted-foreground mb-6">Professional care for your dental health needs with modern equipment and techniques.</p>
                <a href="/services" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Read more <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Doctors Section */}
      <section className="py-24 bg-muted/50 dark:bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">Meet Our Doctors</h2>
            <p className="text-lg text-muted-foreground">Highly qualified and experienced professionals dedicated to your dental health.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all group"
              >
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 text-center relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                    {doctor.specialty}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mt-2 mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium mb-6">{doctor.qualification}</p>
                  <button className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 rounded-xl font-medium transition-colors">
                    Get Appointment
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">What our customers say</h2>
            <p className="text-lg text-muted-foreground">Real feedback from our valued patients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="text-primary/20 absolute top-6 right-8">
                  <svg width="45" height="36" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 0C6.04416 0 0 6.04416 0 13.5V36H18V13.5H9C9 8.52944 13.0294 4.5 18 4.5V0H13.5ZM40.5 0C33.0442 0 27 6.04416 27 13.5V36H45V13.5H36C36 8.52944 40.0294 4.5 45 4.5V0H40.5Z" />
                  </svg>
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "w-5 h-5", 
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"
                      )} 
                    />
                  ))}
                </div>
                
                <p className="text-foreground/80 text-lg italic mb-8 relative z-10">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1920/1080')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready for a Brighter Smile?</h2>
            <p className="text-xl text-primary-foreground/90 mb-10">
              Book your appointment today and take the first step towards optimal dental health.
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-1">
              Schedule an Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
