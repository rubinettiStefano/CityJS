let controller =
{
	cityDAO: new CityDAO(),
	cityList:function()
	{
		alert('Not yer implemented');
	},
	formNewCity:function()
	{
		let res = "";
		let cities = controller.cityDAO.getCities();
		for(const city of cities)
			res+=city.name+"<br/>";
		
		controller.fill("citynameslist",res);
		controller.show('divnewcity');
		
	},
	insertCity:function(name,picture)
	{
		if(controller.cityDAO.insertCity(name,picture))
		{
			alert("Saved");
			controller.hide('divnewcity');
		}
		else
			alert("Error");	
	},
	formNewBuilding:function()
	{
		alert('Not yer implemented');
	},
	formNewCitizen:function()
	{
		alert('Not yer implemented');
	},
	hide:function(id)
	{
		document.getElementById(id).style.display = 'none';
	},
	show:function(id)
	{
		document.getElementById(id).style.display = 'block';
	},
	fill:function(id,content)
	{
		document.getElementById(id).innerHTML = content;
	}
	
	
	
}