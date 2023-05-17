import { styled } from "@mui/system";

type ProfilePageStylesType = object;

export const ProfilePageStyle = styled('div')<ProfilePageStylesType>`
  .successMessage {
    position: fixed;
    right: 300px;
    bottom: 215px;
    width: 300px;
  }

	.buttonSubmitted {
		position: fixed;
    right: 545px;
    bottom: 170px;
	}
`;
