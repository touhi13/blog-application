const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    sort: "",
    filter: "",
};

const sortFilterSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        sorted: (state, action) => {
            state.sort = action.payload;
        },
        filtered: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export default sortFilterSlice.reducer;
export const { sorted, filtered } = sortFilterSlice.actions;