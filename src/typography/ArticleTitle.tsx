import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ArticleTitleStyle } from "./article-title.style";

type TitleLevel = 1 | 3;
type Props = {
  level: TitleLevel;
  children: React.ReactNode;
  to?: string | null;
};

const Title = (props: Props) => {
  const { level, children } = props;

  switch (level) {
    case 1:
      return (
        <Typography sx={{ fontSize: 32 }} variant="h1">
          {children}
        </Typography>
      );
    case 3:
      return (
        <Typography sx={{ fontSize: 20 }} variant="h3">
          {children}
        </Typography>
      );
    default:
      return null;
  }
};

export const ArticleTitle = (props: Props) => {
  const { level, children, to } = props;

  const StyledTitle = <Title level={level}>{children}</Title>;

  return to ? (
    <ArticleTitleStyle>
      <Link className="title" to={to} style={{ textDecoration: "none" }}>
        {StyledTitle}
      </Link>
    </ArticleTitleStyle>
  ) : (
    <ArticleTitleStyle>{StyledTitle}</ArticleTitleStyle>
  );
};
