import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import DetailPost from '../components/detail/DetailPost'
import RelatedPosts from '../components/list/RelatedPosts'
import Loading from '../components/ui/Loading';
import { fetchBlogAsync } from '../features/blog/blogSlice';

export default function Post() {
    const dispatch = useDispatch();
    const { postId } = useParams();
    const { blog, isLoading, isError, error } = useSelector(state => state.blog)

    useEffect(() => {
        dispatch(fetchBlogAsync(postId));
    }, [dispatch, postId]);

    let content = null;
    if (isLoading) content = <Loading />;
    if (!isLoading && isError) content = <div>{error}</div>;
    if (!isLoading && !isError && !blog?.id) content = <div>No Video Found</div>
    if (!isLoading && !isError && blog?.id) content = <section className="post-page-container">
        <DetailPost blog={blog} />
        <RelatedPosts />
    </section>
    return (
        <>
            <div className="container mt-8">
                <Link to="/" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
                    className="mr-2 fa-solid fa-house"></i>Go Home</Link>
            </div>

            {content}

        </>
    )
}
