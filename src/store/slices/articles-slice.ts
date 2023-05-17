import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {  PostsResponseType, PostType } from '../../types/post';
import { getArticles } from '../../API/articles/articles';

type ArticlesStateType = {
	posts: PostType[];
	pageSize: number;
	activePage: number;
	articlesCount: number;
}

const initialState: ArticlesStateType = {
	posts: [],
	pageSize: 5,
	activePage: 1,
	articlesCount: 0,
};

type GetArticlesByOffsetType = (props: {limit: number; offset: number; token?: string }) => Promise<PostsResponseType>;
const getArticlesByOffsetCb: GetArticlesByOffsetType = async ({limit, offset, token}) => {
	return await getArticles(limit, offset, token);
};

export const getArticlesByOffset = createAsyncThunk('articles/getArticlesByPage', getArticlesByOffsetCb);

export const articlesSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		setActivePage: (state, action: PayloadAction<number>) => {
			state.activePage = action.payload;
		},
		replaceArticle: (state, action: PayloadAction<PostType>) => {
			const newPost = action.payload;

			state.posts = state.posts.map((post) => (post.slug === newPost.slug
					? newPost
					: post
			));
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getArticlesByOffset.fulfilled, (state, action: PayloadAction<PostsResponseType>) => {
			state.posts = action.payload.articles;
			state.articlesCount = action.payload.articlesCount;
		});
	},
});

export const { setActivePage, replaceArticle } = articlesSlice.actions;

export const selectArticles = (state: RootState) => state.articles.posts;
export const selectActivePage = (state: RootState) => state.articles.activePage;
export const selectArticlesCount = (state: RootState) => state.articles.articlesCount;
export const selectPageSize = (state: RootState) => state.articles.pageSize;

export const articlesReducer = articlesSlice.reducer;
