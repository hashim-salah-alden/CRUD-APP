import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  records: [],
  loading: false,
  error: null,
  singlePost: "",
};

// create fetch posts thunk
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/posts");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// create fetch  single post thunk
export const fetchSinglePosts = createAsyncThunk(
  "posts/fetchSinglePosts",
  async (postId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/posts/${postId}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// create add posts thunk
export const insertPosts = createAsyncThunk(
  "posts/insertPosts",
  async (postData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// create edit post thunk
export const editPost = createAsyncThunk(
  "posts/editPost",
  async (post, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/posts/${post.id}`, {
        method: "PATCH",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// create delete posts thunk
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/posts/${postId}`, {
        method: "DELETE",
      });
      return postId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postCleanUp: (state) => {
      state.singlePost = null;
    },
  },
  extraReducers: (builder) => {
    // fetch posts
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // fetch single post
    builder.addCase(fetchSinglePosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchSinglePosts.fulfilled, (state, action) => {
      state.loading = false;
      state.singlePost = action.payload;
    });
    builder.addCase(fetchSinglePosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // insert posts
    builder.addCase(insertPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(insertPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.records.push(action.payload);
    });
    builder.addCase(insertPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // edit post  posts
    builder.addCase(editPost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      state.loading = false;
      state.ercord = action.payload;
    });
    builder.addCase(editPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // deletePost posts
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      console.log(`this console is from delete action`);
      state.records = state.records.filter(
        (record) => record.id !== action.payload
      );
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { postCleanUp } = postSlice.actions;
export default postSlice.reducer;
