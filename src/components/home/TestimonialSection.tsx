



const TestimonialSection = () => {


    const testimonies = [
        {
            id: 0,
            name: "Manish Gujral",
            position: "Founder, InfraTech",
            image: "https://i.pravatar.cc/100",
            review: "I cannot thank enough the dev agency team that helped me start my fin tech business. Their expertise, guidance, and support have been instrumental in helping me grow and scale my business. The dev agency not only provided me with a top-notch platform that offers real-time stats and analytics, but also with a stellar customer support team that is available 24/7 to answer any questions and assist with any issues. Their attention to detail, professionalism, and commitment to excellence are second to none. With the dev agency's help, my business is now thriving, and I'm excited about its future. I highly recommend the dev agency to anyone looking for a partner to start, grow, and scale their business."
        }
    ]


    return (
        <section className="container mt-5 mx-auto">
            <p className="text-primary text-sm tracking-widest font-semibold uppercase">testimonial</p>
            <h3 className="text-4xl leading-normal font-semibold"> What&apos;s our client say? <span></span></h3>
            <p className="text-muted text-xs lg:text-sm ">Don't take our word for it . Hear it from our happy clients</p>

            <div className="mt-5">
                {testimonies.map(item => (
                    <article key={item.id} className="bg-neutral-900 text-sm text-center max-w-4xl mx-auto p-10 rounded-md backdrop-blur-md bg-opacity-60 shadow-md">
                        <p className="leading-6">{item.review}</p>

                        <div className="flex flex-col mt-4 items-center">
                            <img src={item.image} className="w-10 h-10 rounded-full" />
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-stone-400 text-xs ">{item.position}</p>
                        </div>
                    </article>
                ))}

            </div>

        </section>
    )
}


export default TestimonialSection