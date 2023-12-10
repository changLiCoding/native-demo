module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			["module:react-native-dotenv"],
			"expo-router/babel",
			[
				"module-resolver",
				{
					extensions: [
						".ios.js",
						".android.js",
						".ios.jsx",
						".android.jsx",
						".js",
						".jsx",
						".json",
						".ts",
						".tsx",
					],
					root: ["."],
					alias: {
						"@assets": "./assets",
						"@components": "./components",
						"@constants": "./constants",
						"@app": "./app",
					},
				},
			],
		],
	};
};
