'use strict';

const _ = require('lodash');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;

let Page = require('./page');


class PulaskiParcelPage extends Page {

	constructor() {
		super();
	}

	get parcel_view_btn() {
		return driver.findElement(By.xpath("//input[@id='parcelview']/following-sibling::a"));
	}

	get owner_info_fld() {
		return driver.findElement(By.xpath("//td[text()='Billing Address :']/following-sibling::td"));
	}

	async _get_owner_info() {
		return (await this.owner_info_fld.getText()).split('\n');
	}

	async get_owner_name() {
		return (await this._get_owner_info())[0];
	}

	async get_owner_street() {
		return (await this._get_owner_info())[2];
	}

	async get_owner_city_state() {
		return (await this._get_owner_info())[3];
	}
}


module.exports = PulaskiParcelPage;