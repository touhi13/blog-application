import PostGridItem from "./PostGridItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogsAsync } from "../features/blogs/blogsSlice";
import Loading from "../ui/Loading";


export default function PostGrid() {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(state => state.blogs)

  useEffect(() => {
    dispatch(fetchBlogsAsync())
  }, [dispatch]);

  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div>{error}</div>;
  if (!isError && !isLoading && blogs?.length === 0) {
    content = <div>No Blogs Found</div>;
  }
  if (!isError && !isLoading && blogs?.length > 0) {
    content = blogs.map(blog => <PostGridItem key={blog.id} blog={blog} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  )
}
