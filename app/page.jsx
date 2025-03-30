"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Mail, Calendar, Users, Shield, TreesIcon as Tree, Droplet, Menu } from "lucide-react"
import { useState, useEffect } from "react"
import ContactForm from "@/components/contact-form"

export default function HomePage() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle smooth scrolling for anchor links
  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
      // Close mobile menu if open
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header
        className={`${isScrolled ? "bg-white/95 shadow-md" : "bg-white"} border-b sticky top-0 z-10 transition-all duration-300`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Home className="h-7 w-7 text-primary animate-pulse" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Annapurna Badavane
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["About", "Amenities", "Gallery", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="text-base font-medium relative group cursor-pointer"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-4 bg-white border-t animate-in fade-in slide-in-from-top-5 duration-300">
            <nav className="flex flex-col space-y-4">
              {["About", "Amenities", "Gallery", "Testimonials", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  className="text-lg font-medium hover:text-primary transition-colors duration-200 px-2 py-1 cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

  {/* Hero Section */}
<section className="relative h-[600px] flex items-center justify-center overflow-hidden">
  {/* Sleek light blue-gray gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#f5f5f5] to-[#e1effe] z-0"></div>
  <div className="container mx-auto px-4 relative z-10 text-center">
    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 text-gray-800">
      Welcome to <span className="text-sky-500">Annapurna Badavane</span>
    </h1>
    <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200 text-gray-600">
      A peaceful and well-maintained residential community in the heart of the city
    </p>
  </div>
  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
</section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Our Community</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold mb-4 text-gray-800">Annapurna Badavane Association</h3>
              <p className="text-gray-600 leading-relaxed">
                Established in 2005, Annapurna Badavane is a premium residential community spread across 7 acres of
                lush greenery. Our association is committed to providing a safe, clean, and harmonious living
                environment for all residents.
              </p>

              <p className="text-gray-600 leading-relaxed">
                With over 90 families, our community is diverse and vibrant. We organize regular community events,
                maintain common areas, and ensure all amenities are in perfect working condition.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium">90+ Families</span>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mr-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium">Est. 2005</span>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mr-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium">24/7 Security</span>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mr-4">
                    <Tree className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium">Green Community</span>
                </div>
              </div>
            </div>
            <div className="relative h-[450px] rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image src="/images/about.jpg" alt="Annapurna Badavane Community" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Amenities</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Community Events",
                icon: Users,
                description: "Regular community gatherings and cultural events for residents",
              },
              {
                title: "Indoor Sports Complex",
                icon: Tree,
                description: "Present right infront of the colony main gate and has Swimming pool, gym, badminton court and many more facilities",
              },
              {
                title: "24/7 Security",
                icon: Shield,
                description: "Round-the-clock security personnel for resident safety",
              },
              {
                title: "Water Supply",
                icon: Droplet,
                description: "Uninterrupted water supply",
              },
              {
                title: "Green Spaces",
                icon: Tree,
                description: "Lush green surroundings and walking paths",
              },
              {
                title: "Temples",
                icon: Home,
                description: "Beautiful Ganesha and Annapurna Devi temples within the colony",
              },
            ].map((amenity, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-white overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                      <amenity.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {amenity.title}
                    </h3>
                    <p className="text-gray-600">{amenity.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Gallery</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="relative h-56 md:h-72 rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
                  <div className="p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-medium">Community View {index + 1}</h3>
                  </div>
                </div>
                <Image
                  src={`/images/gallery-${index + 1}.jpg`}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Residents Say</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Padma and GY Niranjan",
                role: "Resident since 2005",
                quote:
                  "Living in Annapurna Badavane has been a wonderful experience for my family. The community is very supportive and the amenities are well-maintained.",
              },
              {
                name: "Vidya and Ramesh K",
                role: "Resident since 2005",
                quote:
                  "I love the peaceful environment and the regular community events. The temples within the colony add a spiritual touch to our daily lives.",
              },
              {
                name: "Rupa and B V Achar",
                role: "Resident since 2005",
                quote:
                   "Safety in this colony is excellent. We love Annapurna Badavane. I Highly recommend this community.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mr-4">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Address</h4>
                    <p className="text-gray-600 mt-1">Annapurna Badavane, Near VNC ground, Hospet - 583201</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-gray-600 mt-1">annapurnabadavane@gmail.com</p>
                  
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image src="/images/map.png" alt="Location Map" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary/20 rounded-full">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  Annapurna Badavane
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                A peaceful and well-maintained residential community committed to providing the best living experience
                for all our residents.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {["About", "Amenities", "Gallery", "Testimonials", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => scrollToSection(e, item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group cursor-pointer"
                    >
                      <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Office Hours</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Monday - Friday: 9:00 AM - 6:00 PM
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Saturday: 9:00 AM - 1:00 PM
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Sunday: Closed
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Made with ❤️ by Shravya N</p>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 25s alternate infinite ease-in-out;
        }
        .animate-in {
          animation-duration: 1s;
          animation-timing-function: ease-out;
          animation-fill-mode: both;
        }
        .fade-in {
          animation-name: fadeIn;
        }
        .slide-in-from-bottom-5 {
          animation-name: slideInFromBottom;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInFromBottom {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

