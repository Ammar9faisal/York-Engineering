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

        if (interaction.member.roles.cache.has('1123816334489301019') === true) {
          const kickedUser = interaction.options.getMember('member');
          kickedUser.kick();
          interaction.reply(`${kickedUser} has been kicked by ${interaction.user}`)}
        
        else {
          interaction.reply('You do not have sufficient permissions for this!')
        }
    }
}