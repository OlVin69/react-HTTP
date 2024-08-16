import { useState, useEffect } from "react";
import { fetchPhotos } from "../../photo-api";
import PhotoGallery from "./PhotoGallery/PhotoGallery";




const App = () => {
    // const [searchQuery, setSearchQuery]=useState("");
    // const [page, setPage]=useState(1);
    const [photos, setPhotos]=useState([]);
    // const [isLoading, setIsLoading]=useState(false);
    // const [error, setError]=useState(false);

    useEffect(()=>{
        async function getPhotos () {

        
            const data = await fetchPhotos();
            
            setPhotos (data)
          
        }

        getPhotos();
    }, [])


  return(
    <div>
        
        {photos.length > 0 && <PhotoGallery items={photos}/>}
    </div>
  )

};

export default App;