import { useState } from "react";
import { ArticleForm } from "../../components/article-form/ArticleForm";
import { useAppSelector } from "../../store/store-hooks";
import { selectToken } from "../../store/slices/user-slice";
import { createArticle } from "../../API/articles/articles";
import { FormValues } from "../../components/article-form/ArticleFormValidation";
import { Navigate } from "react-router-dom";

export const CreateArticlePage = () => {
  const token = useAppSelector(selectToken);
  const [articleURL, setArticleURL] = useState<string>("");

  const onSubmit = async (data: FormValues) => {
    if (token) {
      const { articleTitle, tags, text, description } = data;
      const transformedData = {
        title: articleTitle,
        tagList: tags.map((tag) => tag.name),
        body: text,
        description,
      };

      const response = await createArticle(transformedData, token);

      setArticleURL(response.article.slug);
    }
  };

  return (
    <div>
      {articleURL && <Navigate to={`/articles/${articleURL}`} />}
      <ArticleForm title={"Create new article"} submitHandler={onSubmit} />
    </div>
  );
};
