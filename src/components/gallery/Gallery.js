// import './style.css';

// const Gallery = ({ images }) => {
//   return (
//     <div className="Gallery">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt=''
//           className="image"
//         />
//       ))}
//     </div>
//   );
// };

// export default Gallery;
// import { useState } from 'react';
// import './style.css';

// const Gallery = ({ images }) => {
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   const openImage = (index) => {
//     setSelectedIndex(index);
//   };

//   const closeImage = () => {
//     setSelectedIndex(null);
//   };

//   const showNextImage = (e) => {
//     e.stopPropagation(); // Остановка всплытия события, чтобы не закрывать модальное окно
//     if (selectedIndex < images.length - 1) {
//       setSelectedIndex(selectedIndex + 1);
//     }
//   };

//   const showPrevImage = (e) => {
//     e.stopPropagation();
//     if (selectedIndex > 0) {
//       setSelectedIndex(selectedIndex - 1);
//     }
//   };

//   return (
//     <div>
//       <div className="Gallery">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt=''
//             className="image"
//             onClick={() => openImage(index)}
//           />
//         ))}
//       </div>

//       {selectedIndex !== null && (
//         <div className="modal" onClick={closeImage}>
//           <button className="prev-button" onClick={showPrevImage}>
//             &#10094;
//           </button>
//           <img
//             src={images[selectedIndex]}
//             alt=''
//             className="modal-image"
//             onClick={(e) => e.stopPropagation()} // Остановка клика по изображению
//           />
//           <button className="next-button" onClick={showNextImage}>
//             &#10095;
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;
import { useState } from 'react';
import './style.css';

const Gallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    if (selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <div>
      <div className="Gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image} // Используем одно и то же изображение
            alt=''
            className="image"
            loading="lazy" // Ленивую загрузку оставляем для оптимизации
            onClick={() => openImage(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="modal" onClick={closeImage}>
          <button className="prev-button" onClick={showPrevImage}>
            &#10094;
          </button>
          <img
            src={images[selectedIndex]} // Полные изображения для модального окна
            alt=''
            className="modal-image"
            onClick={(e) => e.stopPropagation()} // Остановка клика по изображению
          />
          <button className="next-button" onClick={showNextImage}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
