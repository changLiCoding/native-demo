import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "@constants/index";
import styles from "./popularjobs.style";
import PopularJobCard from "@components/common/cards/popular/PopularJobCard";
import useFetch from "../../../hooks/useFetch";

const Popularjobs = () => {
	const router = useRouter();

	const [selectedJob, setSelectedJob] = useState(null);

	const handleCardPress = (item) => {};

	const { data, error, isLoading, refecthData } = useFetch("search", {
		query: "react",
		num_pages: 1,
	});

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Popularjobs</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>See all</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator
						size='large'
						color={COLORS.primary}
					/>
				) : error ? (
					<Text>Something went wrong</Text>
				) : (
					<FlatList
						data={data}
						renderItem={({ item }) => (
							<PopularJobCard
								keyExtractor={(item) => item}
								item={item}
								handleCardPress={(item) => {
									console.log(item);
									return router.push(`job-details/${item.job_id}`);
								}}
								// onPress={({ item }) =>
								// 	router.push(`job-details/${item.job_id}`, {
								// 		job: item,
								// 	})
								// }
							/>
						)}
						keyExtractor={(item) => item?.job_id}
						contentContainerStyle={{ columnGap: SIZES.medium }}
						horizontal
					/>
				)}
			</View>
		</View>
	);
};

export default Popularjobs;
