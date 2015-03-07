var dLL = function() {
	var newDLL = Object.create(dLLMethods)
	newDLL.head = null
	newDLL.tail = null
	return newDLL
}
var node = function(val){
	var newNode = Object.create()
	newNode.prev = null
	newNode.next = null
	newNode.value = val
	return newNode
}
dLLMethods = {}

dLLMethods.addToHead = function(){

}
dLLMethods.removeTail = function(){

}
dLLMethods.addToTail = function(){

}
dLLMethods.removeHead = function(){

}
dLLMethods.contains = function(){

}
