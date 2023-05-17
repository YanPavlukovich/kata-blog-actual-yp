export type PostAuthorizationType = {
	username: string;
	image?: string;
	following?: boolean;
}

export type PostType = {
	slug: string;
	title: string;
	description: string;
	body: string;
	createdAt: string;
	updateAt: string;
	tagList: string[];
	favorited: boolean;
	favoritesCount: number;
	author: PostAuthorizationType;
}

export type PostsResponseType = {
	articles: PostType[];
	articlesCount: number;
}

export type PostResponseType = {
	article: PostType;
}
