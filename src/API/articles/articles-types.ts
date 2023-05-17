import { PostsResponseType, PostResponseType } from "../../types/post";

export type GetArticlesType = (limit: number, offset: number, token?: string) => Promise<PostsResponseType>;

export type GetArticleType = (slug: string, token?: string) => Promise<PostResponseType>;

export type CreateArticleDataType = {
	title: string;
	description: string;
	body: string;
	tagList: string[];
}

export type CreateArticleType = (data: CreateArticleDataType,token:string) => Promise<PostResponseType>;
export type DeleteArticleType = (slug:string, token:string) => Promise<any>;
export type UpdateArticleType = (slug:string, token:string, article: CreateArticleDataType) => Promise<PostResponseType>;
