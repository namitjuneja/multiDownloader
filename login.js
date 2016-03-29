// Lets do VOLSBB autologin

chrome.storage.sync.get(['username', 'password'], function(results)
	{
		var username_saved = results.username;
		var password_saved = results.password;

		// document.getElementsByName("userId")[0].value = username_saved;
		// document.getElementsByName("password")[0].value = password_saved;

		// var myKeyVals = { A1984 : 1, A9873 : 5, A1674 : 2, A8724 : 1, A3574 : 3, A1165 : 5 }

		var load = {'userId': username_saved,'serviceName':"ProntoAuthentication",'password': password_saved ,'Submit22':"Login"};

		console.log(load);


		var saveData = $.ajax({
		      type: 'POST',
		      url: "http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://phc.prontonetworks.com/",
		      data: load,
		      dataType: "text",
		      success: function(resultData) { console.log(resultData); }
		});

		// saveData.error(function() { alert("Something went wrong"); });

		
	});
