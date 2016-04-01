var $d = (function () {
    var ds = function (identifier, additionFn) {
        ////console.log(identifier);
        if (identifier === ':ll') {
            return ds.linkedlist();
        } else if (identifier === ":st") {
            return ds.stack();
        } else if (identifier === ":qu") {
            return ds.queue();
        } else if (identifier === ":bst") {
            return ds.binarySearchTree(additionFn);
        } else if (identifier === ":grp") {
            return ds.graph(additionFn);
        } else if (identifier === ":sorter") {
            return ds.sorter(additionFn);
        }
    };

    function Node(val, next, previous) {
        this.val = val;
        this.next = next;
        this.previous = previous;
    };

    /**
     * LinkedList
     * @param {[[Type]]} val [[Description]]
     */
    function LinkedList(val) {
        ////console.log(val);
        if (val !== undefined) {
            this.root = new Node(val);
            this.nextNode = this.root;
        }
    };

    LinkedList.prototype.addToLast = function (val) {
        var newNode = new Node(val);
        if (this.root === undefined) {
            this.root = newNode;
        } else {
            var tmpNode = this.root;
            while (tmpNode.next !== undefined) {
                tmpNode = tmpNode.next;
            }
            tmpNode.next = newNode;
        }
        this.nextNode = this.root;
        // return this;
    };

    LinkedList.prototype.addAtFirst = function (val) {
        var newNode = new Node(val);
        newNode.next = this.root;
        this.root = newNode;
        this.nextNode = this.root;
        //  return this;
    };

    LinkedList.prototype.moveToFirst = function () {
        this.nextNode = this.root;
    };

    LinkedList.prototype.next = function () {
        var value;
        if (this.nextNode !== undefined) {
            value = this.nextNode.val;
            this.nextNode = this.nextNode.next;
        }
        return value;
    };
    LinkedList.prototype.size = function () {
        var size = 0;
        var tmpNode = this.root;
        while (tmpNode !== undefined) {
            tmpNode = tmpNode.next;
            size++;
        }
        return size;
    };
    /**
     * Stack
     * @param {[[Type]]} comparator [[Description]]
     */
    function Stack(comparator) {
        this.stackArray = [];
        this.comparator = comparator;
    };
    Stack.prototype.push = function (val) {
        if (val !== undefined) {
            this.stackArray.push(val);
        }
    };

    Stack.prototype.pop = function () {
        return this.stackArray.pop();
    };

    Stack.prototype.peek = function () {
        return this.stackArray[this.stackArray.length - 1];
    };

    Stack.prototype.size = function () {
        return this.stackArray.length;
    };

    /**
     * Queue
     * @param {[[Type]]} comparator [[Description]]
     */
    function Queue(comparator) {
        this.queueArray = [];
        this.comparator = comparator;
    };
    Queue.prototype.enqueue = function (val) {
        this.queueArray.push(val);
    };
    Queue.prototype.dequeue = function () {
        return this.queueArray.splice(0, 1)[0];
    };
    Queue.prototype.peek = function () {
        return this.queueArray[0];
    };
    Queue.prototype.size = function () {
        return this.queueArray.length;
    };
    Queue.prototype.contains = function (val) {
        var comparator = this.comparator;
        var contained = false;
        for (var vIndex in this.queueArray) {
            if (equals(this.queueArray[vIndex], val)) {
                contained = true;
                break;
            }
        }

        function equals(v1, v2) {
            if (comparator === undefined) {
                return v1 === v2 ? true : false;
            } else {
                return comparator(v1, v2) === 0 ? true : false;
            }
        }
        return contained;
    };

    /**
     * BinarySearchTree
     * @param {[[Type]]} comparatorFn [[Description]]
     */
    function BinarySearchTree(comparatorFn) {
        this.root;
        this.comparatorFn = comparatorFn;
    };

    BinarySearchTree.prototype.add = function (val) {
        var newNode = new Node(val);
        var compFn = this.comparatorFn;
        if (this.root === undefined) {
            this.root = newNode;
        } else {
            addNewNode(this.root, newNode);
        };

        function addNewNode(node, newNode) {
            if (compare(node.val, newNode.val) > 0) {
                if (node.previous === undefined) {
                    node.previous = newNode;
                } else {
                    addNewNode(node.previous, newNode);
                }
            } else {
                if (node.next === undefined) {
                    node.next = newNode;
                } else {
                    addNewNode(node.next, newNode);
                }
            }
        };

        function compare(var1, var2) {
            if (compFn !== undefined) {
                return compFn(var1, var2);
            } else {
                return var1 > var2 ? 1 : (var1 < var2 ? -1 : 0);
            }
        }

    };

    BinarySearchTree.prototype.delete = function (remVal) {
        var rootNode = this.root;
        var compFn = this.compareFn;

        var pNode, sNode;

        if (equals(rootNode.val, remVal)) {
            // ROOT NEED TO BE REMOVED   
            sNode = rootNode;
            //console.log("ITS A ROOT NODE : " + sNode.val);
        } else {
            preorder(rootNode);
        }

        function equals(val1, val2) {
            if (compFn === undefined) {
                return val1 === val2 ? true : false;
            } else {
                return compFn(val1, val2) === 0;
            }
        };

        // considering it always has next child
        function sucessor(node) {
            var sucessorNode = node.next;
            while (sucessorNode.previous !== undefined) {
                sucessorNode = sucessorNode.previous;
            }
            return sucessorNode;
        }

        function preorder(node) {
            if (node === undefined)
                return false;
            if (node.previous !== undefined && equals(node.previous.val, remVal)) {
                pNode = node;
                sNode = node.previous;
                return true;
            } else if (node.next !== undefined && equals(node.next.val, remVal)) {
                pNode = node;
                sNode = node.next;
                return true;
            };
            return preorder(node.previous) || preorder(node.next);
        };

        // console.log("parentNode: " + (pNode !== undefined ? pNode.val : "undefined") + " Searched Node:" + (sNode == undefined ? "undefined" : sNode.val));

        if (sNode !== undefined) {
            if (sNode.previous !== undefined && sNode.next !== undefined) {
                var sucessorNode = sucessor(sNode);
                this.delete(sucessorNode.val);

                if (pNode !== undefined) {
                    if (equals(pNode.previous.val, sNode.val)) {
                        pNode.previous = sucessorNode;
                    } else {
                        pNode.next = sucessorNode;
                    }
                } else {
                    this.root = sucessorNode;
                }
                sucessorNode.previous = sNode.previous;
                sucessorNode.next = sNode.next;

            } else if (sNode.previous !== undefined || sNode.next !== undefined) {
                if (sNode.previous !== undefined) {
                    pNode.previous = sNode.previous;
                } else {
                    pNode.next = sNode.next;
                }
            } else {
                if (pNode !== undefined) {
                    if (pNode.previous !== undefined && equals(pNode.previous.val, sNode.val)) {
                        pNode.previous = undefined;
                    } else {
                        pNode.next = undefined;
                    }
                } else {
                    this.root = undefined;
                }
            }
        }
    };

    BinarySearchTree.prototype.inorder = function () {
        var inorderRes = [];

        function inorderTraversal(node) {
            if (node === undefined) {
                return;
            }
            inorderTraversal(node.previous);
            inorderRes.push(node.val);
            inorderTraversal(node.next);
        };
        inorderTraversal(this.root);
        return inorderRes;
    };



    /**
     * Graph
     * @param {[[Type]]} vertex [[Description]]
     */

    Graph.prototype.addVertex = function (vertex) {
        this.vertexList.push(vertex);
    };
    Graph.prototype.addEdge = function (edge) {
        this.edgeList.push(edge);
    };

    Graph.prototype.createVertex = function (vertexVal) {
        return new Vertex(vertexVal);
    };
    Graph.prototype.createEdge = function (vert1, vert2) {
        return new Edge(vert1, vert2);
    };

    Graph.prototype.buildGraph = function () {
        var comparator = this.comparator;
        for (var ver in this.vertexList) {
            var vert = this.vertexList[ver];
            var vMap = new VertexMap(vert);
            for (var ed in this.edgeList) {
                var edge = this.edgeList[ed];
                if (compare(vert, edge.vert1)) {
                    vMap.addAdjacentVertex(edge.vert2);
                }
            }
            this.adjacancyList.addVertexMap(vMap);
        }

        function compare(vert1, vert2) {
            if (comparator === undefined) {
                return vert1.value === vert2.value ? true : false;
            } else {
                comparator(vert1.value, vert2.value) === 0 ? true : false;
            }
        }
    };

    Graph.prototype.print = function () {
        for (var ver in this.vertexList) {
            var v = this.vertexList[ver];
            // console.log("Adjacent to vert: " + v.value);
            var adVer = this.adjacancyList.getAdjacentVertexes(v);
            /* for (var vv in adVer) {
                console.log("---" + adVer[vv].value);
            }
*/
        }
    };

    Graph.prototype.breathFirstTraversal = function (vertex) {
        var output = [];
        var queue = [];

        output.push(vertex);
        queue.push(vertex);
        var holder = {};
        holder[vertex.value] = true;

        while (queue.length > 0) {
            var ver = queue[0];
            queue.splice(0, 1);
            var adjVertexes = this.adjacancyList.getAdjacentVertexes(ver);
            //  console.log("vertex :" + ver.value + " length: " + adjVertexes.length + " QUEUE LENGTH: " + queue.length);
            for (var vIndex in adjVertexes) {

                var vv = adjVertexes[vIndex];
                // console.log("holder.vv:" + holder[vv.value] + "   vv:" + vv.value);
                if (holder[vv.value] === undefined) {
                    queue.push(vv);
                    holder[vv.value] = true;
                    output.push(vv);
                }
            }
        }
        return output;
    };


    Graph.prototype.depthFirstTraversal = function (vertex) {
        var output = ds.stack();
        var stack = ds.stack();

        output.push(vertex);
        stack.push(vertex);
        var holder = {};
        holder[vertex.value] = true;

        while (stack.size() > 0) {
            var ver = stack.pop();
            var adjVertexes = this.adjacancyList.getAdjacentVertexes(ver);
            //  console.log(adjVertexes);
            for (var vIndex in adjVertexes) {
                var vv = adjVertexes[vIndex];
                if (holder[vv.value] === undefined) {
                    stack.push(vv);
                    holder[vv.value] = true;
                    output.push(vv);
                }
            }
        }
        return output;
    };

    function Graph(comparator) {
        this.comparator = comparator;
        this.adjacancyList = new AdjacancyList();
        this.vertexList = [];
        this.edgeList = [];
    };

    function Vertex(value) {
        this.value = value;
    };

    function Edge(vert1, vert2) {
        this.vert1 = vert1;
        this.vert2 = vert2;
    };

    function AdjacancyList() {
        this.adjacancyList = [];
    };
    AdjacancyList.prototype.addVertexMap = function (vMap) {
        this.adjacancyList.push(vMap);
    };
    AdjacancyList.prototype.getAdjacentVertexes = function (ver) {
        var adjacancyList = this.adjacancyList;
        var adjacentVertexes;
        for (var vMapIndex in adjacancyList) {
            // //console.log("adjacancyList[vMap].vertex: " + (adjacancyList[vMap].vertex.value) + "  ver:" + ver.value);
            var vMap = adjacancyList[vMapIndex];
            if (compare(ver, vMap.vertex)) {
                adjacentVertexes = vMap.adjacentVertexes;
                break;
            }
        }

        function compare(vert1, vert2) {
            if (this.comparator === undefined) {
                return vert1.value === vert2.value ? true : false;
            } else {
                this.comparator(vert1.value, vert2.value) === 0 ? true : false;
            }
        }
        //    //console.log("returing adjacentVertexes:" + adjacentVertexes + "   for vertex:" + ver.value);
        return adjacentVertexes;
    };

    function VertexMap(vertex) {
        this.vertex = vertex;
        this.adjacentVertexes = [];
    };
    VertexMap.prototype.addAdjacentVertex = function (adjVer) {
        ////console.log(this.vertex.value + "   adjVer:" + adjVer.value);
        this.adjacentVertexes.push(adjVer);
    };

    /**
     * SORTING ALGORITHIMS
     * @param   {[[Type]]} comparator [[Description]]
     * @returns {[[Type]]} [[Description]]
     */
    function Sorter(comparator) {

        function compareTo(v1, v2) {
            if (comparator === undefined) {
                return v1 > v2 ? 1 : (v1 === v2 ? 0 : -1);
            } else {
                return comparator(v1, v2);
            }
        }

        this.bubbleSort = function (array) {
            if (array instanceof Array) {
                for (var i = 0; i < array.length; i++) {
                    for (var j = i; j < array.length; j++) {
                        if (compareTo(array[i], array[j]) > 0) {
                            var temp = array[i];
                            array[i] = array[j];
                            array[j] = temp;
                        }
                    }
                }
                return array;
            }
        };



        this.insertionSort = function (array) {
            if (array instanceof Array) {
                var tmpArray = [];
                tmpArray.push(array[0]);
                for (var i = 1; i < array.length; i++) {
                    var indx = tmpArray.length;
                    while (indx > 0 && compareTo(tmpArray[indx - 1], array[i]) > 0) {
                        tmpArray[indx] = tmpArray[indx - 1];
                        indx--;
                    }

                    tmpArray[indx] = array[i];
                }
                return tmpArray;
            }
        };


        this.quickSort = function (array) {
            if (array instanceof Array) {
                qSort(0, array.length - 1, array);
                return array;
            }

            function qSort(start, end, array) {
                var sIndx = start,
                    eIndx = end;
                var paviot = array[eIndx];
                while (sIndx <= eIndx) {
                    while (compareTo(array[sIndx], paviot) < 0) {
                        sIndx++;
                    }
                    while (compareTo(array[eIndx], paviot) > 0) {
                        eIndx--;
                    }
                    if (sIndx <= eIndx) {
                        var tmp = array[sIndx];
                        array[sIndx] = array[eIndx];
                        array[eIndx] = tmp;
                        sIndx++;
                        eIndx--;
                    }
                }
                if (start < end) {
                    qSort(start, eIndx, array);
                    qSort(eIndx + 1, end, array);
                }
            }
        };

        this.mergeSort = function (array) {
            if (array instanceof Array) {
                divide(0, array.length - 1, array)
                return array;
            }

            function divide(p, q, array) {
                if (p < q) {
                    var mid = Math.floor((p + q) / 2);
                    console.log("mid: " + mid);
                    divide(p, mid, array);
                    divide(mid + 1, q, array);
                    conquer(p, mid, q, array);
                }
            }

            function conquer(p1, r1, q1, array) {
                console.log(" p1: " + p1 + " r1:" + r1 + "  q1:" + q1);
                var p = p1,
                    q = q1,
                    r = r1 + 1;
                var tArr = [];
                for (var i = p1; i <= q1; i++) {
                  /*  console.log("(array[p] :" + array[p] + ", array[r] " + array[r])*/
                    if (array[p] < array[r]) {
                        tArr.push(array[p]);
                        p++;
                    } else {
                        tArr.push(array[r]);
                        r++;
                    }
                }
               /* for (var v in tArr) {
                    console.log("tmp: " + tArr[v]);
                }*/
                var j = 0;

                for (var i1 = p1; i1 < q1; i1++) {
                    array[i1] = tArr[j++];
                   /* console.log("array[i1]: " +
     array[i1] + " tArr[j]==" + tArr[j]);*/
                }
            }
        }

    };
    /**
     * $d exposed functions
     */
    ds.queue = function () {
        return new Queue();
    };
    ds.stack = function () {
        return new Stack();
    };

    ds.linkedlist = function (val) {
        return new LinkedList(val);
    };
    ds.binarySearchTree = function (compFn) {
        return new BinarySearchTree(compFn);
    };
    ds.graph = function (compFn) {
        return new Graph(compFn);
    };

    ds.sorter = function (compFn) {
        return new Sorter(compFn);
    }
    return ds;

})();
