(function () {
	
	getBusRoutes();
	
	var NumBusses;
	var BusID = [];
	var Stops = [];
	var Arrivals;
	var BaseLink = "https://www.mycyride.com/";
	
    //Gets the routes from the bus
    function getBusRoutes(){
    	var link = (BaseLink + "Region/0/Routes");
    	
    	$.get("https://www.mycyride.com/Region/0/Routes", function(data){
    		console.log("Logging Bus Object Information");
    		console.log(data);
    		NumBusses = data.length;
    		console.log(NumBusses);
    		var i;
    		for(i=0;i<data.length;i++){
    			console.log(data[i].Color);
    			console.log(data[i].DisplayName);
    			console.log(data[i].ID);
    			BusID.push(data[i].ID);
    			console.log(BusID[i]);
    			console.log("Adding Bus Info to Selector");
    			var str = "<div class=\"ui-item\" style=\"background-color:"+data[i].Color+"\"; id=\""+ data[i].ID +"\" data-title=\""+data[i].DisplayName+"\"></div>";
    			$(str).appendTo($(".container"));
    			console.log("Added HTML");
    			console.log("Adding Event Listner");
    			
    			//The issue is here. It cant find i during the callback
    			//use the changing class name to determine what id to grab
    			//Look for class ui-item ui-item-active
    			document.getElementById(data[i].ID).addEventListener("click", getBusStops);
    			
    			
    			
    			
    			
    			console.log("");
    		}
    		console.log(BusID);
    		
    	});
    }
    
    //This is still broken
    //This is still broken
    //This is still broken
    //This is still broken
    //This is still broken
    //This is still broken
    //This is still broken
    document.getElementsByClassName("ui-selector-indicator")[0].addEventListener("hashchange", getBusStops);

    
	//Gets the Stops for a specific bus Route
	function getBusStops(){
		
		var Bus = document.getElementsByClassName("ui-item ui-item-active")[0].getAttribute('id');
		console.log(Bus);
		var link = ("https://www.mycyride.com/Route/" + Bus + "/Directions");
		
		$.get(link, function(data){
			console.log("Logging Route Information");
			console.log(data);
			Stops = data[0].Stops;
			var i = 0;
			for(i=0;i<Stops.length;i++){
				console.log(Stops[i].ID);
				console.log(Stops[i].Name);
				console.log(Stops[i].Latitude +" "+ Stops[i].Longitude);
				console.log("");
				
				var str = "<li class=\"li-has-thumb-left\" id=\"" + Stops[i].ID + "\"><a      href=\"#\">" + Stops[i].Name + "<img class=\"ui-li-thumb-left\" src=\"../loc.png\" /></a></li>";
    			$(str).appendTo($(".ui-arc-listview"));
			}
		});
		
		
		document.location.href = "#arc-listview-page";
		
		
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
	
	
	
}());