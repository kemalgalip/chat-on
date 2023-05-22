import React from "react"
import downloadAppstore from "../img/download-appstore.png"
import downloadGoogle from "../img/download-google.png"

export default function Download() {
    const downloadRef = React.useRef(null)

    React.useEffect(() => {
        if (downloadRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        downloadRef.current.classList.add("show-element")
                    }
                },
                { rootMargin: "0px 0px -100px 0px" }
            )

            observer.observe(downloadRef.current)

            return () => observer.unobserve(downloadRef.current)
        }
    }, [downloadRef.current])

    return (
        <section className="download-section" ref={downloadRef}>
            <h2>Download Now</h2>
            <div className="download-img-div">
                <a href="https://www.apple.com/app-store" target="_blank"><img src={downloadAppstore} /></a>
                <a href="https://play.google.com/store/apps" target="_blank"><img src={downloadGoogle} /></a>
            </div>
        </section>
    )
}