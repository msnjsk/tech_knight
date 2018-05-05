
Module.register("mydiet",{

	// Default module config.
	defaults: {
		text: "Hello i am my diet module",
		weight: "underWeight"
	},
	getScripts: function() {
		return ["mydiet.css"];
	},

	getTemplate: function () {
		return "mydiet.njk"
	},

	getTemplateData: function () {
		var planData = {
			weight: this.config[this.defaults.weight],
			foodType: "nonVeg"
		}
		return planData
	},
	notificationReceived: function(notification, payload, sender) {
		console.log(notification +"----"+ payload);
	}
});
