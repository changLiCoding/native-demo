import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, images, icons } from "@constants/index";
import {
	Nearbyjobs,
	Popularjobs,
	ScreenHeaderBtn,
	Welcome,
} from "@components/index";
function Home() {
	const router = useRouter();

	const [searchTerm, setSearchTerm] = useState("");

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			{/* <Text>index</Text> */}
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn
							iconUrl={icons.menu}
							dimension='60%'
						/>
					),
					headerRight: () => (
						<ScreenHeaderBtn
							iconUrl={images.profile}
							dimension='100%'
						/>
					),
					headerTitle: "Header",
				}}
			/>

			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						flex: 1,
						padding: SIZES.medium,
					}}>
					<Welcome
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
						handleClick={() => {
							if (searchTerm) {
								router.push(`/search/${searchTerm}`);
							}
						}}
					/>
					<Popularjobs />
					<Nearbyjobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default Home;
