import React from "react"
import arrowSvg from "../img/arrow.svg"
import profilePicture from "../img/profile-picture.jpg"
import beachPicture from "../img/beach.jpg"
import rockPicture from "../img/rock.jpg"

export default function Hero(props) {
    const [headerRefHeight, setHeaderRefHeight] = React.useState(0)

    React.useEffect(() => {
        if (props.headerRef.current) {
            setHeaderRefHeight(props.headerRef.current.offsetHeight)
        }
    }, [props.headerRef])

    return (
        <section className="hero-section" style={{ minHeight: `calc(100vh - ${headerRefHeight}px)` }}>
            <div className="background-pattern-one"></div>
            <div className="background-pattern-two"></div>
            <div className="hero-content">
                <div className="phone-case">
                    <div className="phone-top">
                        <div className="phone-top-content">
                            <img src={arrowSvg} className="phone-top-content-arrow" width="24" height="24" />
                            <img src={profilePicture} className="phone-top-content-pp" width="250" height="250" />
                            <div className="phone-top-content-name-status-div">
                                <p>Andrew</p>
                                <p>Online</p>
                            </div>
                            <div className="phone-top-content-dot"></div>
                        </div>
                    </div>
                    <div className="phone-messages-div">
                        <p className="messagebox-one">Have you thought about the trip this weekend?</p>
                        <p className="messagebox-two">Do you have any suggestions?</p>
                        <p className="messagebox-one">I was thinking of going to the beach. The weather is supposed to be great.</p>
                        <div className="phone-messages-img-div">
                            <img src={beachPicture} width="500" height="500" />
                            <img src={rockPicture} width="500" height="500" />
                        </div>
                        <p className="messagebox-two">That sounds perfect! What about accommodation?</p>
                        <p className="messagebox-one">I've found some nice hotels that are affordable. I can send you the details.</p>
                        <p className="messagebox-two">Sounds great! Can't wait for the weekend.</p>
                        <p className="messagebox-one">It's going to be fun!</p>
                    </div>
                    <div className="phone-textbox">
                        <p>Type a message</p>
                        <div className="phone-textbox-sendbox">
                            <img src={arrowSvg} width="24" height="24" />
                        </div>
                    </div>
                </div>
                <div className="hero-text-div">
                    <h1>Your new chatting app</h1>
                    <p>Say goodbye to slow and unreliable messaging. Our chat app delivers lightning-fast messages so you can stay connected with the people who matter most. Sign up now and start chatting!</p>
                </div>
            </div>
        </section>
    )
}