module.exports = {
  data: {
    name: "help",
    description: "Available commands"    
  },
  
  run: ({interaction}) => 
  {
    const infoHelp = {
      color: 0x0099ff,
	    title: 'The Help Panel',
      timestamp: new Date().toISOString(),
      
      fields: [
		  {
			 name: '/links',
			 value: 'Returns important website links',
      },
      {
			 name: 'Regular field title',
			 value: 'Some value here',
      },
      {
			 name: 'Regular field title',
			 value: 'Some value here',
      },
      {
			 name: 'Regular field title',
			 value: 'Some value here',
      },
      {
			 name: 'Regular field title',
			 value: 'Some value here',
      },
      {
			 name: 'Regular field title',
			 value: 'Some value here',
      },
    
    ],    
  };
  
    interaction.reply({embeds: [infoHelp], ephemeral: true});
  }
}