import ButtonStarted from "./ButtonStarted"
const LastSection = () => {
  return (
    <section>
    <div className="container m-auto flex flex-col items-center justify-between gap-20 py-80">
          <h1 className={
              `text-xl sm:text-2xl md:text-3xl lg:text-4 xl:text-5xl text-center pt-4 px-6 sm:px-12 md:px-14 md:pt-2 text-VeryDarkCyan`
          }>{`Ready To Build Your Community?`}</h1>
          
         <ButtonStarted/>
          
    </div>
</section>  )
}

export default LastSection