import React from "react";

class About extends React.Component {
    render() {
        return (
            <main>
                <div className="content-about">
                    <div className="services-image">
                        <img
                            src="byblosomoss.png"
                            alt="About Image"
                            id="zoomImage"
                            style={{ width: "100%", height: "100%", transition: "transform 0.3s ease" }}
                        />
                    </div>
                    <div className="services-text">
                        <div className="services-container">
                            
                            <p>
                                Om Byblos Pizzeria! <br />
                                Vi erbjuder pizza, hamburgare, al carte, pasta, sallad, grekiskt mat menyer. <br />
                                Pubkvällar med öl servering. <br />
                                <br />
                                Storgatan 39, Malå <br />
                                Telnr: 0953 - 10404 <br />
                                Varmt välkomna till Byblos pizzeria hälsningar Sarwat och personalen <br />
                            </p>
                        </div>
                        <div className="audio-player">
                            <audio controls>
                                <source src="pizza.mp3" type="audio/mpeg" />
                            </audio>
                        </div>
                        <div className="services-container-form">
                            <h2>Har du någon fråga om vår verksamhet?</h2>   
                            <form action="#" method="post" className="email-form">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="contact@restaurant.com"
                                    required
                                />
                                <button type="submit">Skicka</button>
                            </form>
                        </div>
                    </div> 
                </div> 
            </main>
        );
    }
}

export default About;  