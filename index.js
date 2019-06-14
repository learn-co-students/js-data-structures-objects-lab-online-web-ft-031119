// Write your solution in this file!
let driver = { };

function updateDriverWithKeyAndValue(driver, key, value) {
	// body...
	let newdriver = Object.assign({} , driver)
	newdriver[key] = value;

	return newdriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
	obj[key] = value;
	return obj;
}

function deleteFromDriverByKey(driver, key) {
	let newdriver = Object.assign({ }, driver)

	delete newdriver[key];
	return newdriver;
}

function  destructivelyDeleteFromDriverByKey(driver, key) {
	delete driver[key];
	return driver;
}
