import React, { useState } from "react";
import "./Gallery.css";
import img1 from"../components/images/H.jpg";
import img2 from"../components/images/Hairstyles.jpg";
import img3 from"../components/images/Hairstyles1.jpg";
import img4 from"../components/images/Hairstyles2.jpg";
import img5 from"../components/images/Hairstyles3.jpg";
import img6 from"../components/images/Hairstyles4.jpg";
import img7 from"../components/images/Hairstyles5.jpg";
import img8 from"../components/images/Hairstyles6.jpg";
import img9 from"../components/images/Hairstyles7.jpg";
import img10 from"../components/images/Hairstyles8.jpg";
import img11 from"../components/images/Hairstyles9.jpg";
import img12 from"../components/images/Hairstyles10.jpg";
import img13 from"../components/images/Hairstyles11.jpg";
import img14 from"../components/images/Hairstyles12.jpg";
import img15 from"../components/images/Hairstyles13.jpg";
import img16 from"../components/images/Hairstyles14.jpg";
import img17 from"../components/images/Hairstyles15.jpg";
import img18 from"../components/images/Hairstyles16.jpg";
import img19 from"../components/images/Hairstyles17.jpg";
import img20 from"../components/images/Hairstyles18.jpg";
import img21 from"../components/images/Hairstyles19.jpg";
import img22 from"../components/images/Hairstyles20.jpg";


const images = [
  img1,img2,img3,img4,img5,img6,img7,img8,
                                    img9
                                    ,img10
                                    ,img11
                                    ,img12
                                    ,img13
                                    ,img14
                                    ,img15
                                   , img16
                                    ,img17
                                    ,img18
                                   , img19
                                   , img20
                                    ,img21
                                    ,img22
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [zoom, setZoom] = useState(1);

  const close = () => {
    setSelected(null);
    setZoom(1);
  };

  const zoomIn = () => setZoom((z) => z + 0.2);
  const zoomOut = () => setZoom((z) => (z > 1 ? z - 0.2 : 1));

  const handleWheel = (e) => {
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  };

  return (
    <>
      <div className="gallery">
        <h2>Gallery</h2>

        <div className="grid">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="salon"
              onClick={() => setSelected(img)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <div className="overlay" onClick={close}>
          <div className="controls" onClick={(e) => e.stopPropagation()}>
            <button onClick={zoomIn}>＋</button>
            <button onClick={zoomOut}>－</button>
            <button onClick={close}>✕</button>
          </div>

          <img
            src={selected}
            alt="preview"
            style={{ transform: `scale(${zoom})` }}
            onWheel={handleWheel}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;