const API_KEY = "76273cf23dd580c1cd7815daf38a0517";

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionovies: `/discover/movie?api_ke=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_ke=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_ke=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_ke=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_ke=${API_KEY}&with_genres=99`,
}