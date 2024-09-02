import './style.css';

const Gallery = ({ images }) => {
  return (
    <div className="Gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=''
          className="image"
        />
      ))}
    </div>
  );
};

export default Gallery;
