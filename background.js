chrome.runtime.onMessage.addListener
(

  function(request, sender, sendResponse) 
	  {
	  			links = request.links;
	  			subject_name = request.subject;
	  			teacher_name = request.teacher;

	  			// for (i=0; i<links.length; i++)
	  			for (filename in links)
	  			{
	  				console.log(filename);
	  				chrome.downloads.download
	  				({
	  					url: links[filename], 
	  					filename: subject_name + "/" + teacher_name + "/" + filename
	  				});
	  			}
	  }

);