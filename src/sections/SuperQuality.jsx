import { shoe8 } from "../assets/images"

import Button from "../components/Button"

const SuperQuality = () => {
    return (
        <section id="about-us" className="flex justify-between items-center max-container max-lg:flex-col gap-10 w-full">

            <div className="flex flex-1 flex-col">

                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">

                    We Provide You <span className="text-coral-red ">
                        Super
                    </span> <br />
                    <span className="text-coral-red ">
                        Quality
                    </span> Shoes

                </h2>

                <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear
                    is designed to elevate your experience, providing you with unmatched
                    quality, innovation, and a touch of elegance.
                </p>

                <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>

                <div className="mt-11">
                    <Button label="View Details" />
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img
                    src={shoe8}
                    alt="product detail"
                    width={570}
                    height={522}
                    className="object-contain "
                />
            </div>


            {/* <div className="flex-1 flex max-sm:flex-col justify-between items-center">
                <div className="w-[50%]">
                    <h2 className="text-4xl font-palanquin font-bold">
                        We Provide You <span className="text-coral-red">Super</span>
                        <br />
                        <span className="text-coral-red">Quality</span> Shoes
                    </h2>

                    <p className="pt-4 w-[80%]">
                        Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.

                        <p className="pt-5 pb-7">
                            Our dedication to detail and excellence ensures your satisfaction
                        </p>
                    </p>



                    <button className="any-btn ">
                        View Details
                    </button>
                </div>

                <div>
                    <img
                        src={shoe8}
                        alt="shoe collection"
                        width={400}
                        height={400}
                    />
                </div>

            </div> */}
        </section>
    )
}

export default SuperQuality
