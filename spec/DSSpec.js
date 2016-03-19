describe("Data Structure Liabrary", function () {
    it("Create LinkedList with initial value", function () {
        //Arrange

        //Act
        var list = $d.linkedlist(4);
        //Assert
        expect(list.next()).toBe(4);
    });
    it("Create LinkedList without initial value", function () {
        //Arrange

        //Act
        var list = $d.linkedlist();
        list.addToLast(4);
        list.addAtFirst(5);

        //Assert
        expect(list.next()).toBe(5);
    });
    it("Create LinkedList with keyword", function () {
        //Arrange

        //Act
        var list = $d(":ll");
        list.addToLast(4);
        list.addAtFirst(5);

        //Assert
        expect(list.next()).toBe(5);
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
        //expect(stack.pop()).toBe(55);

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
        console.log(bt.inorder());
        var list = bt.delete(7);
        console.log("after remove: " + bt.inorder());

        /* var list = bt.remove(7);
        console.log("after remove: " + bt.inorder());*/
        // var list = bt.remove(12);
        //console.log("after remove: " + bt.inorder());

        var list = bt.delete(10);
        console.log("after remove: " + bt.inorder());


        //Assert
        //expect(list.length).toBe(8);
        // expect(stack.peek()).toBe(66);

    });
})
