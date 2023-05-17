import { styled } from "@mui/system";

type HeaderStylesType = object;

export const HeaderStyle = styled('div')<HeaderStylesType>`
	background: #ffffff;
	padding: 15px 22px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.btns {
		display: flex;
		align-items: center;
		gap: 20px;
		margin-left: auto;
	}

	.authBtns {
		display: flex;
		align-items: center;
		gap: 25px;
		margin-left: auto;
	}
`;
