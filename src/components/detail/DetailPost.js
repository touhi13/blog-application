import React from 'react'
import Tags from '../ui/Tags';
import Like from './Like';
import Save from './Save';

export default function DetailPost({ blog }) {
    const { id, title, description, image, tags, likes, isSaved } = blog;

    return (
        <main className="post">
            <img src={image} alt={title} className="w-full rounded-md" id="lws-megaThumb" />
            <div>
                <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                    {title}
                </h1>
                <div className="tags" id="lws-singleTags">
                <Tags tags={tags} />

                </div>
                <div className="btn-group">
                    <Like likes={likes} id={id} />
                    <Save isSaved={isSaved} id={id} />
                </div>
                <div className="mt-6">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </main>


    )
}
