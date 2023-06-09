import speedLines from "../../picture/third_page/third_page_background-enhance_webp.webp"


export default function ThirdPageComponent() {
    return (
        <>
            <section className=" relative snap-center shrink-0 bg-white w-[96vw] h-[93vh] m-[5%] overflow-hidden">
                <img className=" absolute" src={speedLines} alt="" />

            </section>
        </>
    )
}