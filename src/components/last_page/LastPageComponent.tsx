import fallingLaptop from "../../picture/last_page/last_page.webp"
import last_page_background from "../../picture/last_page/last_page_background.webp"


export default function LastPageComponent() {
    return (
        <>
            <section className=" relative grid snap-center shrink-0 bg-last_page_background bg-cover bg-center w-[96vw] h-[93vh] m-[5%] overflow-hidden"
                style={{ backgroundImage: `url(${last_page_background})` }}>
                <img className=" absolute z-10 left-[50%] translate-x-[-50%] w-[80%]" src={fallingLaptop} alt="" />
                <div className=" relative z-20 place-self-center">
                    <h1 className=" font-roboto-condensed text-5xl tracking-[0.15em] text-white underline underline-offset-8 mb-10 text-center">CONTACT ME</h1>
                    <div className="grid grid-cols-2 gap-5">
                        <button className=" p-5 bg-[#C4C4C4]">
                            <a className="grid place-items-center" href="src\resume\Cruz,Jonathan D. Resume.pdf" download="Cruz,Jonathan D. Resume.pdf">
                                <p className="font-roboto-condensed text-5xl tracking-[0.15em]">RESUME</p>
                                <svg width="136" height="171" viewBox="0 0 136 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.67333 0.0856476C2.60933 0.313644 1.62133 0.99765 0.836 2.03632L0 3.12566V85.307V167.488L0.633333 168.426C0.962667 168.932 1.672 169.616 2.204 169.92L3.16667 170.528H67.7667H132.367L133.253 169.844C133.76 169.464 134.444 168.78 134.773 168.324L135.407 167.488L135.331 107.955C135.255 50.955 135.229 48.3456 134.799 46.9016C133.811 43.7096 132.797 42.2657 128.06 37.427C123.753 33.019 123.576 32.8416 117.8 26.787C111.264 19.947 111.441 20.1497 105.159 13.5883C102.119 10.447 98.9773 7.15366 98.1667 6.26698C95.5827 3.50565 93.1253 1.88432 89.5533 0.516312C88.3373 0.060318 86.9187 0.0349884 46.2333 0.00964355C23.104 -0.015686 3.952 0.00964355 3.67333 0.0856476ZM80.5853 10.751L81.3453 11.435L81.396 31.7016L81.4467 51.9683L82.004 52.9817C82.308 53.539 82.8907 54.223 83.2707 54.5016C83.9547 54.983 84.4867 55.0083 102.6 55.135C116.407 55.2363 121.397 55.3377 121.904 55.5657C122.284 55.743 123.044 56.351 123.601 56.9083C124.437 57.7697 124.64 58.175 124.767 59.2643C124.843 59.999 124.893 82.7737 124.843 109.931L124.767 159.255L124.057 159.863C123.576 160.268 122.867 160.547 122.031 160.648C120.08 160.876 12.3373 160.674 11.9067 160.446C11.704 160.344 11.324 159.964 11.0707 159.635C10.6653 159.052 10.64 155.126 10.64 85.2563V11.4603L11.324 10.751L12.008 10.0417H45.904H79.8L80.5853 10.751ZM97.2547 20.099C104.677 27.8003 106.172 29.3457 107.895 31.195C108.933 32.3096 111.745 35.2483 114.101 37.731C116.483 40.239 118.509 42.3923 118.611 42.5443C118.94 43.051 118.839 44.191 118.408 44.5963C118.053 44.951 116.533 45.0016 105.513 45.0016H92.9987L92.492 44.343C91.96 43.6843 91.96 43.431 91.96 31.3976C91.96 17.211 91.9093 17.5403 94.1133 17.4137C94.4427 17.3883 95.532 18.3257 97.2547 20.099Z" fill="black" />
                                    <path d="M45.7267 27.3949C40.0013 28.7883 35.6947 34.2349 35.72 40.0869C35.7453 42.5189 36.784 46.2176 38.152 48.7003C40.8373 53.5389 44.764 56.4016 48.716 56.4016C51.68 56.4016 54.264 55.1096 56.7973 52.3736C58.0387 51.0563 60.04 48.0416 60.04 47.5349C60.04 47.4083 60.192 47.0029 60.3947 46.5976C61.3573 44.6469 61.6613 43.1016 61.6613 40.0616C61.636 37.3509 61.56 36.8443 60.952 35.3243C59.7107 32.2843 57.2533 29.6496 54.3653 28.2563C51.9587 27.0909 48.3613 26.7363 45.7267 27.3949Z" fill="black" />
                                    <path d="M37.3667 60.9617C37.2653 61.1137 37.3413 61.4177 37.5187 61.6457C37.696 61.8483 37.9747 62.2537 38.1267 62.507C38.38 62.9883 41.0653 67.295 41.8507 68.511C42.104 68.891 42.408 69.423 42.56 69.7017C42.712 69.9803 43.016 70.5123 43.2693 70.8923C43.4973 71.247 44.536 72.919 45.5493 74.5657C47.4747 77.707 47.9813 78.4417 48.184 78.4417C48.26 78.4417 48.9947 77.3523 49.8053 76.0097C50.6413 74.6923 51.5027 73.299 51.7307 72.919C51.984 72.539 52.288 72.007 52.44 71.7283C52.592 71.4497 52.896 70.9177 53.1493 70.5377C53.656 69.727 56.392 65.3697 56.8227 64.635C57 64.3563 57.5067 63.5457 57.9627 62.8363C59.4067 60.531 60.192 60.7083 48.1587 60.7083C41.04 60.7083 37.468 60.7843 37.3667 60.9617Z" fill="black" />
                                    <path d="M62.1173 61.3922C61.94 61.4682 61.6613 61.7722 61.5347 62.0762C61.408 62.3549 61.104 62.9122 60.8507 63.2922C60.3693 64.0269 56.772 69.8535 56.3667 70.5375C56.2147 70.7655 55.8093 71.4242 55.48 71.9815C55.1253 72.5642 54.72 73.2482 54.5427 73.5015C53.884 74.5909 50.5147 80.0122 50.1093 80.6709C49.172 82.1402 48.8933 82.6469 48.7413 83.0775C48.64 83.3309 48.412 83.5082 48.184 83.4575C47.88 83.3815 45.7013 80.2402 44.84 78.5682C44.688 78.2895 44.384 77.7575 44.1307 77.3775C43.7 76.6935 41.04 72.4375 40.4573 71.4749C40.28 71.2215 39.8747 70.5375 39.52 69.9549C39.1907 69.3975 38.76 68.7135 38.5827 68.4349C38.4053 68.1562 38.152 67.7002 38 67.4215C36.8347 65.2175 34.4533 61.8482 34.0227 61.7722C33.3387 61.6709 30.8307 63.1655 29.3613 64.5589C27.7907 66.0282 26.828 67.3455 25.916 69.3215C24.6747 72.0322 24.5227 73.5775 24.624 83.2549L24.7 91.9949H48.7667H72.8333L72.9093 82.4949C72.9853 72.0575 72.9347 71.8042 71.3893 68.6882C69.7173 65.3442 67.0067 62.9375 63.3333 61.5695C62.852 61.3669 62.4467 61.2402 62.4467 61.2402C62.4467 61.2402 62.2947 61.3162 62.1173 61.3922Z" fill="black" />
                                    <path d="M25.46 107.955C25.0547 108.132 24.4213 108.588 24.0667 108.968C23.5347 109.551 23.4333 109.88 23.4333 111.248C23.4333 112.591 23.5347 112.971 24.0413 113.503C25.46 114.998 23.5853 114.922 55.7333 114.922C84.968 114.922 85.196 114.922 86.108 114.39C88.1347 113.25 88.7427 111.071 87.5267 109.272C86.2853 107.474 88.312 107.575 55.632 107.6C31.7933 107.6 26.068 107.676 25.46 107.955Z" fill="black" />
                                    <path d="M25.5613 123.738C23.8387 124.574 23.4333 125.156 23.4333 126.904C23.4333 128.779 23.9907 129.691 25.612 130.426C26.6 130.856 28.12 130.882 55.708 130.882C83.2453 130.882 84.7907 130.856 85.7533 130.4C88.8693 129.007 88.9453 125.384 85.88 123.839L84.7653 123.282H55.6067C28.6013 123.307 26.3973 123.332 25.5613 123.738Z" fill="black" />
                                    <path d="M24.852 140.002C23.5853 140.939 23.2307 141.75 23.3827 143.371C23.5093 144.866 24.396 145.904 25.916 146.31C26.7013 146.538 34.9093 146.588 56.2653 146.538L85.5253 146.462L86.4373 145.828C86.944 145.499 87.5267 144.916 87.7547 144.536C88.692 142.94 87.932 140.66 86.108 139.748C85.1707 139.242 84.4867 139.242 55.5307 139.242H25.916L24.852 140.002Z" fill="black" />
                                </svg>
                            </a>
                        </button>
                        <div>
                            <button className="relative bg-[#0076B2] w-full h-[20%] mb-5 "
                                onClick={() => {
                                    window.open("https://www.linkedin.com/in/jonathan-cruz-47ab74267", "_blank")
                                }}>
                                <svg className=" top-[50%] translate-y-[-50%] absolute" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.7812 1.05461H4.21875C3.38917 1.04616 2.59013 1.36716 1.99694 1.94716C1.40376 2.52717 1.06489 3.3188 1.05469 4.14836V40.8585C1.06673 41.6868 1.40641 42.4767 1.9994 43.0552C2.59238 43.6337 3.39037 43.9537 4.21875 43.9452H40.7812C41.6109 43.9518 42.4094 43.6297 43.0023 43.0494C43.5951 42.469 43.9342 41.6775 43.9453 40.848V4.13781C43.9305 3.31068 43.5899 2.52283 42.9974 1.94549C42.4049 1.36815 41.6085 1.04799 40.7812 1.05461Z" fill="#0076B2" />
                                    <path d="M7.40391 17.1316H13.7707V37.6171H7.40391V17.1316ZM10.5891 6.93628C11.3193 6.93628 12.0331 7.15287 12.6403 7.55864C13.2474 7.96441 13.7205 8.54114 13.9998 9.21586C14.2791 9.89058 14.352 10.633 14.2093 11.3491C14.0666 12.0653 13.7146 12.723 13.198 13.2391C12.6814 13.7553 12.0234 14.1066 11.3071 14.2486C10.5908 14.3906 9.84844 14.317 9.17399 14.0371C8.49953 13.7572 7.92326 13.2835 7.51807 12.676C7.11287 12.0685 6.89697 11.3544 6.89766 10.6242C6.89859 9.64576 7.28792 8.70774 7.98009 8.01622C8.67226 7.32471 9.61065 6.93628 10.5891 6.93628ZM17.7645 17.1316H23.8676V19.9441H23.952C24.8027 18.3339 26.877 16.6359 29.9742 16.6359C36.4219 16.6218 37.6172 20.8652 37.6172 26.3671V37.6171H31.2504V27.6503C31.2504 25.2773 31.2082 22.2222 27.9422 22.2222C24.6762 22.2222 24.1207 24.8097 24.1207 27.4957V37.6171H17.7645V17.1316Z" fill="white" />
                                </svg>
                                <p className="text-center font-roboto-condensed text-2xl tracking-[0.15em] text-white">LINKEDIN</p>
                            </button>
                            <button className="relative bg-[#303030] w-full h-[20%] mb-5 "
                                onClick={() => {
                                    window.open("https://github.com/jc2100ph", "_blank")
                                }}>
                                <svg className=" top-[50%] translate-y-[-50%] absolute" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.15 5.81063C37.7756 4.43625 36.1219 3.75 34.1869 3.75H10.7738C8.83875 3.75 7.185 4.43625 5.81063 5.81063C4.43625 7.185 3.75 8.83875 3.75 10.7738V34.1869C3.75 36.1219 4.43625 37.7756 5.81063 39.15C7.185 40.5244 8.83875 41.2106 10.7738 41.2106H16.2375C16.5938 41.2106 16.8619 41.1975 17.0419 41.1731C17.2513 41.1311 17.4403 41.0194 17.5781 40.8563C17.7563 40.6688 17.8463 40.3969 17.8463 40.0406L17.8331 38.3812C17.8256 37.3237 17.8219 36.4875 17.8219 35.8687L17.2594 35.9662C16.9031 36.0319 16.4531 36.06 15.9075 36.0525C15.3388 36.042 14.7719 35.9849 14.2125 35.8819C13.617 35.7719 13.0564 35.5212 12.5775 35.1506C12.0759 34.7712 11.7018 34.248 11.505 33.6506L11.2613 33.0881C11.0558 32.6444 10.7977 32.227 10.4925 31.845C10.1437 31.3894 9.78937 31.0819 9.43125 30.9187L9.2625 30.7969C9.14483 30.7126 9.0378 30.6144 8.94375 30.5044C8.85392 30.4023 8.77997 30.2872 8.72438 30.1631C8.67563 30.0487 8.71688 29.955 8.84625 29.8819C8.9775 29.8069 9.21187 29.7712 9.555 29.7712L10.0425 29.8463C10.3669 29.91 10.77 30.105 11.2481 30.4294C11.732 30.7593 12.1362 31.1929 12.4313 31.6987C12.8063 32.3644 13.2563 32.8725 13.785 33.2231C14.3138 33.5719 14.8462 33.7481 15.3825 33.7481C15.9187 33.7481 16.3819 33.7069 16.7738 33.6262C17.1527 33.5479 17.5209 33.4245 17.8706 33.2587C18.0169 32.1712 18.4144 31.3312 19.065 30.7463C18.222 30.6636 17.3864 30.5169 16.5656 30.3075C15.7646 30.0875 14.9943 29.7681 14.2725 29.3569C13.5173 28.9457 12.8503 28.3902 12.3094 27.7219C11.79 27.0712 11.3625 26.2181 11.0287 25.1625C10.6969 24.105 10.53 22.8844 10.53 21.5025C10.53 19.5356 11.1713 17.8612 12.4556 16.4775C11.8556 15 11.9119 13.3406 12.6263 11.505C13.0988 11.3569 13.7981 11.4675 14.7244 11.8331C15.6506 12.1987 16.3294 12.5119 16.7606 12.7706C17.1919 13.0331 17.5369 13.2525 17.7975 13.4306C19.3218 13.0064 20.8971 12.7932 22.4794 12.7969C24.09 12.7969 25.65 13.0087 27.1631 13.4306L28.0894 12.8456C28.8018 12.4178 29.5533 12.0587 30.3338 11.7731C31.1963 11.4469 31.8525 11.3588 32.31 11.505C33.0413 13.3425 33.105 15 32.5031 16.4794C33.7875 17.8612 34.4306 19.5356 34.4306 21.5044C34.4306 22.8862 34.2638 24.1106 33.93 25.1737C33.5981 26.2387 33.1669 27.0919 32.6381 27.735C32.0877 28.3948 31.4179 28.945 30.6637 29.3569C29.8762 29.7956 29.1112 30.1125 28.3706 30.3075C27.5499 30.5176 26.7144 30.6649 25.8713 30.7481C26.715 31.4794 27.1388 32.6325 27.1388 34.2094V40.0406C27.1388 40.3162 27.1781 40.5394 27.2606 40.71C27.2985 40.7922 27.3526 40.8659 27.4196 40.9268C27.4866 40.9877 27.5652 41.0345 27.6506 41.0644C27.8306 41.1281 27.9881 41.1694 28.1269 41.1844C28.2656 41.2031 28.4644 41.2088 28.7231 41.2088H34.1869C36.1219 41.2088 37.7756 40.5225 39.15 39.1481C40.5225 37.7756 41.2106 36.12 41.2106 34.185V10.7738C41.2106 8.83875 40.5244 7.185 39.15 5.81063Z" fill="white" />
                                </svg>
                                <p className="text-center font-roboto-condensed text-2xl tracking-[0.15em] text-white">GITHUB</p>
                            </button>
                            <button className="relative bg-[#FF0000] w-full h-[20%] mb-5 "
                                onClick={() => {
                                    window.open("https://www.youtube.com/channel/UCoX86M8J1Z6mI-L3N3c7CiQ", "_blank")
                                }}>
                                <svg className=" top-[50%] translate-y-[-50%] absolute" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.3333 35.0001L35.4433 28.0001L23.3333 21.0001V35.0001ZM50.3067 16.7301C50.61 17.8267 50.82 19.2967 50.96 21.1634C51.1233 23.0301 51.1933 24.6401 51.1933 26.0401L51.3333 28.0001C51.3333 33.1101 50.96 36.8667 50.3067 39.2701C49.7233 41.3701 48.37 42.7234 46.27 43.3067C45.1733 43.6101 43.1667 43.8201 40.0867 43.9601C37.0533 44.1234 34.2767 44.1934 31.71 44.1934L28 44.3334C18.2233 44.3334 12.1333 43.9601 9.73 43.3067C7.63 42.7234 6.27666 41.3701 5.69333 39.2701C5.39 38.1734 5.18 36.7034 5.04 34.8368C4.87666 32.9701 4.80666 31.3601 4.80666 29.9601L4.66666 28.0001C4.66666 22.8901 5.04 19.1334 5.69333 16.7301C6.27666 14.6301 7.63 13.2767 9.73 12.6934C10.8267 12.3901 12.8333 12.1801 15.9133 12.0401C18.9467 11.8767 21.7233 11.8067 24.29 11.8067L28 11.6667C37.7767 11.6667 43.8667 12.0401 46.27 12.6934C48.37 13.2767 49.7233 14.6301 50.3067 16.7301Z" fill="white" />
                                </svg>
                                <p className="text-center font-roboto-condensed text-2xl tracking-[0.15em] text-white">YOUTUBE</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}