import React from "react";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        };
    }
    
    handleLike = () => {
        this.setState((prevState) => ({
            likes: prevState.likes + 1
        }));
    };

    render() {
        return (
            <main>
                <div className="menu-page">
                    <div className="menu-container">
                        <div className="menu-card" data-details="Margerita: Tomat och Ost. Pris: 100kr" data-price="100">
                            <h3>Margerita</h3>
                            <img src="Pizza.png" alt="Item 1" height="150" width="150" />
                            <p>Tomat och Ost</p>
                            <button className="add-to-cart">Lägg i varukorg</button>
                            <button className="remove-from-cart" style={{ display: 'none' }}>Ta ur varukorg</button>
                        </div>
                        <div className="menu-card" data-details="Vesuvio: Tomat, Ost och skinka. Pris: 110kr" data-price="110">
                            <h3>Vesuvio</h3>
                            <img src="Pizza.png" alt="Item 2" height="150" width="150" />
                            <p>Skinka</p>
                            <button className="add-to-cart">Lägg i varukorg</button>
                            <button className="remove-from-cart" style={{ display: 'none' }}>Ta ur varukorg</button>
                        </div>
                        <div className="menu-card" data-details="Capricciosa: Tomat, Ost, skinka och champinjoner. Pris: 115kr" data-price="115">
                            <h3>Capricciosa</h3>
                            <img src="Pizza.png" alt="Item 3" height="150" width="150" />
                            <p>Skinka och Champinjoner</p>
                            <button className="add-to-cart">Lägg i varukorg</button>
                            <button className="remove-from-cart" style={{ display: 'none' }}>Ta ur varukorg</button>
                        </div>
                        <div className="menu-card" data-details="Exotica: Tomat, Ost, skinka och ananas. Pris: 120kr" data-price="120">
                            <h3>Exotica</h3>
                            <img src="Pizza.png" alt="Item 4" height="150" width="150" />
                            <p>Skinka och Ananas</p>
                            <button className="add-to-cart">Lägg i varukorg</button>
                            <button className="remove-from-cart" style={{ display: 'none' }}>Ta ur varukorg</button>
                        </div>
                        <p id="total-price">Totalt pris: 0kr</p>
                        <p id="item-count">Pizzor i vagnen: 0</p>
                    </div>
                    <div className="like-container">
                        <button className="like-button" onClick={this.handleLike}>Like</button>
                        <p>{this.state.likes} Likes</p>
                    </div>
                </div>
            </main>
        );
    }
}

export default Menu;