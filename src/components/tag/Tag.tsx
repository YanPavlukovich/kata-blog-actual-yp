import { Chip } from "@mui/material";

export type TagProps = {
  tag: string;
};

export const Tag = (props: TagProps) => {
  const { tag } = props;
  return (
    <Chip
      variant="outlined"
      sx={{ color: "rgba(0, 0, 0, 0.5)", borderColor: "rgba(0, 0, 0, 0.5)" }}
      size="small"
      label={tag}
    />
  );
};
