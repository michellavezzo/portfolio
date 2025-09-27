// components
import Circles from "/components/Circles"

// icons
import { BsArrowRight } from "react-icons/bs"

// framer
import { motion } from "framer-motion"

// variants
import { fadeIn } from "../../variants"

// https://medium.com/@jamesowen.dev/how-to-send-email-forms-using-next-js-13-with-nodemailer-1bc9e5dd5e80
// https://medium.com/@abilsavio/email-contact-form-using-nextjs-app-router-60c29fe70644

const Contact = () => {
    return (
        <div className='h-[100vh] bg-primary/30'>
            <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
                {/* text & form */}
                <div className='flex flex-col w-full max-w-[700px]'>
                    {/* text */}
                    <motion.h1
                        variants={fadeIn("up", 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h2 text-center mb-12'
                    >
                        Lets <span className='text-accent'>connect.</span>
                    </motion.h1>
                    {/* form */}
                    <motion.form
                        variants={fadeIn("up", 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='flex-1 flex flex-col gap-6 w-full mx-auto'
                    >
                        {/* input group */}
                        <div className='flex gap-x-6 w-full'>
                            <input
                                type='text'
                                placeholder='name'
                                className='input'
                            />
                            <input
                                type='text'
                                placeholder='email'
                                className='input'
                            />
                        </div>
                        <input
                            type='text'
                            placeholder='subject'
                            className='input'
                        />
                        <textarea
                            placeholder='message'
                            className='textarea'
                        ></textarea>
                        <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                                Lets talk
                            </span>
                            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    )
}

export default Contact
