import axios from '../../utils/axios';

export const getBlogs = async (sort, filter) => {
    let queryString = "";

    if (sort !== "") {
        if (sort === "newest") {
            queryString += `_sort=createdAt&_order=desc`;

        } else {
            queryString += `_sort=likes&_order=desc`;
        }
    }

    if (filter === "saved") {
        queryString += `&isSaved_like=${true}`;
    }
    const response = await axios.get(`/blogs?${queryString}`);

    return response.data;
} 