import {LinkedList} from './LinkedList/singlyLinkedList';
let list = new LinkedList<number>();
list.AddToStart(4);//4
list.AddToStart(5);//5,4
list.AddToLast(6);//5,4,6
list.RemoveFromLast();//6
list.RemoveFromLast();//4
//console.log(list);//5
list.AddToLast(7);//5,7
list.AddToLast(8);//5,7,8
list.RemoveFromFront();//7,8
list.RemoveFromFront();//8



let list_string = new LinkedList<string>();
list_string.AddToStart("4");//4
list_string.AddToStart("5");//5,4
list_string.AddToLast("6");//5,4,6
list_string.RemoveFromLast();//6
list_string.RemoveFromLast();//4
//console.log(list);//5
list_string.AddToLast("7");//5,7
list_string.AddToLast("8");//5,7,8
list_string.RemoveFromFront();//7,8
list_string.RemoveFromFront();//8
list_string.AddToLast("9");//8,9
list_string.AddToLast("10");//8,9,10
list_string.AddToLast("11");//8,9,10,11
list_string.AddToLast("12");//8,9,10,11,12
console.log(list_string.printList());
list_string.RemoveFirstOccurrence("8");//9,10,11,12
console.log(list_string.printList());

let list_string_1 = new LinkedList<string>();
console.log(list_string_1.printList());