module.exports = {
  data: {
    name: "links",
    description: "Get Important Links"    
  },
  
  run: ({interaction}) => 
  {
    const infoHelp = {
      color: 0x0099ff,
	    title: 'Info Panel',
      timestamp: new Date().toISOString(),
      
      fields: [
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
      {
			 name: 'Regular field title',
			 value: 'Some value here',
      },
    
    ],    
  };
  
    interaction.reply({embeds: [infoHelp]});
  }
}