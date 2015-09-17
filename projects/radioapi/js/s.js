(function () {

    var RadioAPI = {};

    if (!window.RadioAPI) {
        window.RadioAPI = RadioAPI;
    }

    RadioAPI.getUser = function (userID, async, callBackSuccess, callBackError) {
        var userIDString = userID + '';
        while (userIDString.length < 5) {
            userIDString = '0' + userIDString;
        }

        var xmlhttp;

        callBackSuccess = callBackSuccess || function (a) {
                console.log(a);
            };

        callBackError = callBackError || function (a) {
                console.log(a);
            };

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        if (!async) {
            xmlhttp.open('GET', 'http://octav47.github.io/projects/radiohustle/ajax/' + userIDString + '.json', true);
            xmlhttp.send();

            if (xmlhttp.status == 200) {
                var ajaxResponse = JSON.parse(xmlhttp.response);
                ajaxResponse.story_classic = ajaxResponse.story_classic.replace(/<br><br>/gmi, ';');
                ajaxResponse.story_dnd = ajaxResponse.story_classic.replace(/<br><br>/gmi, ';');
                return ajaxResponse;
            }
            else if (xmlhttp.status == 400) {
                callBackError(xmlhttp);
            }
            else {
                callBackError(xmlhttp);
            }
        } else {
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                    if (xmlhttp.status == 200) {
                        var ajaxResponse = JSON.parse(xmlhttp.response);
                        callBackSuccess(ajaxResponse);
                    }
                    else if (xmlhttp.status == 400) {
                        callBackError(xmlhttp);
                    }
                    else {
                        callBackError(xmlhttp);
                    }
                }
            };

            xmlhttp.open('GET', 'http://octav47.github.io/projects/radiohustle/ajax/' + userIDString + '.json', false);
            xmlhttp.send();
        }
    }

})();