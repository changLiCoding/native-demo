import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
	COLORS,
	FONT,
	SIZES,
	SHADOWS,
	images,
	icons,
} from "../constants/index";
import {
	Nearbyjobs,
	Popularjobs,
	ScreenHeaderBtn,
	Welcome,
} from "@components/index";
function Home() {
	const router = useRouter();
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			{/* <Text>index</Text> */}
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
				}}
			/>
		</SafeAreaView>
	);
}

export default Home;
