import * as yup from 'yup';

export const articleFormValidation = yup.object().shape({
  articleTitle: yup.string().required('Title is required').max(300, 'Title is too long'),
  description: yup.string().required('Description is required'),
  text: yup.string().required('Text is required'),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required('Tag is required'),
      })
    )
    .required()
    .min(1, 'Tag list must have at least 1 items'),
});

export type FormValues = yup.InferType<typeof articleFormValidation>;
