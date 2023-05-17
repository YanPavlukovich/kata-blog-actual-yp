import { styled } from "@mui/system";

export type CheckboxStylesType = object;

export const CheckboxStyle = styled('div')<CheckboxStylesType>`
  margin-bottom: 12px;
  margin-top: 12px;
  margin-left: 12px;
  width: 100%;

  .error {
    color: #F5222D;
    font-size: 14px;
    line-height: 22px;
    margin-top: 4px;
  }

  .typography {
    font-size: 14px;
  }
`;
