const messages = [
    "Chuck Norris contó hasta el infinito. Dos veces.",
    "Chuck Norris no te pisa un pie, le pisas tú a él.",
    "Chuck Norris no escribe código. Él lo piensa y la máquina lo programa.",
    "Chuck Norris puede dividir entre cero.",
    "El GPS de Chuck Norris no te dice cómo llegar a tu destino, te dice que ya has llegado.",
    "Chuck Norris no duerme. Espera.",    "Chuck Norris no usa reloj. Él decide qué hora es.",
    "Si Chuck Norris programara en HTML, HTML programaría en Chuck Norris.",
    "Chuck Norris puede correr un bucle infinito en un solo ciclo.",
    "Chuck Norris no necesita una llave para abrir una puerta. Simplemente la mira fijamente y se abre.",
    "Chuck Norris no lee código. Lo analiza mentalmente y lo ejecuta a través de la fuerza de la mente.",
    "Chuck Norris no hace copias de seguridad. Nunca pierde nada.",
    "Chuck Norris no busca en Google. Google busca en Chuck Norris.",
    "Cuando Chuck Norris programa, los errores huyen.",
    "Chuck Norris no necesita depurador. Si hay un error, simplemente se esfuma del código.",
    "Chuck Norris nunca pierde datos. Siempre sabe dónde están.",    "Si Chuck Norris programara en JavaScript, las variables nunca serían indefinidas.",
    "Chuck Norris no usa interruptores. Simplemente les habla hasta que se encienden."
    ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };