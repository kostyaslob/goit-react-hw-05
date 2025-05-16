import axios from "axios";

const ACCESS_KEY = "dhtOVxmu7cu8PZgWuDAWjUcuIGInl6fXWobQbH4YkWM";
axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (topic, currentPage ) => {
    const response = await axios.get(`/search/photos`, {
          params: {
            page: currentPage,
            query: topic,
            per_page: 8,
            client_id: ACCESS_KEY
          }
      })
    return response.data
}   