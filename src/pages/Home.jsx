import { Helmet } from "react-helmet-async";
import { ParallaxProvider } from "react-scroll-parallax";
import AboutSection from "../sections/AboutSection";
import BlogSection from "../sections/BlogSection";
import ContactSection from "../sections/ContactSection";
import HeroSection from "../sections/HeroSection";
import ProjectSection from "../sections/ProjectSection";
import RecordSection from "../sections/RecordSection";
import ServiceSection from "../sections/ServiceSection";
import ExperienceSection from "../sections/ExperienceSection";

const Home = () => {
  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        {/* Basic SEO */}
        <title>Yokesh Kumar T R | Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Yokesh Kumar T R, a Full Stack Developer specializing in React, Next.js 15, TypeScript, and Node.js with production experience."
        />
        <meta
          name="keywords"
          content="Yokesh Kumar T R, Yokesh, Full Stack Developer, React Developer, Next.js Developer, TypeScript, Softnix Solutions, Unityr Techlabs"
        />
        <meta name="author" content="Yokesh Kumar T R" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yokeshkumar.dev/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Yokesh Kumar T R | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Production-experienced Full Stack Developer specializing in high-performance web applications using Next.js 15."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://yokeshkumar.dev/" />
        <meta property="og:site_name" content="Yokesh Kumar Portfolio" />

        {/* Mobile Optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Yokesh Kumar T R",
            url: "https://yokeshkumar.dev/",
            jobTitle: "Full Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Softnix Solutions",
            },
            sameAs: [
              "https://github.com/yokeshk868",
              "https://linkedin.com/in/yokesh-kumar-t-r",
            ],
          })}
        </script>
      </Helmet>

      {/* Page Content */}
      <ParallaxProvider>
        <HeroSection />
        <AboutSection />
        <RecordSection />
        <ExperienceSection />
        <ServiceSection />
        <ProjectSection />
        <BlogSection />
        <ContactSection />
      </ParallaxProvider>
    </>
  );
};

export default Home;
