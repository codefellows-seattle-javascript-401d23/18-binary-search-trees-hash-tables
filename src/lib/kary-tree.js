'use strict';

import Queue from 'queue-fifo';

export default class KAryTree {
  constructor(root) {
    this.root = root;
  }

  breadthSearchTraversal() {
    if (!this.root) {
      return null;
    }
    return this._breadthFirstSearch(this.root);
  }

  _breadthFirstSearch(root, value) { // eslint-disable-line
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      // replace console.log with a different operation ;)
      console.log(`visiting ${currentNode.value}`);
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
  }

  find(value) {
    if (!this.root) {
      return null;
    }
    return this._find(this.root, value);
  }

  _find(root, value) { // eslint-disable-line
    if (!root) {
      return null;
    } else if (root.value === value) {
      return root;
    }
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      if (currentNode.value !== value) {
        console.log(`visiting ${currentNode.value}`);
        for (let i = 0; i < currentNode.children.length; i++) {
          queue.enqueue(currentNode.children[i]);
        }
      } else {
        console.log('this should be the Match!: ', currentNode.value);
        return currentNode.value;
      }
    }
  }
}
