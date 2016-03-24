chrome.runtime.onMessage.addListener
(

  function(request, sender, sendResponse) 
	  {
	  			links = request.links;

	  			for (i=0; i<links.length; i++)
	  			{
	  				chrome.downloads.download
	  				({
	  					url: links[i]
	  				});
	  			}
	  }

);