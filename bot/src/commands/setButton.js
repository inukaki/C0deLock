const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setbutton')
        .setDescription('部室の鍵を操作するボタンを作成します'),
    async execute(interaction) {
        const raw = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('unlock')
                    .setLabel('🔓 開ける')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('lock')
                    .setLabel('🔒 閉める')
                    .setStyle(ButtonStyle.Danger),
            );
        await interaction.reply({ content: '部室の鍵を操作するボタンを作成しました', components: [raw] });
    },
};
