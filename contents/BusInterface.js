(function () {
	
	replaceHTML();
	
	var Busses;
	var Stops;
	var Arrivals;
	var BaseLink = "https://www.mycyride.com/";
	
    //Gets the routes from the bus
    function getBusRoutes(){
    	var link = (BaseLink + "Region/0/Routes");
    	
    	$.get("https://www.mycyride.com/Region/0/Routes", function(data){
    		console.log("Logging Bus Object Information");
    		console.log(data);
    		Busses=data;
    		var i;
    		for(i=0;i<Busses.length;i++){
    			console.log(Busses[i].Color);
    			console.log(Busses[i].DisplayName);
    			console.log(Busses[i].ID);
    			console.log("");
    		}
    	});
    }
	
	//Gets the Stops for a specific bus Route
	function getBusStops(BusID){
		var link = (BaseLink + "Route/" + BusID + "/Directions");
		
		$.get(link, function(data){
			console.log("Logging Route Information");
			console.log(data);
			Stops = data;
			
		});
	}
	
	//Gets the Arrival times for the busses at a specific stop
	function getBusArrivals(StopID){
		var link = (BaseLink + "Stop/" + StopID + "/Arrivals");
		
		$.get(link, function(data){
			console.log("Logging Bus Arrival Information");
			console.log(data);
			Arrivals = data;
			
		});
	}
	
	function replaceHTML(){
		
		getBusRoutes();
		
		var i;
		for(i=0;i<Busses.length;i++){
			var str = "<div class=\"ui-item icon.png\" id=\"1\" data-title=\"RED\"></div>";
			$(".Testing").append(str);
			
			$(".Testing").add("div").addClass("ui-item icon.png")
		}
	
	}
	
}());