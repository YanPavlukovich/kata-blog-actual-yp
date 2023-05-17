import { styled } from "@mui/system";

type ProfileStylesType = object;

export const ProfileStyle = styled('div')<ProfileStylesType>`
  display: flex;
  align-items: center;
  gap: 12px;

  .link {
    text-decoration: none;
  }
`;

export const ProfileInfoStyle = styled('div')<ProfileStylesType>`
  text-align: right;


  .profileInfoName {
    font-size: 18px;
    line-height: 28px;
    color: rgba(0, 0, 0, 0.85);
		text-align: center;
		text-decoration: none;
		font-weight: bold;
  }

  .profileInfoSubtitle {
    font-size: 12px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.5);
    margin: 0;
  }
`;

export const ProfileImageStyle = styled('div')<ProfileStylesType>`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.75);

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
