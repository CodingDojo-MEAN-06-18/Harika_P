function insertIntoHeap(heap, val){
  var zeroIndex;//keep first item undefined
  var size = heap.length;
  if (size==0)
  {
    heap.push(zeroIndex);
    heap.push(val);
    console.log(heap);
  }

  //if array already has elements in it
  else{
      heap.push(val);
      size = heap.length;
      child_index = size-1;
      parent_index = Math.trunc(child_index/2);

      console.log("child index is: "+child_index+ " parent index is: "+parent_index);


      while(heap[child_index] < heap[parent_index])
      {
        var temp = heap[child_index];
        heap[child_index] = heap[parent_index];
        heap[parent_index] = temp;
        child_index = parent_index;
        parent_index = Math.trunc(child_index/2);

      }

    console.log("final heap: "+heap);
    }
}
insertIntoHeap([], 13);  // alters the empty array to be [undefined, 13]
insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 7);
insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 13);
