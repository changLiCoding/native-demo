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
						placeholder='Search'
						placeholderTextColor='#000'
					/>
				</View>
				<TouchableOpacity style={styles.searchBtn}>
					<Image
						source={icons.search}
						style={styles.searchIcon}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Welcome;
