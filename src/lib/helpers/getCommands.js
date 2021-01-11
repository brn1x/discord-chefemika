const fs = require('fs')

function getCommands (commandSetter) {
  const commandFiles = fs.readdirSync('C:\\Users\\bruno\\Documents\\Projetos\\PokeProfessor\\src\\lib\\commands')
  for (const file of commandFiles) {
    const command = require(`./commands/${file}`)

    commandSetter.set(command.name, command)
  }
}

module.exports = getCommands
