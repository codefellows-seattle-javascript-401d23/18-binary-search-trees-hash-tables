'use strict';

import KAryTree from './lib/kary-tree';
import KAryNode from './lib/kary-node';

const one = new KAryNode(1);
one.appendChild(2);
one.appendChild(3);
one.appendChild(4);

one.children[1].one.appendChild(5);
one.children[1].one.appendChild(6);
one.children[1].one.appendChild(7);

one.children[1].children[1].appendChild(8);

KAryTree.breadthSearchTraversal();
