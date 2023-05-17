import { Post } from "../../components/post/Post";
import { Pagination } from "@mui/material";
import { useArticlesGetter } from "../../API/articles/articles-hooks";
import { useAppDispatch, useAppSelector } from "../../store/store-hooks";
import {
  selectActivePage,
  selectArticlesCount,
  selectPageSize,
  setActivePage,
} from "../../store/slices/articles-slice";
import { ChangeEvent } from "react";
import { ListArticlesPageStyle } from "./list-article-page.style";

export const ListArticlesPage = () => {
  const posts = useArticlesGetter();

  const dispatch = useAppDispatch();
  const postsCount = useAppSelector(selectArticlesCount);
  const activePage = useAppSelector(selectActivePage);
  const pageSize = useAppSelector(selectPageSize);

  const postsElements = posts.map((post) => (
    <Post key={`slug_${post.slug}`} {...post} />
  ));

  const onPageChange = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(setActivePage(page));
  };

  return (
    <ListArticlesPageStyle>
      <div className="posts">{postsElements}</div>
      <div className="pagination">
        <Pagination
          count={Math.ceil(postsCount / pageSize)}
          page={activePage}
          onChange={onPageChange}
          showFirstButton
          showLastButton
        />
      </div>
    </ListArticlesPageStyle>
  );
};
