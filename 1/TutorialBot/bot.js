const config = require("./config/config.json") // definición de las configuraciones del bot
const Discord = require("discord.js") // definicion del NPM usado
const client = new Discord.Client({
    intents: Object.keys(Discord.Intents.FLAGS) // definicion del client/bot
})                                              // con sus intents habilitados para los eventos

const eventos = {
    messageCreate: require("./eventos/messageCreate"),
    ready: require("./eventos/ready")
} // definicion de los archivos a importar


/* definicion de los eventos, con las propiedades importadas automáticamente */
client.on("messageCreate", eventos.messageCreate)
client.on("ready", eventos.ready)
client.login(config.token)

/* definición del handler de erorres, para que el bot no se apague por un bug */
process.on("unhandledRejection", error => {
    console.log("Hubo un error:", error)
})
