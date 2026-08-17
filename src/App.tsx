import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  Suspense,
} from "react";
import "./styles.css";

import { Toast } from "./components/Toast";
import { Header } from "./components/Header";
import { MobileMenu } from "./components/MobileMenu";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

// Lazy load below-fold components for better initial load performance
const Experience = React.lazy(() =>
  import("./components/Experience").then((m) => ({ default: m.Experience })),
);
const Skills = React.lazy(() =>
  import("./components/Skills").then((m) => ({ default: m.Skills })),
);
const Blog = React.lazy(() =>
  import("./components/Blog").then((m) => ({ default: m.Blog })),
);
const Contact = React.lazy(() =>
  import("./components/Contact").then((m) => ({ default: m.Contact })),
);

// Fallback component for lazy loaded sections
const LazyFallback = () => (
  <div style={{ minHeight: "400px" }} aria-busy="true" />
);

export const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [toast, setToast] = useState({ visible: false, message: "" });
  const lastScrollY = useRef(0);
  const activeSectionRef = useRef(activeSection);
  const isScrolledRef = useRef(false);
  const isHeaderVisibleRef = useRef(true);

  const showToast = useCallback((msg: string) => {
    setToast({ visible: true, message: msg });
    setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 3000);
  }, []);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    isScrolledRef.current = isScrolled;
  }, [isScrolled]);

  useEffect(() => {
    isHeaderVisibleRef.current = isHeaderVisible;
  }, [isHeaderVisible]);

  useEffect(() => {
    setIsHeaderVisible(true);
    lastScrollY.current = window.scrollY;
  }, [mobileMenuOpen]);

  useEffect(() => {
    let rafId: number | null = null;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const nextScrolled = currentScrollY > 30;

      if (nextScrolled !== isScrolledRef.current) {
        isScrolledRef.current = nextScrolled;
        setIsScrolled(nextScrolled);
      }

      if (mobileMenuOpen) {
        if (!isHeaderVisibleRef.current) {
          isHeaderVisibleRef.current = true;
          setIsHeaderVisible(true);
        }
        lastScrollY.current = currentScrollY;
        rafId = null;
        return;
      }

      let nextHeaderVisible = true;
      if (currentScrollY > 10 && currentScrollY > lastScrollY.current) {
        nextHeaderVisible = false;
      }

      if (nextHeaderVisible !== isHeaderVisibleRef.current) {
        isHeaderVisibleRef.current = nextHeaderVisible;
        setIsHeaderVisible(nextHeaderVisible);
      }

      lastScrollY.current = currentScrollY;

      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      const scrollY = window.pageYOffset;
      let nextActiveSection = activeSectionRef.current;

      for (const current of sections) {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute("id");

        if (
          sectionId &&
          scrollY > sectionTop &&
          scrollY <= sectionTop + sectionHeight
        ) {
          nextActiveSection = sectionId;
          break;
        }
      }

      if (nextActiveSection !== activeSectionRef.current) {
        activeSectionRef.current = nextActiveSection;
        setActiveSection(nextActiveSection);
      }

      rafId = null;
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateScrollState);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <Toast visible={toast.visible} message={toast.message} />

      <MobileMenu
        isOpen={mobileMenuOpen}
        activeSection={activeSection}
        onClose={() => setMobileMenuOpen(false)}
      />

      <Header
        isScrolled={isScrolled}
        isVisible={isHeaderVisible}
        activeSection={activeSection}
        onOpenMenu={() => setMobileMenuOpen(true)}
      />

      <main>
        <Hero />
        <About />
        <Suspense fallback={<LazyFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LazyFallback />}>
          <Skills />
        </Suspense>
        <Projects />
        <Suspense fallback={<LazyFallback />}>
          <Blog />
        </Suspense>
        <Suspense fallback={<LazyFallback />}>
          <Contact onShowToast={showToast} />
        </Suspense>
      </main>
    </>
  );
};

export default App;
