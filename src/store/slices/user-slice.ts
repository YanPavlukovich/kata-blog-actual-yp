import { UserData } from '../../API/account/account-types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type UserState = UserData & {
	isAuth: boolean;
}

const initialState: UserState = {
	isAuth: false,
	email: '',
	token: undefined,
	username: '',
	bio: '',
	image: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData: (state, action: PayloadAction<UserData>) => {
			const { email, token, username, bio, image } = action.payload;
			state.email = email;
			state.token = token;
			state.username = username;
			state.bio = bio;
			state.image = image;
			state.isAuth = true;
		},
		removeUserData: (state) => {
			state.email = '';
			state.token = '';
			state.username = '';
			state.bio = '';
			state.image = '';
			state.isAuth = false;
		}
	},
});

export const { setUserData, removeUserData } = userSlice.actions;

export const selectUserData = (state: RootState) => {
	const { email, username, image } = state.user;

	return {
		email,
		username,
		avatar: image,
	};
};

export const selectIsAuth = (state: RootState) => state.user.isAuth;
export const selectToken = (state: RootState) => state.user.token;


export const userReducer = userSlice.reducer;
