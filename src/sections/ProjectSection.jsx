import PropTypes from 'prop-types'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import PrimaryScroll from '../animations/PrimaryScroll'
import { Link } from 'react-router-dom'
import { projects, projectData } from '../utils/staticData'

const ProjectSection = () => {

  const ProjectBox = ({ index, item }) => {
    return (
      <PrimaryScroll delay={index / 10}>
        <div
          key={index}
          className={`block ${index !== 0 ? ' mt-8' : ''} group rounded-2xl overflow-hidden relative bg-boxground/20 border border-white/5 hover:border-primary/30 transition-all duration-500`}
        >
          <div className="!z-30 flex justify-between w-11/12 items-center absolute bottom-6 left-6 right-6 duration-300 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0">
            <div className="space-y-2">
               <h3 className="text-primary font-semibold text-sm tracking-widest uppercase">{item.tech}</h3>
               <h1 className="!font-heading uppercase text-2xl lg:text-3xl text-heading">{item.title}</h1>
            </div>
            <Link to={`/project/${item.title.toLowerCase().replace(/ /g, '-')}`} className="w-16 h-16 rounded-full bg-primary text-background flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <FiArrowUpRight className="text-2xl" />
            </Link>
          </div>
          <div style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.9) 100%)' }} className="black-shade p-12 !z-10 duration-500 absolute bottom-0 left-0 w-full h-1/2 opacity-0 group-hover:opacity-100" />
          <div className="aspect-video overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 duration-700 z-0 grayscale-[0.5] group-hover:grayscale-0"
            />
          </div>
          <div className="p-6 block lg:hidden">
             <h3 className="text-primary font-semibold text-xs tracking-widest uppercase mb-1">{item.tech}</h3>
             <h1 className="!font-heading uppercase text-xl text-heading">{item.title}</h1>
          </div>
        </div>
      </PrimaryScroll>
    );
  };
  
  ProjectBox.propTypes = {
    index: PropTypes.number,
    item: PropTypes.object
  }

  return (
    <section id='portfolio' className=' snap-start py-12 lg:py-16 overflow-x-hidden' >
      <div className="main space-y-20">
        <div className="header flex flex-col lg:flex-row gap-9 justify-between items-baseline">
          <div className="flex flex-col gap-9 justify-between items-baseline">
            <PrimaryScroll>
              <h5 className=' flex items-center text-xs font-semibold gap-2 text-paragraph uppercase tracking-widest'>portfolio</h5>  
            </PrimaryScroll>
            <PrimaryScroll>
              <h1 className=' uppercase !font-heading heading'>
                {projectData.heading.split(' ').slice(0, -1).join(' ')} <span className=' text-primary !font-heading'>{projectData.heading.split(' ').pop()}</span>
              </h1>
            </PrimaryScroll>
          </div>
          <PrimaryScroll className={'mt-auto'}>
            <Link to={'/project'} className='font-semibold text-heading uppercase tracking-widest text-xs flex items-center gap-5 hover:text-primary transition-colors duration-300'>
              view all <FiArrowRight className=' text-lg'/> 
            </Link>
          </PrimaryScroll>
        </div>
        
        <div className="project-list columns-1 md:columns-2 gap-8">
          {projects.map((item, index) => (
            <ProjectBox index={index} item={item} key={index}/>
          ))}
        </div>

        <PrimaryScroll scale={.98} className="conclusion flex flex-col gap-8 justify-between lg:flex-row bg-boxground/10 p-8 rounded-3xl border border-white/5">
            <div className="border-l-[4px] border-primary pl-5">
              <p className=' text-paragraph leading-relaxed text-base lg:w-3/4'> 
                My work focuses on bridging the gap between innovative design and technical excellence. Every project is an opportunity to solve complex challenges with elegant code.
              </p>
            </div>
            <Link to={'/project'} className=' bg-primary text-background rounded-full lg:my-auto text-center w-fit font-bold uppercase text-xs tracking-widest px-8 py-4 hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] transition-all duration-300'>
              explore all projects
            </Link>
        </PrimaryScroll>
      </div>
    </section>
  )
}

export default ProjectSection