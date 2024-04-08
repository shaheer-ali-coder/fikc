const axios = require('axios')
const keyboard_2 = {
            reply_markup: {
              inline_keyboard: [
                
                  [
                    { text: 'Solana Bot + group $59', callback_data: 'solana_group' },
                    
                  ],
                  [
                    { text: 'ETH: 1m(np sup.) $100', callback_data: 'eth_nosup' },
                    
                  ],
                  [
                    { text: 'ETH: 1m(group + sup.) $200', callback_data: 'eth_group_sup_one' },

                    
                  ],
                  [
                    { text: 'ETH: 3m(group + sup.) $550', callback_data: 'eth_group_sup_three' },
                    
                  ],
                  [
                    { text: 'ETH Pack:10 checks $50', callback_data: 'eth_ten' },
                    
                  ],
                  [
                    { text: 'ETH Pack:50 Checks $150', callback_data: 'eth_fifty' },
                    
                  ],
                  [
                    { text: 'ETH Pack:100 Checks 280$', callback_data: 'eth_hundred' },
                    
                  ],
                  [
                    { text: 'Manager(Online 9am-9pm UTC+3)', callback_data: 'manager' },
                    
                  ],
              ],
            },
          };
const message = `💡After payment send hash txn 0x...💡\n\nHave problem? Write @Zelfiguru`
let payment = 'false'


async function checkTokenTransactions(address) {
  // Etherscan API endpoint for ERC20 token transactions
  const tokenContractAddress = '0x1F44Cf3F083D2e8D8425A14D728411133AcE68E2';
// Number of recent transactions to fetch
const numberOfTransactions = 5; // You can adjust this number as needed
  const apiEndpoint = 'https://api.etherscan.io/api';
  // Your Etherscan API key
  const apiKey = '2FN9ZET5J1H57YZCRDFBRK2S898M15C6H6';

  try {
      // Constructing the API request URL
      const params = {
        module: 'account',
        action: 'tokentx',
        address: address,
        contractaddress: tokenContractAddress,
        apikey: apiKey,
        sort: 'desc', // Sorting in descending order to get recent transactions first
        page: 1,
        offset: numberOfTransactions
    };

      // Sending the API request
      const response = await axios.get(apiEndpoint, { params });

      // Checking if the request was successful
      if (response.status === 200) {
          const data = response.data;
          if (data.status === '1') {
              // Transactions found
              console.log('Transactions found involving the token:')
              return true
          } else {
              return false
              console.log('No transactions found involving the token for the specified address.');
          }
      } else {
        return false
          console.log('Failed to retrieve data from Etherscan API.');
      }
  } catch (error) {
    
      console.error('Error:', error.message);
      return false
  }
}
let state = 'idle'
const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const token = '6612601598:AAFkfszWVgk2RRz6M5Dh5lUPEoXZQvD43Os';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for the /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  
  // Send a welcome message
  bot.sendMessage(chatId, "Choose an option.",{parse_mode:"HTML",...keyboard_2});
});
bot.on('message', (msg) => {
  // Check if state is 'get'
  const chatId = msg.chat.id; // Fetching chatId
  if (state === 'get') {
   
      let transaction = checkTokenTransactions(msg.text);
      if(transaction == true){
        bot.sendMessage(chatId , `Here is the group link : https://t.me/+nyBDz2w6EjdjYjU0 `)
      }
      else if(transaction == false){
        bot.sendMessage(chatId , "Sorry we didnt find any transaction , Can you please recheck and try again later....")
      }
      state = 'idle';
  }
});
bot.on('callback_query', (query) => {
    const data = query.data;
    const chatId = query.message.chat.id;
    
    // Handle different button presses
    switch(data) {
        case 'solana_group':
            state = 'get'
            bot.sendMessage(chatId,`You chose Solana bot $59.\n⏰You have 15 minutes to pay\nTransfer $59 ⚠️ETH erc20 or BEP20⚠️ to wallet address:\n0x1F44Cf3F083D2e8D8425A14D728411133AcE68E2`)
            bot.sendMessage(chatId , message)
            break
        case 'eth_nosup':
            state = 'get'
            bot.sendMessage(chatId,`You chose 1m (No support) $100.\n⏰You have 15 minutes to pay\nTransfer $100 ⚠️ETH erc20 or BEP20⚠️ to wallet address:\n0x1F44Cf3F083D2e8D8425A14D728411133AcE68E2`)
            bot.sendMessage(chatId , message)
            break
        case 'eth_group_sup_one':
            state = 'get'
            bot.sendMessage(chatId,`You chose 1m (group + support) $200.\n⏰You have 15 minutes to pay\nTransfer $200 ⚠️ETH erc20 or BEP20⚠️ to wallet address:\n\n0x1F44Cf3F083D2e8D8425A14D728411133AcE68E2`)
            bot.sendMessage(chatId , message)
            break
        case 'eth_group_sup_three':
            state = 'get'
            bot.sendMessage(chatId,`You chose 3m (group + support) $550.\n⏰You have 15 minutes to pay\nTransfer $550 ⚠️ETH erc20 or BEP20⚠️ to wallet address:\n0x1F44Cf3F083D2e8D8425A14D728411133AcE68E2`)
            bot.sendMessage(chatId , message)
            break
        case 'eth_ten':
            state = 'get'
            bot.sendMessage(chatId,`You chose 10 checks $50.\n⏰You have 15 minutes to pay\nTransfer $50 ⚠️ETH erc20 or BEP20⚠️ to wallet address:\n0x1F44Cf3F083D2e8D8425A14D728411133AcE68E2`)
            bot.sendMessage(chatId , message)
            break
        case 'eth_fifty':
            state = 'get'
            bot.sendMessage(chatId,`You chose 50 checks $150.\n⏰You have 15 minutes to pay\nTransfer $150 ⚠️ETH erc20 or BEP20⚠️ to wallet address:\n0x1F44Cf3F083D2e8D8425A14D728411133AcE68E2`)
            bot.sendMessage(chatId , message)
            break
        case 'eth_hundred':
            state = 'get'
            bot.sendMessage(chatId,`You chose 100 checks $280.\n⏰You have 15 minutes to pay\nTransfer $280 ⚠️ETH erc20 or BEP20⚠️ to wallet address:\n0x1F44Cf3F083D2e8D8425A14D728411133AcE68E2`)
            bot.sendMessage(chatId , message)
            break
        case 'manager':
            bot.sendMessage(chatId,`Need support? Write @zimmaman`)
            
            break
      // Add more cases for additional options
      
    }
  });
