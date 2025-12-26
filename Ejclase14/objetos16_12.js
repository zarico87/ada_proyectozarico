//definimos un objeto literal llamado "auto" 
const auto = {
    //propiedades del objeto
    marca: 'Toyota', //propiedad marca
    modelo: 'Corolla',//propiedad modelo
    anio: 2022, //propiedad anio
    color: 'Rojo',//propiedad color
    
    //metodo que usa "this" para describir el auto

    describir : function() {
        return `Este auto es un ${this.marca} ${this.modelo} del año ${this.anio} y de color ${this.color}.`;
    }   
}

//llamada al metodo describir para que imprima la descripcion del auto
console.log(auto.describir());

// este auto es un Toyota Corolla del año 2022 y de color Rojo.

//accediendo directamente a las propiedades del objeto
console.log(auto.marca); // Output: Marca: Toyota
console.log(auto.modelo); // Output: Modelo: Corolla
console.log(auto.anio); // Output: Año: 2022
console.log(auto.color); // Output: Color: Rojo
