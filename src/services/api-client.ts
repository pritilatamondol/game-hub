import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a55ad07e511741158754d6d5255b9b00'
    }
})

