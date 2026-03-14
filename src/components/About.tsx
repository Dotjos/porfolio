export function About({ inViewRef }: { inViewRef: (node?: Element | null) => void }) {
  return (
    <section ref={inViewRef} className="about mb-15 lg:mb-0 lg:pt-20 lg:min-h-auto flex flex-col justify-center" id="ABOUT">
      <h1 id="aboutHead" className="font-semibold sticky top-0 backdrop-blur-lg px-5 py-3 lg:hidden z-10">ABOUT</h1>
      <p className="p-6 lg:p-0 dark:text-slate-400">
        I am a Frontend Engineer specializing in React, Next.js, and TypeScript, with 2+ years
        of experience building responsive, accessible, and performance-driven applications.
        My work spans from e-commerce platforms to interactive dashboards, where I focus on transforming
        complex ideas into intuitive, user-friendly interfaces.
        In my projects, I have optimized load times by up to 40%, consistently achieved 90+ Lighthouse scores, and
        contributed to improved user engagement and conversion rates through thoughtful design and clean, scalable
        code. I enjoy working in collaborative settings where ideas are shared, refined, and brought to life,
        and I am motivated by the challenge of creating products that are both visually polished and technically
        robust.
      </p>

      <a className="group flex items-center gap-1 px-6 hover:decoration-cyan-500 hover:text-cyan-500 lg:mt-10 lg:px-0 hover:underline hover:underline-offset-3"
        href="/resume/IBIWUMI JOSEPH OLADOTUN_CV.pdf" target="_blank" rel="noopener noreferrer">
        View My Resume
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"
          className="transform transition-transform duration-200 group-hover:-translate-y-1 ml-1">
          <path d="M6 2a1 1 0 0 0 0 2h4.586L3.293 11.293a1 1 0 0 0 1.414 1.414L12 5.414V10a1 1 0 0 0 2 0V2H6z" />
        </svg>
      </a>
    </section>
  );
}
