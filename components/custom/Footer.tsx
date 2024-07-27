import { FaFacebook,  FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = ()=>{
    return(
<footer className="bg-white text-gray-900 py-12">
  <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="flex flex-col gap-4">
      <a className="flex items-center gap-2" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-6 w-6 text-black"
        >
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
          <circle cx="7" cy="17" r="2"></circle>
          <path d="M9 17h6"></path>
          <circle cx="17" cy="17" r="2"></circle>
        </svg>
        <span className="text-2xl font-bold text-black font-manrope">iCab</span>
      </a>
      <p className="text-lg font-raleway">Reliable and affordable cab service at your fingertips.</p>
    </div>
    <div className="grid grid-cols-2 gap-8 font-manrope">
      <div className="grid gap-2">
        <h4 className="text-lg font-medium text-white">Quick Links</h4>
        <a className="hover:text-gray-300" href="#">
          About
        </a>
        <a className="hover:text-gray-300" href="#">
          FAQ
        </a>
        <a className="hover:text-gray-300" href="#">
          Contact
        </a>
      </div>
      <div className="grid gap-2">
        <h4 className="text-lg font-medium text-white">Legal</h4>
        <a className="hover:text-gray-300" href="#">
          Terms of Service
        </a>
        <a className="hover:text-gray-300" href="#">
          Privacy Policy
        </a>
        <a className="hover:text-gray-300" href="#">
          Cookie Policy
        </a>
      </div>
    </div>
    <div className="flex flex-col gap-4 font-manrope">
      <h4 className="text-lg font-medium text-white">Follow Us</h4>
      <div className="flex gap-4">
        <a>
            <FaFacebook className="w-6 h-6 hover:text-blue-600 hover:-translate-y-2 duration-300"/>
        </a>
        <a>
            <FaTwitter className="w-6 h-6 hover:text-blue-600 hover:-translate-y-2 duration-300"/>
        </a>
        <a>
            <FaInstagram className="w-6 h-6 hover:bg-gradient-to-b rounded-xl from-pink-600 via-purple-500 to-blue-700 hover:-translate-y-2 duration-300"/>
        </a>
      </div>
    </div>
  </div>
  <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm">
    <p className="font-manrope">© 2024 iCab. All rights reserved.</p>
  </div>
</footer>
    )
}



export default Footer