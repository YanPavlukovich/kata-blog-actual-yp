import { styled } from "@mui/system";

type PostCardStylesType = object;

export const PostCardStyle = styled("div")<PostCardStylesType>`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .postButtons {
    display: flex;
    gap: 12px;
    margin-top: 10px;


    button {
      text-transform: capitalize;
    }
  }
`;
