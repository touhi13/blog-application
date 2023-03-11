import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../features/blogs/blogsSlice';
import blogReducer from '../features/blog/blogSlice';
import sortFilterReducer from '../features/sortFilter/sortFilterSlice';
import relatedBlogsReducer from '../features/relatedBlogs/relatedBlogsSlice';

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    sortFilter: sortFilterReducer,
    relatedBlogs: relatedBlogsReducer
  },
});
