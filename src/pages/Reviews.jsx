import React from "react";

class Reviews extends React.Component {
  render() {
    return (
      <main>
        <div className="recension-page">
          <h2>Recensioner</h2>

          <div className="review-box">
            <p className="review-name">John Doe</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, quam eu pulvinar fermentum,
              libero turpis dignissim mauris.
            </p>
          </div>

          <div className="review-box">
            <p className="review-name">Jane Smith</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, quam eu pulvinar fermentum,
              libero turpis dignissim mauris.
            </p>
          </div>

          <div className="review-box">
            <p className="review-name">Jane Smith</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, quam eu pulvinar fermentum,
              libero turpis dignissim mauris.
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Reviews;