'use strict';

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  // Time: O(H) -> O(lg n)
  // Space: O(H) -> O(lg n)
  insert(nodeToInsert) {
    if (!this.root) {
      this.root = nodeToInsert;
    } else {
      this._insert(this.root, nodeToInsert);
    }
  }

  _insert(rootNode, nodeToInsert) {
    if (nodeToInsert.value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = nodeToInsert;
      } else {
        this._insert(rootNode.left, nodeToInsert);
      }
    } else if (!rootNode.right) {
      rootNode.right = nodeToInsert;
    } else {
      this._insert(rootNode.right, nodeToInsert);
    }
  }

  // Time: O(H) -> O(lg n)
  // Space: O(H) -> O(lg n)
  find(value) {
    if (!this.root) {
      return null;
    }
    return this._find(this.root, value);
  }

  _find(rootNode, value) {
    if (!rootNode) {
      return null;
    } else if (rootNode.value === value) {
      return rootNode;
    } else if (rootNode.value < value) {
      return this._find(rootNode.right, value);
    }
    return this._find(rootNode.left, value);
  }
  minValueNode(node) { // eslint-disable-line
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }
  remove(rootNode, value, parentNode, isLeft) {
    if (!rootNode) {
      return null;
    } else if (rootNode.value === value) {
      if (rootNode.left && rootNode.right) { // two children
        const minValue = this.minValueNode(rootNode.right);
        rootNode.value = minValue.value;
        this.remove(rootNode.right, minValue.value, rootNode, false);
      } else if (!rootNode.left && !rootNode.right) { // no children
        if (rootNode === this.root) {
          this.root = null;
        } else if (isLeft) {
          parentNode.left = null;
        } else {
          parentNode.right = null;
        }
      } else if (rootNode.left) { // one left child
        if (rootNode === this.root) {
          this.root = rootNode.left;
        } else if (isLeft) {
          parentNode.left = rootNode.left;
        } else {
          parentNode.right = rootNode.left;
        }
      } else if (rootNode.right) { // one right child
        if (rootNode === this.root) {
          this.root = rootNode.right;
        } else if (isLeft) {
          parentNode.left = rootNode.right;
        } else {
          parentNode.right = rootNode.right;
        }
      }
    } else if (rootNode.value < value) {
      return this.remove(rootNode.right, value, rootNode, false);
    }
    return this.remove(rootNode.left, value, rootNode, true);
  }
}

export default BinarySearchTree;
