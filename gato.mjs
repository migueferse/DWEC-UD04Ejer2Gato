
class Gato {
  tiempoEmpezar = new Date();
  tiempoActual = 0;
  felicidadDecreciendo = 0;

  constructor(hambre, cansancio, felicidad) {
    this.hambre = hambre;
    this.cansancio = cansancio;
    this.felicidad = felicidad;
    
  }

  estado() {
    return 'hambre '+ this.nivelHambre() + ' cansancio ' + this.nivelCansancio() + ' felicidad ' + this.nivelFelicidad();
  }

  nivelHambre() {
    return this.hambre + this.tiempoTranscurrido() + Math.round((Math.random()*10));
  }

  nivelCansancio() {
    return this.cansancio + this.tiempoTranscurrido() + Math.round((Math.random()*10));
  }

  nivelFelicidad() {
    this.felicidadDecreciendo = this.felicidad;
    return this.felicidadDecreciendo - this.tiempoTranscurrido() - Math.round((Math.random()*10));
  }

  alimentar() {
    this.hambre = 0;
    return 'Comiendo' ;

  }

  dormir() {
    this.cansancio = 0;
    return 'Durmiendo';

  }

  jugar() {
    this.felicidadDecreciendo = this.felicidad;
    return 'Jugando';
  }


  tiempoTranscurrido() {
    this.tiempoActual = new Date()
    return this.tiempoActual - this.tiempoEmpezar
  }

}

export {
  Gato
}