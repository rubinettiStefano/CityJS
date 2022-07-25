// IO GESTIRO' GLI EVENTI
// IO COLLEGHERO' VISTA E MODEL

// Io sono un OGGETTO Javascript, senza classe
let controller = 
{
	// per provare un comando, scrivere e poi premere TAB
	cityDAO: new CityDAO(),
	commands:
	[
		{command:"help", 		helptext:"Prints this list"},
		{command:"list", 		helptext:"Lists all the cities"},
		{command:"newcity", 	helptext:"Insert a new city. Syntax is newcity cityname citypicture"},
		{command:"deletecity", 	helptext:"Delete a city. Syntax is deletecity cityid"},
		{command:"newbuilding", helptext:"Insert a building. Syntax is newbuilding cityname, buildingname, type, address"}
	],
	runCommand:function()
	{
		let cmd = document.getElementById('commandbar').value;
		let res = "Bad command";
		if(cmd=="help")
		{
			res = "";
			for(let i=0;i<controller.commands.length;i++)
				res+=controller.commands[i].command+":"+controller.commands[i].helptext+"<br>";
		}
		if(cmd=="list")
		{
			res = "";
			let cities = controller.cityDAO.getCities();
			for(let i=0;i<cities.length;i++)
				res+=cities[i].id+" "+cities[i].name+"<br />";
		}

		if(cmd.startsWith("newcity"))
		{
			let parts = cmd.split(" ");
			if(parts.length==3)
			{
				controller.cityDAO.insertCity(parts[1], parts[2]);
				res ="Inserted "+parts[1];
			}
			else
				res = "Bad syntax";
		}

		if(cmd.startsWith("deletecity"))
		{
			let parts = cmd.split(" ");
			if(parts.length==2)
			{
				controller.cityDAO.deleteCity(parseInt(parts[1]));
				res ="Deleted city with id "+parts[1];
			}
			else
				res = "Bad syntax";
		}
		
		if(cmd.startsWith("newbuilding"))
		{
			let parts = cmd.split(" ");
			if(parts.length==5)
			{
				controller.cityDAO.insertBuilding(parts[1],parts[2],parts[3],parts[4]);
				res ="Inserted "+parts[2];
			}
			else
				res = "Bad syntax";
		}
		document.getElementById('results').innerHTML = res;
		document.getElementById('commandbar').value = "";
		document.getElementById('commandbar').autofocus;
	},
	init:function()
	{
		// QUI DEFINISCO GLI EVENTI!
		document.getElementById('commandbar').onblur = controller.runCommand;
		
	}	
};

controller.init();