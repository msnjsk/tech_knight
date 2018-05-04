
Module.register("mydiet",{

	// Default module config.
	defaults: {
		text: "Hello i am my diet module"
	},
	getScripts: function() {
        return [
            this.file('node_modules/jsonpointer/jsonpointer.js')
        ];
    },
	getStyles: function() {
		return ["mydiet.css"];
	},

	getTemplate: function () {
		return "mydiet.njk"
	},

	getTemplateData: function () {
		return this.config
	},
	notificationReceived: function(notification, payload, sender) {
		//console.log(notification +"----"+ JSON.stringify(payload));
	}
});
