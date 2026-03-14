'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Sidebar } from '@/components/Sidebar';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import CursorRing from '@/components/CursorRing';
import { GlobalScrollHandler } from '@/components/GlobalScrollHandler';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('ABOUT');

  // Set up intersection observers to track which section is currently on screen
  // We use react-intersection-observer (or can just use simple state) to map the active state to the sidebar
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.3,
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.3,
  });

  // Effect to update the sidebar's active link state
  useEffect(() => {
    if (aboutInView) {
      setActiveSection('ABOUT');
    } else if (projectsInView) {
      setActiveSection('PROJECTS');
    }
  }, [aboutInView, projectsInView]);

  return (
    <>
      <GlobalScrollHandler />
      <CursorRing />
      <main className="lg:h-screen lg:flex-row lg:gap-20 flex lg:pl-15 flex-col gap-18">
        <Sidebar activeSection={activeSection} />
        <div className="scrollable lg:w-3/5 lg:pr-20 lg:overflow-y-auto lg:overscroll-contain">
          <About inViewRef={aboutRef} />
          <Projects inViewRef={projectsRef} />
        </div>
      </main>
    </>
  );
}
