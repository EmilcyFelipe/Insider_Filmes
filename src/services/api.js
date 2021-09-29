import axios from 'axios'

//URL FILMES EM CARTAZ:
///movie/now_playing &language=pt-BR &page=1

export const key = '63a9f65c88545948f68c49c1b83f8a31'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api