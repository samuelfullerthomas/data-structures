var Tree = function(value){
  var newTree = {}
  newTree.value = value;

  extend(newTree, treeMethods)
  newTree.children = []  // fix me

  return newTree;
}

var extend = function(obj, extendObj){
	for(var key in extendObj){
		obj[key] = extendObj[key]
	}
}


var treeMethods = {}

treeMethods.addChild = function(value){
	var newChild = Tree(value)
	this.children.push(newChild)
}

treeMethods.contains = function(target){
	if (this.value === target) {
		return true
	}
	for(var i = 0; i < this.children.length; i++){
		var result = this.children[i].contains(target)
		if (result === true){
			return result
		}
	}
	return false
}


/*
 * Complexity: What is the time complexity of the above functions?
 addChild = constant
 contains =  O(n)
 */
