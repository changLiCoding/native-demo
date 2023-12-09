import { useState, useEffect } from "react";
import axios from "axios";
import { X_RapidAPI_Key } from "@env";

const rapidapiKey = X_RapidAPI_Key;

const useFetch = (endpoint, query) => {
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
			console.log(response.data);
		} catch (error) {
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
