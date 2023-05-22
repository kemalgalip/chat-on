import React from "react"

export default function About() {
    const aboutRef = React.useRef(null)

    React.useEffect(() => {
        if (aboutRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        aboutRef.current.classList.add("show-element")
                    }
                },
                { rootMargin: "0px 0px -100px 0px" }
            )

            observer.observe(aboutRef.current)

            return () => observer.unobserve(aboutRef.current)
        }
    }, [aboutRef.current])

    return (
        <section className="about-section" id="about" ref={aboutRef}>
            <h2>About</h2>
            <p>
                This is ChatON, where you can connect with people from all over the world and have meaningful conversations. Our platform is designed to be user-friendly and intuitive, allowing you to easily find and chat with friends, family, and new acquaintances. Whether you're looking for casual chat or serious discussions, ChatON has got you covered.
                <br></br>
                <br></br>
                At ChatON, we believe that everyone deserves a safe and respectful environment to communicate in. That's why we have strict policies in place to prevent any form of harassment, hate speech, or bullying. We want you to feel comfortable and confident while using our platform, so you can focus on building genuine connections with others.
                <br></br>
                <br></br>
                ChatON also offers a range of features to enhance your chatting experience. From customizable profiles to group chats, we've got everything you need to stay connected with your favorite people. You can share photos, videos, and other media with ease, and even play games together to make your chats more fun.
                <br></br>
                <br></br>
                We understand the importance of privacy in today's digital world, which is why we take your data security seriously. Our platform is built with state-of-the-art encryption and security measures to ensure that your personal information stays private and secure.
                <br></br>
                <br></br>
                Join ChatON today and start connecting with people from all walks of life. Whether you're looking to make new friends, find romantic partners, or simply have interesting conversations, our platform has something for everyone. Thank you for choosing ChatON, and we look forward to seeing you online!
            </p>
        </section>
    )
}