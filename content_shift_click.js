// adding checkbox next to all the links
container_table = document.getElementsByTagName("table")[0]; //the outer most table holding the rest of the tables
content_tables = container_table.getElementsByTagName("table"); //the 4/5 tables for assignments. course page etc inside the container table
course_material_table = content_tables[content_tables.length - 1]; //last table in the container table which is the course page table

//injecting html content in the course_material_table
s = course_material_table.getElementsByTagName("a");

//all rows iterator-1: adds checkboxes and row onclick events
for (i = 0; i < s.length; i++) {
    var box = document.createElement("input"); //create the input tag       

    //assigning type, name, and value attributes
    var att = document.createAttribute("type");
    att.value = "checkbox";
    box.setAttributeNode(att);
    var att = document.createAttribute("name");
    att.value = "downloadSelect";
    box.setAttributeNode(att);
    var att = document.createAttribute("value");
    att.value = s[i].href;
    box.setAttributeNode(att);

    // s[i] is the i'th <a> tag in the course_material_table

    s[i].parentNode.insertBefore(box, s[i]); //inserting the textbox

    s[i].parentNode.parentNode.setAttribute("width", "190");//adjusting the row length to contain overflow

    //change cursor to pointer for every row having a link
    s[i].parentNode.parentNode.parentNode.onmouseover = function() {
        this.style.cursor = "pointer";
    };

    // add oncliick event for every row having a link

    // s[i].parentNode.parentNode.parentNode is the table row for the <a> tag
    // all rows are initially set to unclicked state
    s[i].parentNode.parentNode.parentNode.setAttribute("checked_datainternal", false);
    s[i].parentNode.parentNode.parentNode.className = "individual_row";


    //onclick event for the i'th <a> tag's row (without shift)
    s[i].parentNode.parentNode.parentNode.onclick = function(event) {
        senderElement = event.target.tagName.toLowerCase();   

        clickedChecbox = this.getElementsByTagName("td")[4].getElementsByTagName("font")[0].getElementsByTagName("input");
        all_elements_checked = false;

        if (senderElement == "input") {  //TODO: implement regex
            //check if any checkbox in that row is checked and store in all_elements_checked as boolean
            for (var i = 0; i < clickedChecbox.length; i++) {
                all_elements_checked = all_elements_checked || clickedChecbox[i].checked;
            }

            if (all_elements_checked) //when atleast one element is checked
            {
                this.style.backgroundColor = "white";
                check_value = true;
            } else //when no element is checked
            {
                this.style.backgroundColor = "";
                check_value = false;
            }
        } else {
            if (this.getAttribute("checked_datainternal") == "false") {
                this.style.backgroundColor = "white";
                check_value = true;
            } else if (this.getAttribute("checked_datainternal") == "true") {
                this.style.backgroundColor = "";
                check_value = false;
            }

            for (var i = 0; i < clickedChecbox.length; i++) {
                clickedChecbox[i].checked = check_value;
            }
        }

        this.setAttribute("checked_datainternal", check_value);
    };



    //onclick event for the i'th <a> tag's row (with shift) [multi-select]
    s[i].parentNode.parentNode.parentNode.onclick = function(event) {
        senderElement = event.target.tagName.toLowerCase();   

        clickedChecbox = this.getElementsByTagName("td")[4].getElementsByTagName("font")[0].getElementsByTagName("input");

        all_elements_checked = false;

        //checking if onclick happened on the check box or anywhere else on the row
        if (senderElement == "input") {  //TODO: implement regex
            //check if any checkbox in that row is checked and store in all_elements_checked as boolean
            for (var i = 0; i < clickedChecbox.length; i++) {
                all_elements_checked = all_elements_checked || clickedChecbox[i].checked;
            }

            //changing row's background
            if (all_elements_checked) //when atleast one element is checked
            {
                this.style.backgroundColor = "white";
                check_value = true;
            } else //when no element is checked
            {
                this.style.backgroundColor = "";
                check_value = false;
            }
        } else {    //when the row is clicked
            //check if row is already checked
            if (this.getAttribute("checked_datainternal") == "false") {
                this.style.backgroundColor = "white";
                check_value = true;
            } else if (this.getAttribute("checked_datainternal") == "true") {
                this.style.backgroundColor = "";
                check_value = false;
            }

            for (var i = 0; i < clickedChecbox.length; i++) {
                clickedChecbox[i].checked = check_value;
            }
        }

        this.setAttribute("checked_datainternal", check_value);


        //iterate through all rows from 0 - (i-1)
        for (var i = 0; i < [i value of the s]; i++)
        {
            //TODO: will do later
        }
    };
}

//rest of the links html injection
for (j = 0; j < content_tables.length - 1; j++) {
    s = content_tables[j].getElementsByTagName("a");

    for (i = 0; i < s.length; i++) {
        var box = document.createElement("input");

        var att = document.createAttribute("type");
        att.value = "checkbox";
        box.setAttributeNode(att);

        var att = document.createAttribute("class");
        att.value = "";
        box.setAttributeNode(att);

        var att = document.createAttribute("name");
        att.value = "downloadSelect";
        box.setAttributeNode(att);

        var att = document.createAttribute("value");
        att.value = s[i].href;
        box.setAttributeNode(att);

        s[i].parentNode.insertBefore(box, s[i]);

        //change cursor to pointer for every row having a link
        s[i].parentNode.onmouseover = function() {
            this.style.cursor = "pointer";
        };

        // all rows are initially unclicked
        s[i].parentNode.setAttribute("checked_datainternal", false);
        s[i].parentNode.className = "individual_row";

        // add oncliick event for every row having a link
        // s[i] is the <a> tag
        // s[i].parentNode.parentNode.parentNode is the table row for the <a> tag
        s[i].parentNode.onclick = function(event) {
            senderElement = event.target.tagName.toLowerCase();

            clickedChecbox = this.getElementsByTagName("input");
            all_elements_checked = false;

            if (senderElement == "input") {
                //check if any checkbox in that row is checked and store in all_elements_checked as boolean
                for (var i = 0; i < clickedChecbox.length; i++) {
                    all_elements_checked = all_elements_checked || clickedChecbox[i].checked;
                }

                if (all_elements_checked) //when atleast one element is checked
                {
                    this.style.backgroundColor = "white";
                    check_value = true;
                } else //when no element is checked
                {
                    this.style.backgroundColor = "";
                    check_value = false;
                }
            } else {
                if (this.getAttribute("checked_datainternal") == "false") {
                    this.style.backgroundColor = "white";
                    check_value = true;
                } else if (this.getAttribute("checked_datainternal") == "true") {
                    this.style.backgroundColor = "";
                    check_value = false;
                }

                for (var i = 0; i < clickedChecbox.length; i++) {
                    clickedChecbox[i].checked = check_value;
                }
            }

            this.setAttribute("checked_datainternal", check_value);
        };
    }
}


//identifying links in cat1/2/tee and assigning serial numbers

all_trs = course_material_table.getElementsByTagName("tr"); //all rows in course_material_table




//assigning all links to CAT1/CAT2/TEE + assigning id to every link (useful for file naming)

current_section = "CAT-1";
link_count = 1;

//all rows iterator - 2: identifies cat1/2/3 links and provide id numbers
for (i = 0; i < all_trs.length; i++) {
    all_tds = all_trs[i].getElementsByTagName("td");
    all_checkboxes = all_trs[i].querySelectorAll('input[name=downloadSelect]');

    if (all_tds.length > 1) // adds cat1/2/tee class to the input elements if number of tds in the row is greater than one
    {
        for (j = 0; j < all_checkboxes.length; j++) {
            all_checkboxes[j].setAttribute("class", current_section + " " + link_count++);
        }
    } else if (all_tds.length == 1) // changes current section + adds onclick events for select all if the row has only one td (meaning change of section)
    {
        //if row matches CAT1
        if (all_tds[0].innerText.split(":")[0].replace(/\s+/g, " ") == "CAT-I ") // TODO string matching happening with extra space in the end - fix this
        {
            var cat1_row = all_trs[i];
            current_section = "CAT-2"; //update current section
            all_trs[i].style.cursor = "pointer"; //TODO shallow copy changes the original copy .... why?
            all_trs[i].className = "section_header";
            all_trs[i].setAttribute("checked_datainternal", false); //set checked state to false

            //onclick event to select all links under CAT1 section
            all_trs[i].onclick = function() {
                all_current_checkboxes = document.getElementsByClassName("CAT-1"); //TODO documents. course_material_table

                // select + change background based om clicked state
                if (this.getAttribute("checked_datainternal") == "false") {
                    for (j = 0; j < all_current_checkboxes.length; j++) {
                        all_current_checkboxes[j].checked = true;
                        all_current_checkboxes[j].parentNode.parentNode.parentNode.style.backgroundColor = "white";
                        all_current_checkboxes[j].parentNode.parentNode.parentNode.setAttribute("checked_datainternal", true);
                    }
                    this.setAttribute("checked_datainternal", true);
                } else if (this.getAttribute("checked_datainternal") == "true") {
                    for (j = 0; j < all_current_checkboxes.length; j++) {
                        all_current_checkboxes[j].checked = false;
                        all_current_checkboxes[j].parentNode.parentNode.parentNode.style.backgroundColor = "";
                        all_current_checkboxes[j].parentNode.parentNode.parentNode.setAttribute("checked_datainternal", false);
                    }
                    this.setAttribute("checked_datainternal", false);
                }
            }
        }
        //if row matches CAT2
        else if (all_tds[0].innerText.split(":")[0].replace(/\s+/g, " ") == "CAT-II ") // TODO string matching happening with extra space in the end - fix this
        {
            var cat2_row = all_trs[i];
            current_section = "TEE";
            all_trs[i].style.cursor = "pointer"; //shallow copy changes the original copy .... why?
            all_trs[i].setAttribute("checked_datainternal", false);
            all_trs[i].className = "section_header";
            all_trs[i].onclick = function() {
                all_current_checkboxes = document.getElementsByClassName("CAT-2");

                if (this.getAttribute("checked_datainternal") == "false") {
                    for (j = 0; j < all_current_checkboxes.length; j++) {
                        all_current_checkboxes[j].checked = true;
                        all_current_checkboxes[j].parentNode.parentNode.parentNode.style.backgroundColor = "white";
                        all_current_checkboxes[j].parentNode.parentNode.parentNode.setAttribute("checked_datainternal", true);
                    }
                    this.setAttribute("checked_datainternal", true);
                } else if (this.getAttribute("checked_datainternal") == "true") {
                    for (j = 0; j < all_current_checkboxes.length; j++) {
                        all_current_checkboxes[j].checked = false;
                        all_current_checkboxes[j].parentNode.parentNode.parentNode.style.backgroundColor = "";
                        all_current_checkboxes[j].parentNode.parentNode.parentNode.setAttribute("checked_datainternal", false);
                    }
                    this.setAttribute("checked_datainternal", false);
                }

            }
        }
        //if rown matches TEE
        else if (all_tds[0].innerText.split(":")[0].replace(/\s+/g, " ") == "TEE ") // TODO string matching happening with extra space in the end - fix this
        {
            // current_section = "tee";
            var tee_row = all_trs[i];
            all_trs[i].style.cursor = "pointer"; //shallow copy changes the original copy .... why?
            all_trs[i].setAttribute("checked_datainternal", false);
            all_trs[i].className = "section_header";
            all_trs[i].onclick = function() {
                all_current_checkboxes = document.getElementsByClassName("tee");

                if (this.getAttribute("checked_datainternal") == "false") {
                    for (j = 0; j < all_current_checkboxes.length; j++) {
                        all_current_checkboxes[j].checked = true;
                        all_current_checkboxes[j].parentNode.parentNode.parentNode.style.backgroundColor = "white";
                        all_current_checkboxes[j].parentNode.parentNode.parentNode.setAttribute("checked_datainternal", true);
                    }
                    this.setAttribute("checked_datainternal", true);
                } else if (this.getAttribute("checked_datainternal") == "true") {
                    for (j = 0; j < all_current_checkboxes.length; j++) {
                        all_current_checkboxes[j].checked = false;
                        all_current_checkboxes[j].parentNode.parentNode.parentNode.style.backgroundColor = "";
                        all_current_checkboxes[j].parentNode.parentNode.parentNode.setAttribute("checked_datainternal", false);
                    }
                    this.setAttribute("checked_datainternal", false);
                }

            }
        }
    }
}

// making the first row of the course_material_table select all links when clicked

all_trs[0].style.cursor = "pointer";
//initially in the unclicked state
all_trs[0].setAttribute("checked_datainternal", false);
all_trs[0].className = "section_header_top";
//onclick function for the first row (to check all links)
all_trs[0].onclick = function() {
    all_current_checkboxes = course_material_table.querySelectorAll('input[name=downloadSelect]');

    //if checked unselect all links plus change background of all rows in the course_material_table
    if (this.getAttribute("checked_datainternal") == "false") {
        for (j = 0; j < all_current_checkboxes.length; j++) {
            all_current_checkboxes[j].checked = true;
            all_current_checkboxes[j].parentNode.parentNode.parentNode.style.backgroundColor = "white";
            all_current_checkboxes[j].parentNode.parentNode.parentNode.setAttribute("checked_datainternal", true);

        }
        this.setAttribute("checked_datainternal", true); //change the checked state of the the top row  
        cat1_row.setAttribute("checked_datainternal", true);
        cat2_row.setAttribute("checked_datainternal", true);
        tee_row.setAttribute("checked_datainternal", true);
    } else if (this.getAttribute("checked_datainternal") == "true") {
        for (j = 0; j < all_current_checkboxes.length; j++) {
            all_current_checkboxes[j].checked = false;
            all_current_checkboxes[j].parentNode.parentNode.parentNode.style.backgroundColor = "";
            all_current_checkboxes[j].parentNode.parentNode.parentNode.setAttribute("checked_datainternal", false);

        }
        this.setAttribute("checked_datainternal", false); //change the checked state of the the top row
        cat1_row.setAttribute("checked_datainternal", false);
        cat2_row.setAttribute("checked_datainternal", false);
        tee_row.setAttribute("checked_datainternal", false);
    }
}

//adding hover property to section headers and rows
var css = '.section_header:hover{ background-color: #dbd5bd;} .section_header_top:hover { background-color: #536d83;} .individual_row:hover { background-color: #e7e3d3;} .individual_row[checked_datainternal="true"]:hover { background-color: #F7F5F0 !important;}';
style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);



//injecting script to add on click event for the multi download button
var script = document.createElement("script");

var script_content = `

//document.getElementById("madeby").style.visibility = "visible"; 

var checkedBoxes = document.querySelectorAll('input[name=downloadSelect]:checked');
var links = [];
links_hash = {}; // TODO combine this and above variable
for (i = 0; i<checkedBoxes.length; i++)
{
    individual_link = [];
    individual_link.push(checkedBoxes[i].value);
    individual_link.push(checkedBoxes[i].getAttribute("class").split(" "));
    links.push(individual_link);

    links_hash[checkedBoxes[i].value] = checkedBoxes[i].getAttribute("class").split(" ");
    // links.push(checkedBoxes[i].value);
}

subject_name = document.getElementsByTagName("table")[1].getElementsByTagName("td")[9].innerText;
teacher_name = document.getElementsByTagName("table")[1].getElementsByTagName("td")[11].innerText;

window.postMessage({links: links, subject: subject_name, teacher: teacher_name, links_hash: links_hash}, '*');

//uncheck everything
all_rows = document.querySelectorAll('[checked_datainternal]');
all_input_checkboxes = document.querySelectorAll('input[name=downloadSelect]');

for (i=0; i<all_rows.length; i++){
    all_rows[i].setAttribute("checked_datainternal", false);
    all_rows[i].style.backgroundColor = "";
}

for (i=0; i<all_input_checkboxes.length; i++){
    all_input_checkboxes[i].checked = false;
}
console.log("Download initiated");
`

var script_content_2 = `
window.addEventListener('keypress', function(e){
    if (e.shiftKey &&  e.keyCode == 77) {
        multiDownload_click();
    }
}, false);

window.addEventListener('keypress', function(e){
    if (e.shiftKey &&  e.keyCode == 65) {
            container_table = document.getElementsByTagName("table")[0];  //the outer most table holding the rest of thce tables
            content_tables = container_table.getElementsByTagName("table");
            course_material_table = content_tables[content_tables.length - 1];
            all_trs = course_material_table.getElementsByTagName("tr");

            var a = all_trs[0];

            a.click();
    }
}, false);
`

script.textContent = "function multiDownload_click(){\n" + script_content + "};" + script_content_2;

(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);




// injecting html for the multi download button
var button = document.createElement("input");

var att = document.createAttribute("type");
att.value = "button";
button.setAttributeNode(att);

var att = document.createAttribute("class");
att.value = "submit2";
button.setAttributeNode(att);

var att = document.createAttribute("name");
att.value = "multiDownload";
button.setAttributeNode(att);

var att = document.createAttribute("value");
att.value = "multiDownload";
button.setAttributeNode(att);

var att = document.createAttribute("onclick");
att.value = "multiDownload_click()";
button.setAttributeNode(att);

var att = document.createAttribute("style");
att.value = "cursor: pointer; cursor: hand;";
button.setAttributeNode(att);


// var madeby = document.createElement("p");

// madeby.style.visibility = "hidden";

// var att = document.createAttribute("id");       
// att.value = "madeby";                          
// madeby.setAttributeNode(att); 

// madeby.innerHTML = "<a target='_blank' href='https://github.com/namitjuneja/multiDownloader'>MultiDownloader</a>";


// document.getElementsByName("coursepage")[0].parentNode.appendChild(madeby)
document.getElementsByName("courseplan")[0].appendChild(button)

// //add settings button
// var settings_button = document.createElement("h4");
// settings_button.setAttribute("id", "settings_button");       
// settings_button.innerText = "multiDownloader settings";

// all_brs = document.getElementsByTagName("br");
// document.getElementsByName("coursepage")[0].parentNode.insertBefore(settings_button, all_brs[all_brs.length - 1]);

// // document.getElementsByName("coursepage")[0].parentNode.insertBefore(settings_button, document.getElementsByName("coursepage")[0]);

// var css = '#settings_button { margin-top: 3px; float: right; margin-right: 27px; font-style: normal; color: #888; font-weight: 100; letter-spacing: 1px; }',
//     head = document.head || document.getElementsByTagName('head')[0],
//     style = document.createElement('style');

// style.type = 'text/css';
// if (style.styleSheet){
//   style.styleSheet.cssText = css;
// } else {
//   style.appendChild(document.createTextNode(css));
// }

// head.appendChild(style);


// getting checked urls from injected code to the background script
window.addEventListener('message', function(event) {
    // Only accept messages from same frame
    if (event.source !== window) {
        return;
    }

    var message = event.data;

    // Only accept messages that we know are ours
    if (typeof message !== 'object' || message === null || !message.links) {
        return;
    }

    chrome.runtime.sendMessage(message);
    // console.log(message.links);
});



console.log("Made with ♥ by Namit Juneja");




// TODO
//define function for background color chnage of rows