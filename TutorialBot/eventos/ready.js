const chalk = require("chalk")

module.exports = (client) => {
    consola(client)
}

async function consola(client) {
    console.log(chalk.blue("Bot iniciado como: ") + chalk.green(client.user.tag))
    console.log(chalk.blue("Fecha de inicio: ") + chalk.green(new Date().toLocaleString("es-es")))
    console.log(chalk.blue("Hecho por: ") + chalk.green("Xertozer (https://www.youtube.com/channel/UCiwb_-YNs5o8Uag8c2QGv9g/featured)")
}
