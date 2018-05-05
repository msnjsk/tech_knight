
Module.register("myworkout",{

	// Default module config.
	defaults: {
		text: "My workout module",
		weight: "underWeight"
	},
	getScripts: function() {
    	return [
        	this.file("node_modules/jsonpointer/jsonpointer.js")
		];
	},
	getStyles: function() {
		return ["myworkout.css"];
	},

	getTemplate: function () {
		return "myworkout.njk"
	},

	getTemplateData: function () {
		return this.config[this.defaults.weight]
	}
});
