import './style.css';

const Gallery = ({ images }) => {
  return (
    <div className="gallery-container">
      <div className="image-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=''
            className="image"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
