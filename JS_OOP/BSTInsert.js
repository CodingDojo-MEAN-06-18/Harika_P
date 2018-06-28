function BST(){
  this.root = null;
}
function Node(val){
  this.value = val;
  this.left = null;   // the left attribute will be assigned to a node later
  this.right = null;  // the right attribute will be assigned to a node later
}
BST.prototype.insert = function(val){
   //create node from value:
   var newNode = new Node(val);
   this.root === null?this.root=newNode : this.insertTo(this.root, newNode);

   return this;

   };
BST.prototype.insertTo = function(rootNode, newNode){

    if(newNode.value < rootNode.value){
      if(rootNode.left === null){
        rootNode.left = newNode;
      }
      else{
        this.insertTo(rootNode.left, newNode);
      }
    }
    else{
        if(rootNode.right === null){
          rootNode.right = newNode;
        }
        else{
          this.insertTo(rootNode.right, newNode);
        }
      }

}


var first = new BST();
first.insert(30).insert(10).insert(50).insert(35).insert(5).insert(72);
///first.insert(10);
console.log(first);
