// Variables

const Discord = require("discord.js")
const client = new Discord.Client() 
const config = require("./config.json")
const default_prefix = require("./config.json")
const fetch = require("node-fetch")
const { groupCollapsed, error } = require("console")
const { isRegExp } = require("util")
const { truncate } = require("fs")
const axios = require("axios")

// Bot Status
client.on("ready", () => {
    console.log(`${client.user.username} is online in ${client.guilds.cache.size} guilds!`)
    client.user.setActivity(`Calculating crypto in in ${client.guilds.cache.size} guilds!`, {
        type: "PLAYING"
    })
})

// Main Structure
client.on(`message`, async message => {


    if(message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    // Commands

    if(command === "help") {
        const embed = new Discord.MessageEmbed()
        .setTitle("CryptoBot Help")
        .addField(`c.setvc<number> <channel id> <cryptocurrency id>`, `Sets a channels name to the current price. Max 6 channels.`)
        .addField(`c.crypto <crypto id>`, `Shows information of cryptocurrency.`)
        .addField(`c.source`, `Shows where the bot's source comes from.`)
        .addField(`c.help`, `Shows this embed!`)
        .setColor("RANDOM")

        message.channel.send(embed)
    }

    if(command==="setvc1") {
        message.channel.setName("Test")
        if(!args[0]) return message.channel.send(`Please specify a VC to start in! Usage: c.setvc <VC ID> <CRYPTOCURRENCY ID> Example: c.setvc 1231236141341416 BTC/ETH`)
        const cid = args[0];
        const crytptoid = args[1];


        fetch(`https://api.nomics.com/v1/currencies/ticker?key=keyhere&ids=${args[1]}&interval=1d,30d&convert=USD&per-page=100&page=1`).then(res => res.json()).then(body => {
            const guild = message.guild;
            const channel = guild.channels.cache.get(args[0])

            channel.setName(`${body[0].currency} (Price): ${Math.floor(body[0].price)} USD`)
        })
    }

    if(command==="setvc2") {
        message.channel.setName("Test")
        if(!args[0]) return message.channel.send(`Please specify a VC to start in! Usage: c.setvc <VC ID> <CRYPTOCURRENCY ID> Example: c.setvc 1231236141341416 BTC/ETH`)
        const cid = args[0];
        const crytptoid = args[1];


        fetch(`https://api.nomics.com/v1/currencies/ticker?key=keyhere&ids=${args[1]}&interval=1d,30d&convert=USD&per-page=100&page=1`).then(res => res.json()).then(body => {
            const guild = message.guild;
            const channel = guild.channels.cache.get(args[0])

            channel.setName(`${body[0].currency} (Price): ${Math.floor(body[0].price)} USD`)
        })
    }

        if(command==="setvc3") {
        message.channel.setName("Test")
        if(!args[0]) return message.channel.send(`Please specify a VC to start in! Usage: c.setvc <VC ID> <CRYPTOCURRENCY ID> Example: c.setvc 1231236141341416 BTC/ETH`)
        const cid = args[0];
        const crytptoid = args[1];


        fetch(`https://api.nomics.com/v1/currencies/ticker?key=keyhere&ids=${args[1]}&interval=1d,30d&convert=USD&per-page=100&page=1`).then(res => res.json()).then(body => {
            const guild = message.guild;
            const channel = guild.channels.cache.get(args[0])

            channel.setName(`${body[0].currency} (Price): ${Math.floor(body[0].price)} USD`)
        })
    }

        if(command==="setvc4") {
        message.channel.setName("Test")
        if(!args[0]) return message.channel.send(`Please specify a VC to start in! Usage: c.setvc <VC ID> <CRYPTOCURRENCY ID> Example: c.setvc 1231236141341416 BTC/ETH`)
        const cid = args[0];
        const crytptoid = args[1];


        fetch(`https://api.nomics.com/v1/currencies/ticker?key=keyhere&ids=${args[1]}&interval=1d,30d&convert=USD&per-page=100&page=1`).then(res => res.json()).then(body => {
            const guild = message.guild;
            const channel = guild.channels.cache.get(args[0])

            channel.setName(`${body[0].currency} (Price): ${Math.floor(body[0].price)} USD`)
        })
    }

        if(command==="setvc5") {
        message.channel.setName("Test")
        if(!args[0]) return message.channel.send(`Please specify a VC to start in! Usage: c.setvc <VC ID> <CRYPTOCURRENCY ID> Example: c.setvc 1231236141341416 BTC/ETH`)
        const cid = args[0];
        const crytptoid = args[1];


        fetch(`https://api.nomics.com/v1/currencies/ticker?key=keyhere&ids=${args[1]}&interval=1d,30d&convert=USD&per-page=100&page=1`).then(res => res.json()).then(body => {
            const guild = message.guild;
            const channel = guild.channels.cache.get(args[0])

            channel.setName(`${body[0].currency} (Price): ${Math.floor(body[0].price)} USD`)
        })
    }
    
    if(command==="setvc6") {
        message.channel.setName("Test")
        if(!args[0]) return message.channel.send(`Please specify a VC to start in! Usage: c.setvc <VC ID> <CRYPTOCURRENCY ID> Example: c.setvc 1231236141341416 BTC/ETH`)
        const cid = args[0];
        const crytptoid = args[1];


        fetch(`https://api.nomics.com/v1/currencies/ticker?key=keyhere&ids=${args[1]}&interval=1d,30d&convert=USD&per-page=100&page=1`).then(res => res.json()).then(body => {
            const guild = message.guild;
            const channel = guild.channels.cache.get(args[0])

            channel.setName(`${body[0].currency} (Price): ${Math.floor(body[0].price)} USD`)
        })
    }

    if(command==="crypto"){

      const fatalerror = new Discord.MessageEmbed()
      .setTitle("FATAL ERROR")
      .setColor('#ed3b3b')
      .addField("Correct usage:", 'c.crypto <ID> <CURRENCY>')
      .addField("Example:", 'c.crypto BTC USD')


      if(!args[0]) return message.channel.send(fatalerror)
      if(!args[1]) return message.channel.send(fatalerror)



      axios
        .get(`https://api.nomics.com/v1/currencies/ticker?key=keyhere&ids=${args[0]}&interval=1d,30d&convert=${args[1]}&per-page=100&page=1`)
        .then((body) => {

          const embed = new Discord.MessageEmbed()
          .setTitle(`Crypto Result: ${body.data[0].name}`)
          .setColor("RANDOM")
          .addField("Price:", `${body.data[0].price} ${args[1]}`)
          .addField(`Price Date:`, body.data[0].price_date)
          .addField(`Rank:`, body.data[0].rank)
          .addField(`Circulating Supply:`, body .data[0].circulating_supply)
          .addField(`Max Supply:`, body.data[0].max_supply)
          .addField(`Market Cap:`, body.data[0].market_cap)
          .addField(`High:`, body.data[0].high)
          .addField(`Exchanges:`, body.data[0].num_exchanges)

          message.channel.send(embed);

        })
        .catch((err) => {
          
        })
    }

    if(command==="source"){
      const embed = new Discord.MessageEmbed()
      .setTitle("Where Crypto gets the source from.")
      .addField("API", "Crypto Market Cap & Pricing Data Provided By Nomics.")

      message.channel.send(embed)
    }
})

// Login``
client.login(config.token)
