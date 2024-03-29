const TelegramApi = require('node-telegram-bot-api')
const {investOptions} = require('./options')

const token = "5982322981:AAHC8yomtCiB7Z_Lg5udp4cJOuBugI5ploI";

const bot = new TelegramApi(token, {polling: true})


bot.setMyCommands([
    {command: '/start', description: 'Приветствие'},
    {command: '/info', description: 'Информация'},
    {command: '/invest', description: 'Выбрать акцию'},
])

bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start'){
        return bot.sendMessage(chatId, `Добро пожаловать в Moexbot `)
    }
    if (text === '/info'){
        return bot.sendMessage(chatId, `Я показываю данные по выбраным акциям`)
    }
    if (text === '/invest'){
        return bot.sendMessage(chatId, `Выбирай:`,investOptions)
    }
    return bot.sendMessage(chatId, 'эээ па руски пиши')
})

bot.on('callback_query', msg =>{
    const data = msg.data;
    const chatId = msg.message.chat.id;

    bot.sendMessage(chatId, data)
})