import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "@constants/index";
import styles from "./nearbyjobs.style";
import NearByJobCard from "@components/common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hooks/useFetch";

const Nearbyjobs = ({}) => {
	const router = useRouter();

	const { data, error, isLoading, refecthData } = useFetch("search", {
		query: "react",
		num_pages: 1,
	});

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>NearByJob</Text>
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
					data?.map((item) => (
						<NearByJobCard
							job={item}
							key={item.job_id}
							handleNavigate={() => router.push(`/job-detail/${item.job_id}`)}
						/>
					))
				)}
			</View>
		</View>
	);
};

export default Nearbyjobs;
