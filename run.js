'use strict';

let PulaskiSearchPage = require('./libs/PulaskiSearchPage');


(async () => {
	let pulaski = new PulaskiSearchPage();
	let PARCEL_TYPE = PulaskiSearchPage.PARCEL_TYPE;

	await pulaski.open();
	let parcel_page = await pulaski.search_by_street('1616', 'Dorado Beach');
	console.log(await parcel_page.get_owner_name());
	console.log(await parcel_page.get_owner_street());
	console.log(await parcel_page.get_owner_city_state());
})();

