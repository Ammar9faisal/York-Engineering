module.exports = {
  data: {
    name: "programs",
    description: "Program Websites"    
  },
  
  run: ({interaction}) => 
  {
    const checklists = {
      color: 0x0099ff,
	    title: 'Program Websites',
      timestamp: new Date().toISOString(),
      
      fields: [
		  {
			 name: 'Civil Engineering',
			 value: 'https://lassonde.yorku.ca/civil/',
      },
      {
			 name: 'Elec-Eng / Comp-Sci / Comp-Eng / Soft-Eng',
			 value: 'https://lassonde.yorku.ca/eecs/',
      },
      {
			 name: 'Mechanical Engineering',
			 value: 'https://lassonde.yorku.ca/mech/',
      },
      {
			 name: 'Space Engineering',
			 value: 'https://lassonde.yorku.ca/esse/',
      },
    
    ],    
  };
  
    interaction.reply({embeds: [checklists], ephemeral: true});
  }
}