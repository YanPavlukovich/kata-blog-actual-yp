import React from "react";
import { Control, useFieldArray } from "react-hook-form";
import { FormValues } from "./ArticleFormValidation";
import { Input } from "../input/Input";
import { Button } from "@mui/material";
import { ArticleFormTagsStyle } from "./article-form.style";

type Props = {
  control: Control<FormValues>;
  register: any;
  errors: any;
  tagError: string;
};

export const ArticleFormTags = (props: Props) => {
  const { control, register, errors, tagError } = props;
  const { fields, append, remove } = useFieldArray({
    name: "tags",
    control,
  });

  const tags = fields.map((field, i) => {
    return (
      <div className="tagWrapper" key={field.id}>
        <Input
          placeholder={"Tag"}
          register={register}
          name={`tags.${i}.name`}
          error={errors?.tags?.[i]?.name?.message as string}
        />
        <Button
          style={{ marginTop: "17px", textTransform: "capitalize" }}
          size="medium"
          variant="outlined"
          color="error"
          onClick={() => remove(i)}
        >
          Delete
        </Button>
      </div>
    );
  });

  const addTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    append({
      name: "",
    });
  };

  return (
    <div>
      <ArticleFormTagsStyle hasTags={fields.length > 0}>
        <label className="label">Tags</label>
        <div className="tags">{tags}</div>
        <div>
          <Button
            className="addButtonWrapper"
            variant="outlined"
            onClick={addTag}
          >
            Add tag
          </Button>
        </div>
        {tagError && <span className="error">{tagError}</span>}
      </ArticleFormTagsStyle>
    </div>
  );
};
