chrome.runtime.onMessage.addListener
(

  function(request, sender, sendResponse) 
	  {
	  			links = request.links;
	  			subject_name = request.subject;
	  			teacher_name = request.teacher;

	  			for (i=0; i<links.length; i++)
	  			// for (filename in links)
	  			{
	  				console.log(links[i].replace(/^.*[\\\/]/, ''));
	  				chrome.downloads.download
	  				({
	  					url: links[i], 
	  					filename: "VIT Course Material"+ "/" + subject_name + "/" + teacher_name + "/" + links[i].replace(/^.*[\\\/]/, '')
	  				});
	  			}
	  }

);