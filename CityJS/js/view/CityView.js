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
					`<div class="w3-row city">
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
								onClick="controller.seeDetail(${city.id})"
						    />
						</div>
					  </div>`			
					   :
					  `<div class="w3-row city">
							<div class="w3-quarter">
								${city.name}
							</div>
							<div class="w3-quarter">
								<img src="${city.picture}" width="200" height="100" />
							</div>
							<div class="w3-quarter">
								${city.buildings.length} buildings
							</div>
							<div class="w3-quarter">
								<input 
									type=button 
									value="see detail" 
									class="menubutton w3-btn"
									onClick="controller.cityDetail(${city.id})"
						   		/>
								<input 
									type=button 
									value="delete" 
									class="menubutton w3-btn"
									 onClick="controller.deleteCity(${city.id})"
								/>
							</div>
						  </div>`
				  ;
	}
	
	renderCities(cities,complete)
	{
		let res="";
		for(const city of cities)
			res+=this.renderCity(city,complete);
		
		return res;
			
		
	}
	
	
	
}