const PhotoCard = ({ item }) => {
  return (
    <div>
      <img src={item.urls.small} alt={item.alt_description} />
      <div>
        <p>Author:{item.user.name}</p>
        <p>Likes:{item.likes}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
