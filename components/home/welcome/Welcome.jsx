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
const jobTypes = ["Full Time", "Part Time", "Internship", "Freelance"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
	const router = useRouter();
	const [activeJobType, setActiveJobType] = useState("Full Time");

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
						// onPressIn={() => console.log("TextInput pressed")}
						// onPressOut={() => console.log("TextInput pressed")}
						onChangeText={(text) => {
							console.log("text: ", text);
							// console.log("e.target: ", e.target);
							// setSearchedJob(e.target.value);
							setSearchTerm(text);
							// console.log(searchedJob);
						}}
						value={searchTerm}
					/>
				</View>
				<TouchableOpacity
					style={styles.searchBtn}
					onPress={handleClick}>
					<Image
						source={icons.search}
						style={styles.searchBtnImage}
						resizeMode='contain'
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.tabsContainer}>
				<FlatList
					data={jobTypes}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								style={styles.tab(activeJobType, item)}
								onPress={() => {
									setActiveJobType(item);
									router.push(`/search/${item}`);
								}}>
								<Text style={styles.tabText(activeJobType, item)}>{item}</Text>
							</TouchableOpacity>
						);
					}}
					keyExtractor={(item) => item}
					contentContainerStyle={{ columnGap: SIZES.small }}
					horizontal
				/>
			</View>
		</View>
	);
};

export default Welcome;
