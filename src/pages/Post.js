import React from 'react'
import DetailPost from '../components/detail/DetailPost'
import RelatedPosts from '../components/list/RelatedPosts'

export default function Post() {
    return (
        <>
            <div className="container mt-8">
                <a href="index.html" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
                    className="mr-2 fa-solid fa-house"></i>Go Home</a>
            </div>
            <section className="post-page-container">
                {/* <!-- detailed post  --> */}
                <DetailPost />
                {/* <!-- detailed post ends --> */}
                {/* <!-- related posts --> */}
                <RelatedPosts />
                {/* <!-- related posts ends --> */}
            </section>
        </>
    )
}
