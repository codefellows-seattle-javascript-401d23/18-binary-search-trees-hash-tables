'use strict';

import BinarySearchTree from '../lib/binary-search-tree';
import Node from '../lib/node';
import runTraversal from '../lib/traversals';


describe('tests of binary search tree A', () => {
  const nodeA = new Node(10);
  const nodeB = new Node(5);
  const nodeC = new Node(15);
  const nodeD = new Node(2);

  const bstA = new BinarySearchTree(nodeA);

  nodeA.left = nodeB;
  nodeA.right = nodeC;

  nodeB.left = nodeD;

  test('bstA in-order traversal', () => {
    expect(runTraversal(bstA.root, 'in-order')).toEqual('2,5,10,15');
  });
  test('bstA delete 5', () => {
    bstA.remove(bstA.root, 5, null, false);
    expect(runTraversal(bstA.root, 'in-order')).toEqual('2,10,15');
  });
  test('bstA delete 2', () => {
    bstA.remove(bstA.root, 2, null, false);
    expect(runTraversal(bstA.root, 'in-order')).toEqual('10,15');
  });
  test('bstA delete 15', () => {
    bstA.remove(bstA.root, 15, null, false);
    expect(runTraversal(bstA.root, 'in-order')).toEqual('10');
  });
});
describe('tests of binary search tree B', () => {
  const nodeA = new Node(10);
  const nodeB = new Node(15);
  const nodeC = new Node(12);
  const nodeD = new Node(20);
  const nodeE = new Node(16);

  const bstB = new BinarySearchTree(nodeA);

  nodeA.right = nodeB;

  nodeB.left = nodeC;
  nodeB.right = nodeD;

  nodeD.left = nodeE;

  test('bstB in-order traversal', () => {
    expect(runTraversal(bstB.root, 'in-order')).toEqual('10,12,15,16,20');
  });
  test('bstB delete 15', () => {
    bstB.remove(bstB.root, 15, null, false);
    expect(runTraversal(bstB.root, 'in-order')).toEqual('10,12,16,20');
  });
  test('bstB delete 12', () => {
    bstB.remove(bstB.root, 12, null, false);
    expect(runTraversal(bstB.root, 'in-order')).toEqual('10,16,20');
  });
});
