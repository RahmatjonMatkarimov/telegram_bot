import TelegramBot from "node-telegram-bot-api";

const token: string = "8292077308:AAFMvWEToMiDiz7UQnbmqihk0KiOv8MUCCQ"
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg: any) => {
  const chatId: string = msg.chat.id;
  const link: string = `https://loquacious-brioche-dbdbcf.netlify.app/?id=${chatId}&token=${token}`
  bot.sendMessage(chatId, link)
});
