import { styled } from "@mui/system";

type LoginFormStylesType = object;

export const LoginFormStyle = styled('div')<LoginFormStylesType>`
  background: #FFFFFF;
  box-shadow: 0px 22px 106px rgba(0, 0, 0, 0.07), 0px 9.19107px 44.2843px rgba(0, 0, 0, 0.0503198), 0px 4.91399px 23.6765px rgba(0, 0, 0, 0.0417275), 0px 2.75474px 13.2728px rgba(0, 0, 0, 0.035), 0px 1.46302px 7.04911px rgba(0, 0, 0, 0.0282725), 0px 0.608796px 2.93329px rgba(0, 0, 0, 0.0196802);

  border-radius: 6px;
  width: 384px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 36px 32px;

  .formTitle {
    margin: 0 0 21px;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: rgba(0, 0, 0, 0.75);
  }

  .formSubmit {
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    border-radius: 4px;
    padding: 8px 12px;
    color: #fff;
    cursor: pointer;
    margin-top: 10px;
  }

  .helpText {
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    line-height: 20px;
    text-align: center;
    margin: 8px 0 0;
    color: rgba(140, 140, 140, 1);

    & a {
      color: #1890FF;
      text-decoration: none;
    }
  }

  .buttonSubmit {
    width: 100%;
    text-transform: none;
    font-size: 16px;
    margin-top: 21px;
  }
`;
