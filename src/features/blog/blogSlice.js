import { getBlog, updateIsSaved, updateLike } from "./blogAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    blog: {},
    isLoading: false,
    isError: false,
    error: '',
};

export const fetchBlogAsync = createAsyncThunk('blog/fetchBlog', async (id) => {
    const blog = await getBlog(id);
    return blog;
});

export const updateLikeAsync = createAsyncThunk(
    '/video/updateLike',
    async (id) => {
        const updatedBlog = await updateLike(id);
        return updatedBlog;
    }
);
export const updateIsSavedAsync = createAsyncThunk(
    '/video/updateSave',
    async (id) => {
        const updatedBlog = await updateIsSaved(id);
        return updatedBlog;
    }
);

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogAsync.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchBlogAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blog = action.payload;
            })
            .addCase(fetchBlogAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.blog = {};
                state.isError = true;
                state.error = action.error?.message;
            });
        builder
            .addCase(updateLikeAsync.pending, (state, action) => {
                return state;
            })
            .addCase(updateLikeAsync.fulfilled, (state, action) => {
                state.blog.likes = action.payload.likes;
            })
            .addCase(updateLikeAsync.rejected, (state, action) => {
                return state;
            });
        builder
            .addCase(updateIsSavedAsync.pending, (state, action) => {
                return state;
            })
            .addCase(updateIsSavedAsync.fulfilled, (state, action) => {
                state.blog.isSaved = action.payload.isSaved;
            })
            .addCase(updateIsSavedAsync.rejected, (state, action) => {
                return state;
            });
    }
});

export default blogSlice.reducer;