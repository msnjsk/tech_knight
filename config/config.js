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
			module: "compliments",
			position: "top_center",
			classes: 'senthilnathan'	
		},
{
			module: "mydiet",
			position: "bottom_right",
			classes: 'default everyone'	
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
