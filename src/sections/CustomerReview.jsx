import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReview = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-4xl text-center font-bold">
                What Our
                <span className="text-coral-red"> Customers </span>
                Say?
            </h3>

            <p className="mt-4 info-text m-auto text-center max-w-lg">
                Hear genuine stories from our satisfied customers about their
                exceptional experiences with us.
            </p>

            <div className="flex flex-1 mt-24 justify-evenly max-lg:flex-col gap-24">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.customerName}
                        imgURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                ))}
            </div>
        </section>
    )
}

export default CustomerReview
