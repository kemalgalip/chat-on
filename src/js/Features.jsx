import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function Features() {
    const featuresRef = React.useRef(null)

    React.useEffect(() => {
        if (featuresRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        featuresRef.current.classList.add("show-element")
                    }
                },
                { rootMargin: "0px 0px -100px 0px" }
            )

            observer.observe(featuresRef.current)

            return () => observer.unobserve(featuresRef.current)
        }
    }, [featuresRef.current])

    return (
        <section className="features-section" id="features" ref={featuresRef}>
            <h2>Features</h2>
            <p>Discover the power of seamless communication with our feature-packed chat app. Stay connected with friends, family, and colleagues like never before.</p>
            <VerticalTimeline lineColor='hsl(293, 100%, 63%)'>
                <VerticalTimelineElement
                    contentArrowStyle={{ borderRight: '7px solid  hsl(264, 100%, 61%)' }}
                    icon={<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M15.5 11.5H15.51M11.5 11.5H11.51M7.5 11.5H7.51M15.6953 19.2318L19.1027 20.3676C19.8845 20.6282 20.6282 19.8844 20.3676 19.1027L19.2318 15.6953M15.3 19.1C15.3 19.1 14.0847 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5C20 14 19.1 15.3 19.1 15.3" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>}
                    iconStyle={{ background: 'hsl(264, 100%, 61%)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Real-time messaging</h3>
                    <p>
                        Users can send and receive messages in real-time, allowing for quick and seamless communication
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentArrowStyle={{ borderRight: '7px solid  hsl(264, 100%, 61%)' }}
                    icon={<svg fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 426.224 426.224" xml:space="preserve" stroke="#ffffff" stroke-width="4.26224"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M167.94,113.864c0,24.949,9.759,53.752,26.106,77.048c18.524,26.398,41.921,40.936,65.881,40.936 c23.96,0,47.357-14.538,65.882-40.936c16.348-23.296,26.107-52.099,26.107-77.048c0-50.722-41.266-91.988-91.988-91.988 C209.206,21.876,167.94,63.142,167.94,113.864z M259.927,36.876c42.451,0,76.988,34.537,76.988,76.988 c0,21.655-8.961,47.876-23.385,68.432c-15.409,21.958-34.946,34.552-53.603,34.552c-18.657,0-38.195-12.594-53.603-34.552 c-14.425-20.556-23.385-46.778-23.385-68.432C182.939,71.413,217.476,36.876,259.927,36.876z"></path> <path d="M394.724,272.992c-16.208-25.153-39.026-45.233-65.987-58.068c-2.863-1.364-6.274-0.778-8.52,1.461 c-18.071,18.02-38.921,27.545-60.294,27.545c-21.376,0-42.221-9.524-60.281-27.544c-2.246-2.241-5.658-2.826-8.521-1.463 c-26.962,12.835-49.782,32.915-65.992,58.068c-16.651,25.837-25.452,55.812-25.452,86.686v0.13c0,2.117,0.894,4.134,2.461,5.556 c43.276,39.247,99.312,60.861,157.785,60.861c58.473,0,114.508-21.615,157.786-60.86c1.567-1.422,2.461-3.44,2.461-5.556v-0.13 C420.17,328.803,411.371,298.827,394.724,272.992z M259.923,411.224c-53.621,0-105.055-19.418-145.212-54.743 c0.583-26.856,8.514-52.847,23.026-75.364c13.767-21.361,32.788-38.686,55.227-50.357c20.045,18.452,43.094,28.17,66.959,28.17 c23.86,0,46.913-9.719,66.969-28.171c22.437,11.67,41.457,28.995,55.222,50.357c14.509,22.516,22.438,48.508,23.021,75.365 C364.978,391.807,313.544,411.224,259.923,411.224z"></path> <path d="M145.302,183.17c8.413,0,16.808-2.053,24.952-6.102c3.709-1.844,5.221-6.345,3.378-10.054 c-1.843-3.709-6.344-5.221-10.054-3.378c-6.053,3.009-12.202,4.534-18.277,4.534c-15.752,0-32.296-10.703-45.389-29.364 c-12.324-17.565-19.98-39.957-19.98-58.436c0-36.045,29.325-65.37,65.37-65.37c17.014,0,33.125,6.504,45.367,18.316 c2.98,2.875,7.729,2.791,10.605-0.19c2.876-2.981,2.791-7.729-0.19-10.605C186.031,7.998,166.22,0,145.302,0 c-44.316,0-80.37,36.054-80.37,80.37c0,21.725,8.487,46.791,22.702,67.051C103.808,170.474,124.289,183.17,145.302,183.17z"></path> <path d="M70.687,323.095c-18.072-7.79-34.74-18.32-49.592-31.322c0.583-22.801,7.359-44.861,19.685-63.986 c11.645-18.07,27.685-32.762,46.602-42.741c17.361,15.777,37.284,24.083,57.913,24.083c12.327,0,24.438-2.964,35.996-8.809 c3.696-1.87,5.177-6.381,3.308-10.078c-1.87-3.696-6.381-5.177-10.078-3.308c-9.44,4.774-19.273,7.194-29.227,7.194 c-18.152,0-35.879-8.112-51.263-23.459c-2.246-2.24-5.66-2.824-8.521-1.462c-23.427,11.153-43.255,28.6-57.339,50.455 c-14.469,22.452-22.117,48.5-22.117,75.328v0.11c0,2.117,0.894,4.134,2.461,5.556c16.699,15.144,35.619,27.329,56.234,36.215 c0.967,0.418,1.974,0.615,2.965,0.615c2.903,0,5.668-1.697,6.891-4.535C76.245,329.147,74.491,324.735,70.687,323.095z"></path> <path d="M92.046,331.164c-2.693-1.861-6.347-1.76-8.929,0.26c-2.611,2.043-3.542,5.703-2.283,8.757 c1.143,2.773,3.935,4.63,6.93,4.63c3.336,0,6.319-2.291,7.218-5.496C95.83,336.293,94.628,332.949,92.046,331.164z"></path> </g> </g> </g> </g></svg>}
                    iconStyle={{ background: 'hsl(264, 100%, 61%)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Group chats</h3>
                    <p>
                    Users can create and participate in group chats with multiple people, making it easy to communicate with friends, family, or colleagues
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentArrowStyle={{ borderRight: '7px solid  hsl(264, 100%, 61%)' }}
                    icon={<svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="miter"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><circle cx="12" cy="12" r="10"/><line x1="8" y1="9" x2="8.01" y2="9" stroke-width="2" stroke-linecap="round"/><line x1="15.99" y1="9" x2="16" y2="9" stroke-width="2" stroke-linecap="round"/><path d="M16.61,14A5,5,0,0,1,14,16.61a5.07,5.07,0,0,1-3.9,0A5,5,0,0,1,7.39,14"/></g></svg>}
                    iconStyle={{ background: 'hsl(264, 100%, 61%)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Emojis and stickers</h3>
                    <p>
                    The app includes a wide selection of emojis and stickers to help users express themselves and make their conversations more fun
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentArrowStyle={{ borderRight: '7px solid  hsl(264, 100%, 61%)' }}
                    icon={<svg width="800px" height="800px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M18.5 20L18.5 14M18.5 14L21 16.5M18.5 14L16 16.5" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H9.58579C9.851 5 10.1054 5.10536 10.2929 5.29289L12 7H19C20.1046 7 21 7.89543 21 9V11" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/> </g></svg>}
                    iconStyle={{ background: 'hsl(264, 100%, 61%)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">File sharing</h3>
                    <p>
                    Users can share files, such as photos, videos, and documents, directly within the app, making it a convenient way to exchange information
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentArrowStyle={{ borderRight: '7px solid  hsl(264, 100%, 61%)' }}
                    icon={<svg fill="#ffffff" width="800px" height="800px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <title>history-line</title> <path d="M18,9.83a1,1,0,0,0-1,1v8.72l5.9,4A1,1,0,0,0,24,21.88l-5-3.39V10.83A1,1,0,0,0,18,9.83Z" class="clr-i-outline clr-i-outline-path-1"/><path d="M18,2A16.09,16.09,0,0,0,4,10.26V5.2a1,1,0,0,0-2,0V14h8.8a1,1,0,0,0,0-2H5.35A14,14,0,1,1,8.58,28.35a1,1,0,0,0-1.35,1.48A16,16,0,1,0,18,2Z" class="clr-i-outline clr-i-outline-path-2"/> <rect x="0" y="0" width="36" height="36" fill-opacity="0"/> </g></svg>}
                    iconStyle={{ background: 'hsl(264, 100%, 61%)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Message history</h3>
                    <p>
                    The app saves a history of messages, allowing users to access previous conversations and continue where they left off
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentArrowStyle={{ borderRight: '7px solid  hsl(264, 100%, 61%)' }}
                    icon={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 17C4 15.3431 5.34315 14 7 14V14C8.65685 14 10 15.3431 10 17V17C10 18.6569 8.65685 20 7 20H4.54545C4.24421 20 4 19.7558 4 19.4545V18.5V17V17Z" stroke="#ffffff" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 13.7542L15.5898 5.32104C16.3563 4.46932 17.6804 4.4345 18.4906 5.24475L18.6229 5.37708L18.7552 5.5094C19.5655 6.31965 19.5307 7.64365 18.679 8.4102L10.2458 16" stroke="#ffffff" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>}
                    iconStyle={{ background: 'hsl(264, 100%, 61%)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Customization options</h3>
                    <p>
                    Users can customize their chat experience by choosing themes, changing chat backgrounds, or adjusting notification settings to suit their preferences
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    )
}