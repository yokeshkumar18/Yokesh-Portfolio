import PrimaryScroll from "../animations/PrimaryScroll";
import { experienceData } from "../utils/staticData";

const ExperienceSection = () => {
  return (
    <section id="experience" className="snap-start py-12 lg:py-16 overflow-x-hidden bg-background">
      <div className="main">
        <div className="header space-y-9 mb-16">
          <PrimaryScroll>
            <h5 className="flex items-center text-xs font-semibold gap-2 text-paragraph uppercase tracking-widest">
              Career Path
            </h5>
          </PrimaryScroll>
          <PrimaryScroll>
            <h1 className="uppercase !font-heading heading">
              Professional <span className="text-primary !font-heading">Experience</span>
            </h1>
          </PrimaryScroll>
        </div>

        <div className="space-y-12 relative before:absolute before:left-0 lg:before:left-1/2 before:top-0 before:h-full before:w-[1px] before:bg-white/10 before:-translate-x-1/2">
          {experienceData.map((item, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-10 relative ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Timeline Dot */}
              <div className="hidden lg:block absolute left-1/2 top-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2 shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] z-10" />
              
              <div className="lg:w-1/2 w-full">
                <PrimaryScroll delay={index / 10} scale={0.95}>
                  <div className="p-8 rounded-3xl bg-boxground/10 border border-white/5 hover:border-primary/20 transition-all duration-500 group">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-heading group-hover:text-primary transition-colors duration-300">
                          {item.role}
                        </h2>
                        <h3 className="text-primary font-medium tracking-wide uppercase text-sm mt-1">
                          {item.company}
                        </h3>
                      </div>
                      <span className="text-xs font-semibold text-paragraph/60 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <ul className="space-y-4">
                      {item.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-paragraph text-sm leading-relaxed flex gap-3">
                          <span className="text-primary mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </PrimaryScroll>
              </div>
              <div className="lg:w-1/2 hidden lg:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
