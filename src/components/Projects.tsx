'use client';

import { motion } from 'framer-motion';

const Products = [
  {
    imgSource: "/img/Audiophile.png", // Next.js serves from public root
    projectTitle: "E-COMMERCE APP",
    projectText:
      "I built the Audiophile e-commerce site to deliver a premium shopping experience that reflects the sophistication of high-end audio products. The result is a platform that not only sells audio gear but also conveys the lifestyle and prestige of exceptional sound.",
    liveLink: "https://audiophile-conv.vercel.app/",
    gitHubRepo: "https://github.com/Dotjos/audiophile",
    techStack: ["Typescript", "Next.js", "Tailwind CSS"],
  },
  {
    imgSource: "/img/zentry.png",
    projectTitle: "ZENTRY LANDING PAGE REMAKE",
    projectText:
      "I built a complete remake of the Zentry gaming platform landing page using Next.js and TypeScript, recreating their vision of a Metagame Layer that unifies gaming experiences across multiple platforms with modern animation and responsive design.",
    liveLink: "https://zenkit-gamma.vercel.app/",
    gitHubRepo: "https://github.com/Dotjos/zenkit",
    techStack: ["Typescript", "Next.js", "Tailwind CSS", "GSAP"],
  }
];

export function Projects({ inViewRef }: { inViewRef: (node?: Element | null) => void }) {
  return (
    <section ref={inViewRef} className="project p-6 lg:py-20 flex flex-col gap-8 lg:min-h-screen" id="PROJECTS">
      <h1 id="projectHead" className="font-semibold sticky top-0 backdrop-blur-lg px-6 py-3 lg:hidden z-10 -mx-6 mb-4">PROJECTS</h1>

      {Products.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="my-3 flex gap-7 flex-col md:flex-row md:gap-5 w-full lg:my-0 group"
        >
          <div className="h-30 lg:h-20 w-50 md:w-1/3 border-2 overflow-hidden rounded-md border-gray-100 transition-all duration-300 group-hover:border-gray-300 group-hover:shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.imgSource} loading="lazy" className="w-full h-full object-cover" alt={project.projectTitle} />
          </div>

          <div className="w-fit">
            <div><h1 className="font-semibold text-lg">{project.projectTitle}</h1></div>
            <div className="text-sm my-2 dark:text-slate-400 lg:my-1 text-justify">
              <p>{project.projectText}</p>
            </div>

            <div className="mt-2 space-y-1">
              <div>
                <h1 className="text-sm">
                  <span className="font-medium mr-1">Live URL:</span>
                  <a className="text-blue-600 hover:text-purple-400 italic" href={project.liveLink} target="_blank" rel="noopener noreferrer">liveURL.com</a>
                </h1>
              </div>
              <div>
                <h1 className="text-sm">
                  <span className="font-medium mr-1">GitHub repo:</span>
                  <a className="text-blue-600 hover:text-purple-400 italic" href={project.gitHubRepo} target="_blank" rel="noopener noreferrer">Github.com</a>
                </h1>
              </div>
              <div>
                <h1 className="text-sm flex flex-wrap gap-2 mt-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                      {tech}
                    </span>
                  ))}
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
