import { styled } from "@mui/system";

type ListArticlesPageStyleType = object;

export const ListArticlesPageStyle = styled('div')<ListArticlesPageStyleType>`
  .posts {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }
`;
