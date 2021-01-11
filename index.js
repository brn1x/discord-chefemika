const discord = require('./src/lib/Discord')
require('dotenv').config()

discord.login(process.env.DISCORD_USER_TOKEN)
