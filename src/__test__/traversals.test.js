'use strict';

import BinaryTree from '../lib/binary-tree';
import Node from '../lib/node';
import runTraversal from '../lib/traversals';

describe('treeA', () => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);
  const seven = new Node(7);
  const eight = new Node(8);
  const nine = new Node(9);
  const treeA = new BinaryTree(one);

  one.left = two;
  one.right = three;

  three.left = four;
  three.right = five;

  two.left = six;

  six.right = seven;

  seven.left = eight;
  seven.right = nine;
  test('treeA pre-order', () => {
    expect(runTraversal(treeA.root, 'pre-order')).toEqual('1,2,6,7,8,9,3,4,5');
  });
  test('treeA post-order', () => {
    expect(runTraversal(treeA.root, 'post-order')).toEqual('8,9,7,6,2,4,5,3,1');
  });
  test('treeA in-order', () => {
    expect(runTraversal(treeA.root, 'in-order')).toEqual('6,8,7,9,2,1,4,3,5');
  });
});

describe('treeB', () => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);
  const seven = new Node(7);
  const eight = new Node(8);

  const treeB = new BinaryTree(one);

  one.left = two;

  two.left = three;
  two.right = four;

  four.left = five;
  four.right = six;

  six.left = seven;
  six.right = eight;

  test('treeB pre-order', () => {
    expect(runTraversal(treeB.root, 'pre-order')).toEqual('1,2,3,4,5,6,7,8');
  });
  test('treeB post-order', () => {
    expect(runTraversal(treeB.root, 'post-order')).toEqual('3,5,7,8,6,4,2,1');
  });
  test('treeB in-order', () => {
    expect(runTraversal(treeB.root, 'in-order')).toEqual('3,2,5,4,7,6,8,1');
  });
});
describe('treeC', () => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);

  const treeC = new BinaryTree(one);

  one.left = two;
  one.right = three;

  three.left = four;

  four.left = five;
  four.right = six;

  test('treeC pre-order', () => {
    expect(runTraversal(treeC.root, 'pre-order')).toEqual('1,2,3,4,5,6');
  });
  test('treeC post-order', () => {
    expect(runTraversal(treeC.root, 'post-order')).toEqual('2,5,6,4,3,1');
  });
  test('treeC in-order', () => {
    expect(runTraversal(treeC.root, 'in-order')).toEqual('2,1,5,4,6,3');
  });
});
