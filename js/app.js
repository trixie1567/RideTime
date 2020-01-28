(function () {
	
	var page = document.querySelector("#moreoptionsPage"),
    popup = page.querySelector("#moreoptionsPopup"),
    handler = page.querySelector(".ui-more"),
    drawer = page.querySelector("#moreoptionsDrawer"),
    selector = page.querySelector("#selector"),
    helper,
    clickHandlerBound;

function clickHandler(event)
{
   tau.openPopup(popup);
}

page.addEventListener("pagebeforeshow", function()
{
   if (tau.support.shape.circle)
   {
      helper = tau.helper.DrawerMoreStyle.create(drawer,
      {
         handler: ".drawer-handler"
      });
   }
   else
   {
      /* Shape is square */
      clickHandlerBound = clickHandler.bind(null);
      handler.addEventListener("click", clickHandlerBound);
   }
});

page.addEventListener("pagebeforehide", function() 
{
   if (tau.support.shape.circle)
   {
      handler.removeEventListener("click", clickHandlerBound);
      helper.destroy();
   }
});	
	

	
	window.addEventListener("tizenhwkey", function (ev) {
		var activePopup = null,
			page = null,
			pageId = "";

		if (ev.keyName === "back") {
			activePopup = document.querySelector(".ui-popup-active");
			page = document.getElementsByClassName("ui-page-active")[0];
			pageId = page ? page.id : "";

			if (pageId === "main" && !activePopup) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else if(pageId === "arc-listview-page") {
				
				$(".ui-arc-listview").empty();
				
				window.history.back();
			} else {
				window.history.back();
			}
			
		}
	});
}());