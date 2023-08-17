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
			 name: '/checklists',
			 value: 'Returns course checklists for engineering',
      },
      {
			 name: '/programs',
			 value: 'Returns engineering program websites',
      },
      {
			 name: 'Placeholder',
			 value: 'Placeholder',
      },
      {
			 name: 'Placeholder',
			 value: 'Placeholder',
      },
      {
			 name: 'Placeholder',
			 value: 'Placeholder',
      },
    
    ],    
  };
  
    interaction.reply({embeds: [infoHelp], ephemeral: true});
  }
}