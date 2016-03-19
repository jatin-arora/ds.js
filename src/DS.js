var $d = (function () {
    var ds = function (input, additionFn) {
        //console.log(input);
        if (input === ':ll') {
            return ds.linkedlist();
        } else if (input === ":st") {
            return ds.stack();
        } else if (input === ":qu") {
            return ds.queue();
        } else if (input === ":bst") {
            return ds.binarySearchTree(additionFn);
        }
    };

    function Node(val, next, previous) {
        this.val = val;
        this.next = next;
        this.previous = previous;
    };

    function LinkedList(val) {
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
        return this;
    };

    LinkedList.prototype.addAtFirst = function (val) {
        var newNode = new Node(val);
        newNode.next = this.root;
        this.root = newNode;
        this.nextNode = this.root;
        return this;
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

    function Stack() {
        this.stackArray = [];
    };
    Stack.prototype.push = function (val) {
        if (val !== undefined) {
            this.stackArray.push(val);
        }
    };

    Stack.prototype.pop = function () {
        return this.stackArray.splice(this.stackArray.length - 1, 1)[0];
    };

    Stack.prototype.peek = function () {
        return this.stackArray[this.stackArray.length - 1];
    };

    Stack.prototype.size = function () {
        return this.stackArray.length;
    };

    function Queue() {
        this.queueArray = [];
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
            console.log("ITS A ROOT NODE : " + sNode.val);
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

        console.log("parentNode: " + (pNode !== undefined ? pNode.val : "undefined") + " Searched Node:" + (sNode == undefined ? "undefined" : sNode.val));

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

    function Graph(comparator) {
        this.comparator = comparator;
    };

    function Vertex(val) {
        this.value = val;
    };

    Vertex.prototype.getValue = function () {
        return this.value;
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
        for (vMap in adjacancyList) {
            if (this.comparator(ver.val, vMap.vertex.value) === 0) {
                adjacentVertexes = vMap.adjacentVertexes;
                break;
            }
        }
        return adjacentVertexes;
    };

    function VertexMap(vertex) {
        this.vertex = vertex;
        this.adjacentVertexes = [];
    };
    VertexMap.prototype.addAdjacentVertex = function (vertex) {
        this.adjacentVertexes.push(vertex);
    };

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
    return ds;

})();