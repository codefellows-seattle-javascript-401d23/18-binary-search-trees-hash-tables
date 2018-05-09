'use strict';

export default class KAryNode {
  constuctor(value){
    this.value = value;
    this.children = [];
    // this.children = {};
  }

  appendChild(value) {
    const nodeToAppend = new KAryNode(value);
    this.children.push(nodeToAppend);
  }
}

