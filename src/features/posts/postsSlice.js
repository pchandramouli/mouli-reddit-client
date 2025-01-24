import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const REDDIT_BASE_URL = 'https://reddit.com';

export const fetchPopularPosts = createAsyncThunk(
  'posts/fetchPopularPosts',
  async (id) => {
    const response = await fetch('https://www.reddit.com/r/popular.json?raw_json=1');
    const responseJson = await response.json();
    return responseJson;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: {

    }
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularPosts.pending, (state, action) => {})
      .addCase(fetchPopularPosts.fulfilled, (state, { payload }) => {
        // Update the response into state.
        const posts = payload.data.children.map(p => {
          const data = p.data;
          const imageUrl = ('preview' in data) ? data.preview.images[0].source.url : data.thumbnail
          return {
            title: data.title,
            subreddit: data.subreddit_name_prefixed,
            author: data.author,
            text: data.selftext,
            upvotes: data.ups,
            downvotes: data.downs,
            created_at: (new Date(data.created * 1000)).toDateString(),
            permalink: REDDIT_BASE_URL + data.permalink,
            image_url: imageUrl
          }
        });

        state.posts = posts;
      })
  }
});

export const postsSelector = (state, action) => state.posts.posts;
export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;