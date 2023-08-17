module.exports = {
  data: {
    name: "checklists",
    description: "Program Checklists"    
  },
  
  run: ({interaction}) => 
  {
    const checklists = {
      color: 0x0099ff,
	    title: 'Program Checklists',
      timestamp: new Date().toISOString(),
      
      fields: [
		  {
			 name: 'Civil Engineering',
			 value: 'https://lassonde.yorku.ca/wp-content/uploads/2021-2022-Degree-Checklist-BEng-Civil.pdf',
      },
      {
			 name: 'Computer Engineering',
			 value: 'https://lassonde.yorku.ca/wp-content/uploads/2021-2022-Degree-Checklist-BEng-Computer.pdf',
      },
      {
			 name: 'Electrical Engineering',
			 value: 'https://lassonde.yorku.ca/wp-content/uploads/2021-2022-Degree-Checklist-BEng-Electrical-rev-August-16-2021-3.pdf',
      },
      {
			 name: 'Mechanical Engineering',
			 value: 'https://lassonde.yorku.ca/wp-content/uploads/2021-2022-Degree-Checklist-BEng-Mechanical.pdf',
      },
      {
			 name: 'Software Engineering (General)',
			 value: 'https://lassonde.yorku.ca/wp-content/uploads/2021-2022-Degree-Checklist-BEng-Software-General.pdf',
      },
      {
			 name: 'Software Engineering (Security)',
			 value: 'https://lassonde.yorku.ca/wp-content/uploads/2021-2022-Degree-Checklist-BEng-Software-Security.pdf',
      },
      {
			 name: 'Software Engineering (Big Data)',
			 value: 'https://lassonde.yorku.ca/wp-content/uploads/2021-2022-Degree-Checklist-BEng-Software-Big-Data.pdf',
      },
      {
			 name: 'Space Engineering',
			 value: 'https://lassonde.yorku.ca/wp-content/uploads/2021-2022-Degree-Checklist-BEng-Space.pdf',
      },
    
    ],    
  };
  
    interaction.reply({embeds: [checklists], ephemeral: true});
  }
}