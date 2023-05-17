import { styled } from "@mui/system";

type PostHeaderStylesType = object;

export const PostHeaderStyle = styled('div')<PostHeaderStylesType>`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	height: 30px;

  .titleWrapper {
    display: flex;
    align-items: center;
    gap: 12px;
    word-wrap: break-word;
  }

  .tagList {
    display: flex;
    gap: 8px;

  }
`;
