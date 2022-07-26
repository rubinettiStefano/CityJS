/**
 * 
 */
class CityView
{
	constructor()
	{
		
	}
		
	renderCity(city,complete)
	{
		return  !complete	?
					`
						<div class="w3-row city">
							<div class="w3-third">
								${city.name}
							</div>
							<div class="w3-third">
								<input
									 type=button 
									 value="delete" 
									 class="menubutton w3-btn"
									 onClick="controller.deleteCity(${city.id})"
								 />
							</div>
							<div class="w3-third">
								<input 
									type=button 
									value="see detail" 
									class="menubutton w3-btn"
									onClick="controller.cityDetail(${city.id})"
							    />
							</div>
						  </div>
					   `			
					   :
					  `
					  	<div class="w3-quarter">
						  	 <div class="city">
						  	 		<center>
									<h3><b>${city.name}</b></h3> 
									<p>
										<img src="${city.picture}" width="300" height="150" />
									</p>
									<p >
										Currently <b>${city.buildings.length}</b> 
										building${city.buildings.length!=1 ? 's' : ''}
									<p>
									<p>
										<input 
											type=button 
											value="see detail" 
											class="menubutton w3-btn"
											onClick="controller.cityDetail(${city.id})"
								   		/> <br />
										<input 
											type=button 
											value="delete" 
											class="menubutton w3-btn"
											 onClick="controller.deleteCity(${city.id})"
										/>
									</p>
									</center>
							  </div>
						 </div>`
				  ;
	}
	
	renderCities(cities,complete)
	{
		let res="<div class='w3-row'>";
		for(const city of cities)
			res+=this.renderCity(city,complete);
		
		res+="</div>";
		
		return res;
	}
	
	renderCityDetail(city)
	{
		return 	`
					<div class="w3-row city">
						<div class="w3-third">
							<h2><b>${city.name}</b></h2>
							<img src="${city.picture}" width="300" height="150" />
						</div>
						<div class="w3-third" >
							<center><h2><b>Buildings List</b></h2></center>
							${this.renderCityBuildings(city)}
 						</div>
					</div>
				`;
	}
	
	renderCityBuildings(city)
	{
		let res = `<div class="w3-row">
						<div class="w3-quarter">
							<h3>Name</h3>
						</div>
						<div class="w3-quarter">
							<h3>Type</h3>
						</div>
						<div class="w3-quarter">
							<h3>Address</h3>
						</div>
						<div class="w3-quarter">
							<h3> Residents </h3>
						</div>
					</div>`
					;
		
		for(let i=0;i<city.buildings.length;i++)
			res+= this.renderBuilding(city.buildings[i]);
		return res;
	}
	
	renderBuilding(building)
	{
		return  `
					<div class="w3-row building" >
						<div class="w3-quarter" >
							${building.name}
						</div>
						<div class="w3-quarter" >
							${building.type}
						</div>
						<div class="w3-quarter" >
							${building.address}
						</div>
						<div class="w3-quarter" >
							${this.renderCitizens(building)}
						</div>
					</div>
				`;
	}
	
	renderCitizens(building)
	{
		let res = "";
		for(let i=0;i<building.citizens.length;i++)
			res+=this.renderCitizen(building.citizens[i]);
		return res;
	}
	
	renderCitizen(citizen)
	{
		return `<div class=citizen >
					${citizen.name} ${citizen.surname}
				</div>
		`;
	}
	
	
	
	
}

//Più comune: 1920 * 1080
//Portatile: 1378 *1024
//4k :       3980 * 2100
//2k tablet: 2000 * 1200



