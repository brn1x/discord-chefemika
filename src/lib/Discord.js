const Discord = require('discord.js')
const getCommandFromMessage = require('./helpers/getCommandFromMessage')
const getCommands = require('./helpers/getCommands')

const client = new Discord.Client()

const prefix = '%'

client.commands = new Discord.Collection()
getCommands(client.commands)

client.once('ready', () => {
  console.log('PokeProfessor is Online')
})

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return

  console.log(message)

  const command = getCommandFromMessage(prefix, message.content)

  if (client.commands.get(command)) {
    client.commands.get(command).execute(message)
  }
})

module.exports = client
