// for Google Maps

/*
forkした場合、各自APIKEYを取得して、下記のAPI_KEYを書き換えて使用してください

APIKEY取得先、Google APIs
https://console.developers.google.com/projectselector/apis/credentials

*/

var API_KEY = "AIzaSyA8A1NUN36Ch1kWPv6w2x_nx6JncW7VSwQ";

var loadLocalAPI = function() {
	var apiurl = "https://maps.google.com/maps/api/js?key=" + API_KEY + "&language=" + getLanguage2();
	document.write('<' + 'script src="' + apiurl + '"' + ' type="text/javascript"><' + '/script>');
};
