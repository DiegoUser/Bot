require("dotenv").config();
const { Telegraf } = require("telegraf");
const frases = require("../db/frases");
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const api = require('../ubicacion/ubicacion')

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
  sendStartMessage(ctx);
});

//Mensaje de bienvenida
sendStartMessage = (ctx) => {
  const startMessage =
    "Bienvenido, este bot fue hecho para la prueba de Hey Now";
  //Menu
  bot.telegram.sendMessage(ctx.chat.id, startMessage, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Quiero una frase", callback_data: "quote" }],
        [
          {
            text: "Mi website(actualmente en construcción)",
            url: "https://diego-mendez.com/",
          },
        ],
        [{ text: "Ubicacion", callback_data: "ubicacion" }],
        [{ text: "Creditos", callback_data: "credits" }],
      ],
    },
  });
};

bot.action("credits", (ctx) => {
  //Para evitar la animación de espera
  ctx.answerCbQuery();
  ctx.reply("Creado por Diego");
});

bot.action("quote", (ctx) => {
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
});

bot.action("ubicacion", async (ctx) => {
  ctx.answerCbQuery();
  const ubicacion = await api.getUbicacion();
  ctx.reply(ubicacion.region + " " + ubicacion.country + " " + ubicacion.flag.emoji);
});

//Frases
bot.hears("Frases de amistad", async (ctx) => {
  const frase = await frases.getFraseAleatoria("amistad");
  ctx.reply(frase.value);
});
bot.hears("Chistes cortos", async (ctx) => {
  const frase = await frases.getFraseAleatoria("graciosa");
  ctx.reply(frase.value);
});
bot.hears("Frases para informaticos", async (ctx) => {
  const frase = await frases.getFraseAleatoria("informaticos");
  ctx.reply(frase.value);
});
//Salir Menu
bot.hears("Salir", (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, "Hasta luego", {
    reply_markup: {
      remove_keyboard: true,
    },
  });
});
bot.launch();
