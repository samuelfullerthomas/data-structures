var BinarySearchTree = function(v){
	var newTree = Object.create(BSTMethods)
	newTree.right = null //larger value
	newTree.left = null //lower value
	newTree.value = v

	return newTree
};

var BSTMethods = {};

BSTMethods.insert = function(v){
	var node = BinarySearchTree(v)
	if (node.value > this.value){
		if (this.right === null){
			this.right = node
		} else{
			this.right.insert(v) 
		}
	} else {
		if (this.left === null) {
			this.left = node
		} else {
			this.left.insert(v)
		}
	}
}
BSTMethods.contains = function(v){
	if (v === this.value){
		return true
	} else if (v > this.value && this.right != null){
		return this.right.contains(v)
	} else if (v < this.value && this.left != null){
		return this.left.contains(v)
	}
	return false
}
BSTMethods.depthFirstLog = function(callback){
	callback(this.value)
	if (this.right != null){
		this.right.depthFirstLog(callback)
	}
	else if (this.left != null){
		this.left.depthFirstLog(callback)
	}

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
