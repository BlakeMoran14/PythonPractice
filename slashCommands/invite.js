const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Sends the invite link!'),
	async execute(interaction) {
		await interaction.reply({
            embeds: [
                new MessageEmbed()
                .setTitle("Invite")
                .setDescription("https://discord.com/api/oauth2/authorize?client_id=849444842123034654&permissions=8&scope=bot%20applications.commands")
            ]
        });
	},
};