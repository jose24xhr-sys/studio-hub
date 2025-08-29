"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Instagram, Facebook, Linkedin, Shield } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src="/brand/LogoSH.png"
              alt="Studio Hub"
              width={200}
              height={60}
              priority
              className="h-auto w-[clamp(140px,18vw,260px)]"
              sizes="(min-width: 1024px) 260px, (min-width: 768px) 200px, 140px"
            />
          </Link>

          {/* Nav links (anclas a la landing) */}
          <div className="hidden gap-6 md:flex">
            <Link href="/#Diseño Web" className="text-sm text-neutral-300 hover:text-white">Diseño Web</Link>
            <Link href="/#Proceso" className="text-sm text-neutral-300 hover:text-white">Proceso</Link>
            <Link href="/#Costos" className="text-sm text-neutral-300 hover:text-white">Costos</Link>
            <Link href="/#Preguntas" className="text-sm text-neutral-300 hover:text-white">Preguntas</Link>
          </div>

          {/* Redes */}
          <div className="hidden md:flex items-center gap-4 text-neutral-400">
            <a href="https://www.instagram.com/studio_hub_mx" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579311735007" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/studiohub" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </header>

      {/* HERO / INTRO */}
      <section className="bg-neutral-900/60 py-14 text-center px-4">
  <h1 className="text-4xl font-bold mb-4">Conozcamos tu historia</h1>
  <p className="text-lg text-neutral-300 max-w-xl mx-auto">
    En esta reunión recabaremos información de tu negocio, lo que quieres transmitir a tus clientes y cómo plasmarlo en tu imagen digital.
    <br /><br />¿Listo para dar el siguiente salto digital?
  </p>

  {/* CTA WhatsApp */}
  <div className="mt-8 flex justify-center">
    <a
      href="https://wa.me/524425414306?text=Hola,+prefiero+contactar+vía+WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-neutral-900 transition-all duration-300 ease-in-out"
    >
      Prefiero contactar vía WhatsApp
    </a>
  </div>
</section>


      <section className="bg-neutral-900/50 px-4">
  <div className="max-w-5xl mx-auto">
    <iframe
      title="Formulario de contacto"
      src="https://form.jotform.com/252405390586056?nojump"
      style={{ width: "100%", height: "1200px", border: "0", overflow: "hidden" }}
      scrolling="no"
      allowTransparency
    />
  </div>
</section>



      {/* FOOTER */}
      <footer className="border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="inline-flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold">Hecho con cariño en México</span>
              </div>
              <p className="mt-2 text-sm text-neutral-500">
                © {new Date().getFullYear()} Studio Hub. Todos los derechos reservados.
              </p>
            </div>

            {/* Contacto directo */}
            <div className="flex gap-4 text-sm text-neutral-400">
<a
  className="hover:text-white"
  href="https://wa.me/524425414306?text=Hola,+quiero+saber+más+de+Studio+Hub"
  target="_blank"
  rel="noopener noreferrer"
>
  WhatsApp: +52 442 5414 306
</a>
              <a className="hover:text-white" href="mailto:contacto@studiohub.com.mx">Email: contacto@studiohub.com.mx</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
