require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus('dnd'); 
    client.user.setActivity(null); // This forces Discord to wipe the old status card
});

client.login(process.env.DISCORD_TOKEN);
