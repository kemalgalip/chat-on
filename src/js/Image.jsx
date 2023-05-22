import React from "react"
import chatonImage from "../img/chat-on-image.jpg"

export default function Image() {
    const imageRef = React.useRef(null)

    React.useEffect(() => {
        if (imageRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        imageRef.current.classList.add("show-element")
                    }
                },
                { rootMargin: "0px 0px -100px 0px" }
            )

            observer.observe(imageRef.current)

            return () => observer.unobserve(imageRef.current)
        }
    }, [imageRef.current])

    return (
        <section className="image-section">
            <h2 ref={imageRef}>Spread happiness with every chat</h2>
            <img src={chatonImage} width="2412" height="1357" />
        </section>
    )
}