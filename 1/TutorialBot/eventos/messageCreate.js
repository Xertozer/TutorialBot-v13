const Discord = require("discord.js")
const config = require("../config/config.json")

module.exports = (message) => {
    comandos(message)
}

async function comandos(message) {
    if (message.content.startsWith(`${config.prefix}ping`)) {
        message.channel.send({
            content: "He recibido el ping, regreso un pong!",
            reply: { messageReference: message.id, failIfNoExists: false }
        }).catch(() => { })
    }

    else if (message.content.startsWith(`${config.prefix}embed`)) {
        const embed = new Discord.MessageEmbed()
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

        message.channel.send({
            embeds: [embed],
            reply: { messageReference: message.id, failIfNoExists: false }
        }).catch(() => { })
    }

    else if (message.content.startsWith(config.prefix)) return message.channel.send({
        content: "No he encontrado ese comando",
        reply: { messageReference: message.id, failIfNoExists: false }
    }).catch(() => { })
}