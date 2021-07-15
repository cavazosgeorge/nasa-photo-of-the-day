import React from "react";
import { useEffect, useState } from "react";

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=yhnm8IXKaYMQbob9qglBLlPgOaBes4qfuLUuwMqV"
      );
      const data = await res.json();
      setPhotoData(data);
      // View Data Options in Chrome Developer Console
      console.log(data);
    }
  }, []);

  // In Case of Error: Return Empty Div Not Error Code
  if (!photoData) return <div />;

  return (
    <div>
      <img src={photoData.url} alt={photoData.title} />
      <div>
        <h1>{photoData.title}</h1>
        <p>{photoData.date}</p>
        <p>{photoData.explanation}</p>
      </div>
    </div>
  );
}
