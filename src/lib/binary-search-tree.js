'use strict';

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

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

  remove(value) {
    function removeNode(rootNode) {
      if (rootNode === null) {
        return null;
      }
      if (value === rootNode.value) {
        if (rootNode.left === null && rootNode.right === null) {
          return null;
        }
        if (rootNode.left === null) {
          return rootNode.right;
        }
        if (rootNode.right === null) {
          return rootNode.left;
        }

        let tempNode = rootNode.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        rootNode.value = tempNode.value;
        rootNode.right = removeNode(rootNode.right, tempNode.value);
        return rootNode;
      } else if (value < rootNode.value) {
        rootNode.left = removeNode(rootNode.left, value);
        return rootNode;
      } 
      rootNode.right = removeNode(rootNode.right, value);
      return rootNode;
    }
    this.root = removeNode(this.root, value);
  }
}

export default BinarySearchTree;
