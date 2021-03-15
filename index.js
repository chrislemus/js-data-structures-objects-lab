// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(driver, key, val) {
  return {...driver, [key]: val}
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  return {...driver, [key]: undefined}
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}