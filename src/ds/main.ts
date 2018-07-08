import {LinkedList} from './LinkedList/singlyLinkedList';
let list = new LinkedList<number>();
list.AddToStart(4);
list.AddToStart(5);
list.AddToLast(6);
list.RemoveFromLast();
list.RemoveFromLast();
console.log(list.$Count);
console.log(list);