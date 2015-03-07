

var Graph = function(){
	this.storage = {}
};

Graph.prototype.addNode = function(node){
	this.storage[node] = new graphNode(node)
};

Graph.prototype.contains = function(node){
	for (var key in this.storage){
		if (this.storage[key].value === node){
			return true
		}
	}
	return false
};

Graph.prototype.removeNode = function(node){
	delete this.storage[node]
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	var currentNode = this.storage[fromNode]
	for (var i =0; i < currentNode.edges.length; i++){
		var maybeToNode = currentNode.edges[i]
		if (maybeToNode === toNode){
			return true
		}
		return false
	}
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.storage[fromNode].edges.push(toNode)
	this.storage[toNode].edges.push(fromNode)

};

Graph.prototype.removeEdge = function(fromNode, toNode){
	for (var i = 0; i < this.storage[fromNode].edges.length; i++){
		if (this.storage[fromNode].edges[i] === toNode){
			delete this.storage[fromNode].edges[i]
		}
	}
	for (var i = 0; i < this.storage[toNode].edges.length; i++){
		if (this.storage[toNode].edges[i] === fromNode){
			delete this.storage[toNode].edges[i]
		}
	}

};

Graph.prototype.forEachNode = function(cb){
	for (var key in this.storage){
		cb(key)
	}
};

var graphNode = function(value){
	this.edges = []
	this.value = value
}

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode = constant
 * removeNode = O(n)
 * hasEdge = constant
 * addEdge = O(n)
 * removeEdge = O(n)
 * forEachNode = O(n)
 * 
 */



