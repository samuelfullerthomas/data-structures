var HashTable = function(){
  this._limit = 8
  this._storage = LimitedArray(this._limit)

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var valueAtK = this._storage.get(i)
  if (Array.isArray(valueAtK)) {
  	var insertedArray = this._storage.get(i)
  	insertedArray.push(k)
  	insertedArray.push(v)
  	this._storage.set(i, insertedArray)
  }
  else{
  	var value = []
  	value.push(k)
  	value.push(v)
  	this._storage.set(i, value)
  }
};

HashTable.prototype.retrieve = function(k){
	debugger
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tempArray = this._storage.get(i)
  for (var x = 0; x < tempArray.length; x++){
  	if (tempArray[x] === k){
  		return tempArray[x+1]
  	}
  }
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	var tempArray = this._storage.get(i)
	for(var x = 0; x < tempArray.length; x++){
		if (tempArray[x] === k)
			tempArray[x+1] = null
	}
	this._storage.set(i, tempArray)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
