const config = require('./config.json')
const fs = require('fs');
const {
	Client,
	Collection,
	Intents,
	MessageEmbed
} = require('discord.js');
const wait = require('util').promisify(setTimeout);
const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MEMBERS,
	]
})

module.exports = client;

client.commands = new Collection();
client.aliases = new Collection();

['command'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

const db = require("quick.db")

client.slashCommands = new Collection();
const commandFiles = fs.readdirSync('./slashCommands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const slashcommand = require(`./slashCommands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.slashCommands.set(slashcommand.data.name, slashcommand);
}

client.on('ready', () => {
	console.log(`${client.user.tag} has logged in successfully!`)
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const {
		commandName
	} = interaction;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({
			content: 'There was an error while executing this command!',
			ephemeral: true
		});
	}
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isSelectMenu()) return;

	if (interaction.customId === 'select') {
		let choice = interaction.values[0]
		const member = interaction.member
		if (choice == 'client_ping') {
			await interaction.deferUpdate();
			await interaction.editReply({
				content: `Client Ping is - \`${client.ws.ping}ms.\``,
				components: []
			});
		}
		if (choice == 'api_ping') {
			await interaction.deferUpdate();
			await interaction.editReply({
				content: `API Ping is - \`${Date.now() - interaction.createdTimestamp}ms.\``,
				components: []
			});
		}
	}
});

client.login(config.token)