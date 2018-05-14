'use strict';

import KAryNode from '../lib/kary-node';
import KAryTree from '../lib/kary-tree';


describe('k-ary tree tests', () => {
  describe('k-ary find method', () => {
    const one = new KAryNode(1);
    one.appendChild(2);
    one.appendChild(3);
    one.appendChild(4);

    one.children[1].appendChild(5);
    one.children[1].appendChild(6);
    one.children[1].appendChild(7);


    one.children[1].children[1].appendChild(8);

    const kAryTree = new KAryTree(one);
    it('should return the first node matching the input value', () => {
      expect(kAryTree.find(2)).toEqual(one.children[1]);
    });
  });
});
