import { HERO_CONTENT } from "../constants"
import photozzz from "../assets/photozzz.jpeg"
import { motion } from "framer-motion"

// import profilePic from "../assets/kevinRushProfile.png"
// import tedlogo1 from "../assets/tedlogo1.png"
// import photo2 from "../assets/photo2.png"


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-2 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible" 
                        className="pb-8 text-6xl font-thin tracking-tighte lg:mt-12 lg:text-8xl">
                        Telyson A.
                    </motion.h1>
                    <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible" 
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tighter text-transparent">
                        Full Stack/ DevOps Developer
                    </motion.span>
                    <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible" 
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                        initial={{ x: 100, opacity: 0}}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2}}
                        className="w-80 rounded-3xl" src={photozzz} alt="Teldy" />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero