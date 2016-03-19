'use strict';
/**
 * Build a query string from key-value pairs
 * @param  {object} pairs key-value pairs to generate the query string with, like {key: "value", foo: "bar"}
 * @return {string}       The generated query string, including initial "?", like '?key=value&foo=bar', or an empty string
 */
module.exports = function (pairs) {
	var parameters = [];
	for (var i in pairs) {
		if (pairs.hasOwnProperty(i) && pairs[i]) {
			parameters.push(encodeURIComponent(i) + '=' + encodeURIComponent(pairs[i]));
		}
	}
	if (parameters.length) {
		return '?' + parameters.join('&');
	}
	return '';
};
