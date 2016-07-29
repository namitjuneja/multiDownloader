(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // anonymous module.
        define([], factory.bind(null, typeof exports === 'object' ? this : root));
    } else if (typeof exports === 'object') {
        module.exports = factory(this);
    } else {
        // Browser globals (root is window)
        root.ChromePromise = factory(root);
    }
}(this, function(root) {
    'use strict';
    var push = Array.prototype.push,
        hasOwnProperty = Object.prototype.hasOwnProperty;

    return ChromePromise;


    function ChromePromise(chrome, Promise) {
        chrome = chrome || root.chrome;
        Promise = Promise || root.Promise;

        var runtime = chrome.runtime;

        fillProperties(chrome, this);


        function setPromiseFunction(fn, thisArg) {

            return function() {
                var args = arguments;

                return new Promise(function(resolve, reject) {
                    function callback() {
                        var err = runtime.lastError;
                        if (err) {
                            reject(err);
                        } else {
                            resolve.apply(null, arguments);
                        }
                    }

                    push.call(args, callback);

                    fn.apply(thisArg, args);
                });

            };

        }

        function fillProperties(source, target) {
            for (var key in source) {
                if (hasOwnProperty.call(source, key)) {
                    var val = source[key];
                    var type = typeof val;

                    if (type === 'object' && !(val instanceof ChromePromise)) {
                        target[key] = {};
                        fillProperties(val, target[key]);
                    } else if (type === 'function') {
                        target[key] = setPromiseFunction(val, source);
                    } else {
                        target[key] = val;
                    }
                }
            }
        }
    }
}));



subject_name = "";
teacher_name = "";
links_hash = {};
var re = /(?:\.([^.]+))?$/;


chrome.runtime.onMessage.addListener(

    function(request, sender, sendResponse) {
        chrome.promise = new ChromePromise();

        links = request.links;
        subject_name = request.subject;
        teacher_name = request.teacher;
        links_hash = request.links_hash;

        var download_error = false; //download error indicator
        var retry_count = 3; //number of times it retry's download incase the server returns error

        // console.log(request);
        for (i = 0; i < links.length; i++)
        // for (filename in links)
        // {  
        //       //petty hack
        //  var current_url = links[i][0];
        //  chrome.promise.downloads.download
        //  ({
        //    url: current_url, 
        //    conflictAction: 'overwrite'
        //  })
        //  .then(function(downloadId)
        //  {
        //    console.log(downloadId, "Download attempt 1");
        //    if (downloadId == undefined)
        //    {
        //      chrome.promise.downloads.download
        //      ({
        //        url: current_url,
        //        conflictAction: 'overwrite'
        //      })
        //      .then(function(downloadId)
        //      {
        //        console.log("Download attempt 2");
        //        if (downloadId == undefined)
        //        {
        //          chrome.promise.downloads.download
        //          ({
        //            url: current_url,
        //            conflictAction: 'overwrite'
        //          })
        //          .then(function(downloadId)
        //          {
        //            onsole.log("Download attempt 3");
        //            if (downloadId == undefined)
        //            {
        //              chrome.promise.downloads.download
        //              ({
        //                url: current_url,
        //                conflictAction: 'overwrite'
        //              })
        //            }
        //          })
        //        }
        //      })
        //    }
        //  });
        // }
        {
            var current_url = links[i][0];
            chrome.downloads.download({
                url: current_url,
                conflictAction: 'overwrite'
            }, function(downloadId) {
                console.log(downloadId, "<- DownloadId");
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
    if (getLocation(item.url).hostname == "vtop.vit.ac.in" || getLocation(item.url).hostname == "27.251.102.132") {
        // console.log(re.exec(item.filename)[1]);
        if (re.exec(item.filename)[1] != "asp") {
            // console.log("on file determine if not asp", item.filename);
            exam = links_hash[item.url][0];
            id = links_hash[item.url][1];

            var index_preference_default = true;
            var exam_preference_default = false;

            var index_preference = localStorage["index_preference"];
            var exam_preference = localStorage["exam_preference"];

            //checking undefined
            if ((index_preference == undefined && exam_preference == undefined) && typeof(index_preference) !== "boolean" && typeof(exam_preference) !== "boolean") {
                index_preference = index_preference_default;
                exam_preference = exam_preference_default;
                // console.warn("Failed to load user filename preferences");
                // console.warn("Using default preferences");
            } else {
                index_preference = JSON.parse(index_preference);
                exam_preference = JSON.parse(exam_preference);
            }



            if (!id) {
                id = "";
            } else {
                id = id + "_";
            }

            if (!exam) {
                exam = "";
            }

            if (links_hash[item.url][0] == "") {
                var cleaned_filename = item.filename.split("_").slice(2).join("_");;
                exam = "Others";
            } else {
                var cleaned_filename = item.filename.split("_").slice(4).join("_");
            }

            if (index_preference && exam_preference) {
                suggest({
                    conflictAction: 'overwrite',
                    filename: "VIT Course Material" + "/" + subject_name + "/" + teacher_name + "/" + exam + "/" + id + cleaned_filename
                });
                // console.log("index_preference", index_preference, " | exam_preference", exam_preference);
            } else if (!index_preference && exam_preference) {
                suggest({
                    conflictAction: 'overwrite',
                    filename: "VIT Course Material" + "/" + subject_name + "/" + teacher_name + "/" + exam + "/" + cleaned_filename
                });
                // console.log("index_preference", index_preference, " | exam_preference", exam_preference);
            } else if (index_preference && !exam_preference) {
                suggest({
                    conflictAction: 'overwrite',
                    filename: "VIT Course Material" + "/" + subject_name + "/" + teacher_name + "/" + id + cleaned_filename
                });
                // console.log("index_preference", index_preference, " | exam_preference", exam_preference);
            } else if (!index_preference && !exam_preference) {
                suggest({
                    conflictAction: 'overwrite',
                    filename: "VIT Course Material" + "/" + subject_name + "/" + teacher_name + "/" + cleaned_filename
                });
                // console.log("index_preference", index_preference, " | exam_preference", exam_preference);
            }

            // suggest({filename: "VIT Course Material"+ "/" + subject_name + "/" + teacher_name + "/" + id + "_" + cleaned_filename});
            // console.log(getLocation(item.url).hostname);
        } else {
            // console.log("on file determine IF asp", item.filename);
            downloadId = item.id;
            chrome.promise.downloads.cancel(downloadId)
                .then(function(downloadId) {
                    console.log("Callback: Session timed out. Download cancelled.");
                });
        }
    }

});




// chrome.runtime.onUpdateAvailable.addListener(function() {
//     var newURL = "pages/help.html";
//     chrome.tabs.create({
//         url: newURL
//     });
// });