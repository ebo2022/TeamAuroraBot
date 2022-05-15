const { Client, Intents, MessageEmbed } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.content === "Team Aurora") {
        message.channel.send(`You have said what shouldn't be named ${message.member}, prepare to face the consequences`);
    }
	if (message.content.toLowerCase().includes("epic~~312~~")) {
		message.channel.send("312 moment");
		return;
	}
	if (message.content.toLowerCase().includes("hello~~there~~") || message.content.toLowerCase().includes("hello ~~there~~")) {
		message.channel.send("General Kenobi!");
		return;
	}
	if (message.content.toLowerCase().includes("shock~~micro~~") || message.content.toLowerCase().includes("shock ~~micro~~")) {
		message.channel.send("sock micro hahahahaha");
		return;
	}
	if (message.content.toLowerCase().includes("justin~~playzz~~") || message.content.toLowerCase().includes("justin ~~playzz~~")) {
		message.channel.send("is that justin justin bieber???");
		return;
	}
	if (message.content.toLowerCase().includes("~~evo~~")) {
		message.channel.send("contrary to popular belief, I AM NOT EBO");
		return;
	}
	if (message.content.toLowerCase().includes("~~ebo~~")) {
		message.channel.send("contrary to popular belief, I AM NOT EVO");
		return;
	}
	if (message.content.toLowerCase().includes("steven~~playzz~~") || message.content.toLowerCase().includes("steven ~~playzz~~")) {
		message.channel.send("is that steven from the hit show steven universe??");
		return;
	}
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	} else if (commandName === 'showcase') {
        const color = interaction.options.getString('color');
		const mod = interaction.options.getString('mod-name');
		const title = interaction.options.getString('feature-name');
		const description = interaction.options.getString('description');
		const img = interaction.options.getString('image-src');
		const channel = interaction.options.getChannel('destination');

		const embed = new MessageEmbed()
			.setColor(color)
			.setTitle(title)
			.setAuthor({ name: mod, iconURL: '', url: '' })
			.setDescription(description)
			.setImage(img)
			.setTimestamp()
			.setFooter({ text: 'Team Aurora', iconURL: 'https://cdn.discordapp.com/attachments/737666400994459698/975117870759551097/dev_aurora_new.png' });
		await interaction.reply(`Successfully generated embed in ${channel}`);
		await client.channels.cache.get(channel.id).send({ embeds: [embed] });
    } else if (commandName === 'send') {
		const text = interaction.options.getString('text');
		const channel = interaction.options.getChannel('destination');

		await client.channels.cache.get(channel.id).send(text);
		await interaction.reply({ content: 'Sent', ephemeral: true });
	}
});

client.login(token);