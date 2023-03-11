import React from 'react'
import { useDispatch } from 'react-redux';
import { updateLikeAsync } from '../../features/blog/blogSlice';

export default function Like({ likes, id }) {
    const dispatch = useDispatch();
    const clickHandler = (blogId) => {
        dispatch(updateLikeAsync(blogId));
    };
    return (
        <button className="like-btn" id="lws-singleLinks" onClick={() => clickHandler(id)}>
            <i className="fa-regular fa-thumbs-up"></i> {likes}
        </button>
    )
}
