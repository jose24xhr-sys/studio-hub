"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Check, Stars, Rocket, Globe, Shield } from "lucide-react";
import Image from "next/image";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";


// Studio Hub Landing Page – single-file React component
// TailwindCSS utility classes; minimal dependencies
// Replace copy with your own brand voice.

  const features = [
    {
      title: "Visibilidad Online",
      desc: "Haz que tu negocio aparezca en Google cuando tus clientes te busquen",
      icon: <Rocket className="h-6 w-6" aria-hidden />,
    },
    {
      title: "Confianza Digital",
      desc: "Proyecta seriedad y credibilidad con una web profesional",
      icon: <Rocket className="h-6 w-6" aria-hidden />,
    },
    {
      title: "De Visitas a Clientes",
      desc: "Convierte a tus visitantes en clientes reales con una web optimizada",
      icon: <Globe className="h-6 w-6" aria-hidden />,
    },
    {
      title: "Imagen Profesional",
      desc: "Cuidamos de tu imagen digital, como tu cuidas de tus clientes",
      icon: <Globe className="h-6 w-6" aria-hidden />,
    },
    ];
  
  const plans = [
    {
      name: "Lanzamiento",
      price: "$2,500",
      tagline: "Ideal para Negocios Nuevos",
      bullets: ["Dominio propio desde el primer día", "Landing de 1–3 secciones","Visibilidad en Google","Métricas para seguir tu crecimiento"],
      cta: "Empezar",
      popular: false,
    },
    {
      name: "Escala",
      price: "$3,500",
      tagline: "Negocios en Crecimiento",
      bullets: ["Dominio incluido, sin compromisos", "Sitio de 3–6 páginas", "Visibilidad en Google","Automatizaciones simples"],
      cta: "Agendar una Reunión",
      popular: true,
    },
    {
      name: "Comercio Digital",
      price: "7,000",
      tagline: "Tienda Online o Marketplace",
      bullets: ["Web a medida", "Pagos en línea integrados","Gestión de Usuarios & pedidos","Integraciones avanzadas"],
      cta: "Agenda una demo",
      popular: false,
    },
  ];

 const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

    export default function StudioHubLanding() {


  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
         <a href="#" className="inline-flex items-center gap-2">
            <Image src="/brand/LogoSH.png" alt="Studio Hub"
              width={200}   // ancho base (Next genera responsive srcset)
              height={60}   // alto base
              priority
              className="h-auto w-[clamp(140px,18vw,260px)]"
              sizes="(min-width: 1024px) 260px, (min-width: 768px) 200px, 140px"
          />
         </a>
          <div className="hidden gap-6 md:flex">
            <a href="#Proceso" className="text-sm text-neutral-300 hover:text-white">Proceso</a>
            <a href="#Costos" className="text-sm text-neutral-300 hover:text-white">Costos</a>
            <a href="#Preguntas" className="text-sm text-neutral-300 hover:text-white">Preguntas</a>
            <Link href="/contacto" className="text-sm text-neutral-300 hover:text-white">Contácto</Link>
          </div>
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
          <div>
          <Link href="/contacto" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-neutral-900 font-semibold hover:opacity-90">
            Agendar una Reunión<ArrowRight className="h-4 w-4" />
          </Link>
          </div>
          </div>
        </nav>
      </header>

      {/* HERO */}
    <motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
>
      <section className="relative overflow-hidden
                      h-[70vh] md:h-[68vh] lg:h-[60vh]
                      min-h-[520px] max-h-[800px]">
    <Image
      src="/brand/website.jpg"
      alt="Fondo Studio Hub"
      fill
      priority
      className="object-cover object-[50%_30%] md:object-center brightness-20"
    />
    <div className="absolute inset-0 bg-black/55 z-0" />

    
  {/* Contenido */}
  <div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-30">
    <div className="grid grid-cols-12 gap-8">
      {/* TEXTO = 2/3 */}
      <div className="col-span-12 md:col-span-8">
        <p className="mt-4 max-w-xl text-lg text-neutral-300" style={{ color: "#b38c23ff" }}>

              TU ALIADO CREATIVO / DISEÑO WEB
            </p>
<h1 className="text-left text-4xl md:text-5xl lg:max-w-4xl pr-2 font-extrabold leading-tight tracking-tight text-neutral-100">
             CONFIANZA Y SERIEDAD<br/>
          PROYECTADAS EN <span className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent"><br/>TU IMAGEN DIGITAL</span>
        </h1>
            <p className="mt-4 max-w-xl text-xl leading-relaxed pr-2  max-w-3xl" style={{color: "#817c7cff", fontWeight: 600}}>
               Tu sitio web no solo será tu carta de presentación< br /> Será la herramienta que impulse confianza a tus clientes y crecimiento en tu canal online
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
  {/* CTA 1: Agendar reunión */}
  <Link
    href="/contacto"
    className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-neutral-900 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-white"
  >
    Agendar una Reunión <Stars className="h-4 w-4" />
  </Link>

  {/* CTA 2: WhatsApp (o el que elijas) */}
  <a
    href="https://wa.me/524425414306?text=Hola,+quiero+saber+más+de+Studio+Hub"
    target="_blank"
    rel="noopener noreferrer"
className="inline-flex items-center justify-center gap-2 rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-neutral-900 transition-all duration-300 ease-in-out"
  >
    Hablar por WhatsApp
  </a>
</div>

          </div>
               <div className="relative col-span-12 md:col-span-4 hidden sm:flex justify-end items-end">
        <Image
          src="/brand/PixelitoMiguelito.png"
          alt="Vista previa Studio Hub"
          width={600}
          height={400}
          priority
          className="h-auto object-contain
                     w-[clamp(180px,22vw,360px)]  /* autosize: min 180px, máx 360px, ideal 22vw */
                     drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
        />
                </div>
            </div>
            </div>
      </section>
</motion.section>

      {/* FEATURES */}
      <motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
>
      <section id="Diseño Web" className="mt-10 mx-auto max-w-7xl px-4 pb-10 scroll-mt-24">
        <div className="mx-auto text-center w-full">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold w-full px-4 sm:px-6 md:px-8">Nuestro enfoque para tu lanzamiento digital</h2>
          <p className="mt-8 text-neutral-300">Cuidamos el detalle para que tu web tenga un diseño profesional, genere confianza, credibilidad y crecimiento para tu negocio <br/> Porque una web no solo se crea, se lanza para impulsar tu negocio </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-neutral-900 bg-neutral-900/50 p-6 hover:border-neutral-700">
              <div className="mb-4 inline-flex rounded-xl bg-neutral-800 p-3 text-emerald-300">{f.icon}</div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      </motion.section>
      

      {/* GARANTÍA */}
      <motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
>
<section className="mx-auto max-w-7xl px-4 ">
  <div className="mt-8 rounded-2xl border border-emerald-600/70 bg-neutral-900/70 p-6 md:p-8 text-center shadow-lg hover:border-neutral-700">
    <h3 className="text-xl font-bold text-emerald-400">Nuestra Garantía</h3>
    <p className="mt-2 text-neutral-200">
      Paga hasta que tu sitio web esté completamente diseñado, listo y funcionando como lo necesitas.
      Tu inversión está protegida; verás resultados antes de pagar.
    </p>
  </div>
</section>
</motion.section>


      {/* PROCESO */}
      <motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
>
      <section id="Proceso" className="bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Proceso simple, resultados claros</h2>
            <p className="mt-7 text-neutral-300">Del primer contacto al lanzamiento para tu web, lista en 7 días</p>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { step: "01", title: "Conozcamos tu historia", desc: "En una reunión descubrimos tu misión, lo que quieres transmitir a tus clientes y cómo plasmarlo en tu imagen digital" },
              { step: "02", title: "Aprueba tu Diseño", desc: "Te presentamos la propuesta visual y de contenido para que valides el estilo y la estructura antes de avanzar" },
              { step: "03", title: "Desarrollo & lanzamiento", desc: "Publicamos tu sitio en tu hosting y dominio propio desde el primer día, listo para inspirar confianza y atraer clientes" },
            ].map((s) => (
              <li key={s.step} className="rounded-2xl border border-neutral-900 bg-neutral-900/50 p-6 hover:border-neutral-700">
                <div className="text-sm text-neutral-500">{s.step}</div>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{s.desc}</p>
              </li>
            ))}

            <div className="md:col-span-3 flex justify-center mt-4">
     <Link href="/contacto" className="rounded-lg bg-emerald-500 px-6 py-3 text-white font-semibold border border-emerald-500 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-white">
  Agenda tu Reunión Inicial
</Link>

    </div>
          </ol>
        </div>
      </section>

      </motion.section>


      {/* COSTOS */}
      <motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
>
      <section id="Costos" className="mx-auto max-w-7xl px-4 scroll-mt-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Opciones para cada etapa de tu negocio</h2>
          <p className="mt-3 text-neutral-300">Cada proyecto es único y cambia con el tiempo; por eso tu web necesita adaptarse <br /> Contamos con planes que responden a cada nivel de desarrollo</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl border hover:border-neutral-700 ${p.popular ? "border-emerald-400" : "border-neutral-900"} bg-neutral-900/60 p-6`}>
              {p.popular && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-neutral-900">Más elegido</div>
              )}
              <h3 className="text-xl font-semibold ">{p.name}</h3>
              <p className="mt-1 text-sm text-neutral-400">{p.tagline}</p>
              <div className="mt-4 text-3xl font-bold">{p.price}<span className="text-base text-neutral-400">/Pago Único</span></div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-400 " /> <span>{b}</span></li>
                ))}
              </ul>
<Link
  href="/contacto"
  className={`mt-6 w-full block text-center rounded-xl px-4 py-2 font-semibold transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:border-red ${
    p.popular ? "bg-emerald-400 text-neutral-900" : "bg-white text-neutral-900"
  }`}
>
  {p.cta}
</Link>            </div>
          ))}
        </div>
      </section>
      </motion.section>



{/* INCLUIDO EN TODOS LOS PLANES */}

<motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
>
<section className="mx-auto max-w-7xl px-4 mt-10">
  <div className="rounded-2xl border border-emerald-600/70 bg-neutral-900/70 p-6 md:p-8 text-center shadow-lg hover:border-neutral-700">
    <h3 className="text-xl font-bold text-emerald-400">Incluido en todos los planes</h3>
    <p className="mt-2 text-neutral-200">
      Transparencia total: tu web siempre es tuya. Estos beneficios vienen de base con cualquier plan.
    </p>

    <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-left">
      {/* Item */}
      <li className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
          {/* Check icon */}
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-400"><path fill="currentColor" d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </span>
        <span className="text-neutral-200">
          <strong>Dominio y código 100% tuyos</strong><br/> Tu web te pertenece desde el primer día
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-400"><path fill="currentColor" d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </span>
        <span className="text-neutral-200">
          <strong>5 actualizaciones (1er año)</strong><br/>Diseño, secciones o productos durante el año
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-400"><path fill="currentColor" d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </span>
        <span className="text-neutral-200">
          <strong>Mantenimiento opcional</strong> <br/>Desde el 2º año: $300 MXN/mes, solo si necesitas cambios
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-400"><path fill="currentColor" d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </span>
        <span className="text-neutral-200">
          <strong>Soporte Técnico</strong><br/>Tu web siempre estable y funcionando
        </span>
      </li>
    </ul>
  </div>
</section>
</motion.section>



      {/* PREGUNTAS */}
      <motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
>
     <section id="Preguntas" className="bg-neutral-950/60">
  <div className="mx-auto max-w-7xl px-4 py-20">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold md:text-4xl">Preguntas frecuentes</h2>
      <p className="mt-3 text-neutral-300">Transparencia total antes de empezar.</p>
    </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              { q: "¿Cuánto tardan?", a: ( <><p>Depende del Plan: Un Lanzamiento o Escala nos toma 7 días en ser realizado<br/><br/>Comercio Digital de 2–3 semanas, dependiendo de las correcciones y los requisitos de tu negocio<br/> Nos importa cuidar cada detalle para que tus clientes sepan lo que haces y naveguen facilmente en tu Sitio Web</p></>)},
              { q: "¿Se paga cada Mes?", a: ( <><p>El Lanzamiento Inicial es un Pago Único<br/><br/>A partir del 2do año en caso de requerir actualizaciones y mantenimiento el costo es desde $300MXN al mes<br/><br/>El mantenimiento esta pensado en las actualizaciones que tu sitio Web necesite y los cambios que tu negocio vaya adaptando</p></>)},
              { q: "¿Usan plantillas?", a: ( <><p>No,<br/><br/>Hacemos el Diseño Grafico desde cero, inspirandonos en tu visión e imagen visual de tu negocio. Es por ello que el código se te entrega al finalizar la compra para que tengas control de tu marca</p></>) },
              { q: "¿Cómo se visualiza mi página?", a: ( <> <p>Publicamos en tu hosting y dominio propios, con HTTPS y versión móvil. Te damos accesos y una guía corta.<br/><br/>Configuramos títulos, descripciones y sitemap para que Google indexe tu sitio y todo se integra desde tu cuenta de Google Search Console para visualizar tu sitio en el Navegador</p></>)},
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-neutral-900 bg-neutral-900/50 p-6 hover:border-neutral-700">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm text-neutral-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </motion.section>

      {/* FOOTER */}
      <motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2}}
>
      <footer id="contacto" className="border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="inline-flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold">Hecho con cariño en México</span>
              </div>
              <p className="mt-2 text-sm text-neutral-500">© {new Date().getFullYear()} Studio Hub. Todos los derechos reservados.</p>
            </div>
            {/* Redes sociales en footer */}
            
            <div className="flex gap-4 text-sm text-neutral-400">
<a
  className="hover:text-white"
  href="https://wa.me/524425414306?text=Hola,+quiero+saber+más+de+Studio+Hub"
  target="_blank"
  rel="noopener noreferrer"
>
  WhatsApp: +52 442 5414 306
</a>
              <a className="hover:text-white" href="#">Email: contacto@studiohub.com.mx</a>
            </div>
             </div>
        </div>
      </footer>
      </motion.section>
    </div>
  )}
