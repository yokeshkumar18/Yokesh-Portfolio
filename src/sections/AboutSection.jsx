import { aboutData } from "../utils/staticData";
import PrimaryScroll from "../animations/PrimaryScroll";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="snap-start pt-12 pb-1 lg:pt-16 lg:pb-12 overflow-x-hidden bg-background"
    >
      <div className="main">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 space-y-12">
            <PrimaryScroll>
              <h5 className="text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-4">
                {aboutData.pageHeader}
              </h5>
              <h1 className="!font-heading text-heading heading uppercase leading-none">
                {aboutData.heading.split(' ').slice(0, 3).join(' ')} <br />
                <span className="text-primary !font-heading">
                  {aboutData.heading.split(' ').slice(3).join(' ')}
                </span>
              </h1>
            </PrimaryScroll>

            <div className="space-y-6">
              <PrimaryScroll className="border-l-[4px] border-primary pl-6">
                <p className="text-paragraph leading-relaxed text-lg">
                  {aboutData.abstract[0]}
                </p>
              </PrimaryScroll>
              <PrimaryScroll delay={0.1}>
                <p className="text-paragraph/80 leading-relaxed">
                  {aboutData.abstract[1]}
                </p>
              </PrimaryScroll>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(aboutData.skillData.technologies).map(([category, skills], index) => (
                <PrimaryScroll key={category} delay={index * 0.1}>
                  <div className="group p-6 rounded-2xl bg-boxground/5 border border-white/5 hover:border-primary/20 transition-all duration-300">
                    <h3 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
                      {category}
                    </h3>
                    <p className="text-paragraph text-sm leading-loose">
                      {skills}
                    </p>
                  </div>
                </PrimaryScroll>
              ))}
            </div>

            <PrimaryScroll delay={0.4} className="p-8 rounded-3xl bg-primary/10 border border-primary/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
              <h4 className="text-heading font-bold text-xl mb-2 relative z-10">{aboutData.profileData.heading}</h4>
              <p className="text-paragraph/90 text-sm relative z-10">{aboutData.profileData.paragraph}</p>
            </PrimaryScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

