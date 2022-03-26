const chalk = require("chalk") // definicion del NPM chalk para los colores

module.exports = (client) => { // exportar la funcion que importa el eventos.ready en bot.js
    consola(client) // ejecutar la funcion consola
}

async function consola(client) {
    // mostrar por consola los datos
    console.log(chalk.blue("Bot iniciado como: ") + chalk.green(client.user.tag))
    console.log(chalk.blue("Fecha de inicio: ") + chalk.green(new Date().toLocaleString("es-es")))
    console.log(chalk.blue("Hecho por: ") + chalk.green("Xertozer(https://www.youtube.com/channel/UCiwb_-YNs5o8Uag8c2QGv9g)"))
}
