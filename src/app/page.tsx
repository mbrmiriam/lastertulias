'use client';
import { Brain, MapPin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useStripeCheckout } from '@/lib/hooks/useStripeCheckout';

export default function Page() {
  const { handleCheckout } = useStripeCheckout();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-6 text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-tertulias.jpg"
            alt="Las Tertulias - Evento anterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-5xl">
          <h1 className="mb-3 text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
            Las Tertulias
          </h1>
          <h2 className="mb-4 text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl text-gray-200">
            Eventos Para Mentes Despiertas
          </h2>
          <p className="mb-16 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Únete a nosotros para una tarde de debate, networking y buena comida
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 text-base sm:text-lg font-medium px-8 py-3 h-auto"
            asChild
          >
            <Link href="#entradas">Comprar Entradas</Link>
          </Button>
        </div>
      </header>

      {/* Tickets Section */}
      <section id="entradas" className="bg-neutral-900 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mb-8 sm:mb-12 text-center text-3xl sm:text-4xl font-bold">Entradas</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <Card className="bg-neutral-800 text-white border-0">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Tertuliano sin hambre</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl sm:text-4xl font-bold mb-2">10€</div>
                <p className="text-sm sm:text-base text-gray-400">
                  Acceso al evento sin cena incluida
                  <br />+ 2 consumiciones
                </p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleCheckout('price_1Qb0WeCthrJRGjITLJ2Y76sc')} className="w-full">
                  Seleccionar
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-neutral-800 text-white border-0">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Tertuliano con hambre</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl sm:text-4xl font-bold mb-2">15€</div>
                <p className="text-sm sm:text-base text-gray-400">
                  Acceso al evento + hamburguesa, nachos y brownie
                  <br />+ 2 consumiciones
                </p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleCheckout('price_1Qb0VtCthrJRGjITD5gxZYZq')} className="w-full">
                  Seleccionar
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="bg-black py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mb-8 sm:mb-12 text-center text-3xl sm:text-4xl font-bold">Agenda</h2>
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="rounded-lg bg-[#1c1c1c] p-6">
              <div className="mb-2 text-sm text-gray-400">19:00 - 19:30</div>
              <h3 className="mb-2 text-xl font-semibold">¡Bienvenida!</h3>
              <p className="text-gray-300">
                Mientras va llegando todos los asistentes, puedes ir tomándote tus consumiciones y comiendo unas patatitas.
              </p>
            </div>
            
            <div className="rounded-lg bg-[#1c1c1c] p-6">
              <div className="mb-2 text-sm text-gray-400">19:30 - 20:00</div>
              <h3 className="mb-2 text-xl font-semibold">Presentación del tema de la tertulia</h3>
              <p className="text-gray-300">
                Las 3 tertulianas jefas nos contarán de qué debatiremos hoy y abrirán el debate.
              </p>
            </div>
            
            <div className="rounded-lg bg-[#1c1c1c] p-6">
              <div className="mb-2 text-sm text-gray-400">20:00 - 21:00</div>
              <h3 className="mb-2 text-xl font-semibold">Debate</h3>
              <p className="text-gray-300">
                Si te apetece, puedes coger el micro y dar tu opinión sobre los temas comentados. Las tertulianas jefas dinamizarán el debate con preguntas o otras actividades.
              </p>
            </div>
            
            <div className="rounded-lg bg-[#1c1c1c] p-6">
              <div className="mb-2 text-sm text-gray-400">21:00 - 22:30</div>
              <h3 className="mb-2 text-xl font-semibold">¡Picoteo & networking!</h3>
              <p className="text-gray-300">
                Picarás unas hamburguesitas con patatas, mientras hacemos la comentada de la sesión y conocemos al resto de tertulianos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-neutral-900 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mb-8 sm:mb-12 text-center text-3xl sm:text-4xl font-bold">Ubicación</h2>
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl sm:text-3xl font-medium mb-2">La Carnaza - Cueto</h3>
            <p className="text-gray-400 mb-6">
              Calle Jorge Sepúlveda, 39012 Santander, Spain
            </p>
            <Button
              className="bg-white text-black hover:bg-gray-200 text-base font-medium px-8 py-3 h-auto"
              asChild
            >
              <Link 
                href="https://www.google.com/maps/search/?api=1&query=La+Carnaza+Cueto+Calle+Jorge+Sepúlveda+39012+Santander+Spain" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver en Google Maps
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mb-8 sm:mb-12 text-center text-3xl sm:text-4xl font-bold">
            Preguntas frecuentes
          </h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-0">
                <AccordionTrigger className="bg-[#1c1c1c] rounded-lg px-6 py-4 text-left hover:no-underline hover:bg-[#252525]">
                  Si no quiero hablar en público, ¿voy a tener que hacerlo?
                </AccordionTrigger>
                <AccordionContent className="bg-[#1c1c1c] mt-[2px] px-6 py-4 text-gray-300">
                  No, al inicio del evento repartiremos una chapa roja si no quieres ser preguntado por las tertulianas, y una chapa verde, si por el contrario, no te importa hablar en público.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-0">
                <AccordionTrigger className="bg-[#1c1c1c] rounded-lg px-6 py-4 text-left hover:no-underline hover:bg-[#252525]">
                  Soy celiaca, ¿tenéis menú sin gluten?
                </AccordionTrigger>
                <AccordionContent className="bg-[#1c1c1c] mt-[2px] px-6 py-4 text-gray-300">
                  Sí, avísanos por instagram y no te dejaremos sin cenar!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-neutral-900 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mb-8 sm:mb-12 text-center text-3xl sm:text-4xl font-bold">
            Descubre Las Tertulias
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/RsneWdskzis"
                title="Primer tertulia en Santander Cantabria"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="mt-6 text-center text-gray-400 text-base sm:text-lg">
              Mira este video para tener una idea de cómo son nuestros eventos y lo que puedes esperar
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center text-gray-400">
          <Brain className="mx-auto mb-3 sm:mb-4 h-6 w-6 sm:h-8 sm:w-8" />
          <p className="text-sm sm:text-base">© 2024 Las Tertulias. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
