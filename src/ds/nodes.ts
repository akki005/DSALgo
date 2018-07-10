class Node < T > {
    private _value: T;
    private _next: Node < T > ;

    constructor(value: T, next: Node < T >= null) {
        this._value = value;
        this._next = next;
    }


    /**
     * Getter value
     * @return {T}
     */
	public get value(): T {
		return this._value;
	}

    /**
     * Getter next
     * @return {Node < T > }
     */
	public get next(): Node < T >  {
		return this._next;
	}

    /**
     * Setter value
     * @param {T} value
     */
	public set value(value: T) {
		this._value = value;
	}

    /**
     * Setter next
     * @param {Node < T > } value
     */
	public set next(value: Node < T > ) {
		this._next = value;
	}
}

export {
    Node
}