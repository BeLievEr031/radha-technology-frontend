import CircleButton from "../../components/CircleButton";
import { Check } from "../../components/Icons"
import Title from "../../components/Title"

const pricingData: ICard[] = [
    {
        type: "Starter",
        price: "₹5,000",
        features: [
            "1–3 page website",
            "Mobile responsive design",
            "Basic SEO setup",
            "1-month support"
        ]
    },
    {
        type: "Growth",
        price: "₹10,000",
        features: [
            "Including starter plan",
            "Up to 7 pages with custom design",
            "CMS integration (WordPress or similar)",
            "Contact forms & lead capture",
            "Basic app (prototype / landing app)",
            "2-month support"
        ]
    },
    {
        type: "Enterprise",
        price: "Custom Pricing",
        features: [
            "Fully custom website or mobile app",
            "Unlimited pages / advanced features",
            "E-commerce or booking integration",
            "API & third-party integrations",
            "Dedicated account manager & support"
        ]
    }
];


function Pricing() {
    return (
        <section className="px-30 py-20 bg-secondary-black">
            <Title>Our Pricing</Title>
            <h1 className="text-8xl font-semibold mt-4">Plans That Fit Your Needs</h1>

            <div className="grid grid-cols-3 pt-14 gap-x-10">
                {
                    pricingData.map(function ({ features, price, type }, idx) {
                        return <PricingCard
                            key={idx}
                            features={features}
                            price={price}
                            type={type}
                        />
                    })
                }
            </div>

            <div className="flex justify-center pt-10">
                <CircleButton>
                    contact
                </CircleButton>
            </div>
        </section>
    )
}

interface ICard {
    type: string;
    price: string;
    features: string[]
}

function PricingCard({ features, price, type }: ICard) {
    return <div className="border border-primary-gray px-6 py-6 group hover:bg-primary cursor-pointer transition-colors ease-in-out duration-300">
        <div className="group-hover:text-black transition-all">
            <p className="text-6xl font-semibold">{type}</p>
            <p className="text-5xl font-semibold">{price}</p>
            <div className="pt-8">
                {
                    features.map(function (item, index) {
                        return <p className="flex items-center gap-x-1" key={index}>
                            <Check width={25} />
                            <span className="text-[18px]">{item}</span>
                        </p>
                    })
                }

            </div>

        </div>

    </div>
}

export default Pricing