var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0
}

Stack.prototype.push = function(value){
	this[this.stackSize] = value
	this.stackSize++

}
Stack.prototype.pop = function(){
	this.stackSize && this.stackSize--
	result = this[this.stackSize]
	delete this[this.stackSize]
	return result

}
Stack.prototype.size = function(){
	return this.stackSize
}
var newStack = new Stack()


