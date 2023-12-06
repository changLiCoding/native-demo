import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
} from "react-native";

import styles from "./welcome.style";
import { useState } from "react";
import { useRouter } from "expo-router";
import { icons, SIZES } from "@constants";

const Welcome = () => {
	const router = useRouter();

	const [searchedJob, setSearchedJob] = useState("");
	// console.log(searchedJob);
	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Chang</Text>
				<Text style={styles.welcomeMessage}>Find your dream job</Text>
			</View>

			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						placeholder='What are you looking for?'
						placeholderTextColor='#000'
						onFocus={() => console.log("TextInput focused")}
						// onPressIn={() => console.log("TextInput pressed")}
						// onPressOut={() => console.log("TextInput pressed")}
						onChange={(e) => {
							// console.log("e.target: ", e.target);
							setSearchedJob(e.target.value);
							// console.log(searchedJob);
						}}
						value={searchedJob}
					/>
				</View>
				<TouchableOpacity
					style={styles.searchBtn}
					onPress={() => console.log("Search btn clicked")}>
					<Image
						source={icons.search}
						style={styles.searchBtnImage}
						resizeMode='contain'
					/>
				</TouchableOpacity>
			</View>
			<View>
				<FlatList></FlatList>
			</View>
		</View>
	);
};

export default Welcome;
