/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [

		{
			module: "alert",
		},
		{
			module: "clock",
			position: "top_left",
			classes: 'default everyone',
		},
		{
		    module: 'MMM-Facial-Recognition',
		    config: {
		        // 1=LBPH | 2=Fisher | 3=Eigen
		        recognitionAlgorithm: 1,
		        lbphThreshold: 50,
		        fisherThreshold: 250,
		        eigenThreshold: 3000,
		        useUSBCam: false,
		        trainingFile: 'modules/MMM-Facial-Recognition-Tools/training.xml',
		        interval: 2,
		        logoutDelay: 15,
		        // Array with usernames (copy and paste from training script)
		        users: ['senthilnathan'],
		        defaultClass: "default",
		        everyoneClass: "everyone",
		        welcomeMessage: true
		    }
		},
		{
			module: 'MMM-GoogleFit',
			position: 'bottom_left',
			config: {
				// If desired
			}
		},
		{
			module: "compliments",
			position: "top_center",
			classes: 'senthilnathan'	
		},
		{
			module: "mydiet",
			position: "bottom_right",
			classes: 'default everyone',
			config: {
				"underWeight": {
					"type": "Under Weight",
					"foodPlan": {
						"veg":  {
							"breakfast" : "2 Multigrain Breads | 1 Bannana | 1 Cappuccino",
							"morningSnacks": "1 Glass milk shake | 4 walnuts | 3 dates",
							"lunch" : "Small bowl of rice | 2 chapattis | veg curry | Sweet curd",
							"eveningSnacks": "Veg sandwich with cheese",
							"dinner": "A bowl of pulses (Masoor, moong, chana) | 1 Bannana"
						},
						"nonVeg": {
							"breakfast" : "2 Multigrain Breads | 1 Omelet | 1 Cappuccino",
							"morningSnacks": "1 Glass milk shake | 4 walnuts | 3 dates",
							"lunch" : "Small bowl of rice | 2 chapattis | Fish curry | Sweet curd",
							"eveningSnacks": "1 Bowl of chicken soup",
							"dinner": "2 pieces of chicken | Green salad"
						}
					},
					"workOuts": [
						{
							"day": "Day 1",
							"name": "Upper Body & Abs",
							"list": [
								"2 x of Push ups",
								"2 x Pike Push ups or Hindu Push ups",
								"2 x Triceps Dip",
								"6 x Pull ups",
								"3 x Ab Circuits"
							]
						},
						{
							"day": "Day 2",
							"name": "Lower Body & Cardio",
							"list": [
								"2 x Bodyweight Squat",
								"2 x Squat Jump",
								"2 x Lunge",
								"2 x Standing calf raise",
								"3 x Burpee"
							]
						},
						{
							"day": "Day 3",
							"name": "Upper Body",
							"list": [
								"2 x of Push ups",
								"2 x Pike Push ups or Hindu Push ups",
								"2 x Triceps Dip",
								"6 x Pull ups",
								"3 x Ab Circuits"
							]
						},
						{
							"day": "Day 4",
							"name": "Lower Body",
							"list": [
								"2 x Bodyweight Squat",
								"2 x Squat Jump",
								"2 x Lunge",
								"2 x Standing calf raise",
								"3 x Burpee"
							]
						}
					]
				},
				"overWeight": {
					"type": "Over Weight",
					"foodPlan": {
						"veg":  {
							"breakfast" : "3/4 cup cooked oats | 1 cup green tea",
							"morningSnacks": "1 cup Soy milk",
							"lunch" : "2 chapattis | Veg curry | Buttermilk",
							"eveningSnacks": "1/2 Cup high-fiber Cereal",
							"dinner": "2 Whole-wheat bread | 1 tsp Tabasco and lemon juice"
						},
						"nonVeg": {
							"breakfast" : "2 moong daal chillas | 1 cup green tea | 2 Egg Whites",
							"morningSnacks": "1 cup Soy milk",
							"lunch" : "Tuna fish roll | Minestrone soup",
							"eveningSnacks": "1 Bowl of Chicken Soup",
							"dinner": "1 large chicken breast | 1/4 garlic clove"
						}
					},
					"workOuts": [
						{
							"day": "Day 1",
							"name": "Walking",
							"list": ["Walk for half an hour daily"]
						},
						{
							"day": "Day 2",
							"name": "Aqua Jogging.",
							"list": [
								"2 x Bodyweight Squat",
								"2 x Squat Jump",
								"2 x Lunge",
								"2 x Standing calf raise",
								"3 x Burpee"
							]
						},
						{
							"day": "Day 3",
							"name": "Upper Body",
							"list": [
								"2 x Triceps Dip",
								"6 x Pull ups",
								"3 x Ab Circuits"
							]
						},
						{
							"day": "Day 4",
							"name": "Lower Body",
							"list": [
								"2 x Bodyweight Squat",
								"2 x Squat Jump",
								"2 x Lunge"
							]
						}
					]
				},
				"normalWeight": {
					"type": "Normal Weight",
					"foodPlan":{
						"veg":  {
							"breakfast" : "1 Vegetable upma | 2 almonds | 1 warm milk",
							"morningSnacks": "1 cup seasonal fruits",
							"lunch" : "3 rotis | 1 cup vegetable curry | 1 cup yogurt",
							"eveningSnacks": "1 cup coconut water",
							"dinner": "2 rotis | spinach gravy | 4 walnut"
						},
						"nonVeg": {
							"breakfast" : "1 Vegetable upma | 1 Omelet | 1 warm milk",
							"morningSnacks": "1 cup seasonal fruits",
							"lunch" : "3 rotis | 1 cup chicken curry | 1 cup yogurt",
							"eveningSnacks": "1 Bowl of chicken soup",
							"dinner": "2 rotis | 1/2 tofu curry | 4 walnut"
						}
					},
					"workOuts": [
						{
							"day": "Day 1",
							"name": "Walking",
							"list": ["Walk for half an hour daily"]
						},
						{
							"day": "Day 2",
							"name": "Aqua Jogging.",
							"list": [
								"2 x Bodyweight Squat",
								"2 x Squat Jump",
								"2 x Lunge",
								"2 x Standing calf raise",
								"3 x Burpee"
							]
						},
						{
							"day": "Day 3",
							"name": "Upper Body",
							"list": [
								"2 x of Push ups",
								"2 x Pike Push ups or Hindu Push ups",
								"2 x Triceps Dip",
								"6 x Pull ups",
								"3 x Ab Circuits"
							]
						},
						{
							"day": "Day 4",
							"name": "Lower Body",
							"list": [
								"2 x Bodyweight Squat",
								"2 x Squat Jump",
								"2 x Lunge",
								"2 x Standing calf raise",
								"3 x Burpee"
							]
						}
					]
				}
			}
		},
		{
			module: "myworkout",
			position: "top_right",
			classes: 'default everyone'	
		},
/*{
		        module: 'MMM-GoogleMapsTraffic',
		        position: 'bottom_left',
				classes: 'default everyone',
		        config: {
		                key: 'AIzaSyA9apCXPz2HKCvgwsMfbq5A1DvzetNiqTs',
		                lat: 11.6538948,
		                lng: 78.0680933,
		                height: "200px",
		                width: "200px"
        		}
		},*/
		{
			module: 'MMM-MQTT',
			position: 'middle_center',
			classes: 'default everyone',
			config: {
				mqttUser: 'srirkjan',         // Leave out for no user
				mqttPassword: 'xGmvZV_yY0m0', // Leave out for no password
				mqttServer: 'm13.cloudmqtt.com:10110',
				subscriptions: [
					{
						topic: 'sensor/1/temperature',
						label: 'Temperature',
						decimals: 1,
						suffix: '°C'
					},
					{
						topic: 'sensor/1/humidity',
						label: 'Humidity',
						decimals: 1,
						suffix: '%'
					},
					{
						topic: 'sensor/1/ultrasonic',
						label: 'Height',
						decimals: 0,
						suffix: 'Cm'
					},
					{
						topic: 'sensor/1/weight',
						label: 'Weight',
						decimals: 0,
						suffix: 'Kg'
					}
				]
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
