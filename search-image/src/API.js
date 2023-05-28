import axios from "axios";

const searchImages = async (param) => {
  const url = "https://api.unsplash.com/search/photos";
  const access_key = "p3D6UsWR9EjWeJ83nzgQ3Tbi9Z_A9dF9JsJ1IpIvM4E";
  const response = await axios.get(url, {
    headers: {
      Authorization: `Client-ID ${access_key}`,
    },
    params: {
      query: param,
    },
  });

  return response.data.results;
};

export default searchImages;
