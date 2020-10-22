class Producto {
    constructor(codigo, producto, descripcion, cantidad, costo){
        this.codigo = codigo
        this.producto = producto
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.costo = costo
    }
}

class Almacen{
    constructor(){
        this.capacidad = []
    }

    agregarProducto(producto){
        if(this.capacidad.length >= 20){
            return "Almacen lleno"
        }else{
            this.capacidad.push(producto)
        }
    }

    borrarProductoID(idProducto){
        for(let i = 0; i<this.capacidad.length; i++){
            if(idProducto == this.capacidad[i].codigo){
                let eliminado = this.capacidad[i].producto
                this.capacidad.splice(i, 1)
                return `Producto eliminado: ${eliminado}`
            }
        }
    }

    buscarProductoID(idProducto){
        for(let i = 0; i<this.capacidad.length; i++){
            if(idProducto == this.capacidad[i].codigo){
                return `Producto encontrado: ${this.capacidad[i].producto}`
            }
        }
    }

    listarProductos(){
        for(let i = 0; i<this.capacidad.length; i++){
            if(this.capacidad[i] !== undefined){
                console.log(`${i}: ${this.capacidad[i].producto}`)
            }
        }
    }
}

let producto1 = new Producto(1,"Azúcar","Azúcar normal", 1, 9)
let producto2 = new Producto(2,"Donitas Bimbo","Donitas", 2, 25)
let producto3 = new Producto(3,"Jugo de manzana","Jugo Manzana ", 1, 18)
let almacen = new Almacen()
almacen.agregarProducto(producto1)
almacen.agregarProducto(producto2)
almacen.agregarProducto(producto3)
console.log(almacen.borrarProductoID(3))
almacen.listarProductos()
console.log(almacen)