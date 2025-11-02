import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function ArmanMunshiPortfolio() {
  const skills = ["C","C++","Python (basics)","React","Node.js","Cloud Computing"]
  const projects = [
    { id:1, title: 'Sample Project Alpha', desc: 'A small demo app showcasing authentication and APIs.', link: '#' },
    { id:2, title: 'Sample Project Beta', desc: 'A responsive dashboard with charts and realtime features.', link: '#' },
    { id:3, title: 'Sample Project Gamma', desc: 'Cloud-deployed microservice demonstrating scaling.', link: '#' }
  ]

  // Mouse parallax values
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50,50], [15,-15])
  const rotateY = useTransform(x, [-50,50], [-15,15])

  function handleMouse(e){
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width/2
    const cy = rect.top + rect.height/2
    const px = e.clientX - cx
    const py = e.clientY - cy
    x.set(px)
    y.set(py)
  }

  function handleLeave(){ x.set(0); y.set(0) }

  return (
    <div className="min-h-screen">
      <header className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Arman Munshi</h1>
          <p className="text-xs text-gray-400">Software Engineer • Full stack developer • Cloud computing</p>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#projects" className="text-sm hover:text-white transition">Projects</a>
          <a href="#skills" className="text-sm hover:text-white transition">Skills</a>
          <a href="#contact" className="text-sm hover:text-white transition">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-green-400 font-medium mb-2">Hello — I build modern web apps</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Arman Munshi</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">Intelligent and fast learner — I build reliable, scalable systems and interactive web experiences.</p>

            <div className="mt-6 flex items-center gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500 rounded-md text-green-300 hover:bg-green-500/30 transition">View Projects</a>
              <a href="mailto:armanmunshi09@gmail.com" className="text-sm text-gray-400 underline underline-offset-2">armanmunshi09@gmail.com</a>
            </div>

            <div className="mt-8 flex gap-3 items-center">
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/arman-munshi-b27079273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white transition text-sm">LinkedIn</a>
            </div>
          </div>

          {/* Photo with 3D parallax */}
          <div className="parallax-card" ref={ref} onMouseMove={handleMouse} onMouseLeave={handleLeave}>
            <motion.div className="parallax-inner w-full h-56 md:h-72 rounded-full overflow-hidden border border-gray-800 flex items-center justify-center"
              style={{ rotateX, rotateY }}
            >
              <Image src="/images/profile.jpg" alt="Arman Munshi" width={320} height={320} className="object-cover"/>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-12 max-w-3xl">
          <h3 className="text-xl font-semibold">About Me</h3>
          <div className="mt-4 md:flex md:items-center gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-800">
              <Image src="/images/profile.jpg" alt="Arman Munshi" width={160} height={160} className="object-cover"/>
            </div>
            <div>
              <p className="text-gray-300">I am a fast learner, building modern web applications with focus on reliability and cloud deployment. I enjoy experimenting with interactive UI and animations.</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-16">
          <h3 className="text-xl font-semibold">Skills & Tech</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {skills.map((s)=> (
              <div key={s} className="px-3 py-3 bg-white/3 border border-white/6 rounded-lg flex items-center justify-center text-sm text-gray-200">{s}</div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-16">
          <h3 className="text-xl font-semibold mb-4">Featured Projects</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p)=> (
              <article key={p.id} className="p-4 rounded-xl border border-gray-800 bg-gradient-to-br from-white/2 to-white/3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{p.title}</h4>
                    <p className="text-sm text-gray-300 mt-2">{p.desc}</p>
                  </div>
                  <div className="text-sm"><a href={p.link} className="text-green-400 hover:underline">Open</a></div>
                </div>
                <div className="mt-4 flex gap-3"><div className="flex-1 bg-gray-900/40 h-28 rounded-md flex items-center justify-center text-xs text-gray-400">Preview image</div></div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16 py-10 border-t border-gray-800">
          <h3 className="text-xl font-semibold">Get in touch</h3>
          <div className="mt-4 md:flex md:items-center md:justify-between">
            <div>
              <p className="text-lg">Email</p>
              <a href="mailto:armanmunshi09@gmail.com" className="text-green-400 hover:underline">armanmunshi09@gmail.com</a>
              <div className="mt-3 text-sm text-gray-400"><p>LinkedIn: <a className="text-green-400 hover:underline" href="https://www.linkedin.com/in/arman-munshi-b27079273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Profile</a></p></div>
            </div>
            <div className="mt-6 md:mt-0"><a href="mailto:armanmunshi09@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 border border-green-500 rounded-md text-green-300 bg-green-500/10 hover:bg-green-500/20">Say hello</a></div>
          </div>
        </section>

        <footer className="mt-12 text-sm text-gray-500">© {new Date().getFullYear()} Arman Munshi — Built with ❤️ and curiosity.</footer>
      </main>
    </div>
  )
}
