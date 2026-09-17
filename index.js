require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus('dnd'); 
    client.user.setActivity('Always Online', { type: 'PLAYING' });
});

// DO NOT paste your token here. Keep it exactly as process.env.DISCORD_TOKEN
client.login(process.env.DISCORD_TOKEN);
