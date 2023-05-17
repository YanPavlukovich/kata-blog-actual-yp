import axios from 'axios';
import { RequestConfigType } from '../types/request-config';

const BASE_URL = 'https://blog.kata.academy/api/';

type GetResourceType = ( path: string, options: RequestConfigType, token?: string ) => Promise<any>;

export const getResource: GetResourceType = async (path, options, token) => {
	return axios({
		...options,
		url: `${BASE_URL}${path}`,
		headers: {
			Authorization: token && `Token ${token}`,
		},
	});
};
