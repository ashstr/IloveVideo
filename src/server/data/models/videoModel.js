var Joi = require('joi');


module.exports = Joi.object().keys({
	$loki:Joi.number(),
	meta:Joi.any(),
	title: Joi.string(),
	thumbnail: Joi.string(),
	stream: Joi.object({
		protocol: Joi.string(),
		streamer: Joi.string(),
		file: Joi.string()
	})
});
