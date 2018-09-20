'use strict';

const webdriver = require('selenium-webdriver');
let PulaskiParcelPage = require('./PulaskiParcelPage');
const By = webdriver.By;

let Page = require('./page');


class PulaskiSearchResultsPage extends Page {

	constructor() {
		super();
	}

	get parcel_view_btn() {
		return driver.findElement(By.xpath("//input[@id='parcelview']/following-sibling::a"));
	}

	async go_to_parcel_view() {
		await this.parcel_view_btn.click();
		return new PulaskiParcelPage();
	}
}

module.exports = PulaskiSearchResultsPage;