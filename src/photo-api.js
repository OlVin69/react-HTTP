import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/"

export const fetchPhotos = async()=>{
    const response = await axios.get("search/photos/", {
        params:{
            client_id:"wLdfNQucMwr1bK3wo3hSir58mAbKpRAn4sALUmcsd7E",
            query: "cat",
            
        }
    });

    return response.data.results;
}