import {
    Node
} from "../../ds/nodes"


class LinkedList < T > implements Iterator<T>{
    private _Head: Node < T > ;
    private _Tail: Node < T > ;
    private _count: number;
    private _iterator_pointer: Node < T > ;

    constructor(head: Node < T >= null, tail: Node < T >= null) {
        this._Head = head;
        this._Tail = tail;
        this._count = 0;
    }


    /**
     * Getter Head
     * @return {Node < T > }
     */
    public get Head(): Node < T > {
        return this._Head;
    }

    /**
     * Getter Tail
     * @return {Node < T > }
     */
    public get Tail(): Node < T > {
        return this._Tail;
    }

    /**
     * Getter count
     * @return {number}
     */
    public get count(): number {
        return this._count;
    }

    /**
     * Setter Head
     * @param {Node < T > } value
     */
    public set Head(value: Node < T > ) {
        this._iterator_pointer = value;
        this._Head = value;
    }

    /**
     * Setter Tail
     * @param {Node < T > } value
     */
    public set Tail(value: Node < T > ) {
        this._Tail = value;
    }

    /**
     * Setter count
     * @param {number} value
     */
    public set count(value: number) {
        this._count = value;
    }


    public AddToStart(value: T): void {

        let new_node = new Node(value);

        let temp: Node < T > = this.Head;

        this.Head = new_node;
        this.Head.next = temp;

        this.count++;

        if (this.count === 1) {
            this.Tail = this.Head;
        }
    }

    public AddToLast(value: T): void {

        let new_node = new Node(value);

        if (this.count === 0) {
            this.Head = new_node;
        } else {
            this.Tail.next = new_node;
        }
        this.Tail = new_node;
        this.count++;
    }

    public RemoveFromLast(): void {
        if (this.count !== 0) {
            if (this.count === 1) {
                this.Head = null;
                this.Tail = null
            } else {
                let current_node: Node < T >= this.Head;
                while (current_node.next !== this.Tail) {
                    current_node = current_node.next;
                }
                current_node.next = null;
                this.Tail = current_node;
            }
            this.count--;
        }

    }
    public RemoveFromFront(): void {
        if (this.count !== 0) {
            this.Head = this.Head.next;
            this.count--;
            if (this.count === 0) {
                this.Tail = null;
            }
        }

    }

    public RemoveFirstOccurrence(value: T): void {

        let current_node: Node < T >= this.Head;
        let previous_node: Node < T >= null;

        while (current_node !== null) {
            if (current_node.value == value) {
                if (previous_node !== null) {
                    previous_node.next = current_node.next;
                    if (!current_node.next) {
                        this.Tail = previous_node;
                    }
                    this.count--;
                } else {
                    this.RemoveFromFront()
                }
                return;
            }
            previous_node = current_node;
            current_node = current_node.next;
        }
    }

    public printList(): string {

        if (this.count != 0) {
            let current_node: Node < T >= this.Head;
            let list_as_string: string = "";
            while (current_node != null) {
                list_as_string = list_as_string + " " + current_node.value;
                current_node = current_node.next;
            }
            return list_as_string;
        } else {
            return "List is empty"
        }

    }

    /**iterator 
     * as it implement iterator interface it must implement next function and that next function must return IteratorResult type
    */
    public next(): IteratorResult < T > {
        if (this._iterator_pointer !== null) {
            let current_node: Node < T > = this._iterator_pointer;
            this._iterator_pointer = this._iterator_pointer.next;
            return {
                done: false,
                value: current_node.value
            }
        } else {
            return {
                done: true,
                value: undefined
            }
        }
    }

    /**iterable and iterator combined*/
    public * values(): IterableIterator < T > {
        let current_node: Node < T >= this._Head;
        while (current_node !== null) {
            yield current_node.value;
            current_node = current_node.next;
        }
    }
}

export {
    LinkedList
}