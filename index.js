var obj = { prop: 1 };


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value})
}

updateObjectWithKeyAndValue(obj, prop, 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = value;
  return object;
}

destructivelyUpdateObjectWithKeyAndValue(obj, prop2, 2);

function deleteFromObjectByKey(object, key) {
  
}

deleteFromObjectByKey()