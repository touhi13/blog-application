import axios from '../../utils/axios';

export const getBlog = async (id) => {
    const response = await axios.get(`/blogs/${id}`);

    return response.data;
}

export const updateLike = async (id) => {

    const { data } = await axios.get(`/blogs/${id}`);
    if (data) {
        data.likes++
        const response = await axios.patch(`/blogs/${id}`, data);
        return response.data;
    }
};
export const updateIsSaved = async (id) => {

    // console.log(id)
    const { data } = await axios.get(`/blogs/${id}`);
    console.log(data.isSaved)
    if (data) {
        data.isSaved = !data.isSaved;
        const response = await axios.patch(`/blogs/${id}`, data);
        return response.data;
    }
};
