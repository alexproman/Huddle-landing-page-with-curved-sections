import ButtonStarted from "./ButtonStarted";
import screenMockups from '../assets/images/screen-mockups.svg'
import iconCommunitie from '../assets/images/icon-communities.svg'
import iconMessages from '../assets/images/icon-messages.svg'

const Hero = () => {
  return <>
  <section>
      <div className="container m-auto flex flex-col items-center justify-between gap-8">
            <h1 className={
                `text-3xl sm:text-4xl md:text-5xl lg:text-5 text-center pt-4 px-6 sm:px-12 md:px-14 md:pt-2 text-VeryDarkCyan`
            }>{`Build The Community Your Fans Will Love`}</h1>
            <p className={
              `text-gray-600 px-4  
              w-full md:w-1/2 lg:w-2/3
               text-center 
                md:text-2xl lg:text-3xl text-base`
              }>{`Huddle re-imagines the way we build communities. You have a voice, but so does 
              your audience. Create connections with your users as you engage in genuine discussion.`}
            </p>
           <ButtonStarted/>
          <img src={screenMockups} alt="screen-mockups" className={
            `p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 w-full
            `} width={600} height={400} />
            <div className={`flex flex-col lg:flex-row gap-12 items-center justify-between w-3/4 py-12`}>
                <div>
                    <img src={iconCommunitie} alt="icon-communities" className={``} width={80} height="auto" />
                    <strong className={`text-6xl md:text-8xl lg:text-9xl text-gray-950`}>{`1.4k+`}</strong>
                    <p className={`text-gray-600 text-md md:text-2xl lg:text-3xl text-center font-semibold`}>{`Communities Formed`}</p>
                </div>
                <div>
                    <img src={iconMessages} alt="icon-messages" width={80} height="auto"/>
                    <strong className={`text-6xl md:text-8xl lg:text-9xl text-gray-950`}>{`2.7m+`}</strong>
                    <p className={`text-gray-600 text-sm md:text-2xl lg:text-3xl text-center font-semibold` }>{`Messages Sent`}</p>
                </div>
            </div>
      </div>
  </section>
  </>;
}

export default Hero


 

