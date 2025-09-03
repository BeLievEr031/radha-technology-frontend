import Title from "../../components/Title"
import QuoteImg from "../../assets/quote.svg"
import Review1Img from "../../assets/review1.png"
function Review() {
    return (
        <section className="px-30 bg-secondary-black py-20 font-outfit">
            <Title>Testimonials</Title>
            <h1 className="text-8xl mt-2 font-semibold">What my clients say</h1>

            <div className="pt-20 grid grid-cols-[2fr_1fr] gap-x-20 items-center">
                <div>
                    <img src={QuoteImg} alt={QuoteImg} />
                    <p className="text-[32px] text-primary-gray font-semibold pt-10">
                        Working with Radha Technology is a fantastic experience. He truly understood our vision and turned our dream into a website. The attention to detail and dedication were beyond my imagniation.
                    </p>
                    <div className="pt-10 text-primary-gray">
                        <p className="text-2xl font-medium">Cameron Williamson</p>
                        <p>CEO, ISHKON</p>
                    </div>
                </div>

                <div className="rotate-6 w-[334px] h-[335px] bg-red-500">
                    <img src={Review1Img} alt={Review1Img}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default Review