import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleForm } from "../../components/article-form/ArticleForm";
import { FormValues } from "../../components/article-form/ArticleFormValidation";
import { useArticle } from "../../API/articles/articles-hooks";
import { updateArticle } from "../../API/articles/articles";
import { useAppSelector } from "../../store/store-hooks";
import { selectToken } from "../../store/slices/user-slice";
import Alert from "@mui/material/Alert";
import { EditArticlePageStyle } from "./edit-article-page.style";

export const EditArticlePage = () => {
  const { id } = useParams();
  const article = useArticle(id || "");
  const token = useAppSelector(selectToken);
  const history = useNavigate();
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const defaultValues = useMemo(() => {
    return {
      articleTitle: article?.title,
      description: article?.description,
      text: article?.body,
      tags: article?.tagList.map((tag) => ({ name: tag })),
    };
  }, [article]);

  const onSubmit = async (data: FormValues) => {
    if (id && token) {
      const { articleTitle, description, text, tags } = data;

      await updateArticle(id, token, {
        title: articleTitle,
        body: text,
        tagList: tags.map((tag) => tag.name),
        description,
      });

      setShowSuccess(true);

      setTimeout(() => {
        history(`/articles/${id}`);
      }, 3000);
    }
  };

  return (
    <>
      <ArticleForm
        title={"Edit the article"}
        submitHandler={onSubmit}
        defaultValues={defaultValues}
      />
      {showSuccess && (
        <EditArticlePageStyle>
          <Alert severity="success">
            Success
            <br />
            Data updated successfully
          </Alert>
        </EditArticlePageStyle>
      )}
    </>
  );
};
