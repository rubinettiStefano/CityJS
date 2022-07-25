class City
{
	constructor(id,name,picture,buildings)
	{
		this.id = id;
		this.name = name;
		this.picture=picture;
		this.buildings = buildings;
	}
	
	getBuildings()
	{
		return buildings;
	}
	
	getResidents()
	{
		let res = [];
		for(let i=0;i<this.buildings.length;i++)
		{
			let residents = this.buildings[i].getResidents();
			for(let k=0;k<residents.length;k++)
				res.push(residents[k]);
		}
		return res;
	}
}