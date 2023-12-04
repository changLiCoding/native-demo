import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();
export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		// SpaceMono: require("../assets/fonts/DMSans-Regular.ttf"),
		// ...FontAwesome.font,
		DMBold: require("@assets/fonts/DMSans-Bold.ttf"),
		DMMedium: require("@assets/fonts/DMSans-Medium.ttf"),
		DMRegular: require("@assets/fonts/DMSans-Regular.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (loaded) {
			await SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) return null;

	return <Stack onLayout={onLayoutRootView} />;
}
