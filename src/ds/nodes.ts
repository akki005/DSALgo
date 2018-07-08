class Node < T > {
    private value: T;
    private next: Node < T > ;

    constructor(value: T = null, next: Node < T >= null) {
        this.value = value;
        this.next = next;
    }


    /**
     * Getter $value
     * @return {T}
     */
    public get $value(): T {
        return this.value;
    }

    /**
     * Setter $value
     * @param {T} value
     */
    public set $value(value: T) {
        this.value = value;
    }

    /**
     * Getter $next
     * @return {Node < T > }
     */
    public get $next(): Node < T > {
        return this.next;
    }

    /**
     * Setter $next
     * @param {Node < T > } value
     */
    public set $next(value: Node < T > ) {
        this.next = value;
    }


}

export {
    Node
}