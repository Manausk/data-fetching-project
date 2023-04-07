import React, { useState, seEffect, useEffect } from "react";
import "./components/styleOne.css";

function Box({ imageUrl, title }) {
  return (
    <div className="box">
      <img src={imageUrl} alt="title" />
      <h3 className="boxTitle">{title}</h3>
    </div>
  );
}

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data.slice(0, 9)));
  }, []);

  return (
    <div className="container">
      {photos.map((photo) => (
        <Box key={photo.id} imageUrl={photo.thumbnailUrl} title={photo.title} />
      ))}
    </div>
  );
}

export default App;
