const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : m7md');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'BasHa 🍷',
     details: `BasHa 🍷`,
     url: 'http://twitch.tv/M7md_Salih',
     state: `BasHa 🍷`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'BasHa 🍷',
        large_image: `377480353259978752`,
        large_text: `BasHa 🍷` }

  }
    });
});
اقولها

client.login("NTczMjgyMzMyMjYyNDAwMDEw.XOyZ-g.CYMGSH2T4QoGt-03lePc1183vsA");