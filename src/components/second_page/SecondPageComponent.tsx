import { useState } from "react"
import front_view_laptop from "../../picture/second_page/second_page.webp"
import second_page_background from "../../picture/second_page/second_page_background-enhance_webp.webp"

export default function SecondPageComponent() {
    const [state, setState] = useState("language")

    return (
        <>
            <section className=" relative snap-center shrink-0 bg-cover bg-center w-[96vw] h-[93vh] m-[5%] overflow-hidden"
                style={{ backgroundImage: `url(${second_page_background})` }}>
                <img className=" absolute z-10 w-[95%] left-[50%] translate-x-[-50%]" src={front_view_laptop} alt="front view laptop" />
                <div className=" mt-[2%]">
                    <div className=" border-solid relative z-20 border-black w-[60%] border-2 ml-auto mr-auto ">
                        <div className=" left-3 top-[50%] translate-y-[-50%] absolute flex gap-1">
                            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="5.07453" cy="6.1348" rx="4.95652" ry="5.2837" fill="#202020" />
                            </svg>
                            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="5.65217" cy="6.1348" rx="4.95652" ry="5.2837" fill="#4D4D4D" />
                            </svg>
                            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="5.22981" cy="6.1348" rx="4.95652" ry="5.2837" fill="#808080" />
                            </svg>
                        </div>
                        <p className=" text-center font-roboto-condensed tracking-wider text-2xl font-bold">ABOUT ME</p>
                    </div>
                    <div className=" border-solid relative z-20 border-black w-[60%] p-5 border-2 ml-auto mr-auto ">
                        <div className="grid grid-cols-[1fr,1.5fr] mb">
                            <div className="place-self-center">
                                <svg className="ml-auto mr-auto" width="153" height="129" viewBox="0 0 153 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M143.531 0.515625H9.46875C7.04451 0.515625 4.71955 1.47865 3.00535 3.19285C1.29115 4.90705 0.328125 7.23201 0.328125 9.65625V119.344C0.328125 121.768 1.29115 124.093 3.00535 125.807C4.71955 127.521 7.04451 128.484 9.46875 128.484H143.531C145.955 128.484 148.28 127.521 149.995 125.807C151.709 124.093 152.672 121.768 152.672 119.344V9.65625C152.672 7.23201 151.709 4.90705 149.995 3.19285C148.28 1.47865 145.955 0.515625 143.531 0.515625ZM29.2734 122.391C33.3704 113.296 40.0064 105.577 48.3841 100.162C56.7618 94.7478 66.5248 91.8674 76.5 91.8674C86.4752 91.8674 96.2382 94.7478 104.616 100.162C112.994 105.577 119.63 113.296 123.727 122.391H29.2734ZM146.578 119.344C146.578 120.152 146.257 120.927 145.686 121.498C145.114 122.07 144.339 122.391 143.531 122.391H130.331C127.039 114.118 121.888 106.714 115.275 100.751C108.663 94.7886 100.767 90.4279 92.199 88.0066C98.8091 84.5022 104.057 78.8869 107.106 72.0548C110.155 65.2228 110.831 57.567 109.025 50.3066C107.219 43.0462 103.036 36.5986 97.1422 31.9907C91.248 27.3828 83.9816 24.8796 76.5 24.8796C69.0184 24.8796 61.752 27.3828 55.8578 31.9907C49.9636 36.5986 45.7806 43.0462 43.9751 50.3066C42.1695 57.567 42.8451 65.2228 45.8943 72.0548C48.9435 78.8869 54.1909 84.5022 60.801 88.0066C52.2329 90.4279 44.337 94.7886 37.7247 100.751C31.1123 106.714 25.9609 114.118 22.6693 122.391H9.46875C8.66067 122.391 7.88568 122.07 7.31428 121.498C6.74288 120.927 6.42188 120.152 6.42188 119.344V9.65625C6.42188 8.84817 6.74288 8.07318 7.31428 7.50178C7.88568 6.93038 8.66067 6.60938 9.46875 6.60938H143.531C144.339 6.60938 145.114 6.93038 145.686 7.50178C146.257 8.07318 146.578 8.84817 146.578 9.65625V119.344ZM76.5 85.8281C71.0765 85.8281 65.7747 84.2199 61.2652 81.2067C56.7557 78.1936 53.241 73.9108 51.1655 68.9001C49.09 63.8894 48.5469 58.3758 49.605 53.0565C50.6631 47.7372 53.2748 42.8511 57.1098 39.0161C60.9448 35.181 65.8309 32.5694 71.1503 31.5113C76.4696 30.4532 81.9832 30.9962 86.9939 33.0717C92.0046 35.1472 96.2873 38.662 99.3005 43.1715C102.314 47.681 103.922 52.9827 103.922 58.4062C103.922 65.679 101.033 72.6538 95.8902 77.7964C90.7476 82.939 83.7727 85.8281 76.5 85.8281Z" fill="black" />
                                </svg>
                                <p className=" text-center font-roboto-condensed">Full - Stack web Developer</p>
                                <p className=" text-center font-roboto-condensed">Aeronautical Engineer</p>
                            </div>
                            <p className=" font-roboto-condensed text-[18px] place-self-center">
                                Hey there! I'm Jonathan, a Full Stack Web Developer with expertise in React, Node.js, HTML, CSS, Bootstrap, and JavaScript.
                                I specialize in creating dynamic and engaging websites, and I'm proficient in using Figma to design user interfaces. Passionate
                                about staying up-to-date with the latest web development trends and technologies, I'm ready to collaborate and bring your ideas to life!
                            </p>
                        </div>
                        <h1 className="font-roboto-condensed tracking-[0.15em] font-bold text-2xl ml-12 mt-10">TECH STACK</h1>
                        <div className="grid grid-cols-[1fr,1.5fr] mt-5">
                            <div className=" flex flex-col place-self-start gap-5 ml-12 font-roboto-condensed text-xl tracking-[0.15em] ">
                                <button className={(state === "language") ? " text-left font-bold underline underline-offset-8" : "text-left hover:font-bold"}
                                    onClick={() => setState("language")}>
                                    Language
                                </button>
                                <button className={(state === "javaScript") ? " text-left font-bold underline underline-offset-8" : "text-left hover:font-bold"}
                                    onClick={() => setState("javaScript")}>
                                    JavaScript Framework
                                </button>
                                <button className={(state === "css") ? " text-left font-bold underline underline-offset-8" : "text-left hover:font-bold"}
                                    onClick={() => setState("css")}>
                                    CSS Framework
                                </button>
                                <button className={(state === "backEnd") ? " text-left font-bold underline underline-offset-8" : "text-left hover:font-bold"}
                                    onClick={() => setState("backEnd")}>
                                    Back End Framework
                                </button>
                                <button className={(state === "dataBase") ? " text-left font-bold underline underline-offset-8" : "text-left hover:font-bold"}
                                    onClick={() => setState("dataBase")}>
                                    DataBase
                                </button>
                            </div>
                            <div className=" border-solid border-black border-2 p-5">
                                <div className={`${(state === "language") ? "flex" : "hidden"} gap-10 text-center font-roboto-condensed tracking-wider text-xl`}>
                                    <div className="group hover:scale-125 ease-in-out duration-200">
                                        <svg width="52" height="61" viewBox="0 0 52 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="group-hover:fill-[#f1662a] ease-in-out duration-200" d="M0 0.3125L4.72604 53.6527L25.9323 60.6875L47.274 53.6527L52 0.3125H0ZM41.7354 17.549H16.8458L17.401 24.2064H41.1802L39.3385 44.2057L26.0813 47.8443V47.8848H25.9323L12.5667 44.2057L11.7542 33.9904H18.2135L18.6875 39.125L25.9323 41.0791L33.2042 39.125L34.0167 30.7426H11.4156L9.68229 11.1207H42.3313L41.7354 17.549Z" fill="black" />
                                        </svg>
                                        <p>Html</p>
                                    </div>
                                    <div className="group hover:scale-125 ease-in-out duration-200">
                                        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="group-hover:fill-[#33a9dc] ease-in-out duration-200" d="M3.8125 0H57.1875L52.3329 54.806L30.4415 61L8.67217 54.8034L3.8125 0ZM47.2496 11.2164L13.7504 11.2087L14.2918 17.873L40.0262 17.8781L39.378 24.7812H22.5014L23.1114 31.321H38.824L37.8937 40.2752L30.4975 42.3187L22.9843 40.26L22.5065 34.8971H15.8727L16.6098 44.6952L30.5 49.0237L44.1564 45.1349L47.2496 11.2164Z" fill="black" />
                                        </svg>
                                        <p>CSS</p>
                                    </div>
                                    <div className="group hover:scale-125 ease-in-out duration-200">
                                        <svg className="ml-auto mr-auto" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_106_141)">
                                                <path className="group-hover:fill-[#F0DB4F] ease-in-out duration-200" d="M0 0H60V60H0V0ZM55.085 45.69C54.6475 42.9525 52.865 40.6525 47.5775 38.5075C45.7375 37.645 43.6925 37.045 43.085 35.6575C42.8575 34.8325 42.8225 34.3825 42.97 33.895C43.345 32.28 45.2575 31.795 46.7575 32.245C47.7325 32.545 48.6325 33.295 49.1975 34.495C51.7825 32.805 51.7825 32.805 53.585 31.6825C52.91 30.6325 52.575 30.18 52.12 29.7325C50.545 27.97 48.4475 27.07 45.035 27.1475L43.2725 27.37C41.5825 27.7825 39.9725 28.6825 38.9975 29.8825C36.1475 33.11 36.97 38.735 40.42 41.06C43.8325 43.61 48.8225 44.17 49.46 46.5725C50.06 49.4975 47.285 50.435 44.545 50.0975C42.5175 49.6475 41.395 48.6325 40.1575 46.7575L35.5825 49.385C36.1075 50.585 36.7075 51.1075 37.6075 52.1575C41.9575 56.5475 52.8325 56.3225 54.785 49.6475C54.8575 49.4225 55.385 47.885 54.97 45.5225L55.085 45.69ZM32.6275 27.5775H27.0075C27.0075 32.4225 26.985 37.2375 26.985 42.09C26.985 45.17 27.1425 47.9975 26.64 48.8675C25.815 50.59 23.69 50.37 22.725 50.0675C21.735 49.5775 21.2325 48.9025 20.65 47.93C20.4925 47.6675 20.375 47.44 20.3325 47.44L15.77 50.2525C16.5325 51.8275 17.645 53.1825 19.08 54.045C21.2175 55.32 24.09 55.7325 27.0975 55.0575C29.055 54.4925 30.7425 53.33 31.625 51.53C32.9 49.205 32.63 46.355 32.6175 43.165C32.6475 38.03 32.6175 32.8925 32.6175 27.7175L32.6275 27.5775Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_106_141">
                                                    <rect width="60" height="60" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>JavaScript</p>
                                    </div>
                                    <div className="group hover:scale-125 ease-in-out duration-200">
                                        <svg className="ml-auto mr-auto" width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="group-hover:fill-[#007ACC] ease-in-out duration-200" d="M0.68689 29.9578V59.2546H60.2738V0.660889H0.68689V29.9578ZM48.7044 27.614C50.1315 27.9397 51.4287 28.6737 52.4321 29.7234C52.9845 30.2889 53.4648 30.9186 53.8622 31.5984C53.8622 31.6734 51.2881 33.3843 49.7197 34.3406C49.6625 34.3781 49.4337 34.1343 49.1811 33.764C48.8948 33.2782 48.488 32.8717 47.9987 32.5823C47.5093 32.293 46.9534 32.1303 46.3829 32.1093C44.5762 31.9874 43.4131 32.9203 43.4226 34.4531C43.4076 34.8347 43.4965 35.2133 43.68 35.5499C44.0757 36.3609 44.8145 36.8437 47.1313 37.8281C51.3977 39.6328 53.2234 40.8234 54.358 42.5156C55.626 44.3906 55.9072 47.4187 55.0492 49.6593C54.0958 52.0968 51.76 53.7515 48.4565 54.2999C46.9477 54.4699 45.4232 54.4541 43.9184 54.2531C41.6119 53.8792 39.4874 52.7903 37.8548 51.1453C37.3066 50.5499 36.2388 48.9984 36.3055 48.8859C36.4796 48.7589 36.6628 48.6445 36.8537 48.5437L39.0608 47.3437L40.7722 46.3687L41.1297 46.889C41.7331 47.7377 42.5009 48.4609 43.3892 49.0171C45.296 50.0015 47.8988 49.8656 49.1858 48.7265C49.618 48.3091 49.8876 47.7559 49.9477 47.1632C50.0078 46.5705 49.8546 45.9758 49.5148 45.4828C49.0381 44.8312 48.0847 44.2828 45.4199 43.139C42.3453 41.8359 41.02 41.0296 39.8092 39.7453C39.0534 38.8977 38.4953 37.8978 38.1742 36.8156C37.9347 35.5792 37.8992 34.313 38.0693 33.0656C38.7033 30.1453 40.9295 28.1062 44.1805 27.5015C45.6861 27.3183 47.2112 27.3594 48.7044 27.6234V27.614ZM34.7181 30.0703V32.4703H26.9814V54.1406H21.4946V32.4656H13.7388V30.1218C13.7146 29.3136 13.7337 28.5047 13.796 27.6984C13.8341 27.6562 18.5629 27.6562 24.2833 27.6562H34.6895L34.7181 30.0703Z" fill="#000000" />
                                        </svg>
                                        <p>TypeScript</p>
                                    </div>
                                </div>

                                <div className={`${(state === "javaScript") ? "flex" : "hidden"} gap-10 text-center font-roboto-condensed tracking-wider text-xl`}>
                                    <div className="group hover:scale-125 ease-in-out duration-200">
                                        <svg width="55" height="61" viewBox="0 0 55 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="group-hover:fill-[#00D8FF] ease-in-out duration-200" d="M24.7717 25.7489C23.8413 26.2861 23.091 27.0872 22.6159 28.0508C22.1407 29.0144 21.962 30.0972 22.1022 31.1624C22.2424 32.2275 22.6953 33.2272 23.4037 34.035C24.112 34.8428 25.044 35.4224 26.0817 35.7006C27.1194 35.9787 28.2164 35.9429 29.2337 35.5977C30.2511 35.2524 31.1433 34.6133 31.7975 33.761C32.4516 32.9088 32.8384 31.8817 32.9089 30.8096C32.9793 29.7376 32.7303 28.6687 32.1933 27.7381C31.8367 27.1201 31.3618 26.5785 30.7958 26.144C30.2298 25.7096 29.5837 25.3909 28.8946 25.2062C28.2054 25.0214 27.4865 24.9743 26.7791 25.0674C26.0717 25.1605 25.3896 25.3921 24.7717 25.7489ZM49.1202 31.6436C48.7633 31.2361 48.3872 30.8275 47.9917 30.4179C48.2675 30.1259 48.5352 29.8349 48.7947 29.5449C53.6766 24.0577 55.7389 18.5523 53.8287 15.246C51.9976 12.0736 46.55 11.1276 39.7275 12.4538C39.0563 12.5856 38.3882 12.7336 37.7231 12.8979C37.5953 12.4599 37.4605 12.0239 37.3185 11.5899C35.0038 4.6154 31.2656 0.0802729 27.4453 0.0833145C23.7831 0.0833145 20.2426 4.33252 17.9827 10.9056C17.7596 11.5545 17.5538 12.2074 17.3652 12.8644C16.9211 12.7549 16.475 12.6535 16.0269 12.5602C8.83028 11.085 3.0359 12.0584 1.12878 15.3707C-0.699263 18.5432 1.2109 23.7353 5.77645 28.9731C6.23067 29.4901 6.69706 29.9971 7.17561 30.4939C6.60986 31.0718 6.07757 31.6528 5.57874 32.2307C1.1227 37.3954 -0.677971 42.4994 1.14703 45.6596C3.03286 48.9264 8.74511 49.994 15.7014 48.6253C16.2651 48.5137 16.8258 48.388 17.3834 48.2481C17.5862 48.9599 17.8103 49.6665 18.0557 50.3681C20.3065 56.8074 23.8257 60.9166 27.4757 60.9166C31.2474 60.9166 35.0251 56.4971 37.3155 49.7872C37.498 49.2579 37.6653 48.7074 37.8295 48.1416C38.5494 48.3201 39.2743 48.4783 40.0043 48.6161C46.7051 49.8845 52.025 48.8899 53.847 45.7266C55.7297 42.4568 53.7861 36.9757 49.1202 31.6436ZM3.37961 16.6665C4.5537 14.6286 9.28957 13.8316 15.5037 15.1091C15.9011 15.1903 16.3057 15.2815 16.7173 15.3829C16.1099 18.0667 15.6811 20.7879 15.4337 23.5285C13.1928 25.1043 11.0561 26.8234 9.03711 28.675C8.59303 28.2147 8.1601 27.7432 7.73832 27.2606C3.8237 22.7772 2.27853 18.5797 3.37961 16.6665ZM15.2026 34.0891C13.6513 32.912 12.2065 31.7075 10.8956 30.4969C12.2035 29.2924 13.6483 28.094 15.1995 26.9199C15.1428 28.1143 15.1154 29.3097 15.1174 30.5061C15.1174 31.7025 15.1458 32.8968 15.2026 34.0891ZM15.2026 46.0733C12.5661 46.6605 9.84411 46.7574 7.17257 46.3592C6.44018 46.302 5.72732 46.0951 5.07806 45.7513C4.42881 45.4076 3.85695 44.9344 3.39786 44.3609C2.28766 42.4446 3.73549 38.3444 7.5467 33.9279C8.02525 33.3744 8.52003 32.835 9.03103 32.3098C11.051 34.1728 13.1919 35.9002 15.4398 37.4806C15.6896 40.2558 16.1225 43.0115 16.7356 45.7296C16.2286 45.8574 15.7166 45.9729 15.1995 46.0764L15.2026 46.0733ZM36.7984 21.6214C35.7784 20.9785 34.7463 20.357 33.702 19.7568C32.6719 19.1647 31.6306 18.5939 30.5782 18.0444C32.3084 17.3136 34.0737 16.669 35.8677 16.1129C36.2703 17.9322 36.581 19.7707 36.7984 21.6214ZM20.4434 11.7481C22.3779 6.12102 25.2431 2.68394 27.4514 2.68394C29.8026 2.6809 32.8564 6.38869 34.8548 12.4081C34.9846 12.8015 35.1062 13.197 35.2198 13.5944C32.5965 14.4074 30.0298 15.393 27.5365 16.5448C25.0516 15.3789 22.4907 14.382 19.8715 13.5609C20.0479 12.9526 20.2386 12.3483 20.4434 11.7481ZM19.2267 16.0794C21.0124 16.6415 22.7687 17.2932 24.4888 18.0322C22.3556 19.1312 20.2791 20.3286 18.2594 21.6244C18.5028 19.6838 18.8282 17.8254 19.2267 16.0794ZM18.2625 39.3786C19.2703 40.0255 20.2933 40.647 21.3315 41.2431C22.39 41.8515 23.4617 42.4355 24.5466 42.9951C22.8141 43.7597 21.0436 44.4348 19.2419 45.0179C18.8233 43.1563 18.4964 41.2753 18.2625 39.3816V39.3786ZM34.8578 48.9477C34.0486 51.5241 32.7721 53.9295 31.0922 56.0439C30.6775 56.65 30.1428 57.1646 29.5213 57.556C28.8998 57.9473 28.2046 58.207 27.4787 58.3191C25.2614 58.3191 22.4357 55.0189 20.5133 49.5104C20.2862 48.8595 20.0773 48.2025 19.8867 47.5394C22.5184 46.6905 25.0894 45.6641 27.5822 44.4673C30.0966 45.6284 32.6845 46.6231 35.3293 47.4451C35.1833 47.95 35.0261 48.4509 34.8578 48.9477ZM35.9589 44.9205C34.1416 44.353 32.353 43.6972 30.5995 42.9556C31.6316 42.4142 32.6709 41.8413 33.7172 41.2371C34.7919 40.6166 35.8383 39.9809 36.8562 39.3299C36.6529 41.2076 36.3534 43.0736 35.9589 44.9205ZM37.3185 30.4939C37.3185 32.3412 37.2607 34.1865 37.1452 36.0297C35.6456 37.0456 34.0639 38.0372 32.4184 38.9862C30.7759 39.9322 29.1547 40.8021 27.5609 41.5899C25.8839 40.7869 24.2394 39.921 22.6273 38.9923C21.0253 38.0697 19.4599 37.0872 17.9309 36.0449C17.789 34.1997 17.718 32.3524 17.718 30.503C17.718 28.6557 17.787 26.8094 17.9249 24.9641C20.9825 22.8766 24.1935 21.023 27.5304 19.4192C29.1851 20.2242 30.8104 21.087 32.4062 22.0076C34.0082 22.9283 35.5797 23.9006 37.1208 24.9246C37.2526 26.778 37.3185 28.6344 37.3185 30.4939ZM40.2264 15.0027C46.0724 13.8681 50.4768 14.6316 51.5809 16.5448C52.758 18.5827 51.0729 23.0783 46.8542 27.8172C46.621 28.0788 46.3797 28.3414 46.1302 28.605C44.0755 26.7475 41.8967 25.0321 39.6089 23.4707C39.3785 20.7604 38.967 18.0686 38.377 15.4133C39.0056 15.2592 39.6221 15.1223 40.2264 15.0027ZM39.8309 26.8196C41.3748 27.9463 42.8591 29.1525 44.2779 30.4331C42.8656 31.7342 41.3864 32.9607 39.8462 34.1074C39.8928 32.9029 39.9161 31.6984 39.9161 30.4939C39.9161 29.2691 39.8877 28.0443 39.8309 26.8196ZM51.5992 44.4278C50.492 46.3471 46.2215 47.147 40.4879 46.0642C39.8309 45.9405 39.1577 45.7925 38.4683 45.6201C39.044 42.9305 39.4373 40.205 39.6454 37.4624C41.9291 35.8746 44.1009 34.1317 46.1454 32.2459C46.5044 32.617 46.845 32.986 47.1674 33.3531C48.9957 35.341 50.4422 37.6486 51.4349 40.1603C51.7526 40.8226 51.9311 41.543 51.9594 42.277C51.9876 43.011 51.865 43.743 51.5992 44.4278Z" fill="black" />
                                        </svg>
                                        <p>React</p>
                                    </div>
                                </div>

                                <div className={`${(state === "css") ? "flex" : "hidden"} gap-10 text-center font-roboto-condensed tracking-wider text-xl`}>
                                    <div className="group hover:scale-125 ease-in-out duration-200">
                                        <svg className="ml-auto mr-auto" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="group-hover:fill-[#7b11f8] ease-in-out duration-200" d="M29.37 28.5H23.16V18.57H30.57C34.35 18.57 36.45 20.25 36.45 23.34C36.45 26.7 33.96 28.5 29.37 28.5ZM30.48 31.89H23.16V42.81H30.84C35.52 42.81 37.98 40.92 37.98 37.32C37.98 33.72 35.43 31.89 30.48 31.89ZM60 9.93V50.07C60 55.5 55.5 60 50.07 60H9.93C4.5 60 0 55.5 0 50.07V9.93C0 4.5 4.5 0 9.93 0H50.07C55.5 0 60 4.5 60 9.93ZM42 37.5C42 33.36 39.24 30.39 35.01 29.85V29.67C38.01 29.13 40.38 26.13 40.38 22.89C40.38 18.24 36.78 15.15 31.5 15.15H19.29V46.23H31.41C38.04 46.23 42 42.96 42 37.5Z" fill="black" />
                                        </svg>
                                        <p>BootStrap</p>
                                    </div>
                                    <div className="group hover:scale-125 ease-in-out duration-200">
                                        <svg className="ml-auto mr-auto" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_100_86)">
                                                <path className="group-hover:fill-[#44a8b3] ease-in-out duration-200" d="M31.0001 10.3333C26.7593 10.3333 23.1137 11.4782 20.2534 13.9293C17.4097 16.368 15.5538 19.9102 14.5205 24.3288C14.4108 24.7968 14.4676 25.2883 14.6813 25.7189C14.8949 26.1495 15.2519 26.4921 15.6909 26.6879C16.1299 26.8836 16.6234 26.9202 17.0865 26.7914C17.5495 26.6626 17.9532 26.3764 18.2281 25.9821C19.5342 24.1138 20.8403 22.9937 22.0969 22.415C23.3121 21.857 24.6223 21.7454 26.1269 22.1464C27.6397 22.5514 28.8135 23.7418 30.6529 25.7424L30.7149 25.8085C32.1037 27.3172 33.7942 29.1565 36.1089 30.5866C38.5145 32.0705 41.5029 33.0666 45.4667 33.0666C49.7075 33.0666 53.3531 31.9217 56.2134 29.4706C59.0571 27.032 60.9171 23.4897 61.9463 19.0712C62.056 18.6032 61.9991 18.1116 61.7855 17.6811C61.5719 17.2505 61.2149 16.9079 60.7759 16.7121C60.3369 16.5163 59.8434 16.4797 59.3803 16.6085C58.9173 16.7373 58.5136 17.0235 58.2387 17.4178C56.9326 19.2861 55.6265 20.4062 54.3699 20.9849C53.1547 21.5429 51.8445 21.6545 50.3399 21.2536C48.8271 20.8485 47.6533 19.6581 45.8139 17.6576L45.7519 17.5914C44.3631 16.0828 42.6726 14.2434 40.3579 12.8133C37.9523 11.3294 34.9639 10.3333 31.0001 10.3333ZM16.5334 28.9333C12.2926 28.9333 8.64699 30.0782 5.78673 32.5293C2.94299 34.968 1.08713 38.5102 0.0537928 42.9288C-0.0558845 43.3967 0.000982716 43.8883 0.214609 44.3189C0.428234 44.7495 0.785258 45.0921 1.22424 45.2879C1.66323 45.4836 2.15671 45.5202 2.61978 45.3914C3.08286 45.2626 3.48655 44.9764 3.76139 44.5821C5.06753 42.7138 6.37366 41.5937 7.63019 41.015C8.84539 40.457 10.1557 40.3454 11.6602 40.7464C13.173 41.1514 14.3469 42.3418 16.1862 44.3424L16.2482 44.4085C17.637 45.9172 19.3275 47.7565 21.6422 49.1866C24.0478 50.6705 27.0362 51.6666 31.0001 51.6666C35.2409 51.6666 38.8865 50.5217 41.7467 48.0706C44.5905 45.632 46.4505 42.0897 47.4797 37.6712C47.5893 37.2032 47.5325 36.7116 47.3188 36.2811C47.1052 35.8505 46.7482 35.5079 46.3092 35.3121C45.8702 35.1163 45.3767 35.0797 44.9137 35.2085C44.4506 35.3373 44.0469 35.6235 43.7721 36.0178C42.4659 37.8861 41.1598 39.0062 39.9033 39.5849C38.6881 40.1429 37.3778 40.2545 35.8733 39.8536C34.3605 39.4485 33.1866 38.2581 31.3473 36.2576L31.2853 36.1914C29.9006 34.6828 28.2059 32.8434 25.8913 31.4133C23.4857 29.9253 20.4973 28.9333 16.5334 28.9333Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_100_86">
                                                    <rect width="62" height="62" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Tailwind</p>
                                    </div>
                                    <div className="group hover:scale-125 ease-in-out duration-200">
                                        <svg className="ml-auto mr-auto" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="group-hover:fill-[#cd6799] ease-in-out duration-200" d="M30.826 35.6469C29.9091 36.0681 28.9045 36.6171 26.8934 37.7209C26.1309 38.1498 25.3341 38.5787 24.5925 38.9828C24.5411 38.9313 24.4877 38.8665 24.4362 38.8131C20.4579 34.5622 13.0998 31.5599 13.4124 25.8506C13.5287 23.7709 14.2435 18.3114 27.5434 11.6815C38.4891 6.2868 47.1987 7.7813 48.7028 11.0963C50.8645 15.8219 44.0344 24.6154 32.7303 25.8907C31.4792 26.1444 30.1871 26.1138 28.9494 25.801C27.7118 25.4882 26.5603 24.9013 25.58 24.0835C24.9814 23.4335 24.8918 23.3954 24.6707 23.525C24.3066 23.7156 24.5411 24.3047 24.6707 24.6421C25.1019 25.4228 25.6852 26.1091 26.3862 26.6605C27.0872 27.2118 27.8917 27.6171 28.752 27.8522C33.2004 28.8137 37.8385 28.3543 42.0118 26.5388C48.8629 23.8872 54.2118 16.5157 52.6449 10.3357C51.0723 4.06983 40.6718 2.00346 30.8317 5.49952C24.6693 7.57618 18.9758 10.8452 14.0757 15.1204C8.65437 20.191 7.79656 24.5982 8.14731 26.4435C9.40925 32.9953 18.4411 37.2595 22.0629 40.4182C21.8723 40.523 21.7122 40.6088 21.5692 40.6908C19.7621 41.5886 12.8729 45.1896 11.1554 48.9982C9.20528 53.314 11.468 56.4078 12.9625 56.8234C15.2147 57.3629 17.5792 57.1855 19.7257 56.3161C21.8723 55.4467 23.6937 53.9286 24.9357 51.9739C25.9903 50.353 26.638 48.5013 26.8235 46.5764C27.009 44.6514 26.7269 42.7102 26.0013 40.9176C26.4294 40.5761 26.886 40.2719 27.3661 40.0084C28.2888 39.4632 29.1675 38.9256 29.9472 38.51C32.6167 37.2597 35.5299 36.6158 38.4777 36.6248C44.6653 37.353 45.8872 41.2131 45.6528 42.8391C45.5431 43.416 45.3111 43.9628 44.9724 44.4425C44.6338 44.9222 44.1962 45.3239 43.6893 45.6204C43.2604 45.893 43.1175 45.9845 43.1556 46.1789C43.2071 46.4648 43.4148 46.4515 43.7789 46.4C44.7086 46.1062 45.5276 45.538 46.1285 44.7702C46.7293 44.0023 47.0838 43.0707 47.1454 42.0976C47.336 38.2851 43.7008 34.1028 37.2653 34.1409C35.3383 34.1442 33.4306 34.5244 31.6495 35.2599C31.3635 35.3781 31.0859 35.5052 30.8164 35.6411L30.826 35.6469ZM21.6283 50.59C19.5734 52.826 16.714 53.6705 15.4788 52.9556C14.1444 52.1931 14.6724 48.8858 17.1944 46.5201C18.688 45.1743 20.3025 43.9689 22.0172 42.9192C22.3165 42.7286 22.7587 42.477 23.2906 42.1567L23.4335 42.0785L23.7462 41.8879C24.1959 43.396 24.2369 44.9965 23.8647 46.5255C23.4926 48.0546 22.7208 49.4573 21.6283 50.59Z" fill="black" />
                                        </svg>
                                        <p>Sass</p>
                                    </div>
                                    <div className="group hover:scale-125 ease-in-out duration-200">
                                        <svg className="ml-auto mr-auto" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="group-hover:fill-[#007fff] ease-in-out duration-200" d="M0.0968628 33.2281V6.4906L23.25 19.8594V28.7718L7.79843 19.8594V37.6843L0.0968628 33.2281ZM23.25 19.8594L46.4516 6.4906V33.2765L31 42.1406L23.25 37.6843L38.75 28.7718V19.8594L23.25 28.7718V19.8594Z" fill="black" />
                                            <path className="group-hover:fill-[#1c7fb6] ease-in-out duration-200" d="M23.25 37.6844V46.5968L38.75 55.5093V46.5968L23.25 37.6844ZM38.75 55.5093L61.9031 42.1406V24.3156L54.1531 28.7719V37.6844L38.75 46.5968V55.5093ZM54.2016 19.8594V10.9469L61.9516 6.4906V15.4031L54.2016 19.8594Z" fill="black" />
                                        </svg>
                                        <p>MaterialUI</p>
                                    </div>
                                </div>

                                <div className={`${(state === "backEnd") ? "flex" : "hidden"} gap-10 text-center font-roboto-condensed tracking-wider text-xl`}>
                                    <div className="group hover:scale-125 ease-in-out duration-200">
                                        <svg className="ml-auto mr-auto" width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_102_102)">
                                                <path className="group-hover:fill-[#83cd29] ease-in-out duration-200" d="M33.5 66.8772C32.5452 66.8772 31.6575 66.6287 30.8283 66.1988L22.3724 61.3469C21.1022 60.6713 21.7387 60.4257 22.1211 60.3028C23.8352 59.7501 24.1535 59.6272 25.9345 58.6418C26.1244 58.5189 26.3812 58.5804 26.571 58.7032L33.0561 62.4524C33.3073 62.5752 33.6284 62.5752 33.8182 62.4524L59.1861 48.2596C59.4373 48.1367 59.5658 47.8911 59.5658 47.584V19.2597C59.5658 18.9527 59.4401 18.707 59.1861 18.5842L33.8182 4.45553C33.5642 4.3327 33.2459 4.3327 33.0561 4.45553L7.68821 18.5842C7.43417 18.707 7.30575 19.0141 7.30575 19.2597V47.584C7.30575 47.8297 7.43417 48.1367 7.68821 48.2596L14.6171 52.1316C18.3691 53.9741 20.7197 51.8245 20.7197 49.6749V21.7192C20.7197 21.3507 21.038 20.9822 21.4846 20.9822H24.7258C25.1082 20.9822 25.4879 21.2893 25.4879 21.7192V49.6722C25.4879 54.5269 22.7548 57.352 17.9867 57.352C16.5238 57.352 15.3793 57.352 12.1381 55.8166L5.46325 52.1316C4.65893 51.6893 3.98725 51.0403 3.51759 50.2517C3.04793 49.463 2.79732 48.5633 2.79163 47.6454V19.3212C2.79163 17.4787 3.80779 15.759 5.46325 14.8377L30.8311 0.642112C31.657 0.218577 32.5718 -0.00231934 33.5 -0.00231934C34.4281 -0.00231934 35.3429 0.218577 36.1688 0.642112L61.5395 14.8349C63.1921 15.7562 64.2083 17.4759 64.2083 19.3184V47.6426C64.2083 49.4851 63.1921 51.2048 61.5395 52.1288L36.1688 66.3189C35.3265 66.684 34.418 66.8722 33.5 66.8716V66.8772ZM41.3194 47.3997C30.1946 47.3997 27.9055 42.4864 27.9055 38.3073C27.9055 37.9388 28.2237 37.5703 28.6676 37.5703H31.9729C32.3554 37.5703 32.6708 37.8159 32.6708 38.1844C33.1817 41.4395 34.6445 43.0364 41.3836 43.0364C46.7241 43.0364 49.0132 41.8694 49.0132 39.1057C49.0132 37.5089 48.3768 36.3419 40.0492 35.5435C33.1175 34.8652 28.796 33.3939 28.796 28.0479C28.796 23.0704 33.1175 20.1196 40.3675 20.1196C48.5052 20.1196 52.5112 22.8247 53.0193 28.7235C53.0136 28.9232 52.9463 29.1163 52.8267 29.2762C52.701 29.3991 52.5112 29.5219 52.3186 29.5219H49.0132C48.8527 29.518 48.6977 29.462 48.5718 29.3623C48.4459 29.2625 48.3559 29.1246 48.3153 28.9692C47.5504 25.5912 45.5795 24.4829 40.3675 24.4829C34.5161 24.4829 33.8182 26.4483 33.8182 27.9223C33.8182 29.7062 34.6445 30.2589 42.5282 31.2416C50.3477 32.2242 54.0355 33.6368 54.0355 38.9187C53.9713 44.3289 49.3957 47.3997 41.3194 47.3997Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_102_102">
                                                    <rect width="67" height="67" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Node Js</p>
                                    </div>
                                    <div className="group hover:scale-125 ease-in-out duration-200">
                                        <svg className="ml-auto mr-auto" width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_102_104)">
                                                <path className="group-hover:fill-[#adc8de] ease-in-out duration-200" d="M69 53.4405C67.9958 53.8203 66.8873 53.8195 65.8836 53.4382C64.88 53.0568 64.0506 52.3213 63.5519 51.3705L53.6332 37.6539L52.1957 35.7363L40.687 51.3878C40.2184 52.2987 39.434 53.0078 38.4805 53.3824C37.527 53.757 36.4697 53.7715 35.5063 53.4233L50.3355 33.5283L36.5413 15.5566C37.5331 15.1992 38.6179 15.1945 39.6128 15.5432C40.6078 15.892 41.4522 16.5729 42.0038 17.4714L52.2848 31.3576L62.6233 17.5289C63.0956 16.6341 63.8802 15.9441 64.8279 15.5901C65.7757 15.236 66.8205 15.2425 67.7638 15.6084L62.4105 22.7125L55.1598 32.1511C54.9584 32.3307 54.7973 32.5509 54.687 32.7971C54.5767 33.0434 54.5196 33.3102 54.5196 33.58C54.5196 33.8498 54.5767 34.1166 54.687 34.3629C54.7973 34.6091 54.9584 34.8293 55.1598 35.0089L68.9713 53.4434L69 53.4405ZM0.00578449 33.281L1.21328 27.3154C4.53104 15.5193 18.055 10.6116 27.3585 17.9141C32.8067 22.195 34.1665 28.2555 33.8992 35.0865H3.20854C2.71116 47.2851 11.5144 54.6509 22.77 50.8875C24.5947 50.2307 26.2279 49.1316 27.5234 47.6885C28.819 46.2455 29.7363 44.5036 30.1933 42.619C30.7884 40.7043 31.7688 40.3765 33.5685 40.9285C33.2686 43.2641 32.443 45.5013 31.1537 47.4718C29.8645 49.4422 28.1452 51.0947 26.1252 52.3049C22.7885 54.13 18.9602 54.8534 15.1876 54.3716C11.415 53.8899 7.89133 52.2276 5.12041 49.6225C2.38062 46.5387 0.724754 42.6434 0.40541 38.5308C0.40541 37.8551 0.17541 37.2226 0.0201595 36.616C0.00616408 35.5054 -0.000544402 34.3946 3.44893e-05 33.2839L0.00578449 33.281ZM3.24591 32.4588H31.0012C30.8287 23.6153 25.2483 17.342 17.8049 17.2845C9.51916 17.1695 3.59091 23.3048 3.22578 32.4185L3.24591 32.4588Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_102_104">
                                                    <rect width="69" height="69" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Express Js</p>
                                    </div>
                                </div>

                                <div className={`${(state === "dataBase") ? "flex" : "hidden"} gap-10 text-center font-roboto-condensed tracking-wider text-xl`}>
                                    <div className="group hover:scale-125 ease-in-out duration-200">
                                        <svg className="ml-auto mr-auto" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_102_110)">
                                                <path className="group-hover:fill-[#50aa4d] ease-in-out duration-200" d="M45.848 25.48C42.4773 10.6 34.5093 5.70933 33.6533 3.84C32.9066 2.78933 32.24 1.296 31.6933 0C31.5973 1.32 31.5466 1.82667 30.2986 3.15733C28.3706 4.66667 18.464 12.976 17.6586 29.8773C16.9066 45.6427 29.0453 55.0373 30.6933 56.2347L30.88 56.368C31.2231 58.906 31.5165 61.4505 31.76 64H33.0426C33.3464 61.2484 33.8004 58.5154 34.4026 55.8133C35.5146 55.024 36.0133 54.5787 36.6693 53.9653C39.7759 51.0914 42.2447 47.5976 43.9163 43.7097C45.5878 39.8218 46.4249 35.6264 46.3733 31.3947C46.4 29.224 46.0986 26.9627 45.848 25.48ZM31.6186 47.3333C31.6186 47.3333 31.6186 25.224 32.352 25.2267C32.92 25.2267 33.6586 53.7467 33.6586 53.7467C32.6426 53.6267 31.6186 49.0533 31.6186 47.3333Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_102_110">
                                                    <rect width="64" height="64" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>MongoDB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}