// import PhotoCard from "../PhotoCard/PhotoCard";

const PhotoGallery = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <li key={item.id}>
          {item.id}
        </li>;
      })}
    </ul>
  );
};

export default PhotoGallery;
