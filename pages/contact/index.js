"use client"
import Circles from "/components/Circles"
import { BsArrowRight } from "react-icons/bs"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
import { useForm } from "react-hook-form"
import { sendEmail } from "../../utils/send-email"

// export type FormData = {
//   name: string;
//   email: string;
//   message: string;
// };

const Contact = () => {
    const { register, handleSubmit } = useForm()

    async function onSubmit(data) {
        try {
            await sendEmail(data)
            alert("Thanks! Your message has been sent.")
        } catch (e) {
            alert(e?.message || "Failed to send")
        }
    }

    return (
        <div className='h-[100dvh] bg-primary/30'>
            <Circles />
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
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {/* input group */}
                        <div className='flex gap-x-6 w-full'>
                            <input
                                type='text'
                                placeholder='Name'
                                className='input capitalize'
                                aria-label='Name'
                                {...register("name", { required: true })}
                            />
                            <input
                                type='email'
                                placeholder='Email'
                                className='input'
                                aria-label='Email'
                                {...register("email", { required: true })}
                            />
                        </div>
                        <input
                            type='text'
                            placeholder='Subject'
                            className='input'
                            aria-label='Subject'
                            {...register("subject", { required: true })}
                        />
                        <textarea
                            placeholder='Message'
                            className='textarea'
                            aria-label='Message'
                            {...register("message", { required: true })}
                        ></textarea>
                        <button
                            className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
                            type='submit'
                        >
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
