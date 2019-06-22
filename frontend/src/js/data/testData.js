export default {
	pairs: [
		{
			name: "EUR/USD",
			onFire: true,
			timeFrames: {
				hour: {
					value: 1,
					commentary: "lorem"
				},
				day: {
					value: 0,
					commentary: "lorem"
				},
				week: {
					value: 1,
					commentary: "lorem"
				},
				month: {
					value: 1,
					commentary: "lorem"
				}
			},
			fundamentals: {
				comment: "Lorem"
			}
		},
		{
			name: "AUS/USD",
			onFire: false,
			timeFrames: {
				hour: {
					value: 1,
					commentary: "lorem"
				},
				day: {
					value: 0,
					commentary: "lorem"
				},
				week: {
					value: 1,
					commentary: "lorem"
				},
				month: {
					value: 1,
					commentary: "lorem"
				}
			},
			fundamentals: {
				comment: "Lorem"
			}
		}
	]
}