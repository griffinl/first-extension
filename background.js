/*(function() {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = 'https://ssl.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-61162145-1']);
_gaq.push(['_trackPageview']);
_gaq.push(['_trackEvent', 'du_deal', t,manifestData.version]);
*/


var Test = {

	init : function() {
		var self = this;
		var manifestData = chrome.app.getDetails();
		
		chrome.runtime.onMessage.addListener(function(request, sender,
				sendResponse){
			var domain = document.domain;
			if ('baidu.com' == domain && request.message === 'load') {
				sendResponse("ok success");
			}

		});
	}
};



Test.init();

