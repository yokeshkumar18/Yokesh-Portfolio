import { serviceData } from '../utils/staticData'
import PrimaryScroll from '../animations/PrimaryScroll'
import PropTypes from 'prop-types'
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import ContactSection from '../sections/ContactSection';
import { Helmet } from 'react-helmet-async';

const ServiceDetail = () => {
  const { name } = useParams()
  const service = serviceData.find((item) => item.name === name);

  if (!service) {
    return (
      <div className="py-24 bg-background flex justify-center items-center h-[60vh]">
        <h1 className="text-4xl font-black text-heading uppercase">Service not found</h1>
      </div>
    );
  }

  const FeaturesBox = ({ item, index }) => {
    let Icon = item.icon
    return (
      <PrimaryScroll delay={index / 10} className="p-8 space-y-6 bg-boxground/5 rounded-3xl border border-white/5 hover:border-primary/20 hover:bg-boxground/10 transition-all duration-500 group">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className='text-4xl text-primary' />
        </div>
        <h3 className='!font-heading capitalize text-xl text-heading group-hover:text-primary transition-colors duration-300'>{item.heading}</h3>
        <p className='text-paragraph capitalize text-sm leading-relaxed'>{item.description}</p>
      </PrimaryScroll>
    )
  }

  FeaturesBox.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
  }

  const pageTitle = `${service.title} | Yokesh Kumar Portfolio`;
  const pageDescription = service.description || "Discover high-performance development solutions.";
  const pageUrl = window.location.href;

  return (
    <main className='space-y-8 bg-background'>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="frontend development, Next.js, React, Node.js, Electron, portfolio" />
        <meta name="author" content="Yokesh Kumar T R" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <Header name={service.title} description={service.description} />

      <section>
        <div className="main space-y-20 pb-24">
          <PrimaryScroll className="w-full aspect-[21/9] overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
            <img src={'/blog.jpg'} width={1200} height={600} alt={service.title} className='w-full h-full object-cover filter brightness-75' />
          </PrimaryScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-10">
              <div className="description">
                <PrimaryScroll>
                  <h2 className='!font-heading text-4xl text-heading uppercase mb-8'>Service <span className='!font-heading text-primary'>Overview</span></h2>
                </PrimaryScroll>
                <div className="space-y-6">
                  {service.details.map((item, index) => (
                    <PrimaryScroll key={index} delay={index / 10}>
                      <p className='text-paragraph leading-loose text-lg flex gap-4'>
                        <span className="text-primary font-bold">✓</span> {item}
                      </p>
                    </PrimaryScroll>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="p-8 rounded-3xl bg-boxground/10 border border-white/5 space-y-4">
                <h4 className="text-primary font-bold uppercase tracking-widest text-xs">Ready to start?</h4>
                <p className="text-paragraph text-sm">Let&apos;s collaborate on your next big project and bring your vision to life with professional engineering.</p>
                <button className="w-full py-4 bg-primary text-background font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform duration-300">
                  contact me
                </button>
              </div>
            </div>
          </div>

          <div className="features space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
              <PrimaryScroll>
                <h2 className='!font-heading text-4xl text-heading uppercase'>What&apos;s <span className='!font-heading text-primary'>Included</span></h2>
              </PrimaryScroll>
              <PrimaryScroll>
                <p className="text-paragraph text-sm md:w-80">Comprehensive solutions covering every aspect of the development lifecycle.</p>
              </PrimaryScroll>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((item, index) => (
                <FeaturesBox index={index} item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
};

export default ServiceDetail;