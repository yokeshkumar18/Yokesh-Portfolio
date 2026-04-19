
import PrimaryScroll from '../animations/PrimaryScroll'
import Header from '../components/Header'
import ContactSection from '../sections/ContactSection'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { projects } from '../utils/staticData'

const ProjectPage = () => {
  const { name } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    // Find project by title (slugified)
    const project = projects.find(p => p.title.toLowerCase().replace(/ /g, '-') === name)
    setData(project)
  }, [name])

  if (!data) {
    return (
      <div className='pt-32 text-heading flex flex-col justify-center items-center h-[60vh]'>
        <h1 className='text-4xl font-black uppercase mb-4'>Project Not Found</h1>
        <p className='text-paragraph'>The project you are looking for does not exist in our records.</p>
      </div>
    )
  }

  const Conclusion = ({ className }) => (
    <div className={className}>
      <PrimaryScroll>
        <h1 className='!font-heading text-2xl uppercase mb-4'>Conclusion</h1>
      </PrimaryScroll>
      <PrimaryScroll>
        <p className='text-paragraph capitalize mb-5'>{data.conclusion}</p>
      </PrimaryScroll>
    </div>
  )

  Conclusion.propTypes = {
    className: PropTypes.string
  }

  const TechTable = () => {
    let stack = data.technologyStack.stack
    return (
      <table className="table-auto w-full rounded-2xl border-collapse border bg-boxground/10 border-white/5 overflow-hidden">
        <tbody>
          {Object.entries(stack).map(([category, technologies], index) => {
            return (
              <tr key={index} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors duration-300">
                <td className="capitalize pr-5 font-bold text-sm tracking-widest text-primary border-r border-white/5 p-6 w-1/3">
                  {category}
                </td>
                <td className="capitalize text-paragraph text-sm p-6">
                  {technologies.join(', ')}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  }

  const InfoBox = ({ heading, value }) => {
    return (
      <PrimaryScroll className="space-y-4">
        <h3 className='!font-heading text-primary uppercase text-xs tracking-[0.2em] font-bold'>{heading}</h3>
        <ul className='space-y-1 text-heading font-semibold uppercase tracking-wider'>
          {Array.isArray(value) ? (
            value.map((item, index) => (
              <li key={index} className="text-lg">{item}</li>
            ))
          ) : (
            <li className="text-lg">{value}</li>
          )}
        </ul>
      </PrimaryScroll>
    )
  }

  InfoBox.propTypes = {
    heading: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  }

  const pageTitle = `${data.title} | Yokesh Kumar Portfolio`;
  const pageDescription = data.description || 'Detailed look into my production projects.';
  const pageUrl = window.location.href;

  return (
    <section className='space-y-12 bg-background min-h-screen'>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={data.tags?.join(", ") || "portfolio, projects, development"} />
        <meta name="author" content="Yokesh Kumar T R" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={data.image} />

        {/* Canonical Tag */}
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <Header name={data.title} description={data.tech} />

      <div className="main flex flex-col justify-center space-y-14 items-center pb-24">
        <PrimaryScroll className={'w-full aspect-[21/9] overflow-hidden rounded-3xl border border-white/5 shadow-2xl'}>
          <img src={data.image} width={1200} height={600} alt={data.title} className='w-full h-full object-cover filter brightness-75' />
        </PrimaryScroll>

        <div className="space-y-20 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 bg-boxground/5 p-12 rounded-3xl border border-white/5">
            <InfoBox heading={'CLIENT'} value={data.client} />
            <InfoBox heading={'SERVICES'} value={data.tech.split(' · ')} />
            <InfoBox heading={'DURATION'} value={`${data.dateFrom} - ${data.dateTo}`} />
            <InfoBox heading={'PREVIEW'} value={data.link} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-10">
              <PrimaryScroll>
                <h2 className='!font-heading text-4xl text-heading uppercase'>
                  About <span className='!font-heading text-primary'>Project</span>
                </h2>
              </PrimaryScroll>
              <div className="space-y-6">
                {data.details.map((item, index) => (
                  <PrimaryScroll key={index} delay={index / 10}>
                    <p className='text-paragraph leading-relaxed text-lg flex gap-4'>
                      <span className="text-primary font-bold">0{index + 1}.</span> {item}
                    </p>
                  </PrimaryScroll>
                ))}
              </div>

              <div className="pt-10 space-y-6">
                <PrimaryScroll>
                  <h3 className='!font-heading text-2xl uppercase text-heading'>Problem <span className="text-primary !font-heading">Statement</span></h3>
                </PrimaryScroll>
                <PrimaryScroll>
                  <p className='text-paragraph leading-loose text-lg border-l-2 border-primary pl-8'>{data.statement}</p>
                </PrimaryScroll>
              </div>
            </div>

            <div className="space-y-12">
              <div className="tech-stack space-y-6">
                <PrimaryScroll>
                  <h3 className='!font-heading text-2xl uppercase text-heading'>Tech <span className="text-primary !font-heading">Stack</span></h3>
                </PrimaryScroll>
                <PrimaryScroll>
                  <p className='text-paragraph text-sm mb-6'>{data.technologyStack.paragraph}</p>
                </PrimaryScroll>
                <PrimaryScroll>
                  <TechTable />
                </PrimaryScroll>
              </div>
              
              <Conclusion className="pt-8" />
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </section>
  )
}

export default ProjectPage;

