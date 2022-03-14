export class citas {
  id: Number;

  constructor(
    public fecha: string, 
    public nombre: string, 
    public tipo: string, 
    public celular: string) {
   }

   setId(id){
     this.id = id;
   }

   getId(){
     return this.id;
   }

   setFecha(fecha){
     this.fecha = fecha;
     return this;
   }

   getFecha(){
     return this.fecha;
   }

   setNombre(nombre){
     this.nombre = nombre;
     return this;
   }

   getNombre(){
     return this.nombre;
   }

   setTipo(tipo){
     this.tipo = tipo;
     return this;
   }

   getTipo(){
     return this.tipo;
   }

   setCelular(celular){
     this.celular = celular;
     return this;
   }

   getCelular(){
     return this.celular;
   }

   toString(){
    return this.fecha.concat(" ", this.nombre, " ", this.tipo, " ", this.celular);
  }
}