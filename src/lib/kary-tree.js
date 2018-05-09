'use strict';

import Queue from 'queue-fifo';

export default class KAryTree {
  constructor(root) {
    this.root = root;
  }

  // Time: O(n)
  // Space: O(n)
  breadthFirstSearchTraversal() {
    if (!this.root) {
      return null;
    }
    return this._breadthFirstSearch(this.root);
  }

  // Space: O(n)
  // Time: O(1)
  _breadthFirstSearch(root) {
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      console.log(`Visiting ${currentNode.value}`);

      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
  }
}
