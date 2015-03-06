var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value)
    if (list.tail === null){
      list.head = newNode
      list.tail = newNode
    }
    else{
      list.tail.next = newNode
      list.tail = newNode
    }
    return newNode

  };

  list.removeHead = function(){
    var result = list.head.value
    list.head = list.head.next
    return result
    };

  list.contains = function(target){
    //is this target in the list?
    //some code to search the list
    var currentValue = list.head

    while (currentValue){
      if (currentValue.value === target){
        return true
      }
      else{
        currentValue = currentValue.next
      }
    }
    return false
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
