class CityDAO
{//MOCK
	
	constructor()
	{
		this.cities = [];
		
		
		let b1 = new Building
		(
			1,
			"Java Academy",
			"Office",
			"Via Lecco, 20, Monza",
			getRandomCitizens(1,10)
		);
		
		let b2 = new Building
		(
			2,
			"Salsa Academy",
			"Office",
			"Via Bergamo, 20, Monza",
			getRandomCitizens(11,20)
		);
		
		let b3 = new Building
		(
			3,
			"Casterly Rock",
			"Fortification",
			"Via dell'oro, 10, Milano",
			getRandomCitizens(21,30)
		);
		
		let monza = new City
		{
			1,
			"Monza",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3j29k0O2xtb-IBeyy1uTCnreCDrdz8hwnw&usqp=CAU",
			[b1,b2]
		}
		
		let milano = new City
		{
			1,
			"Milan",
			"https://static.wikia.nocookie.net/lotr/images/b/b0/Fotr6.jpg/revision/latest?cb=20130419144638",
			[b3]
		}
		
		this.cities = [monza,milano];
	}
	
	getCities()
	{
		return this.cities;
	}
	
	getRandomCitizen(id)
	{
		let names = ["Lorenzo","Ferdinando","Giuseppe","Nicolò","Eleonora","Cosimo","Diego","Simone","Stefano"];
		let surnames = ["Rossi","Bianchi","Verdi","Gialli","Fumagalli","Brambilla","Piddu","Primerano","Rubinetti","Ienco","Arostoi"];
		let jobs = ["Teacher","Programmer","Student","Traveler","Blogger","Influencer","Artist","Fighter"];

		return new Citizen(id, this.random(names),this.random(surnames), this.randomDob(), this.random(jobs))
	}
	
	getRandomCitizens(minID,maxID)
	{
		let citizens = [];
		for(let i=minID;i<=maxID;i++)
			citizens.push(this.getRandomCitizen(i));
		return citizens;
	}
	
	random(v)
	{
		return v[parseInt(v.length * Math.random())];
	}
	
	randomDob()
	{
		let day = parseInt(Math.random() * 28)+1;
		let month = parseInt(Math.random() * 12)+1;
		let year = 1970 + parseInt(Math.random() * 30);
		
		if(day<10) 		day="0"+day;
		if(month<10) 	month="0"+month;
		return day+"/"+month+"/"+year;
	}
	
}