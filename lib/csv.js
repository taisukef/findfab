// util
var jsonp = function(url) {
	var head = document.getElementsByTagName("head")[0];
   	var script = document.createElement("script");
    script.setAttribute("src", url);
    script.setAttribute("type", "text/javascript");
//	script.setAttribute("id", 'jsonp');
	head.appendChild(script);
};
var convertCSVtoArray = function(s) {
	var lines = s.split("\n");
	var res = [];
	for (var i = 0; i < lines.length; i++) {
		var ar = lines[i].split(",");
		res.push(ar);
	}
	return res;
};
var getJSON = function(url, callback, enc) {
	if (url.endsWith(".csv")) {
		getRawJSON(url, enc ? enc : "SJIS", function(csv) {
			callback(convertCSVtoArray(csv));
		});
	} else if (url.endsWith(".xml")) {
		getXMLJSON(url, callback);
	} else {
		alert("not support type : " + url);
	}
};
var getCSV = function(url, callback, enc) {
	getRawJSON(url, enc ? enc : "SJIS", function(csv) {
		callback(convertCSVtoArray(csv));
	});
};
var getXMLJSON = function(url, callback) {
	var host = "sabae.club";
	var cnv = "xml2json";
	var base = "http://" + host + "/proxy/ITqT5WkhCf2yn1s9?cnv=" + cnv;
	var url2 = base + "&cache=no&callback=" + getCallbackMethod(callback) + "&url=" + encodeURI(url);
	jsonp(url2);
};
var getRawJSON = function(url, srcenc, callback) {
	var host = "sabae.club";
	var cache = "no";
	var base = "http://" + host + "/proxy/ITqT5WkhCf2yn1s9?";
	var url2 = base + "cnv=json&srcenc=" + srcenc + "&cache="  + cache + "&callback=" + getCallbackMethod(callback) + "&url=" + encodeURIComponent(url);
	jsonp(url2);
};
