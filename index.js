const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTc1MTA2MjA3NDUyOTA5NTc4.G4XZvN.6h_HYsAHH4J0AZ1f2NnL71FVEE-cyaQuSxU62k"
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Team Aurora") {
        message.reply("is not something you should be saying here, go away and never return")
    }
})

client.login(process.env.TOKEN)