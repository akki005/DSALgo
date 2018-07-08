import {
    Node
} from "../../ds/nodes"


class LinkedList < T > {
    private Head: Node < T > ;
    private Tail: Node < T > ;
    private count: number;

    constructor(head: Node < T >=null, tail: Node < T >=null) {
        this.Head=head;
        this.Tail=tail;
        this.count=0;
    }

    /**
     * Getter $Count
     * @readonly
     * @return {number}
     * @memberof LinkedList
     */
    public get $Count():number{
        return this.count;
    }


    /**
     * Getter $Head
     * @return {Node < T > }
     */
    public get $Head(): Node < T > {
        return this.Head;
    }

    /**
     * Setter $Head
     * @param {Node < T > } value
     */
    public set $Head(value: Node < T > ) {
        this.Head = value;
    }

    /**
     * Getter $Tail
     * @return {Node < T > }
     */
    public get $Tail(): Node < T > {
        return this.Tail;
    }

    /**
     * Setter $Tail
     * @param {Node < T > } value
     */
    public set $Tail(value: Node < T > ) {
        this.Tail = value;
    }


    public AddToStart(value: T): void {

        let new_node = new Node(value);

        let temp: Node < T > = this.Head;

        this.Head = new_node;
        this.Head.$next = temp;

        this.count++;

        if (this.count === 1) {
            this.Tail = this.Head;
        }
    }

    public AddToLast(value: T):void{

        let new_node = new Node(value);
        
        if(this.count===0){
            this.Head=new_node;
        }else{
            this.Tail.$next=new_node;
        }
        this.Tail=new_node;
        this.count++;
    }

    public RemoveFromLast():void
    {
        if(this.count!==0){
            if(this.count===1){
                this.Head=null;
                this.Tail=null
            }else{
                let current_node= this.Head;
                while(current_node.$next!==this.Tail){
                    current_node= current_node.$next;
                }
                current_node.$next=null;
                this.Tail=current_node;
            }
            this.count--;
        }
       
    }
}

export {
    LinkedList
}