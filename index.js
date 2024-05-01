const TelegramBot = require("node-telegram-bot-api");

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual token
const bot = new TelegramBot("6927370530:AAHcTRb3TBDpbVVrbU812GGs8pEXkcNUmBA", {
  polling: true,
});
const keyboard_ = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "GF#1: First 10 Transactions",
          callback_data: "GF#1: First 10 Transactions",
        },
      ],
      [{ text: "GF#2: Top 10 Holders", callback_data: "GF#2: Top 10 Holders" }],
      [
        {
          text: "GF#3: Contract Verified",
          callback_data: "GF#3: Contract Verified",
        },
      ],
      [
        {
          text: "GF#4: Socials + Website",
          callback_data: "GF#4: Socials + Website",
        },
      ],
      [
        {
          text: "GF#5: Renounced Ownership",
          callback_data: "GF#5: Renounced Ownership",
        },
      ],
      [{ text: "GF#6: Honey Pot", callback_data: "GF#6: Honey Pot" }],
      [
        {
          text: "GF#7: LP Burned/Locked",
          callback_data: "GF#7: LP Burned/Locked",
        },
      ],
    ],
  },
};
// Command to start the bot
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Sending the start message with options
  bot.sendMessage(chatId, "Select an option:", {parse_mode:"HTML",...keyboard_});
});
bot.on("callback_query", (callbackQuery) => {
  // const option = callbackQuery.data;
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const chatId = msg.chat.id;


  // Perform different actions based on the callback data
  switch (action) {
    case "GF#1: First 10 Transactions":
      bot.sendMessage(
        chatId,
        `First 10 Transactions:
            Solana https://example.com
            Solana https://example.com
            Solana https://example.com
            Solana https://example.com
            Solana https://example.com
            Solana https://example.com
            Solana https://example.com
            Solana https://example.com
            Solana https://example.com
            Solana https://example.com`
      );

      break;
    case "GF#2: Top 10 Holders":
      bot.sendMessage(
        chatId,
        `Top 10 Holders:
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com
    Solana https://example.com`
      );
      break;
    case "GF#3: Contract Verified":
      bot.sendMessage(chatId, "Contract Verified: Yes | https://example.com");
      break;
    case "GF#4: Socials + Website":
      bot.sendMessage(
        chatId,
        "Website: Dummy Website Name | https://dummylink.com\nTelegram: @dummy_username | https://dummylink.com\nTwitter: @dummy_twitter | https://dummylink.com"
      );
      break;
    case "GF#5: Renounced Ownership":
      bot.sendMessage(
        chatId,
        "Renounced Ownership: Yes | https://dummylink.com"
      );
      break;
    case "GF#6: Honey Pot":
      bot.sendMessage(chatId, "Honey Pot: Yes");
      break;
    case "GF#7: LP Burned/Locked":
      bot.sendMessage(chatId, "LP Burned: Yes\nLP Locked: Yes");
      break;
  }
});
