import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID kYp7DALqtGtZkCsgYKaU-GZV-Sg-pc4P0rJJe9z8L3Q'
    }
    
});