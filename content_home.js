var stud_login = document.querySelectorAll("a[href='https://vtop.vit.ac.in/student/stud_login.asp']")[0];
var parent_login = document.querySelectorAll("a[href='https://vtop.vit.ac.in/parent/parent_login.asp']")[0];
stud_login.removeAttribute("target");
parent_login.removeAttribute("target");

stud_login.focus();
