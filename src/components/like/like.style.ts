import { styled } from '@mui/system';

type LikeStylesType = object;

export const LikeStyle = styled('div')<LikeStylesType>`
  .span {
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.5);
    padding-left: 2px;
  }

  .iconButton {
    padding: 0;
		color: red;
  }
`;
