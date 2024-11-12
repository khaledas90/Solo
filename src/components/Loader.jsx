import { motion } from "framer-motion";

const variants = {
    initial: {
        scaleY: 0.5,
        opacity: 0,
    },
    animate: {
        scaleY: 1,
        opacity: 1,
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: "circIn",
        },
    },
};

const Loader = () => {
    return (

        <div className="flex justify-center items-center h-screen bg-gray-100/30 bg-opacity-50">
            <div className="grid place-content-center  px-4 py-24">
                <motion.div
                    transition={{
                        staggerChildren: 0.25,
                    }}
                    initial="initial"
                    animate="animate"
                    className="flex gap-1"
                >
                    <motion.div variants={variants} className="h-12 w-2 bg-[#e2b770]" />
                    <motion.div variants={variants} className="h-12 w-2 bg-[#e2b770]" />
                    <motion.div variants={variants} className="h-12 w-2 bg-[#e2b770]" />
                    <motion.div variants={variants} className="h-12 w-2 bg-[#e2b770]" />
                    <motion.div variants={variants} className="h-12 w-2 bg-[#e2b770]" />
                </motion.div>
            </div>
        </div>

    );
};



export default Loader;