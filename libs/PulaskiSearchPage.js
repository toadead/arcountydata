'use strict';

const webdriver = require('selenium-webdriver');
let PulaskiSearchResultsPage = require('./PulaskiSearchResultsPage');
const By = webdriver.By;
const until = webdriver.until;

let Page = require('./page');

class PulaskiSearchPage extends Page {

	constructor() {
		super();
		this.url = 'https://www.arcountydata.com/county.asp?county=Pulaski&s=R';
		this.clear_form_btn_id = 'clearer1';
	}

	get search_real_estate_btn() {
		return driver.findElement(By.xpath('//a[@href="/sponsored.asp"]'));
	}

	get search_btn() {
		return driver.findElement(By.id('Search1'));
	}

	get street_num() {
		return driver.findElement(By.id('StreetNumber'));
	}

	get street_name() {
		return driver.findElement(By.id('StreetName'));
	}

	get owner_name() {
		return driver.findElement(By.id('OwnerName'));
	}

	async open() {
		await driver.manage().window().maximize();
		await super.open.call(this);
		await this.search_real_estate_btn.click();
		return this;
	}

	async clear_form() {
		return driver.clear_form_btn.click();
	}

	async enter_street_num (num) {
		await this.street_num.clear();
		return this.street_num.sendKeys(num);
	}

	async enter_street_name (name) {
		await this.street_name.clear();
		return this.street_name.sendKeys(name);
	}

	// PulaskiSearchPage.parcel_type enum
	async select_parcel_type (parcel_type_enum) {
		return driver.findElement(By.xpath(`//select[@id="ParcelType"]/option[text()="${parcel_type_enum}"]`))
			.click();
	}

	// if owner is person(s), start by last name
	async enter_owner_name (name) {
		await this.owner_name.clear();
		return this.owner_name.sendKeys(name);
	}

	/****************************************************
	 *  search methods
	 ****************************************************/

	/**
	 * @param {string} st_num
	 * @param {string} st_name
	 * @return {PulaskiSearchResultsPage}
	 */
	// omit dr, rd, pl, st in the end of st_name
	async search_by_street (st_num, st_name) {
		await driver.wait(until.elementLocated(By.id(this.clear_form_btn_id)), 3000);
		await this.enter_street_num(st_num);
		await this.enter_street_name(st_name);
		await this.search_btn.click();
		return (new PulaskiSearchResultsPage()).go_to_parcel_view();
	}

	/**
	 * @param {string} owner
	 * @return {PulaskiSearchResultsPage}
	 */
	async search_by_owner (owner) {
		await driver.wait(until.elementLocated(By.id(that.clear_form_btn_id)), 3000);
		await this.enter_owner_name(owner);
		await this.search_btn.click();
		return (new PulaskiSearchResultsPage()).go_to_parcel_view();
	}
}

PulaskiSearchPage.PARCEL_TYPE = {
	ANY_TYPE: 'Any Type',
	RESIDENTIAL: 'Residential',
	COMMERCIAL: 'Commercial',
	VACANT: 'Vacant',
	MOBILE_HOME: 'Mobile Home'
};

module.exports = PulaskiSearchPage;