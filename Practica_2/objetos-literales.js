
let teletubbies ={
    nombre:'Serie Teletubbies',
    integrantes:5,
    genero:'infantil',
    personajes:['Tinky', 'Winky', 'Dipsy', 'Laa-Laa', 'Po'],
    activos: false,
    informacion(){
        console.log(`la ${this.nombre} tiene ${this.integrantes} integrantes`);

    }

}
console.log(teletubbies);
console.log(teletubbies.integrantes);
teletubbies.informacion();