import React from "react"
import Faq from "react-faq-component"

export default function FAQs() {
    const faqsRef = React.useRef(null)

    React.useEffect(() => {
        if (faqsRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        faqsRef.current.classList.add("show-element")
                    }
                },
                { rootMargin: "0px 0px -100px 0px" }
            )

            observer.observe(faqsRef.current)

            return () => observer.unobserve(faqsRef.current)
        }
    }, [faqsRef.current])

    const data = {
        title: "",
        rows: [
            {
                title: "Is ChatON free to use?",
                content: "Yes, ChatON is completely free to use. There are no hidden fees or subscriptions."
            },
            {
                title: "Can I make voice and video calls through ChatON?",
                content: "Yes, you can make voice and video calls through ChatON."
            },
            {
                title: "How does ChatON handle security and protect users' privacy?",
                content: "ChatON uses end-to-end encryption to protect your messages and ensure that only you and the recipient can read them. We also regularly update our security protocols to stay ahead of emerging threats."
            },
            {
                title: "How do I add contacts and find friends on ChatON?",
                content: "You can add contacts and find friends on ChatON by importing your contacts from your phone or by searching for their usernames within the app."
            },
            {
                title: "Is there a limit on the size of files I can send or receive through ChatON?",
                content: "Yes, there is a limit on the size of files you can send or receive through ChatON. This limit varies depending on the file type and your device's storage capacity."
            },
            {
                title: "Can I create group chats with multiple people?",
                content: "Yes, you can create group chats with multiple people on ChatON. Simply select the \"create group\" option and add the contacts you want to include in the chat."
            },
            {
                title: "How do I delete messages or conversations from my chat history?",
                content: "To delete messages or conversations from your chat history, simply swipe left on the message or conversation and select the \"delete\" option."
            },
            {
                title: "Can I customize the notification settings on ChatON?",
                content: "Yes, you can customize the notification settings on ChatON. Simply go to the app's settings and select the \"notifications\" option."
            },
            {
                title: "What devices and platforms is ChatON compatible with?",
                content: "ChatON is compatible with a wide range of devices and platforms, including iOS, Android, Windows, and Mac."
            },
            {
                title: "Are there any limits on the number of messages or calls I can send or receive?",
                content: "No, there are no limits on the number of messages or calls you can send or receive through ChatON. You can use it as much as you want, without any restrictions."
            }
        ]
    }

    return (
        <section className="faqs-section" id="FAQs" ref={faqsRef}>
            <h2>FAQs</h2>
            <Faq 
                data={data}
                styles={{
                    titleTextColor: "hsl(264, 100%, 61%)",
                    rowTitleColor: "hsl(264, 100%, 61%)",
                    rowContentColor: "rgb(30, 30, 30)",
                    arrowColor: "hsl(264, 100%, 61%)"
                }}
                config={{
                    tabFocus: true
                }}
            />
        </section>
    )
}