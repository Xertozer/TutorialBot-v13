const Discord = require("discord.js") // definicion del NPM discord.js
const config = require("../config/config.json") // definicion del config del bot

module.exports = (message) => { // exportar la funcion eventos.messageCreate del bot.js
    comandos(message) // ejecutar la funcion comandos
}

async function comandos(message) { // definir la funcion comandos
    if (message.content.startsWith(`${config.prefix}ping`)) { // si el contenido del mensaje empieza con prefix + ping
        message.channel.send({ // enviar un mensaje respondiendo
            content: "He recibido el ping, regreso un pong!",
            reply: { messageReference: message.id, failIfNoExists: false }
        }).catch(() => { })
    }

    else if (message.content.startsWith(`${config.prefix}embed`)) { // si empieza con prefix + embed
        const embed = new Discord.MessageEmbed() // definir un embed con todas las variables
            .setTitle("Título del embed")
            .setDescription("Descripción del embed")
            .setColor("#fca103")
            .setFooter({
                text: "Pie de página (del embed)",
                iconURL: "https://cdn.discordapp.com/embed/avatars/0.png"
            }).setAuthor({
                name: "Autor del embed",
                iconURL: "https://cdn.discordapp.com/embed/avatars/1.png",
                url: "https://twitter.com/xertozer"
            }).setThumbnail("https://cdn.discordapp.com/embed/avatars/2.png")
            .setImage("https://cdn.discordapp.com/embed/avatars/3.png")
            .setTimestamp()
            .setURL("https://discord.com")

        message.channel.send({ // enviar el embed
            embeds: [embed],
            reply: { messageReference: message.id, failIfNoExists: false }
        }).catch(() => { })
    }

    // si no existe ese comando, enviar un mensaje explicandolo
    else if (message.content.startsWith(config.prefix)) return message.channel.send(
        content: "No he encontrado ese comando",
        reply: { messageReference: message.id, failIfNoExists: false }
    }).catch(() => { })
}
