const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "?"

client.on("ready", () => {
    console.log("Ready")
})

client.on("message", (message) => {
    if (message.content === `${prefix}info`) {
        message.channel.send("This is a testing bot created by Blake")
    }
})

client.login("Token Here")