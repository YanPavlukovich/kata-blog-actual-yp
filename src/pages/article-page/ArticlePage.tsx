import { useEffect, useMemo, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { PostCard } from "../../components/post-card/PostCard";

import { useArticle } from "../../API/articles/articles-hooks";
import { deleteArticle } from "../../API/articles/articles";
import { useAppSelector } from "../../store/store-hooks";
import { selectToken, selectUserData } from "../../store/slices/user-slice";
import { ArticlePageStyle } from "./article-page.style";
import { CircularProgress } from "@mui/material";

export const ArticlePage = () => {
  const { id } = useParams();
  const article = useArticle(id || "");
  const token = useAppSelector(selectToken);
  const userData = useAppSelector(selectUserData);

  const [redirected, setRedirected] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  const isMyPost = useMemo(() => {
    return userData.username === article?.author.username;
  }, [article]);

  useEffect(() => {
    if (article) {
      setIsLoading(false);
    } else {
      const timerID = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timerID);
    }
  }, [article]);

  const deleteHandler = async () => {
    if (token && id) {
      const response = await deleteArticle(id, token);

      if (response.status === 204) {
        setRedirected(true);
      }
    }
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (article) {
    return (
      <>
        {redirected && <Navigate to={"/"} />}
        <ArticlePageStyle>
          <PostCard
            {...article}
            postControl={isMyPost}
            onDelete={deleteHandler}
          />
          <>
            <ReactMarkdown
              className="content"
              children={article.body}
              remarkPlugins={[remarkGfm]}
            />
          </>
        </ArticlePageStyle>
      </>
    );
  }

  return <ArticlePageStyle>Пост не найден</ArticlePageStyle>;
};
