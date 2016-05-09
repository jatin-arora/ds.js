describe("Data Structure Liabrary", function () {
    it("Create LinkedList with initial value", function () {
        //Arrange

        //Act
        var list = $d.linkedlist();
        var iterator = list.iterator();
        //Assert
        expect(iterator.next()).toBe(undefined);
    });
    it("Create LinkedList without initial value", function () {
        //Arrange

        //Act
        var list = $d.linkedlist();
        list.addToLast(4);
        list.addAtFirst(5);

        var iterator = list.iterator();
        //Assert
        expect(iterator.next()).toBe(5);
        expect(iterator.next()).toBe(4);
    });
    it("Create LinkedList with keyword", function () {
        //Arrange

        //Act
        var list = $d(":ll");
        list.addToLast(4);
        list.addAtFirst(5);
        var iterator = list.iterator();
        //Assert
        expect(iterator.next()).toBe(5);
        expect(list.size()).toBe(2);
    });
    it("Create Stack with keyword", function () {
        //Arrange

        //Act
        var stack = $d(':st');
        stack.push(44);
        stack.push(55);
        stack.push(66);

        //Assert
        expect(stack.pop()).toBe(66);
        expect(stack.size()).toBe(2);

    });
    it("Create Stack and check teh size", function () {
        //Arrange

        //Act
        var stack = $d(':st');
        stack.push(44);
        stack.push(55);
        stack.push(66);

        //Assert
        expect(stack.size()).toBe(3);

    });
    it("Create Stack and check the peek", function () {
        //Arrange

        //Act
        var stack = $d(':st');
        stack.push(44);
        stack.push(55);
        stack.push(66);

        //Assert
        expect(stack.peek()).toBe(66);
        expect(stack.peek()).toBe(66);

    });
    it("Create Queue and check the enqueue", function () {
        //Arrange

        //Act
        var queue = $d(':qu');
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        //Assert
        expect(queue.size()).toBe(3);
        expect(queue.dequeue()).toBe(1);
        expect(queue.size()).toBe(2);

    });
    it("Create binary search tree and add items", function () {
        //Arrange

        //Act
        var bt = $d(':bst');
        bt.add(5);
        bt.add(2);
        bt.add(10);
        bt.add(10);
        bt.add(91);
        bt.add(11);
        bt.add(1);
        bt.add(311);
        var list = bt.inorder();

        // console.log(list);
        //Assert
        expect(list.length).toBe(8);
        // expect(stack.peek()).toBe(66);

    });
    it("Create binary search tree and add items with sorted citeria", function () {
        //Arrange
        var Point = function (x, y) {
            this.x = x;
            this.y = y;
        };

        function comparator(p1, p2) {
            // console.log("COMP:  " + p1.x + "    " + p2.x);
            var out = -1;
            if (p1.x == p2.x && p1.y === p2.y)
                out = 0;
            if (p1.x > p2.x && p1.y > p2.y)
                out = 1;
            //console.log("out:" + out);
            return out;
        };


        //Act
        var bt = $d(':bst', comparator);

        bt.add(new Point(5, 5));
        bt.add(new Point(2, 2));
        bt.add(new Point(10, 10));
        bt.add(new Point(10, 10));
        bt.add(new Point(91, 91));
        bt.add(new Point(11, 11));
        bt.add(new Point(8, 5));
        bt.add(new Point(1, 1));

        var list = bt.inorder();
        /* for (var p in list) {
             console.log(list[p].x + ",  " + list[p].y);
         }*/
        //Assert
        expect(list.length).toBe(8);
        // expect(stack.peek()).toBe(66);

    });
    it("Create binary search tree and add string", function () {
        //Arrange
        var Point = function (x, y) {
            this.x = x;
            this.y = y;
        };

        function comparator(p1, p2) {
            // console.log("COMP:  " + p1.x + "    " + p2.x);
            var out = -1;
            if (p1.x == p2.x && p1.y === p2.y)
                out = 0;
            if (p1.x > p2.x && p1.y > p2.y)
                out = 1;
            //  console.log("out:" + out);
            return out;
        };


        //Act
        var bt = $d(':bst');

        bt.add('31');
        bt.add('42');
        bt.add('13');
        bt.add('45');
        bt.add('35');

        var list = bt.inorder();
        /*for (var p in list) {
            console.log(list[p]);
        }*/
        //Assert
        expect(list.length).toBe(5);
        // expect(stack.peek()).toBe(66);

    });

    it("Create binary search tree and remove items", function () {
        //Arrange

        //Act
        var bt = $d(':bst');
        bt.add(10);
        bt.add(7);
        bt.add(15);
        bt.add(5);
        bt.add(9);
        bt.add(12);
        bt.add(20);
        bt.add(25);
        // console.log(bt.inorder());
        var list = bt.delete(7);
        //console.log("after remove: " + bt.inorder());

        /* var list = bt.remove(7);
        console.log("after remove: " + bt.inorder());*/
        // var list = bt.remove(12);
        //console.log("after remove: " + bt.inorder());

        var list = bt.delete(10);
        //console.log("after remove: " + bt.inorder());


        //Assert
        //expect(list.length).toBe(8);
        // expect(stack.peek()).toBe(66);

    });

    it("Create a graph and do BFT and DFT", function () {
        //Arrange

        //Act
        var grp = $d(':grp');
        var vertex5 = grp.createVertex(5);
        var vertex6 = grp.createVertex(6);
        var vertex7 = grp.createVertex(7);
        var vertex8 = grp.createVertex(8);
        var vertex9 = grp.createVertex(9);
        var vertex10 = grp.createVertex(10);


        grp.addVertex(vertex5);
        grp.addVertex(vertex6);
        grp.addVertex(vertex7);
        grp.addVertex(vertex8);
        grp.addVertex(vertex9);
        grp.addVertex(vertex10);

        grp.addEdge(grp.createEdge(vertex5, vertex6));
        grp.addEdge(grp.createEdge(vertex5, vertex7));
        grp.addEdge(grp.createEdge(vertex6, vertex8));
        grp.addEdge(grp.createEdge(vertex8, vertex9));
        grp.addEdge(grp.createEdge(vertex7, vertex9));
        grp.addEdge(grp.createEdge(vertex7, vertex10));

        grp.addEdge(grp.createEdge(vertex6, vertex5));
        grp.addEdge(grp.createEdge(vertex7, vertex5));
        grp.addEdge(grp.createEdge(vertex8, vertex6));
        grp.addEdge(grp.createEdge(vertex9, vertex8));
        grp.addEdge(grp.createEdge(vertex9, vertex7));
        grp.addEdge(grp.createEdge(vertex10, vertex7));
        grp.buildGraph();
        //grp.print();

        // console.log("BFS");
        var bft = grp.breathFirstTraversal(vertex5);
        /*for (var i in bft) {
            console.log(bft[i].value);
        }*/
        expect(bft[0].value).toBe(5);
        expect(bft[1].value).toBe(6);
        expect(bft[2].value).toBe(7);

        //console.log("DFS");
        var dft = grp.depthFirstTraversal(vertex5);
        /* while (dft.peek() !== undefined)
            console.log(dft.pop());
*/
    });

    it("Selection sort", function () {
        //Arrange
        var sorter = $d.sorter();
        var sArray = sorter.selectionSort([6, 15, 7, 8, 2, 745, 2, 1324, 634, 1241, 64, 8, 8, 3, 2]);
        expect(sArray[0]).toBe(2);
        expect(sArray[1]).toBe(2);
        expect(sArray[2]).toBe(2);
        expect(sArray[3]).toBe(3);
        expect(sArray[5]).toBe(7);
    });

    it("Selection sort with comparator", function () {
        //Arrange

        var o1 = {
            name: 'jatin',
            age: 36
        };
        var o2 = {
            name: 'Arshia',
            age: 6
        };
        var o3 = {
            name: 'Shweta',
            age: 33
        };
        var o4 = {
            name: 'ajit',
            age: 38
        };
        var o5 = {
            name: 'neelam',
            age: 40
        };

        function comparator(oo1, oo2) {
            return oo1.age > oo2.age ? 1 : (oo1.age === oo2.age ? 0 : -1);
        }
        var sorter = $d.sorter(comparator);
        var sArray = sorter.selectionSort([o1, o2, o3, o4, o5]);
        expect(sArray[0].age).toBe(6);
        expect(sArray[1].age).toBe(33);
        expect(sArray[2].age).toBe(36);
        expect(sArray[3].age).toBe(38);
        expect(sArray[4].age).toBe(40);
    });

    it("bubble sort", function () {
        //Arrange
        var sorter = $d.sorter();
        var sArray = sorter.bubbleSort([6, 15, 7, 8, 2, 745, 2, 1324, 634, 1241, 64, 8, 8, 3, 2]);
        expect(sArray[0]).toBe(2);
        expect(sArray[1]).toBe(2);
        expect(sArray[2]).toBe(2);
        expect(sArray[3]).toBe(3);
        expect(sArray[5]).toBe(7);
    });

    it("bubble sort with comparator", function () {
        //Arrange

        var o1 = {
            name: 'jatin',
            age: 36
        };
        var o2 = {
            name: 'Arshia',
            age: 6
        };
        var o3 = {
            name: 'Shweta',
            age: 33
        };
        var o4 = {
            name: 'ajit',
            age: 38
        };
        var o5 = {
            name: 'neelam',
            age: 40
        };

        function comparator(oo1, oo2) {
            return oo1.age > oo2.age ? 1 : (oo1.age === oo2.age ? 0 : -1);
        }
        var sorter = $d.sorter(comparator);
        var sArray = sorter.bubbleSort([o1, o2, o3, o4, o5]);
        expect(sArray[0].age).toBe(6);
        expect(sArray[1].age).toBe(33);
        expect(sArray[2].age).toBe(36);
        expect(sArray[3].age).toBe(38);
        expect(sArray[4].age).toBe(40);
    });

    it("insertion sort", function () {
        //Arrange
        var sorter = $d.sorter();
        var sArray = sorter.insertionSort([6, 15, 7, 8, 2, 745, 2, 1324, 634, 1241, 64, 8, 8, 3, 2]);
        expect(sArray[0]).toBe(2);
        expect(sArray[1]).toBe(2);
        expect(sArray[2]).toBe(2);
        expect(sArray[3]).toBe(3);
        expect(sArray[5]).toBe(7);
    });

    it("insertion sort with comparator", function () {
        //Arrange

        var o1 = {
            name: 'jatin',
            age: 36
        };
        var o2 = {
            name: 'Arshia',
            age: 6
        };
        var o3 = {
            name: 'Shweta',
            age: 33
        };
        var o4 = {
            name: 'ajit',
            age: 38
        };
        var o5 = {
            name: 'neelam',
            age: 40
        };

        function comparator(oo1, oo2) {
            return oo1.age > oo2.age ? 1 : (oo1.age === oo2.age ? 0 : -1);
        }
        var sorter = $d.sorter(comparator);
        var sArray = sorter.insertionSort([o1, o2, o3, o4, o5]);
        expect(sArray[0].age).toBe(6);
        expect(sArray[1].age).toBe(33);
        expect(sArray[2].age).toBe(36);
        expect(sArray[3].age).toBe(38);
        expect(sArray[4].age).toBe(40);
    });

    it("Quick sort", function () {
        //Arrange
        var sorter = $d.sorter();
        var sArray = sorter.quickSort([6, 15, 7, 8, 2, 745, 2, 1324, 634, 1241, 64, 8, 8, 3, 2]);
        /*for (var v in sArray) {
    console.log(sArray[v]);
}*/
        expect(sArray[0]).toBe(2);
        expect(sArray[1]).toBe(2);
        expect(sArray[2]).toBe(2);
        expect(sArray[3]).toBe(3);
        expect(sArray[5]).toBe(7);
    });

    it("Quick sort with comparator", function () {
        //Arrange

        var o1 = {
            name: 'jatin',
            age: 36
        };
        var o2 = {
            name: 'Arshia',
            age: 6
        };
        var o3 = {
            name: 'Shweta',
            age: 33
        };
        var o4 = {
            name: 'ajit',
            age: 38
        };
        var o5 = {
            name: 'neelam',
            age: 40
        };

        function comparator(oo1, oo2) {
            return oo1.age > oo2.age ? 1 : (oo1.age === oo2.age ? 0 : -1);
        }
        var sorter = $d.sorter(comparator);
        var sArray = sorter.quickSort([o1, o2, o3, o4, o5]);
        expect(sArray[0].age).toBe(6);
        expect(sArray[1].age).toBe(33);
        expect(sArray[2].age).toBe(36);
        expect(sArray[3].age).toBe(38);
        expect(sArray[4].age).toBe(40);
        /*  for (var v in sArray) {
      console.log(sArray[v].name + ", " +
          sArray[v].age);
  }*/
    });

    it("Merge sort", function () {
        //Arrange
        var sorter = $d.sorter();
        var sArray = sorter.mergeSort([5, 7, 3, 2, 9, 1]);
        /* for (var v in sArray) {
     console.log("---" + sArray[v]);
 }*/
        expect(sArray[0]).toBe(1);
        expect(sArray[1]).toBe(2);
        expect(sArray[2]).toBe(3);
        expect(sArray[3]).toBe(5);
        expect(sArray[4]).toBe(7);
    });

    it("Merge sort with comparator", function () {
        //Arrange

        var o1 = {
            name: 'jatin',
            age: 36
        };
        var o2 = {
            name: 'Arshia',
            age: 6
        };
        var o3 = {
            name: 'Shweta',
            age: 33
        };
        var o4 = {
            name: 'ajit',
            age: 38
        };
        var o5 = {
            name: 'neelam',
            age: 40
        };

        function comparator(oo1, oo2) {
            return oo1.age > oo2.age ? 1 : (oo1.age === oo2.age ? 0 : -1);
        }
        var sorter = $d.sorter(comparator);
        var sArray = sorter.mergeSort([o1, o2, o3, o4, o5]);
        expect(sArray[0].age).toBe(6);
        expect(sArray[1].age).toBe(33);
        expect(sArray[2].age).toBe(36);
        expect(sArray[3].age).toBe(38);
        expect(sArray[4].age).toBe(40);
        /*  for (var v in sArray) {
      console.log(sArray[v].name + ", " +
          sArray[v].age);
  }*/
    });

    it("Merge sort", function () {
        //Arrange
        var sorter = $d.sorter();
        var sArray = sorter.quickSort([6, 15, 7, 8, 2, 745, 2, 1324, 634, 1241, 64, 8, 8, 3, 2]);
        expect(sArray[0]).toBe(2);
        expect(sArray[1]).toBe(2);
        expect(sArray[2]).toBe(2);
        expect(sArray[3]).toBe(3);
        expect(sArray[5]).toBe(7);
    });

    it("Heap sort", function () {
        //Arrange
        var sorter = $d.sorter();
        var sArray = sorter.heapSort([28, 19, 9, 15, 18, 12, 7, 25, 3]);
        expect(sArray[0]).toBe(3);
        expect(sArray[1]).toBe(7);
        expect(sArray[2]).toBe(9);
        expect(sArray[8]).toBe(28);
    });

    it("Heap creation and top item should be minimum using String", function () {
        //Arrange
        var heap = $d(":heap");
        var heapArray = heap.build([28, 19, 9, 15, 18, 12, 7, 25, 3]);
        expect(heapArray[0]).toBe(3);
    });

    it("Heap creation and top item should be minimum using direct method", function () {
        //Arrange
        var heap = $d.heap();
        var heapArray = heap.build([28, 19, 9, 15, 18, 12, 7, 25, 3]);
        expect(heapArray[0]).toBe(3);
    });

    it("Tries", function () {
        //Arrange
        var tries = $d.tries();
        tries.addData(['a', 'b', 'c', 'd']);
        tries.addData(['a', 'b', 'f']);
        tries.addData(['a', 'b', 'f', 'g', 'k']);
        tries.addData(['b', 'a', 'f', 'g', 'k']);
        tries.addData(['b', 'a', 'f']);
        tries.addData(['b', 'a', 'f', 'd']);
        tries.addData(['b', 'a', 'f', 'a']);
        tries.addData(['b', 'a', 'f', 'g']);
        tries.addData(['b', 'a', 'f', 'g', 'a']);
        tries.addData(['b', 'a', 'f', 'g', 'k']);
        tries.addData(['b', 'a', 'f', 'g', 'k', 'k']);
        tries.addData(['h', 'e', 'l', 'l', 'o', ' ', 'h', 'o', 'w', ' ', 'r', ' ', 'u']);
        tries.addData('jatinder pal');

        tries.print();
        var res = tries.find('abcd');
        expect(res).toBe(true);
        res = tries.find('abff');
        expect(res).toBe(false);
        res = tries.find('bafgkk');
        expect(res).toBe(true);
        res = tries.find('hello how r u');
        expect(res).toBe(true);
        res = tries.find('jatinder pal');
        expect(res).toBe(true);

    });

//    it("Tower of Hanoi", function () {
            //        $d.towerOfHanoi();
            //    });
})
