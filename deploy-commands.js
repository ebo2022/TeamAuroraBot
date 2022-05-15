const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes, ChannelType } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder()
		.setName('showcase')
		.setDescription('Generates a showcase embed using the specified parameters')
		.addStringOption(option => option.setName('color').setDescription('The color of the embed').setRequired(true))
		.addStringOption(option => option.setName('mod-name').setDescription('The mod to showcase').setRequired(true))
		.addStringOption(option => option.setName('feature-name').setDescription('The feature to showcase').setRequired(true))
		.addStringOption(option => option.setName('description').setDescription('A description of the feature to showcase').setRequired(true))
		.addStringOption(option => option.setName('image-src').setDescription('An image of the feature to showcase').setRequired(true))
		.addChannelOption(option => option.setName('destination').setDescription('Select a channel to send the showcase to').addChannelTypes(ChannelType.GuildText, ChannelType.GuildNews).setRequired(true)),
	new SlashCommandBuilder()
		.setName('send')
		.setDescription('Make the bot send a message to the specified channel')
		.addStringOption(option => option.setName('text').setDescription('The text to send').setRequired(true))
		.addChannelOption(option => option.setName('destination').setDescription('The channel to send the message to').addChannelTypes(ChannelType.GuildText, ChannelType.GuildNews).setRequired(true))
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);