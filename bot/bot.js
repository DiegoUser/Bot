require("dotenv").config();
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);
/*//Para responder mensaje simple
bot.command('hola', (ctx) => {
    ctx.reply('hola '+ ctx.from.first_name);
})
//Para manejar lo que envía el usuario
bot.on('text', ctx =>{
    console.log(ctx.message.text);
    ctx.reply('usted ha enviado '+ctx.message.text)
})
//Para escuchar un mensaje específico
bot.hears('hola bot', ctx =>{
    ctx.reply('He escuchado tu mensaje');
})*/

bot.command("start", (ctx) => {
  sendStartMessage(ctx);
});

function sendStartMessage( ctx ) {
  const startMessage =
    "Bienvenido, este bot fue hecho para la prueba de Hey Now";

  bot.telegram.sendMessage(ctx.chat.id, startMessage, {
    reply_markup: {
      inline_keyboard: [
        //[{ text: "Quiero una frase", callback_data: "quote" }],
        [
          {
            text: "Mi website(actualmente en construcción)",
            url: "https://diego-mendez.com/",
          },
        ],
        [{ text: "Creditos", callback_data: "credits" }],
      ],
    },
  });
}

bot.action("credits", (ctx) => {
  //Para evitar la animación de espera
  ctx.answerCbQuery();
  ctx.reply("Creado por Diego");
});

/*bot.action("quote", (ctx) => {
  //Para evitar la animación de espera
  ctx.answerCbQuery();
  const menuMessage = "¿Que tipo de frase quieres?";
  bot.telegram.sendMessage(ctx.chat.id, menuMessage, {
    reply_markup: {
      keyboard: [
        [
          { text: "Frases de amistad" },
          { text: "Chistes cortos" },
          { text: "Frases para informaticos" },
        ],
        [{ text: "Salir" }],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});*/
/*
async (req,res) => {
  try{

    const arrayFrases = await Frase.find()
    console.log(arrayFrases)

  } catch (error){
    console.log(error)
  }
}*/


/*async function fetchQuote(type) {
  const res = await axios.get("http://localhost:3000/quotes/" + type);
  return res.data.quote;
}

bot.hears("Frases de amistad", async (ctx) => {
  const quote = await fetchQuote("amistad");
  ctx.reply(quote);
});
bot.hears("Chistes cortos", async (ctx) => {
  const quote = await fetchQuote("graciosas");
  ctx.reply(quote);
});
bot.hears("Frases para informaticos", async (ctx) => {
  const quote = await fetchQuote("informaticos");
  ctx.reply(quote);
});

bot.hears("Salir", (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, "Hasta luego", {
    reply_markup: {
      remove_keyboard: true,
    },
  });
});*/
bot.launch();
