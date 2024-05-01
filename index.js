const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual token
const bot = new TelegramBot('YOUR_TELEGRAM_BOT_TOKEN', { polling: true });

// Command to start the bot
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Sending the start message with options
    bot.sendMessage(chatId, 'Select an option:', {
        reply_markup: {
            keyboard: [
                ['GF#1: First 10 Transactions', 'GF#2: Top 10 Holders'],
                ['GF#3: Contract Verified', 'GF#4: Socials + Website'],
                ['GF#5: Renounced Ownership', 'GF#6: Honey Pot'],
                ['GF#7: LP Burned/Locked']
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
});

// Handle option selection
bot.onText(/GF#1: First 10 Transactions/, (msg) => {
    const chatId = msg.chat.id;
    // Sending dummy links for the first 10 transactions
    bot.sendMessage(chatId, `First 10 Transactions:
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com`, {
        reply_markup: {
            keyboard: [],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
});

bot.onText(/GF#2: Top 10 Holders/, (msg) => {
    const chatId = msg.chat.id;
    // Sending dummy links for the top 10 holders
    bot.sendMessage(chatId, `Top 10 Holders:
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com`, {
        
        reply_markup: {
            keyboard: [],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
});

bot.onText(/GF#3: Contract Verified/, (msg) => {
    const chatId = msg.chat.id;
    // Sending 'Yes' with a dummy link for contract verification
    bot.sendMessage(chatId, 'Contract Verified: Yes | https://example.com', {
        reply_markup: {
            keyboard: [],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
});

bot.onText(/GF#4: Socials \+ Website/, (msg) => {
    const chatId = msg.chat.id;
    // Sending dummy website name, telegram username, and twitter name with links
    bot.sendMessage(chatId, 'Website: Dummy Website Name | https://dummylink.com\nTelegram: @dummy_username | https://dummylink.com\nTwitter: @dummy_twitter | https://dummylink.com', {
        reply_markup: {
            keyboard: [],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
});

bot.onText(/GF#5: Renounced Ownership/, (msg) => {
    const chatId = msg.chat.id;
    // Sending 'Yes' with a dummy link for renounced ownership
    bot.sendMessage(chatId, 'Renounced Ownership: Yes | https://dummylink.com', {
        reply_markup: {
            keyboard: [],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
});

bot.onText(/GF#6: Honey Pot/, (msg) => {
    const chatId = msg.chat.id;
    // Sending 'Yes' with a dummy link for honey pot
    bot.sendMessage(chatId, 'Honey Pot: Yes', {
        reply_markup: {
            keyboard: [],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
});

bot.onText(/GF#7: LP Burned\/Locked/, (msg) => {
    const chatId = msg.chat.id;
    // Sending LP status as burned and locked
    bot.sendMessage(chatId, 'LP Burned: Yes\nLP Locked: Yes', {
        reply_markup: {
            keyboard: [],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
});
