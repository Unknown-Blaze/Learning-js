class Shape{

    constructor(_x = 1, _y = 1){
        this._x = _x
        this._y = _y
    }

    get x(){
        return this._x
    }
    get y(){
        return this._y
    }
    set x(_x){
        this._x = _x
    }
    set y(_y){
        this._y = _y
    }
}

class Rectangle extends Shape{

    constructor( _l, _b, _x = 1, _y = 1){
        super(_x, _y)
        this._l = _l
        this._b = _b
    }
    toString(){
        return `position: (${this._x}, ${this._y})\nlength = ${this._l}\nbreadth = ${this._b}`
    }
}

let r = new Rectangle(5, 6, 7, 8)
console.log(r.toString())