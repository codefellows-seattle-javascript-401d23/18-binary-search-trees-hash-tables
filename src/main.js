'use strict';

import BinaryTree from './lib/binary-tree';
import Node from './lib/node';

// STEP 1.  Un-comment the preferred Binary Tree method.
import inOrderTraversal from './lib/inOrderTraversal';
// import preOrderTraversal from './lib/traversals';
// import postOrderTraversal from './lib/traversals';

// STEP 2. add or remove Nodes if needed.
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
const tree = new BinaryTree(one);

// STEP 3. Manually set the order of the Binary tree below.
one.left = two;
one.right = three;

two.left = four;

three.left = five;
three.right = six;

six.left = seven;
six.right = eight;

eight.right = nine;

// STEP 4. Un-comment the SAME preferred Binary Tree method as above.
inOrderTraversal(tree.root);
// preOrderTraversal(tree.root);
// postOrderTraversal(tree.root);
