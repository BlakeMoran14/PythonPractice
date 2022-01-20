const {
    MessageActionRow,
    MessageSelectMenu,
    MessageEmbed
} = require('discord.js');
const {
    SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pingbutton')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId('select')
                .setPlaceholder('Nothing selected')
                .addOptions([{
                    label: 'Client Ping',
                    description: "Client's ping compared to the API.",
                    value: 'client_ping',
                }, {
                    label: 'API Ping',
                    description: "API's ping compared to the message.",
                    value: 'api_ping',
                }, ]),
            );

        await interaction.reply({
            content: 'Choose',
            components: [row]
        });
    },
};