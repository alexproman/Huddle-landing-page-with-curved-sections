import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare,faInstagram,faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import IconEmail from '../assets/images/icon-email.svg'
import Iconphone from '../assets/images/icon-phone.svg'
import logo2 from '../assets/images/logo2.svg'
import footerBgDesk from '../assets/images/bg-footer-top-desktop.svg'
import footerBgMob from '../assets/images/bg-footer-top-mobile.svg'


const Footer = () => {
  return <div>
  <picture>
    <source media="(max-width:766px)" srcSet={footerBgMob} />
    <img src={footerBgDesk} alt="top-desktop-bg" className="w-full" width={1440} height={400}/>
    </picture>
    <footer className="bg-VeryDarkCyan py-20 px-6 mt-[-5px] relative">
      <div className="container flex flex-col xl:px-3 md:px-10 m-auto">
        <div className="flex flex-col xl:flex-row-reverse gap-14 xl:gap-36">
          <div className="newsletter flex flex-col gap-5">
            <p className="text-VeryPaleBlue text-2xl leading-6 uppercase font-body font-semibold">{`Newsletter`}</p>
            <p className="text-VeryPaleBlue text-base md:text-xl font-body font-medium lg:w-2/3 ">{`To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
                  send you spam or pass on your email address`}</p>
            <form action="#" className="flex flex-col items-end gap-3 lg:w-2/3 ">
            <input type="email" name="email" id="email" placeholder="Your Email" autoComplete='off' className={
              `w-full h-12 px-3 outline-none rounded-md focus:bg-veryLightMainColor`
            } />
            <button type="submit" className={
              `btn bg-lightMainColor
              px-10 py-3 
              rounded-md
            text-white
            text-xl text-bold font-body
            hover:bg-veryLightMainColor
            hover:text-mainColor
            w-1/2 `
          }>
            {`Subscribe`}
        </button>
            </form>
            
          </div>
          <div className="footer-logo flex flex-col gap-7">
        
            <img src={logo2} alt="logo" className=" w-56 sm:w-36 md:w-60" width={80} height={80}/>
        
          <p className="text-VeryPaleBlue text-base md:text-xl font-body font-medium lg:w-5/6 ">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
            vestibulum a, ultrices quis sem.`}</p>
            <address>
          <div className="phone flex items-center gap-8">
          <img src={Iconphone} alt="phone-icon" width={20} height={20} />
          <p className="text-gray-200 font-body font-normal not-italic py-2">{`Phone: +1-543-123-4567`}</p>
          </div>
          <div className="Email flex items-center gap-8">
          <img src={IconEmail} alt="email-icon" width={20} height={20} />
          <p className="text-gray-200 font-body font-normal not-italic py-2">{`example@huddle.com`}</p></div>
          </address>
          </div>
          
        </div>
    
    <div className="social-media">
      <ul className='flex gap-4 text-4xl text-gray-50 mt-16'>
        <li>
          <a href="https://www.facebook.com" target="_blank" alt='facebooke-page' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookSquare}/>
          </a>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank" alt='instagram-page' rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="https://x.com" target="_blank" alt='twitter-page' rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faSquareTwitter} />
          </a>
        </li>
      </ul>
    </div>
  </div>

    <p className="text-xs text-gray-100 text-center absolute bottom-5 left-1/2 -translate-x-1/2">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-blue-400">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/alexproman" className="text-blue-400">Mohamed Hamid</a>.
    </p>
  </footer>
    
  </div>;
}

export default Footer