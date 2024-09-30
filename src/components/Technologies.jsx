import {RiReactjsLine} from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import {FaNodeJs} from "react-icons/fa";
import { SiXampp } from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiVmware } from "react-icons/si";
import { SiCisco } from "react-icons/si";
import {animate, motion} from "framer-motion";


const icon = (duration) =>({
    initial: {y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
});




const Technologies = () => {
  return(
  <div className="border-b border-neutral-800 pb-24">
    <motion.h2 
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
    className="my-20 text-center text-4xl">Technologies</motion.h2>
    <motion.div 
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.5}}
    className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={icon(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
        variants={icon(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-400" />
        </motion.div>
        <motion.div 
        variants={icon(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiXampp className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div
        variants={icon(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaFileExcel className="text-7xl text-green-400" />
        </motion.div>
        <motion.div 
        variants={icon(8)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div 
        variants={icon(9)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-red-400" />
        </motion.div>
        <motion.div 
        variants={icon(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiVmware className="text-7xl text-400" />
        </motion.div>
        <motion.div 
        variants={icon(8.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCisco className="text-7xl text-400" />
        </motion.div>
    </motion.div>
  </div>
  );
};

export default Technologies
