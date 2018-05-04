
Module.register("myworkout",{

	// Default module config.
	defaults: {
		text: "My workout module"
	},
	getScripts: function() {
		return ["myworkout.css"];
	},

	getTemplate: function () {
		return "myworkout.njk"
	},

	getTemplateData: function () {
		return this.config
	}
});
