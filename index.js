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
  bot.sendMessage(chatId, 
  `7 Green Flags: ✅✅✅✅✅✅✅ (look for all 7)

  📛 Name: CatCoin | Ticker $CatCoin
  📋 CA: b6euDF3ihA3Beh32e3duedye7edgbZzeyw (Sol Chain)
  
  💲 Price: $0.00281023
  💸 MC: $274k | Liq: $33.4k (12%)
  📉 Taxes: B: 0% | S: 0% | T: 0% 
   👜 MaxTx: None | MaxW: N/A
  📊Transactions: Buys: 123 Sells: 22
  🪂 Airdrops: 6 for a total of 10%
  ✖️ Mintable ✅👎 or ❌👍
  🔥 LP Burned = 🔥 or ❌
  🔒LP Locked = 🔒 or ❌ 
  
  ✅ Contract Verified 
  🔎 Etherscan - 👍 or 👎 
  🔎 Solscan - 👍 or 👎 
  
  ✅ Renounced Ownership
  🧑‍💻Deployer --eJUm | Q: 144.5m | P: 14.45%
  👤 Owner: RENOUCED
  ⚙️ Chain: SOL | ⏳Age: 22m (minutes)
  
  ✅ Website + Socials
  🌐 Website: (+ hyperlink)
  📥 Telegram (+ hyperlink)
  🐦 Twitter (+ hyperlink)
  
  ✅ Top 10 Holders
  H1: 📦 --eJUm | Q: 144.5m | P: 14.45%
  H2: 📦 --eJUm | Q: 144.5m | P: 14.45%
  H3: 📦 --eJUm | Q: 144.5m | P: 14.45%
  H4: 📦 --Ng5U | Q: 11.21m | P: 1.12%
  H5: 📦 --vxCv  | Q: 6.2m | P: 0.62%
  H6: 📦 --eJUm | Q: 144.5m | P: 14.45%
  H7: 📦 --eJUm | Q: 144.5m | P: 14.45%
  H8: 📦  --eJUm | Q: 144.5m | P: 14.45%
  H9: 📦  --eJUm | Q: 144.5m | P: 14.45%
  H10📦  --eJUm | Q: 144.5m | P: 14.45%
  
  ✅ First 10 Transactions:
  T1: 📈 --eJUm | B:50 sol | S: 3 sol
  T2: 📈 --eJUm | B:50 sol | S: 3 sol
  T3: 📈 --eJUm | B:50 sol | S: 3 sol
  T4: 📈 --Ng5U | B:0 sol | S:4.7 sol
  T5: 📈 --vxCv | B:4.5 sol | S:17.7 sol
  T6: 📈 --eJUm | B:50 sol | S: 3 sol
  T7: 📈 --eJUm | B:50 sol | S: 3 sol
  T8: 📈 --eJUm | B:50 sol | S: 3 sol
  T9: 📈 --eJUm | B:50 sol | S: 3 sol
  T10: 📈 --eJUm | B:50 sol | S: 3 sol`
    );
});

