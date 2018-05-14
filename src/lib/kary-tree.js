'use strict';

import Queue from 'queue-fifo';

export default class KAryTree {
  constructor(root) {
    this.root = root;
  }

  // Time: O(n)
  // Space: O(n)
  breadthSearchTraversal() {
    if (!this.root) {
      return null;
    }
    return this._breadthFirstSearch(this.root);
  }

  _breadthFirstSearch(root) { // eslint-disable-line
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
  find(valueToFind) {
    if (!this.root) {
      return null;
    }
    return this._find(this.root, valueToFind);
  }
  _find(root, valueToFind) { // eslint-disable-line
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      if (currentNode.value === valueToFind) {
        return currentNode;
      }
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
    return null;
  }
}
