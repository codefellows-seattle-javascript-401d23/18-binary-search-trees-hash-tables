'use strict';

import KAryNode from '../lib/kary-node';
import KAryTree from '../lib/kary-tree';

const one = new KAryNode(1);
one.appendChild(2);
one.appendChild(3);
one.appendChild(4);

one.children[1].appendChild(5);
one.children[1].appendChild(6);
one.children[1].appendChild(7);

one.children[1].children[1].appendChild(8);

const kAryTree = new KAryTree(one);

console.log(kAryTree);

// kAryTree.breadthSearchTraversal();

describe('#find', () => {
  test('should return matching value', () => {
    expect(kAryTree.find(6)).toEqual(6);
  });
});
