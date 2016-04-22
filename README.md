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

var $d = require('ds');

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

sorter.selectionSort(array, comparator);
sorter.bubbleSort(array, comparator);
sorter.insertationSort(array, comparator);
sorter.quickSort(array, comparator);
sorter.mergeSort(array, comparator);
sorter.heapSort(array, comparator);


