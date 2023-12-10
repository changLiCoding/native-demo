import { useState, useEffect } from "react";
import axios from "axios";
import { X_RAPIDAPI_KEY } from "@env";

const useFetch = (endpoint, query) => {
	const rapidapiKey = X_RAPIDAPI_KEY;

	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const options = {
		method: "GET",
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		params: {
			...query,
		},
		headers: {
			"X-RapidAPI-Key": rapidapiKey,
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
	};

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const response = await axios.request(options);
			setData(response.data.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const refecthData = () => {
		setIsLoading(true);
		fetchData();
	};

	return { data, error, isLoading, refecthData };
};

export default useFetch;
