// import logo from "../assets/kevinRushLogo.png"
import tedlogo1 from "../assets/tedlogo1.png"
import ttlogo from "../assets/ttlogo.png"
import talogo from "../assets/talogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter} from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2">
        <div>
            <img className="wx-2 " src={talogo} alt="logo" />
        </div>

        <div className="m-8 flex text-2xl items-center justify-center gap-4">
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaSquareXTwitter />
        </div>
    </nav>
  )
}

export default Navbar