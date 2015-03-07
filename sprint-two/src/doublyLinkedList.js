var dLL = function() {
	var newDLL = Object.create(dLLMethods)
	newDLL.head = null
	newDLL.tail = null
	return newDLL
}
var node = function(val){
	var newNode = {}
	newNode.prev = null
	newNode.next = null
	newNode.value = val
	return newNode
}
var dLLMethods = {}

dLLMethods.addToHead = function(val){
	var addNode = node(val)
	if (this.head){
		addNode.next = this.head
		this.head.prev = addNode
		this.head = addNode
	}
	else {
		this.head = addNode
		this.tail = addNode
	}
}
dLLMethods.removeTail = function(){
	var result = this.tail.value
	this.tail = this.tail.prev
	return result

}
dLLMethods.addToTail = function(val){
		var addNode = node(val)
		if (this.tail){
			addNode.prev = this.tail
			this.tail.next = addNode
			this.tail = addNode
		}
		else{
			this.head = addNode
			this.tail = addNode
		}
}
dLLMethods.removeHead = function(){
	var result = this.head.value
	this.head = this.head.next
	return result

}
dLLMethods.contains = function(target){
	var currentNode = this.head
	while (currentNode){
		if (currentNode.value === target){
			return true
		}
		else {
			currentNode = currentNode.next
		}
	}
	return false
}

