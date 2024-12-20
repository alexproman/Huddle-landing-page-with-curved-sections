import flowingConversation from '../assets/images/illustration-flowing-conversation.svg'
const Section2 = () => {
  return (
    <section>
    <div className="flex flex-col my-12 py-20">
    <div className="container m-auto flex flex-col xl:flex-row items-center justify-between gap-12 md:gap-8 px-10">
    <img src={flowingConversation} alt="flowing-conversation-img"className={`w-full xl:w-[45%]`} width={600} height={400}/>
        <div className="text-content">
        <h2 className={
            `text-2xl  md:text-3xl lg:text-4xl  mb-4 
            text-gray-900
            text-bold
            text-center xl:text-left
            
            `
            }>{`Flowing Conversations`}</h2>
            <p className={`
                text-gray-600
                text-base xl:text-2xl 
                 text-center xl:text-left 
                 xl:me-0  px-auto  xl:px-0 `
                }>{`You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
                    just-in-time loading for a more natural flow.`}</p>
            </div>
            </div>  
            </div>
    </section>  )
}

export default Section2