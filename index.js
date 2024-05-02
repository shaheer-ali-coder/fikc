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
✖️ Mintable Yes or No (✅👎 or ❌👍)
🔥 LP Burned = 🔥 or ❌
🔒LP Locked = 🔒 or ❌ (111 days)

✅ Contract Verified 
🔎 Etherscan - Yes or No (+ link)
🔎 Solscan - 👍 or 👎 (+ link) - both will have emojis like this one)

✅ Renounced Ownership
Owner (1. Wallet address + 2. Quantity of Tokens + 3. % of supply)
for example...
🧑‍💻Deployer --eJUm | Q: 144.5m | P: 14.45%
👤 Owner: RENOUCED
⚙️ Chain: SOL | ⏳Age: 22m (minutes)

✅ Website + Socials
🌐 Website: (+ hyperlink)
📥 Telegram (+ hyperlink)
🐦 Twitter (+ hyperlink)

✅ Top 10 Holders
H1: 📦(1. Wallet address with 4 letter hyperlink + 2. Quantity of Tokens + 3. % of supply)
H2: 📦 - for example...
H3: 📦 --eJUm + hyperlink | Q: 144.5m | P: 14.45%
H4: 📦 --Ng5U + hyperlink | Q: 11.21m | P: 1.12%
H5: 📦 --vxCv + hyperlink | Q: 6.2m | P: 0.62%
H6: 📦(+ link) -- etc, etc 
H7: 📦(+ link) + (all wallet addresses need to have clickable links)
H8: 📦(+ link)
H9: 📦(+ link)
H10📦: (+ link)

✅ First 10 Transactions:
T1: 📈 (1. wallet address with 4 letter hyperlink + 2. Buy amount of Token + 3. Sell amount of Token)
T2: 📈 for example...
T3: 📈 --eJUm + hyperlink | B:50 sol | S: 3 sol
T4: 📈 --Ng5U + hyperlink B:0 sol | S:4.7 sol
T5: 📈 --vxCv + hyperlink | B:4.5 sol | S:17.7 sol
T6: 📈(+ link) -- etc, etc 
T7: 📈(+ link) + (all wallet addresses need to have clickable links)
T8: 📈(+ link)
T9: 📈(+ link)
T10: 📈(+ link)`
    );
});

