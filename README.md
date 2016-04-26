This a library to use all data stuctures and sorting algorithms

Data structures supported are

1. Stack
2. Queue
3. LinkedList
4. Binary Search Tree
5. Graph
6. Tries
7. Heap

It also supports sorting algorithms like

1. Bubble Sort
2. Selection Sort
3. Insertation Sort
4. Quick Sort
5. Merge Sort
6. Heap Sort

To use this library 

var $d = require('ds.algo');

To get LinkedList object
var ll =  $d(':ll'); or $d.linkedlist();

To get Stack object
var st =  $d(':st'); or $d.stack();

To get Queue object
var qu =  $d(':qu'); or $d.queue();


To get BinarySearchTree object
var bst =  $d(':bst'); or $d.binarySearchTree();

To get Graph object
var graph =  $d(':grp'); or $d.graph();

To get Sorter object
var sorter =  $d(':sorter'); or $d.sorter();

 * sorter.selectionSort(array, comparator);
 * sorter.bubbleSort(array, comparator);
 * sorter.insertationSort(array, comparator);
 * sorter.quickSort(array, comparator);
 * sorter.mergeSort(array, comparator);
 * sorter.heapSort(array, comparator);
 
 **Lets the Explaination**

1. **Linked List**

        To use the linked listlist two option are avaiable
        var lList = $d.linkedlist()
                 OR
        var lList = $d(':ll');
        API's Supported
        
        // To add a value at last.
        lList.addToLast(val);
        
        // Add a value at start of linkedlist.
        lList.moveToFirst(val);
        
        // return the next item in the linked list.
        lList.next();
        
        // returns the size of linked list.
        lList.size();

      
       
2. **Stack**
    
    
            // comparator is function used for comparison of item.
            // its an optional parameter.
            var stk = $d.stack(comparator);
             or
            var stk = $d(':st', comparator)';
            
            // Push an item to stack
            stk.push(item);
            // Removes and return the top item
            stk.pop();
            // returns the top item without removal
            stk.peek();
            // size of stack
            stk.size();


3.  **Queue**
     
        // comparator is function used for comparison of item.
        // its an optional parameter.
         var que = $d.queue(comparator);
               or
         var que = $d(':qe', comparator);       

         // ** Supported API's 
         //
         que.enqueue();
         //
         que.dequeue();
         //
         que.peek();
         //
         que.contains(item);
         //
         que.size();
         
4.  **Binary Search Tree**
    
        // comparator is function used for comparison of item.
        // its an optional parameter.
         var bst = $d.binarySearchTree(comparator);
               or
         var bst = $d(':bst', comparator);       
        
        // ** Supported API's **
         //
         bst.add();
         //
         bst.delete();
         //
         bst.inorder();
         
     
5. **Graph**

         // comparator is function used for comparison of item.
        // its an optional parameter.
         var grp = $d.graph(comparator);
               or
         var grp = $d(':grp', comparator);     

          // ** Supported API's **

          //
          var vertex = grp.createVertex(val);
          grp.addVertex(vertex);

          //
          var edge = grp.createEdge(vert1, vert2);
          grp.addEdge(edge);

          //
          grp.buildGraph();

          //
          grp.breathFirstTraversal();

          // 
          grp.depthFirstTraversal();
        ...

6. **Sorting Algorithms**
  
        // comparator is function used for comparison of item.
        // its an optional parameter.
        var sorter = $d.sorter(comparator);
           or
        var sorter = $d(':sorter', comparator);     
        
        // Bubble Sort
        ver sortedArray = sort.bubbleSort(array);
        
        // Selection Sort
        ver sortedArray = sort.selectionSort(array);
        
        
        // insertion Sort
        ver sortedArray = sort.insertionSort(array);
        
        // quick Sort
        ver sortedArray = sort.quickSort(array);
        
        // merge Sort
        ver sortedArray = sort.mergeSort(array);
        
        // heap Sort
        ver sortedArray = sort.heapSort(array);
    
7 **Heap**
        
        '''     
         // comparator is function used for comparison of item.
        // its an optional parameter.
         var heap = $d.heap(comparator);
               or
         var heap = $d(':heap', comparator);     
         
         //
         heap.build(array);
         
         //
         heap.deleteMin();
         
8. **Trie**
   
        
        // comparator is function used for comparison of item.
        // its an optional parameter.
         var trie = $d.tries(comparator);
               or
         var trie = $d(':tri', comparator);   
         
         //
         trie.addData(data)
         
         //
         trie.find(text);
         
