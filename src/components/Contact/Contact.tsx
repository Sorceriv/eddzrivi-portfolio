import  './Contact.scss'

export default function Projects() {
    return (
        <> 
            <div id="contact" className="contact-section">
                <div className="container-section">
                    <span>have you decided?</span>
                    <div className="title-container">
                        <h1>Let's work together!</h1>
                    </div>
                    <div className="contact-form-container">
                        <form className="contact-form">
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
                            <input id="submit-contact" type="submit" value="Submit" />
                        </form>
                        <div className="contact-links">
                        <div className="contact-link">
                                <h3>My Email</h3> 
                                <span>eduardovillanueva7777@gmail.com</span>
                            </div>
                            <div className="contact-link">
                                <h3>My Socials</h3>
                                <span><a href="#">LinkedIn</a></span>
                                <span><a href="#">GitHub</a></span>
                                <span><a href="#">HackerRank</a></span>
                                <span><a href="#">Facebook</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}