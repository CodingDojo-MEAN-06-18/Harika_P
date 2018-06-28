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

};

var preorderResult = [];
BST.prototype.preOrder = function(root){
  //root,left,right
  this.preOrderHelp(preorderResult, root);
  return preorderResult;
};
//helper recursive function
BST.prototype.preOrderHelp = function(resultArr, root){
  resultArr.push(root.value);
  if(root.left){
    this.preOrderHelp(resultArr, root.left);
  }
  if(root.right){
    this.preOrderHelp(resultArr, root.right);
  }
};

//Inorder

var inorderResult = [];
BST.prototype.inorder = function(root){
  //root,left,right
  this.inorderHelp(inorderResult, root);
  return inorderResult;
};
//helper recursive function
BST.prototype.inorderHelp = function(resultArr, root){

  if(root.left){
    this.inorderHelp(resultArr, root.left);
  }
  resultArr.push(root.value);
  if(root.right){
    this.inorderHelp(resultArr, root.right);
  }
};


//postorder:

//Inorder

var postorderResult = [];
BST.prototype.postorder = function(root){
  //root,left,right
  this.postorderHelp(postorderResult, root);
  return postorderResult;
};
//helper recursive function
BST.prototype.postorderHelp = function(resultArr, root){

  if(root.left){
    this.postorderHelp(resultArr, root.left);
  }
  if(root.right){
    this.postorderHelp(resultArr, root.right);
  }
  resultArr.push(root.value);

};

var first = new BST();
first.insert(30).insert(10).insert(50).insert(35).insert(5).insert(72);
var pre = first.preOrder(first.root);
var inorder = first.inorder(first.root);
var post = first.postorder(first.root);

console.log(first.root);
console.log(pre);
console.log(inorder);
console.log(post);
