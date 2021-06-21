import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";

function Carousel(props) {
  const [cardIdx, setCardIdx] = useState(props.startIdx);
  const card = props.cardData[cardIdx];
  const total = props.cardData.length;

  const isLastCard = cardIdx + 1 === total;
  const isFirstCard = cardIdx === 0;

  const goForward = () => setCardIdx(cardIdx + 1);
  const goBackward = () => setCardIdx(cardIdx - 1);

  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        {!isFirstCard &&
        <i
          className="fas fa-chevron-circle-left fa-2x"
          onClick={goBackward}
          data-testid="left-arrow"
        />  }
        <Card
          caption={card.caption}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        {!isLastCard && //only show if not the last card in the row
        <i
          className="fas fa-chevron-circle-right fa-2x"
          onClick={goForward}
          data-testid="right-arrow"
        />  }
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  startIdx: 0,
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash"
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash"
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash"
    }
  ],
  title: "Shells from far away beaches."  
};

export default Carousel;
