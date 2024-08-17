import PhotoCard from "../PhotoCard/PhotoCard";
import s from "./PhotoGallery.module.css";

const PhotoGallery = ({ items }) => {
  return (
    <ul className={s.list}>
      {items.map((item) => {
        return <li key={item.id}>
          <PhotoCard item={item}/>
        </li>;
      })}
    </ul>
  );
};

export default PhotoGallery;
