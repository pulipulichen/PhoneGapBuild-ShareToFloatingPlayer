intent_handler = function (intent) {
    //alert("換了 可以嗎？");
    //window.OpenApplication("com.nianticlabs.pokemongo"); 
    var open = cordova.plugins.disusered.open;
    open('content://sdcard/Android/data/pgb_share_to_floating_player.pulipuli.info/files/apk.apk', alert, alert);
    //open('content://sdcard/Android/data/pgb_share_to_floating_player.pulipuli.info/files/img.jpg', alert, alert);
    return
    alert(JSON.stringify(intent));
    //navigator.app.exitApp();return;
    var url = "https://youtu.be/Ei0VPCe51DU";
    //alert(window.plugins.webintent.ACTION_MAIN);
    var _config = {
        //action: "android.intent.category.LAUNCHER",
        //action: window.plugins.webintent.ACTION_MAIN,
        action: "com.google.android.c2dm.intent.RECEIVE",
        //action: WebIntent.ACTION_MAIN,
        //url: "package://com.bimilyoncu.sscoderss.floatingplayerforyoutube",
        /*
        handler: { 
            packageName: 'com.bimilyoncu.sscoderss.floatingplayerforyoutube', 
            className:   'com.bimilyoncu.sscoderss.floatingplayerforyoutube.MainActivity' 
        }
        */
        //url: "package://com.bimilyoncu.sscoderss.floatingplayerforyoutube",
        //action: "package://com.nianticlabs.pokemongo",
        /*
        url: url,
        data: url,
        extras: {
            "query": url,
            "android.intent.extra.SUBJECT": url,
            "android.intent.extra.TEXT": url,
            "android.intent.extra.PROCESS_TEXT": url,
        }
        */
    };

    try {
        window.plugins.webintent.startActivity(_config,
                function () {
                    alert("finish")
                    navigator.app.exitApp();
                },
                function (e) {
                    alert("finish2 " + e) 
                    navigator.app.exitApp();
                }
        );
    } catch (e) {
        alert(e);
    }
    alert("ok 1159");
    return;
    // -----------------------------------------------------
    
    if (typeof (intent.action) === "string"
            && intent.action === "android.intent.action.MAIN") {
        // 沒有要檢索的東西，回家吧。
        //alert("空空");
        openActivity();
        navigator.app.exitApp();
        return;
    }

    var _search_items = [];

    var _has_string = function (_item) {
        return (typeof (_item) === "string"
                && _item.trim() !== "");
    };

    if (typeof (intent.extras) === "object") {
        var _extras = intent.extras;

        var _key_list = [
            "android.intent.extra.SUBJECT",
            "android.intent.extra.TEXT",
            "android.intent.extra.PROCESS_TEXT",
        ];

        for (var _i = 0; _i < _key_list.length; _i++) {
            if (_has_string(_extras[_key_list[_i]])) {
                _search_items.push(_extras[_key_list[_i]].trim());
            }
        }
        /*
         if (_has_string(_extras["android.intent.extra.SUBJECT"])) {
         _search_items.push(_extras["android.intent.extra.SUBJECT"].trim());
         }
         if (_has_string(_extras["android.intent.extra.TEXT"])) {
         _search_items.push(_extras["android.intent.extra.TEXT"].trim());
         }
         if (_has_string(_extras["android.intent.extra.PROCESS_TEXT"])) {
         _search_items.push(_extras["android.intent.extra.PROCESS_TEXT"].trim());
         }
         */
    }

    var _test_url = _search_items.join(" ");
    _test_url = _test_url.split("\n").join(" ");
    var _url_list = [];

    var _http_list = _test_url.split("http://");
    for (var _i = 1; _i < _http_list.length; _i++) {
        var item = _http_list[_i];
        var pos = item.indexOf(" ");
        if (pos === -1) {
            pos = item.indexOf("\n");
        }
        if (pos === -1) {
            pos = item.length;
        }
        _url_list.push("http://" + item.substring(0, pos));
    }

    var _https_list = _test_url.split("https://");
    for (var _i = 1; _i < _https_list.length; _i++) {
        var item = _https_list[_i];
        var pos = item.indexOf(" ");
        if (pos === -1) {
            pos = item.indexOf("\n");
        }
        if (pos === -1) {
            pos = item.length;
        }
        _url_list.push("https://" + item.substring(0, pos));
    }

    //alert(JSON.stringify(_url_list));
    if (_url_list.length > 0) {
        for (var i = 0; i < _url_list.length; i++) {
            //setTimeout(function () {
            window.open(_url_list[i], "_system");
            //}, 0);
        }
        navigator.app.exitApp();
        return;

    }

    if (_search_items.length > 0) {
        if (_search_items.length === 1
                && (_search_items[0].startsWith("http://") || _search_items[0].startsWith("https://"))) {
            //alert(encodeURIComponent(_search_items[0]));
            window.open(_search_items[0], "_system");
            navigator.app.exitApp();
        } else {
            //var _url = "https://www.google.com/search?q=" + encodeURIComponent(_search_items.join(" "));
            //var _url = "android-app://com.google.android.googlequicksearchbox/" + encodeURIComponent(_search_items.join(" "));

            //window.open(_url, "_system");

            var _search_text = _search_items.join(" ");

            var _config = {
                //action: "android.app.SearchManager.INTENT_ACTION_GLOBAL_SEARCH",
                action: "android.intent.action.WEB_SEARCH",
                //data: _search_text,
                //uri: _search_text,
                //url: _search_text,
                //pacakge: "com.google.android.googlequicksearchbox",
                extras: {
                    "query": _search_text,
                }
            };

            try {
                window.plugins.webintent.startActivity(_config,
                        function () {
                            navigator.app.exitApp();
                        },
                        function () {
                            alert('Failed:' + JSON.stringify(_search_items.join(" "), null, 2));
                            navigator.app.exitApp();
                        }
                );
            } catch (e) {
                alert(e);
            }
        }
    }
    else {
        openActivity();
    }
    //alert([JSON.stringify(_search_items)
    //    , _search_items.length === 1
    //    , _search_items[0].startsWith("http://") 
    //    , _search_items[0].startsWith("https://")]);

    //navigator.app.exitApp();
};


openActivity = function () {
    var _config = {
        action: "android.intent.action.WEB_SEARCH",
        extras: {
            "query": "",
        }
    };

    try {
        window.plugins.webintent.startActivity(_config,
                function () {
                    navigator.app.exitApp();
                },
                function () {
                    navigator.app.exitApp();
                }
        );
    } catch (e) {
        alert(e);
    }
};

intent_handler()