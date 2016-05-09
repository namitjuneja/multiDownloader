subject_name = "";
teacher_name = "";

/* Initialize a counter to add the Notes ID before the file name.
This will keep a track of the sequence in which notes were downloaded.

*/
var count=0; 


chrome.runtime.onMessage.addListener
(

  function(request, sender, sendResponse) 
	  {
	  			links = request.links;
	  			subject_name = request.subject;
	  			teacher_name = request.teacher;

	  			console.log(links);
	  			for (i=0; i<links.length; i++)
	  			// for (filename in links)
	  			{
	  				console.log(links[i]);

	  				chrome.downloads.download
	  				({
	  					url: links[i]
	  					// filename: "VIT Course Material"+ "/" + subject_name + "/" + teacher_name + "/" + links[i].replace(/^.*[\\\/]/, '')
	  				});
	  				
	  			}
	  }

);

var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};


chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
	if (getLocation(item.url).hostname == "academics.vit.ac.in" || getLocation(item.url).hostname == "27.251.102.132")
	{
		/*
		Increase the value of count to maintain sequence.
		*/
		count = count+1;
		/*rename the file name along with the number.
		*/
		suggest({filename: "VIT Course Material"+ "/" + subject_name + "/" + teacher_name + "/" + count+"_"+ item.filename.split("_").slice(4).join("_")});
		console.log(getLocation(item.url).hostname);
	}

});
