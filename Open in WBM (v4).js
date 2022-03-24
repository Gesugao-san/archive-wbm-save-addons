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
        console.log('[' + arr[i][0] + '] = ' + arr[i][1]);
    }
    var txt = document.createTextNode("console.log('Content-Security-Policy inserted');");
    scrp.appendChild(txt);
    document.head.appendChild(scrp);

    /*$.ajax ( {
    type:       'GET',
    url:        'https://api.stackexchange.com/2.1/users/621338?site=stackoverflow&filter=!)2R0ltXnW6.fyPDiHJm',
    dataType:   'JSON',
    success:    function (apiJson) {
        var resultObj = apiJson.items[0];
        alert (
              'User ' + resultObj.display_name
            + ' has accept rate of ' + resultObj.accept_rate + '%.'
        );
    }
    } );
    var value = 123;*/
    $.ajax ( {
    type:       'POST',
    url:        'https://web.archive.org/save',
    //dataType:   'JSON',
    //contentType: 'application/x-www-form-urlencoded',
    xhrFields: { withCredentials: true },
    withCredentials: true,
    success:    function () {
        alert (
              'Ok.'
        );
    },
    error:    function () {
        alert (
              'Error.'
        );
    },
    } );

    // Your code here...
})();