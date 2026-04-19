import PrimaryScroll from "../animations/PrimaryScroll"
import { recordData } from "../utils/staticData"

const RecordSection = () => {

    const displayData = [
      {
        number: recordData.experience,
        text: 'years experience'
      },
      {
          number:  recordData.solutions,
          text: 'solutions delivered'
      },
      {
          number:  recordData.prototypes,
          text: 'prototypes completed'
      }, 
      {
        number:  recordData.skills,
        text: 'technologies known'
      },
    ]

  return (
    <section className="  overflow-x-hidden pt-12 pb-12 lg:pb-16 bg-background/50 backdrop-blur-sm border-y border-white/5">
        <div className="main grid grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-4 px-2">
            {displayData.map((item,index)=>{
              const splittedtext = item.text.split(' ')
              return(
                <div key={index} className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left group">
                    <PrimaryScroll>
                      <h1 className='text-6xl md:text-7xl font-black text-heading group-hover:text-primary transition-colors duration-500'>
                        {item.number}
                      </h1>
                    </PrimaryScroll>
                    <div className="flex flex-col">
                      {splittedtext.map((word, idx)=>(
                        <PrimaryScroll key={idx} delay={.2}>
                          <h2 className={`!font-heading text-lg md:text-xl uppercase tracking-tighter ${idx === 1 ? 'text-primary' : 'text-heading/60'}`}>
                            {word}
                          </h2>
                        </PrimaryScroll>
                      ))}
                    </div>
                </div>
              )})}
        </div>
    </section>
  )
}

export default RecordSection;