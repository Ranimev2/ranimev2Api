const axios = require("axios")

const {
    scrapeLatest,
    scrapeMovie,
    scrapeOngoing,
    scrapeGenre,
    scrapeDetailAnime,
    scrapeDetailMovie,
    scrapeDetailEpisode
} = require("../scrapers/nanimex")

const latestUpdate = async (req, res) => {
    try {
        const { page = 1 } = req.query 

        const axiosRequest = await axios.get(`${process.env.NANIMEX_URL}/page/${page}`)

        const datas = await scrapeLatest({ page }, axiosRequest)

        res.status(200).json({
            message: "success",
            page: parseInt(page),
            datas
        })
    } catch (e) {
        console.log(e)

        res.json({
            message: e
        })
    }
}

const movieAnime = async (req, res) => {
    try {
        const { page = 1 } = req.query

        const axiosRequest = await axios.get(`${process.env.NANIMEX_URL}/movie/page/${page}`)

        const datas = await scrapeMovie({ page }, axiosRequest)

        res.status(200).json({
            message: "success",
            page: parseInt(page),
            datas
        })
    } catch (e) {
        console.log(e)

        res.json({
            message: e
        })
    }
}

const ongoingAnime = async (req, res) => {
    try {
        const { page = 1 } = req.query

        const axiosRequest = await axios.get(`${process.env.NANIMEX_URL}/tage/ongoing/${page}`)

        const datas = await scrapeOngoing({ page }, axiosRequest)

        res.status(200).json({
            message: "success",
            page: parseInt(page),
            datas
        })

    } catch (e) {
        console.log(e)

        res.json({
            message: e
        })
    }
} 

const genreAnime = async (req, res) => {
    try {
        const axiosRequest = await axios.get(`${process.env.NANIMEX_URL}/`)

        const datas = await scrapeGenre(req, axiosRequest)

        res.status(200).json({
            message: "success",
            datas
        })
    } catch (e) {
        console.log(e)

        res.json({
            message: e
        })
    }
}

const detailAnime = async (req, res) => {
    try {
        const { animeId }  = req.params

        const axiosRequest = await axios.get(`${process.env.NANIMEX_URL}/anime/${animeId}`)

        const data = await scrapeDetailAnime({ animeId }, axiosRequest)

        res.status(200).json({
            message: "success",
            data
        })
    } catch (e) {
        console.log(e)

        res.json({
            message: e
        })
    }
}

const detailMovie = async (req, res) => {
    try {
        const {}  = req.params

        const axiosRequest = await axios.get(`${process.env.NANIMEX_URL}/movie/`)

        const data = await scrapeDetailMovie(axiosRequest)
    } catch (e) {
        console.log(e)

        res.json({
            message: e
        })
    }
}

const detailEpisode = async (req, res) => {
    const { episodeId } = req.params

    const axiosRequest = await axios.get(`${process.env.NANIMEX_URL}/episode/${episodeId}`)

    const datas = await scrapeDetailEpisode({ episodeId }, axiosRequest)

    res.status(200).json({
        message: "success",
        endpoint: endpoint,
        datas
    })
}
module.exports = {
    latestUpdate,
    movieAnime,
    ongoingAnime,
    genreAnime,
    detailAnime,
    detailMovie,
    detailEpisode
}
