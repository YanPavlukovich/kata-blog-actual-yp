import {
  getArticlesByOffset,
  selectActivePage,
  selectArticles,
  selectPageSize,
} from '../../store/slices/articles-slice';
import { useEffect, useState } from 'react';
import { PostType } from '../../types/post';
import { getArticle } from './articles';
import { selectToken } from '../../store/slices/user-slice';
import { useAppDispatch, useAppSelector } from '../../store/store-hooks';

export const useArticlesGetter = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector(selectArticles);
  const activePage = useAppSelector(selectActivePage);
  const pageSize = useAppSelector(selectPageSize);
  const token = useAppSelector(selectToken);

  useEffect(() => {
    const offset = pageSize * (activePage - 1);

    dispatch(getArticlesByOffset({ limit: pageSize, offset, token }));
  }, [activePage, pageSize]);

  return posts;
};



export const useArticle = (slug: string) => {
  const [post, setPost] = useState<PostType | null>(null);
  const token = useAppSelector(selectToken);

  useEffect(() => {
			getArticle(slug, token)
			.then(({ article }) => setPost(article))
			.catch(()=> setPost(null));
  }, [slug]);

  return post;
};
