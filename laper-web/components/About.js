import React from "react"

const About = () => {
    return (
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center max-w-md grid-cols-1 mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-x-24 xl:gap-x-48 gap-y-12">
                    <div>
                        <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                            Analysis Data
                        </h2>
                        <p className="mt-8 text-xl font-normal text-white">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                                Keep control on your projects.
                            </span>{" "}
                            Don't make the same mistakes.
                        </p>
                        <p className="mt-8 text-lg font-normal text-gray-400">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0">
                            <svg
                                className="filter blur-3xl"
                                style={{ filter: "blur(64px)" }}
                                width="343"
                                height="339"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M158.612 289.158C68.377 300.506 12.834 390.699.684 294.077-11.467 197.455 205.537 12.391 295.772 1.043c90.236-11.347 19.532 155.318 31.683 251.94 12.151 96.622-78.607 24.828-168.843 36.175Z"
                                    fill="url(#a)"
                                />
                                <defs>
                                    <linearGradient
                                        id="a"
                                        x1="335.877"
                                        y1="-4"
                                        x2="338.499"
                                        y2="338.656"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop
                                            offset="0%"
                                            style={{ stopColor: "var(--color-cyan-500)" }}
                                        />
                                        <stop
                                            offset="100%"
                                            style={{ stopColor: "var(--color-purple-500)" }}
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <img
                            className="relative w-full mx-auto"
                            src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/5/feature.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
