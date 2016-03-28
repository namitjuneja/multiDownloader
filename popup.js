chrome.extension.getBackgroundPage().console.log("acchaa");



chrome.storage.sync.get(['username', 'password'], function(results)
	{
		var username_saved = results.username;
		var password_saved = results.password;

		// document.getElementsByName("userId")[0].value = username_saved;
		// document.getElementsByName("password")[0].value = password_saved;

		// var myKeyVals = { A1984 : 1, A9873 : 5, A1674 : 2, A8724 : 1, A3574 : 3, A1165 : 5 }

		var load = {'userId': username_saved,'serviceName':"ProntoAuthentication",'password': password_saved ,'Submit22':"Login"};

		chrome.extension.getBackgroundPage().console.log(load);


		var saveData = $.ajax({
		      type: 'POST',
		      url: "http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://phc.prontonetworks.com/",
		      data: load,
		      dataType: "text",
		      success: function(resultData) { chrome.extension.getBackgroundPage().console.log(resultData); }
		});

		// saveData.error(function() { alert("Something went wrong"); });

		document.getElementById("userid").value = username_saved;
		document.getElementById("passwd").value = password_saved;

	});













document.addEventListener('DOMContentLoaded', function()
	{
		 var save = document.getElementById('save');
		 save.addEventListener('click', function() 
		 {
		         valueChange();
		         
		 });


		 var open = document.getElementById('open');
		 open.addEventListener('click', function() 
		 {
		         document.getElementById("userid").setAttribute('type', 'text');
		         document.getElementById("passwd").setAttribute("type", 'password');
		         document.getElementById("userid_label").style.display = "block";
		         document.getElementById("passwd_label").style.display = "block";
		         document.getElementById("save").style.display = "inline-block";
		         // document.getElementById("logout").style.display = "inline-block";
		         


		 });

		 var logout = document.getElementById('logout');
		 logout.addEventListener('click', function() 
		 {
		         var saveData = $.ajax({
		               type: 'POST',
		               url: "http://phc.prontonetworks.com/cgi-bin/authlogout",
		               dataType: "text",
		               success: function(resultData) { chrome.extension.getBackgroundPage().console.log(resultData); }
		         });
		 });
	});




function valueChange()
{
	var username = document.getElementsByName("userId_save")[0].value;
	var password = document.getElementsByName("password_save")[0].value;


	chrome.storage.sync.set({'username': username, 'password': password}, function() 
	{
	          message('Settings saved');
	});



	chrome.storage.sync.get(['username', 'password'], function(results)
		{
			chrome.extension.getBackgroundPage().console.log( results.username );
			chrome.extension.getBackgroundPage().console.log( results.password );
		});

	
};	



$(function() {
    $('ul.tab-nav li a.button').click(function() {
        var href = $(this).attr('href');

        $('li a.active.button', $(this).parent().parent()).removeClass('active');
        $(this).addClass('active');

        $('.tab-pane.active', $(href).parent()).removeClass('active');
        $(href).addClass('active');

        return false;
    });
});
