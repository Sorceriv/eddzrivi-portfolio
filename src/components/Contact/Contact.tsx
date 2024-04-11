import  './Contact.scss'

interface Props {
    onMouseEnter: (cursorVariant: string, cursorText: string) => void,
    onMouseLeave: () => void
}

export default function Projects({onMouseEnter, onMouseLeave}: Props) {
    return (
        <> 
            <div id="contact" className="contact-section">
                <div className="container-section">
                    <span>have you decided?</span>
                    <div className="title-container">
                        <h1>Let's work together!</h1>
                    </div>
                    <div className="contact-form-container">
                        <form className="contact-form" action="https://formsubmit.co/9e6225a960db1a7a923e3b56c8453208" method="POST">
                            <div className="field-container">
                                <label htmlFor="name">Your name?</label>
                                <input placeholder="John Doe" name="name" type="text"></input>
                            </div>
                            <div className="field-container">
                                <label htmlFor="email">Your email?</label>
                                <input placeholder="JohnDoe@gmail.com" name="email" type="email"></input>
                            </div>
                            <div className="field-container">
                                <label htmlFor="message">Your message?</label>
                                <input placeholder="Hi, let's work together! How can we get started?" name="message" type="text"></input>
                            </div>
                            <input onMouseEnter={() => {onMouseEnter("button", "")}} onMouseLeave={onMouseLeave} id="submit-contact" type="submit" value="Submit" />
                        </form>
                        <div className="contact-links">
                        <div className="contact-link">
                                <h3>My Email</h3> 
                                <span>eduardovillanueva7777@gmail.com</span>
                            </div>
                            <div className="contact-link">
                                <h3>My Socials</h3>
                                <span><a href="https://www.linkedin.com/in/eddzrivi/" target="_blank">LinkedIn</a></span>
                                <span><a href="https://github.com/Sorceriv" target="_blank">GitHub</a></span>
                                <span><a href="https://www.hackerrank.com/profile/eduardovillanue2" target="_blank">HackerRank</a></span>
                                <span><a href="https://www.facebook.com/eddzrivi/" target="_blank">Facebook</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}