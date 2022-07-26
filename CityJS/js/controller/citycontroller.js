let controller =
{
	cityDAO: new CityDAO(),
	cityView:new CityView(),
	cityList:function()
	{
		controller.hideAllTabs();
		controller.show('divcitydetaillist');
		controller.fill
		(
			'divcitydetaillist',
			"<h3>Managed Cities</h3>"+controller.cityView.renderCities(controller.cityDAO.cities,true)
		);
		
	},
	formNewCity:function()
	{
		controller.hideAllTabs();
		controller.refreshCitiesList();
		controller.show('divnewcity');
		
	},
	insertCity:function(name,picture)
	{
		try
		{
			controller.cityDAO.insertCity(name,picture);
			controller.fill('insertcityresult', "<b style='color:green'>SAVED</b>");
			controller.refreshCitiesList();
		}
		catch(error)
		{
			controller.fill('insertcityresult', "<b style='color:green'>"+error+"</b>");
		}
	},
	deleteCity:function(id)
	{
		controller.hideAllTabs();
		controller.cityDAO.deleteCity(id);
		controller.fill('insertcityresult', "<b style='color:green'>DELETED</b>");
		controller.cityList();
	},
	cityDetail:function(id)
	{
		alert('Qui deve comparire il dettaglio della città con id='+id);
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
	},
	refreshCitiesList:function()
	{
		controller.fill("citynameslist","<h3> Cities already present </h3>"+controller.cityView.renderCities(controller.cityDAO.cities));
	},
	hideAllTabs:function()
	{
		let tabs = document.getElementsByClassName("tab");
		for(let i=0;i<tabs.length;i++)
			tabs[i].style.display = 'none';
	}
	
	
	
}