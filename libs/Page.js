'use strict';

require('chromedriver');
const webdriver = require('selenium-webdriver');

global.driver = new webdriver.Builder()
	.withCapabilities(webdriver.Capabilities.chrome())
	.build();

class Page {

	constructor() {
		this.url = '';
	}

	async open() {
		return driver.get(this.url);
	}
}

module.exports = Page;