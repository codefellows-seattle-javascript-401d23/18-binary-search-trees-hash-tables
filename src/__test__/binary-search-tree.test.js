'use strict';

import BinarySearchTree from '../lib/binary-search-tree';
import Node from '../lib/node';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
const BST = new BinarySearchTree(five);

five.left = three;
five.right = eight;

three.left = one;
three.right = four;

one.right = two;

eight.left = six;
eight.right = nine;

six.right = seven;

describe('#remove', () => {
  test('should return removed value', () => {
    expect(BST.remove(3)).toEqual(3);
  });
});
