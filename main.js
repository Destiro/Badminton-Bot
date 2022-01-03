const { Client, Intents } = require("discord.js");
const env_variables = require("./env/env_variables");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.once('ready', () => {
    console.log("Echo is online!");
})


client.login(env_variables.token);