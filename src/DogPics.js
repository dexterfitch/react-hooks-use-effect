import React, { useState, useEffect } from "react";

// WARNING: this useEffect will run in an infinite loop!
// to fix, pass an empty array as the second argument for useEffect
function DogPics() {
  const [images, setImages] = useState([]);
  const [randomClick, setRandomClick] = useState(false);

  useEffect(() => {
    console.log("useEffect fetch is being called...")
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        setImages(data.message);
      });
  }, [randomClick]);

  function randomizerClick() {
    setRandomClick(randomClick ? false : true)
  }

  return (
    <div>
      {images.map((image) => (
        <img src={image} key={image} alt={image} />
      ))}
      <button onClick={randomizerClick}>Give me 3 More Random Dogs!!!!</button>
    </div>
  );
}

export default DogPics;
