module.exports = {
  data: {
    name: 'kick',
    description: 'Kick a member from vc',
      options : [
        {
        name:'member',
        description: 'Which player to kick',
          type: 6 //User Option
        },
    ]
  },
  run: ({interaction}) => {
        const kickedUser = interaction.options.getMember('member');

        if (interaction)
        interaction.options.getMember('member').kick();
        interaction.reply(`${kickedUser} has been kicked by ${interaction.user}`)
    }
}