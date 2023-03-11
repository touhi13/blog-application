import React from 'react';
import { Link } from 'react-router-dom';
import Tags from '../ui/Tags';

export default function PostGridItem({ blog }) {
    const { id, image, title, createdAt, likes, tags, isSaved } = blog;

    return (
        <div className="lws-card">
            <Link to={`/posts/${id}`}>
                <img src={image} className="lws-card-image" alt={title} />
            </Link>
            <div className="p-4">
                <div className="lws-card-header">
                    <p className="lws-publishedDate">{createdAt}</p>
                    <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
                </div>
                <Link to={`/posts/${id}`} className="lws-postTitle"> {title}</Link>

                <div className="lws-tags">
                    <Tags tags={tags} />
                </div>
                <div className="flex gap-2 mt-4">
                    {isSaved ? <div className="flex gap-2 mt-4">
                        <span className="lws-badge"> Saved </span>
                    </div> : null}
                </div>
            </div>
        </div>
    )
}
