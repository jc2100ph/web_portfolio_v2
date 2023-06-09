import speedLines from "../../picture/third_page/third_page_background-enhance_webp.webp"
import fallingLaptop from "../../picture/third_page/third_page.webp"


export default function ThirdPageComponent() {
    return (
        <>
            <section className=" relative snap-center shrink-0 bg-white w-[96vw] h-[93vh] m-[5%] overflow-hidden">
                <img className=" absolute z-10" src={speedLines} alt="" />

                <svg className="relative z-20 mt-10 ml-auto mr-auto" width="679" height="76" viewBox="0 0 679 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M678 38C678 38.9881 677.557 40.0553 676.507 41.2133C675.451 42.3769 673.832 43.5725 671.623 44.781C667.206 47.197 660.627 49.5587 652.065 51.8246C634.956 56.3522 610.153 60.4399 579.452 63.8763C518.061 70.7476 433.225 75 339.5 75C245.775 75 160.939 70.7476 99.5485 63.8763C68.8469 60.4399 44.0444 56.3522 26.9354 51.8246C18.373 49.5587 11.7944 47.197 7.37732 44.781C5.16799 43.5725 3.5491 42.3769 2.49339 41.2133C1.44272 40.0553 1 38.9881 1 38C1 37.0119 1.44272 35.9447 2.49339 34.7867C3.5491 33.6231 5.16799 32.4275 7.37732 31.219C11.7944 28.803 18.373 26.4413 26.9354 24.1754C44.0444 19.6478 68.8469 15.5601 99.5485 12.1237C160.939 5.25238 245.775 1 339.5 1C433.225 1 518.061 5.25238 579.452 12.1237C610.153 15.5601 634.956 19.6478 652.065 24.1754C660.627 26.4413 667.206 28.803 671.623 31.219C673.832 32.4275 675.451 33.6231 676.507 34.7867C677.557 35.9447 678 37.0119 678 38Z" stroke="black" stroke-width="2" />
                </svg>
                <h1 className="relative z-20 text-center font-roboto-condensed text-7xl font-bold tracking-[0.15em] mt-[2%]">PROJECTS</h1>
                <img className=" absolute z-20 ml-auto mr-auto w-[50%] top-0 left-[50%] translate-x-[-50%]" src={fallingLaptop} alt="" />

                <svg className="relative z-20 mt-[26%] ml-auto mr-auto" width="694" height="89" viewBox="0 0 694 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_123_161)">
                        <ellipse cx="339.5" cy="38" rx="339.5" ry="38" fill="#D9D9D9" />
                    </g>
                    <defs>
                        <filter id="filter0_d_123_161" x="0" y="0" width="694" height="89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="11" dy="9" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_123_161" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_123_161" result="shape" />
                        </filter>
                    </defs>
                </svg>

            </section>
        </>
    )
}