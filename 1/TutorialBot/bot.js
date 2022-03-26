const config = require("./config/config.json")
const Discord = require("discord.js")
const client = new Discord.Client({
    intents: Object.keys(Discord.Intents.FLAGS)
})

const eventos = {
    messageCreate: require("./eventos/messageCreate"),
    ready: require("./eventos/ready")
}

client.on("messageCreate", eventos.messageCreate)
client.on("ready", eventos.ready)
client.login(config.token)

process.on("unhandledRejection", error => {
    console.log("Hubo un error:", error)
})