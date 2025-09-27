// work slider data
export const workSlider = {
    slides: [
        {
            images: [
                {
                    title: "Germanicos Website",
                    path: "/germanicos-white-logo.svg",
                    url: "https://tailor.com.au/",
                    color: "#131200",
                },
                {
                    title: "TTG Web/IOS/Android App",
                    path: "/TTG-logo.svg",
                    url: "https://apps.apple.com/us/app/the-tip-general/id6449004056/",
                    color: "#174540",
                },
                {
                    title: "Netfans",
                    path: "/netfans.svg",
                    url: "https://www.netfans.tv/",
                    color: "#1c1b1b",
                },
                {
                    title: "WiseAPI",
                    path: "/wise-api.svg",
                    url: "https://wisecare.com.br/",
                    color: "#DEDEDE",
                },
            ],
        },
        {
            images: [
                {
                    title: "Germanicos POS IOS App",
                    path: "/germanicos-white-logo.svg",
                    url: "https://tailor.com.au/",
                    color: "#131200",
                },
                {
                    title: "WiseAgenda",
                    path: "/wise-agenda.svg",
                    url: "https://wisecare.com.br/",
                    color: "#DEDEDE",
                },
                {
                    title: "Ginga DTVPlay App",
                    path: "/MOPA-logo.png",
                    url: "https://www.ufpb.br/ufpb/contents/noticias/general-do-md-visita-lavid-e-convida-para-expor-tecnologias-em-brasilia-1",
                    color: "#DEDEDE",
                },
                {
                    title: "The Tip General Website",
                    path: "/TTG-logo.svg",
                    url: "https://thetipgeneral.com/",
                    color: "#174540",
                },
            ],
        },
        {
            images: [
                {
                    title: "Germanicos ERP System",
                    path: "/germanicos-white-logo.svg",
                    url: "https://tailor.com.au/",
                    color: "#131200",
                },
                {
                    title: "WiseClinic",
                    path: "/wise-clinic.svg",
                    url: "https://wisecare.com.br/",
                    color: "#DEDEDE",
                },
                {
                    title: "Neoliv Clinic Website",
                    path: "/neoliv-logo-transparent.png",
                    url: "https://gamersclub.gg/",
                    color: "#DEDEDE",
                },
                {
                    title: "HCM Hotel - Menu",
                    path: "/HCM-LOGO.png",
                    url: "https://playvalorant.com/pt-br/",
                    color: "#DEDEDE",
                },
            ],
        },
        {
            images: [
                {
                    title: "The Tip General Admin Panel",
                    path: "/TTG-logo.svg",
                    url: "https://app.thetipgeneral.com/",
                    color: "#174540",
                },
            ],
        },
    ],
}

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react"

// import swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper"

// icons
import { BsArrowRight } from "react-icons/bs"
// next image
import Image from "next/image"
import Link from "next/link"

const WorkSlider = () => {
    return (
        <Swiper
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className='h-[310px] md:h-[550px]'
        >
            {workSlider.slides.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                            {slide.images.map((image, index) => {
                                return (
                                    <div
                                        className='relative rounded-lg overflow-hidden flex items-center justify-center group h-full'
                                        key={index}
                                    >
                                        <div
                                            className={`flex items-center justify-center relative overflow-hidden group md:h-full h-32`}
                                        >
                                            <div
                                                className='flex flex-1 justify-center items-center w-[500px] h-full p-9'
                                                style={{
                                                    backgroundColor:
                                                        image.color,
                                                }}
                                            >
                                                <Image
                                                    src={image.path}
                                                    className='max-h-[100px] md:max-h-[140px] m-4'
                                                    width={500}
                                                    height={300}
                                                    alt={image.title}
                                                    title={image.title}
                                                />
                                            </div>
                                            <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#4a38e8] to-[#1b57a0] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                                            <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                                                <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] px-4'>
                                                    <Link
                                                        href={`${image.url}`}
                                                        target='_blank'
                                                        rel='noopener noreferrer nofollow'
                                                        className='flex flex-row gap-x-2'
                                                    >
                                                        <div className='delay-100'>
                                                            <span>
                                                                {image.title}
                                                            </span>
                                                        </div>
                                                        {/* <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                                                            PROJECT
                                                        </div> */}
                                                        <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                                                            <BsArrowRight />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default WorkSlider
