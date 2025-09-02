import type { ReactNode } from "react"
import SparkleImg from "../assets/sparkle.webp"
const carousalItem = [
    "Designer", "Digital", "creative"
]
function Carousal() {
    return (
        <section className="py-10 bg-black/50 font-outfit overflow-hidden relative">
            <div className='flex overflow-hidden'>
                <div className='flex gap-x-5 overflow-hidden animate-carousal shrink-0 items-center'>
                    {
                        carousalItem.map((item) => {
                            return <CarousalItem>
                                {item}
                            </CarousalItem>
                        })
                    }
                </div>
                <div aria-hidden className='pl-10 flex gap-x-5 overflow-hidden animate-carousal shrink-0 items-center'>
                    {
                        carousalItem.map((item) => {
                            return <CarousalItem>
                                {item}
                            </CarousalItem>
                        })
                    }
                </div>
            </div>

            <div className="absolute top-0 left-0 h-full w-10 rounded-full bg-black /90 blur-xl">

            </div>
            <div className="absolute top-0 right-0 h-full w-10 rounded-full bg-black/90 blur-xl">

            </div>
        </section>
    )
}

function CarousalItem({ children }: { children: ReactNode }) {
    return <div className="flex items-center gap-x-5">
        <img src={SparkleImg}
            className="size-16 mt-1"
        />
        <p className="text-[115px] inline-block font-medium capitalize">{children}</p>
    </div>
}

export default Carousal