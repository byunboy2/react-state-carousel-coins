import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


interface PhotosInterface {
  src: string;
  caption: string;
}

interface PropsInterface {
  photos: PhotosInterface[];
  title: string;
}


/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */


const Carousel:React.FC<PropsInterface>=({photos, title})=>{
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }
  //Decrements currCardIdx state by 1
  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }
  const leftArrowHidden = currCardIdx===0 ? "hidden" : ""
  const rightArrowHidden = currCardIdx===total-1 ? "hidden" : ""
  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className={`bi bi-arrow-left-circle ${leftArrowHidden}`}
          onClick={goBackward}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className={`bi bi-arrow-right-circle ${rightArrowHidden}`}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;
