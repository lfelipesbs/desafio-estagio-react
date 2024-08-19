import axios from 'axios';

const client = axios.create({ baseURL: 'http://localhost:3001' });

const TokenInterceptor = async config => {
	const token = localStorage.getItem('token');

	if (token) {
		// config.headers.Authorization = `Bearer ${token}`;
		config.headers.Authorization = token;
	}
	return config;
};

client.interceptors.request.use(TokenInterceptor);

export default client;
