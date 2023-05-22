import React from "react"

export default function MainText() {
    const mainTextRef = React.useRef(null)

    React.useEffect(() => {
        if (mainTextRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        mainTextRef.current.classList.add("show-element")
                    }
                },
                { rootMargin: "0px 0px -100px 0px" }
            )

            observer.observe(mainTextRef.current)

            return () => observer.unobserve(mainTextRef.current)
        }
    }, [mainTextRef.current])

    return (
        <section className="maintext-section" ref={mainTextRef}>
            <h2>Connect with People Anywhere, Anytime</h2>
            <p>
                Welcome to ChatON, where you can easily connect with people from around the world at any time of day. Whether you're looking for new friends, searching for someone to share your interests with, or just want to chat and have a good time, our app has got you covered.
                <br></br>
                With our easy-to-use interface and robust features, you'll be able to stay in touch with loved ones, make new connections, and keep up with all your important conversations. Plus, our app is available on all devices, so you can stay connected no matter where you are.
                <br></br>
                So why wait? Download ChatON today and start connecting with people from all corners of the world!
            </p>
        </section>
    )
}