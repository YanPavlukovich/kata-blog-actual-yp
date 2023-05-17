import { getResource } from "../core";
import { RegisterUser, UpdateUser } from "./account-types";

export const signUpUser: RegisterUser = async (props) => {
	try {
		const response = await getResource('users', {
			method: 'POST',
			data: {
				user: props,
			},
		});

		return {
			type: 'OK',
			data: response.data,
		};
	} catch (e: any) {
		if (e.request.status === 422) {
			return {
				type: 'IS_TAKEN',
				data: e.response?.data,
			};
		}

		throw new Error('request error');
	}
};

export const signInUser = async (email: string, password: string) => {
	try {
		const response = await getResource('users/login', {
			method: 'POST',
			data: {
				user: {
					email,
					password,
				}
			}
		});

		return {
			type: 'SUCCESS',
			data: response.data,
		};
	} catch (e: any) {
		if (e.response.status === 422) {
			return {
				type: 'AUTH_ERROR',
				data: e.response.data,
			};
		}
		throw new Error('cant login');
	}
};

export const updateUser: UpdateUser = async (newValues, token) => {
	try {
		const response = await getResource(
			'user',
			{
				method: 'PUT',
				data: {user:newValues}
			},
			token
		);

		return {
			type: 'OK',
			data: response.data,
		};
	} catch (e: any) {
		if (e.response.status === 422) {
			return {
				type: 'IS_TAKEN',
				data: e.response.data,
			};
		}

		throw new Error('cant update user data');
	}
};
