var index_preference_default = true;
var exam_preference_default = false;

function saveOptions() {
	var index_checkbox = document.getElementById("index");
	var exam_checkbox = document.getElementById("exam");	

	localStorage["index_preference"] = JSON.stringify(index_checkbox.checked);
	// localStorage["exam_preference"] = JSON.stringify(exam_checkbox.checked);

	// chrome.storage.sync.set({'index_preference': JSON.stringify(index_checkbox.checked)});
	// chrome.storage.sync.set({'exam_preference': JSON.stringify(exam_checkbox.checked)});

	console.log(localStorage);
	console.log("If you are here ou might as well want to contribute!");
	console.log("Check out https://github.com/namitjuneja/multiDownloader");

}

function loadOptions() {
	document.getElementById("index").onclick = saveOptions;
	// document.getElementById("exam").onclick = saveOptions;

	var index_preference = localStorage["index_preference"];
	var exam_preference = localStorage["exam_preference"];

	//checking undefined
	if ((index_preference == undefined && exam_preference == undefined) && typeof(index_preference) !== "boolean" && typeof(exam_preference) !== "boolean") {
		index_preference = index_preference_default;
		exam_preference = exam_preference_default;
	}

	var index_checkbox = document.getElementById("index");
	var exam_checkbox = document.getElementById("exam");

	index_checkbox.checked = JSON.parse(index_preference);
	// exam_checkbox.checked = JSON.parse(exam_preference);

	console.log(localStorage);
}

window.onload = loadOptions;






