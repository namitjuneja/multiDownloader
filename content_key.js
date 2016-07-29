document.getElementsByTagName('iframe')[0].contentWindow.addEventListener('keypress', function(e){
    if (e.shiftKey &&  e.keyCode == 77) {
        multiDownload_click();
        console.log("sjhdgs");
    }
}, false);

window.addEventListener('keypress', function(e){
    if (e.shiftKey &&  e.keyCode == 65) {
    		container_table = document.getElementsByTagName("table")[0];  //the outer most table holding the rest of te tables
    		content_tables = container_table.getElementsByTagName("table");
    		course_material_table = content_tables[content_tables.length - 1];
    		all_trs = course_material_table.getElementsByTagName("tr");

    	    var a = all_trs[0];

    	    a.click();
    }
}, false);
