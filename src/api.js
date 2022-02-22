import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

const apiFetchImages = async (query, page) => {
    const imagesCard = await axios.get(
        `?q=${query}&page=${page}&key=24543264-cb8d54582986cfe7b35ceaac5&image_type=photo&orientation=horizontal&per_page=12`)        
    return imagesCard.data.hits;
}

export default apiFetchImages;