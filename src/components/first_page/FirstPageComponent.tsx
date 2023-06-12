import front_page_laptop_pic from "../../picture/first_page/front_page.webp"
import first_page_background from "../../picture/first_page/first_page_background_enhance_webp.webp"

export default function FirstPageComponent() {
    return (
        <>
            <section className="grid grid-cols-2 snap-center bg-center bg-cover shrink-0 w-[96vw] h-[93vh] m-[5%]"
                style={{ backgroundImage: `url(${first_page_background})` }}>
                <div className="font-roboto-condensed place-self-center ml-[10%]">
                    <p className=" text-2xl tracking-wider text-[#767676] mb-2">Kamusta</p>
                    <p className=" text-5xl tracking-wider mb-2">I`m Jonathan Cruz </p>
                    <p className=" text-5xl tracking-wider font-bold text-[#FF2828] underline underline-offset-8 mb-5">A Full - Stack Web Developer</p>
                    <p className=" text-2xl tracking-wider text-[#767676] w-[90%]">
                        “Writing clean and understandable code, so that we can live in a
                        bug-free world, one line of code at a time.”
                    </p>
                </div>
                <div>
                    <img src={front_page_laptop_pic} alt="front page pic" />
                </div>
            </section>
        </>
    )
}
