import { loadstate } from "../reducers/Movies";
export { removestate } from "../reducers/Movies";
import axios from "../utils/Axios";


export const getMoviesAsyn = (id) => async (dispatch) => {
    try {
        const detail = await axios.get(`/movie/${id}`);
        const external_ids = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);

        let combo = {
          detail: detail.data,
          external_ids: external_ids.data,
          recommendations: recommendations.data.results,
          similar: similar.data.results,
          videos: videos.data.results.find((v) => v.type == "Teaser"),
        };

        dispatch(loadstate(combo));

    } catch (error) {
        console.error(error);
    }

    
}

