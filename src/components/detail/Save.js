import React from 'react'
import { useDispatch } from 'react-redux';
import { updateIsSavedAsync } from '../../features/blog/blogSlice';

export default function Save({ isSaved, id }) {

    const dispatch = useDispatch();
    const clickHandler = (blogId) => {
        dispatch(updateIsSavedAsync(blogId));
    };

    return (
        <button className={`save-btn ${isSaved && "active"} `} id="lws-singleSavedBtn"  onClick={() => clickHandler(id)} >
            <i className="fa-regular fa-bookmark"></i> {isSaved ? "Saved" : "Save"}
        </button >

    )
}

