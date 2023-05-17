import { useAppDispatch, useAppSelector } from '../../store/store-hooks';
import { favoritePost, unfavoritePost } from './favorited';
import { selectToken } from '../../store/slices/user-slice';
import { replaceArticle } from '../../store/slices/articles-slice';

export const useFavorited = (slug: string) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);

  const setLike = async () => {
    if (token) {
      const response = await favoritePost(slug, token);

      dispatch(replaceArticle(response.article));
    }
  };

  const removeLike = async () => {
    if (token) {
      const response = await unfavoritePost(slug, token);

      dispatch(replaceArticle(response.article));
    }
  };

  return [setLike, removeLike];
};
