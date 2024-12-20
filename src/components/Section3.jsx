import bgMobileTop from '../assets/images/bg-section-top-mobile-2.svg'
import bgMobileBottom from '../assets/images/bg-section-bottom-mobile-2.svg'
import bgDeskTop from '../assets/images/bg-section-top-desktop-2.svg'
import bgDeskBottom from '../assets/images/bg-section-bottom-desktop-2.svg'
import yourUser from '../assets/images/illustration-your-users.svg'
const Section3 = () => {
  return (
    <section >
    <picture>
        <source media="(max-width:766px)" srcSet={bgMobileTop} />
        <img src={bgDeskTop} alt="top-desktop-bg" className="w-full sm:mt-20 md:mt-24 lg:mt-28 mb-[-5px]" width={600} height={400}/>
        </picture>
    <div className="bg-VeryPaleBlue flex flex-col py-20">
    <div className="container m-auto flex flex-col-reverse xl:flex-row items-center justify-between gap-12 md:gap-8 px-10">
        <div className="text-content">
        <h2 className={
            `text-2xl  md:text-3xl lg:text-4xl  mb-4
            text-gray-900
            text-bold
            text-center xl:text-left
            
            `
            }>{`Your Users`}</h2>
            <p className={`
                text-gray-600
                text-base xl:text-2xl 
                 text-center xl:text-left 
                 xl:me-12  px-auto  xl:px-0 `
                }>{`It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
                    once signed in to your app, your users can start chatting immediately.`}</p>
            </div>
            <img src={yourUser} alt="your-users-img"className={`w-full xl:w-[45%]`} width={600} height={400}/>
            </div>  
            </div>
               <picture>
                <source media="(max-width:766px)" srcSet={bgMobileBottom} />
                <img src={bgDeskBottom} alt="top-desktop-bg" className="w-full sm:mb-20 md:mb-24 lg:mb-28 mt-[-5px]" width={600} height={400}/>
                </picture>
    </section>
  )
}

export default Section3