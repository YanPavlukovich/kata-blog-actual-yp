import { styled } from '@mui/system';

type HomeButtonStylesType = object;

export const HomeButtonStyle = styled('div')<HomeButtonStylesType>`
  .homeBtn {
    font-size: 18px;
    line-height: 28px;
    text-decoration: none;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.85);
  }
`;
