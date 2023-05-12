/* class Bandas {
    constructor (a, b, c, d) {
        this.nombre = a;
        this.genero = b;
        this.integrantes = c;
        this.activo = d;
    }
    integrantesNuevos(integrante){
        this.integrantes = integrante;
        console.log(`Ahora el grupo tiene ${this.integrantes}`)
    }
}
const BlackPink = new Bandas ('Banda BlackPink', 'K-POP', 4, true);
const SaviaAndina = new Bandas ('Grupo Savia Andina', 'Folcklore', 8, true);
console.log('la banda BlackPink:', BlackPink);
console.log('la banda Savia Andina:', SaviaAndina);
BlackPink.integrantesNuevos(5);
 */

class Grupos {
    constructor (a, b, c, d) {
        this.nombre = a;
        this.genero = b;
        this.integrantes = c;
        this.activo = d;
    }
    integrantesNuevos(integrante){
        this.integrantes = integrante;
        console.log(`El grupo aun tiene ${this.integrantes}`)
    }
}
const BlackPink = new Grupos ('Banda BlackPink', 'K-POP', 4, true);
const Kjarkas = new Grupos ('Grupo Kjarkas', 'Folcklore', 9, true);
const Octavia = new Grupos ('Banda Octavia', 'Rock', 5, true);
const Los_Daltons = new Grupos ('Grupo Los_Daltons', 'Cumbia', 5, false);

console.log('la banda BlackPink:', BlackPink);
BlackPink.integrantesNuevos(4);

console.log('el grupo Kjarkas:', Kjarkas);
BlackPink.integrantesNuevos(9);

console.log('la banda Octavia:', Octavia);
BlackPink.integrantesNuevos(5);

console.log('el grupo Los_Daltons:', Los_Daltons);
BlackPink.integrantesNuevos(5);