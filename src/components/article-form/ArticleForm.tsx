import { useEffect, useState } from "react";
import { DeepPartial, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { Input } from "../input/Input";
import { FormValues, articleFormValidation } from "./ArticleFormValidation";
import { ArticleFormTags } from "./ArticleFormTags";
import { ArticleFormStyle } from "./article-form.style";
import { CircularProgress } from "@mui/material";

type Props = {
  title: string;
  submitHandler: (data: FormValues) => void;
  errors?: {
    [key: string]: string;
  };
  defaultValues?: DeepPartial<FormValues> | null;
};

export const ArticleForm = (props: Props) => {
  const { title, submitHandler, errors: propErrors, defaultValues } = props;
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
    reset,
    watch,
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(articleFormValidation),
    defaultValues: defaultValues || {},
  });

  const watchedValues = watch();

  useEffect(() => {
    if (propErrors) {
      const errorNames = Object.keys(propErrors);

      errorNames.forEach((key) => {
        // @ts-ignore
        setError(key, { type: "custom", message: propErrors[key] });
      });
    }
  }, [propErrors]);

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [defaultValues]);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <ArticleFormStyle>
          <h2 className={"title"}>{title}</h2>

          <form
            style={{ marginTop: 20 }}
            onSubmit={handleSubmit(submitHandler)}
          >
            <Input
              name={"articleTitle"}
              register={register}
              label={watchedValues.articleTitle ? "" : "Title"}
              error={errors.articleTitle?.message as string}
            />
            <Input
              name={"description"}
              register={register}
              label={watchedValues.description ? "" : "Short description"}
              error={errors.description?.message as string}
            />
            <Input
              name={"text"}
              register={register}
              label={watchedValues.text ? "" : "Text"}
              type={"textarea"}
              error={errors.text?.message as string}
            />
            <ArticleFormTags
              control={control}
              register={register}
              errors={errors}
              tagError={errors?.tags?.message as string}
            />
            <button type={"submit"} className="formSubmit">
              Send
            </button>
          </form>
        </ArticleFormStyle>
      )}
    </>
  );
};
