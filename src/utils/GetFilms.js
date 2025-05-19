import api from "../api/api";
const apiKey = import.meta.env.VITE_API_KEY;

const getFilms = async ({search, page}) => {
    try {
        const response = await api.get(`/?s=${search}&page=${page}&type=movie&apikey=${apiKey}`);
        return response.data
    } catch (error) {
        console.log(error)

        throw new Error(error)
    }
}

export default getFilms