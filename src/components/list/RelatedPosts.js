import React from 'react'
import RelatedPostsItem from './RelatedPostsItem'

export default function RelatedPosts() {
    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
            <div className="space-y-4 related-post-container">
                <RelatedPostsItem />
            </div>
        </aside>
    )
}
