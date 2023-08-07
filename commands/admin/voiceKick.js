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
        interaction.options.getMember('member').kick();
        interaction.reply('User has been kicked')
    }
}