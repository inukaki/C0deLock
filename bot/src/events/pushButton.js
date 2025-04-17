const { openLock } = require('../functions/openLock.js');
const { closeLock } = require('../functions/closeLock.js');

module.exports = {
    // ボタンが押されたときに実行されるイベント
    pushButtonEvents: function(client) {
        client.on('interactionCreate', async (interaction) => {
            if (!interaction.isButton()) return;

            const { customId } = interaction;

            if (customId === 'unlock') {
                await openLock();
                await interaction.reply({ 
                    content: '🔓 鍵を開けました！', 
                    ephemeral: true 
                });
            } else if (customId === 'lock') {
                await closeLock();
                await interaction.reply({ 
                    content: '🔒 鍵を閉めました！', 
                    ephemeral: true 
                });
            }
        });
    },
};