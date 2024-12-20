import logo from '../assets/images/logo.svg'
const Header = () => {
  return <>
  <header className="flex items-center justify-between p-7 md:p-12 lg:p-20">
      <div className="logo">
          <img src={logo} alt="logo" className="w-36 md:w-64 lg:w-80"/>
      </div>
      <button type="button" 
      className={
        `btn text-mainColor 
        text-xs sm:text-sm font-bold
        w-20 sm:w-36 
        h-6 sm:h-10
        border-2 border-mainColor rounded-full
        hover:text-lightMainColor
        hover:border-lightMainColor`
        }>Try It Free</button>
  </header>
  </>;
}

export default Header

