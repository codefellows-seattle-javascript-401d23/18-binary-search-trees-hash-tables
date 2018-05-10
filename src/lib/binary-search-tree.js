'use stict';

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
  remove(rootNode, value, parentNode) {
    // Joy sez: keep track of the parent node and pass it to
    // the recursive function along with child and value.
    // this is currently incomplete.
    let temp = null;

    if (!rootNode) {
      return null;
    } else if (rootNode.value === value) {
      if (!rootNode.left) {
        temp = rootNode.right;
        rootNode = null;  // eslint-disable-line
        return temp;
      } else if (!rootNode.right) {
        if (!rootNode.left) {
          temp = rootNode.left;
          rootNode = null;  // eslint-disable-line
          return temp;
        }
      } else {
        temp = this.minValueNode(rootNode.right);
        rootNode.value = temp.value;
        rootNode.right = this.remove(rootNode.right, temp.value);
      }
      return rootNode;
    } else if (rootNode.value < value) {
      return this.remove(rootNode.right, value, rootNode);
    }
    return this.remove(rootNode.left, value, rootNode);
  }
}

export default BinarySearchTree;
