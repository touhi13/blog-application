import React from 'react'
import { Link } from 'react-router-dom';
import Tags from '../ui/Tags';

export default function RelatedPostsItem({ blog }) {
    const { id, image, title, tags, createdAt } = blog;
    return (
        <div className="card">
            <Link to={`/blogs/${id}`}>
                <img src={image} className="card-image" alt={title} />
            </Link>
            <div className="p-4">
                <Link to={`/blogs/${id}`} className="text-lg post-title lws-RelatedPostTitle">
                    {title}
                </Link>

                <div className="mb-0 tags">
                    <Tags tags={tags} />

                </div>
                <p>{createdAt}</p>
            </div>
        </div>
    )
}
