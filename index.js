const { Client } = require("discord.js");

const { token } = require("./config.js");

const client = new Client();

client.on("ready", () =>
    console.log(`Logged in as ${client.user.tag}`));

client.login(token):
