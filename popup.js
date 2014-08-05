// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Search the bookmarks when entering the search keyword.
$(function() {
    $('#search').keyup(function(e){
        if(e.keyCode == 13) {
            var value = $('#search').val();
            var monhackURL = "http://monhack.com/" + value;
            chrome.tabs.create({ url: monhackURL });
        }
    });
});
