// ==UserScript==
// @name         Open in WBM (v4)
// @namespace    https://gist.github.com/Gesugao-san/aa6c84ba16d01fc12b176e7e03799de9
// @version      0.1
// @description  try to take over the world!
// @author       Gesugao-san
// @match        https://stackoverflow.com/questions/28833403/jquery-ajax-sending-post-with-values-from-inputs-with-tampermonkey
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
	'use strict';

	let arr = [
		['Content-Security-Policy', 'form-action *'],
		['Access-Control-Allow-Origin', '*']
	];

	// <meta http-equiv="Content-Security-Policy" content="form-action 'none'">
	// <meta http-equiv="Content-Security-Policy" content="form-action 'self'">
	var scrp;
	for (let i = 0; i < arr.length; i++) {
		scrp = document.createElement('meta');
		scrp.httpEquiv = arr[i][0];
		scrp.content = arr[i][1];
		//console.log('[' + arr[i][0] + '] = ' + arr[i][1]);
		console.log(scrp);
		document.head.appendChild(scrp);
	}
	//var txt = document.createTextNode("console.log('Content-Security-Policy inserted');");
	//scrp.appendChild(txt);

	/*$.ajax ( {
	type:     'GET',
	url:    'https://api.stackexchange.com/2.1/users/621338?site=stackoverflow&filter=!)2R0ltXnW6.fyPDiHJm',
	dataType:   'JSON',
	success:  function (apiJson) {
		var resultObj = apiJson.items[0];
		alert (
				'User ' + resultObj.display_name
			+ ' has accept rate of ' + resultObj.accept_rate + '%.'
		);
	}
	} );
	var value = 123;*/
	//var formData = document.createElement("form");
	let formData = new FormData();
	formData.set('web-save-url-input', window.location.href);
	formData.set('capture_outlinks', true); // Save outlinks
	formData.set('capture_all', true); // Save error pages (HTTP Status=4xx, 5xx)
	formData.set('capture_screenshot', true); // Save screen shot
	formData.set('wm-save-mywebarchive', true); // Save also in my web archive
	formData.set('email_result', true); // Please email me the results

	$.ajax({
		type: 'POST',
		url: 'https://web.archive.org/save',
		data: {'web-save-url-input': window.location.href},
		//data: formData,
		//dataType: 'JSON',
		//contentType: 'application/x-www-form-urlencoded',
		//xhrFields: { withCredentials: true },
		//withCredentials: true,
		cache: false,
		dataType: "html",
		async: true,
		crossDomain: true,
		headers: {
			accept: "text/html",
			"Access-Control-Allow-Origin": window.location.origin + " https://web.archive.org https://archive.org/", // "*"
			'Access-Control-Allow-Methods': 'GET, POST, PUT',
			'Content-Type': 'application/x-www-form-urlencoded'
			//'Content-Type': 'text/html'
		},
		success: function (response) {
			console.log('Ok.');
			//response = $(response);
			//response = $('#text'); //.serialize();
			//response = $('#content'); //.html();

			/*var temp = document.createElement('div');
			temp.innerHTML = response;
			response = temp.firstChild;*/

			//var mytag = $('<h2></h2>').html(response);
			//response = $('spn-title', mytag);
			console.log(response); //.getElementById("spn-title"));
		},
		error: function (response) {
			console.log('Error.');
			console.log(response);
		},
	}).done(function() {
		console.log('Done.');
	});

	// Your code here...
})();
