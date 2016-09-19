// Copyright (c) 2016
// Use of this source code is governed by a BSD-style license
chrome.contextMenus.create({
    title: "DenDanskeOrdbog: '%s'",
    contexts: ["selection"],
    "onclick": getClickHandler()
});

/**
 * Returns a handler which will open a new window when activated.
 */
function getClickHandler() {
    return function(info, tab) {
        // The srcUrl property is only available for image elements.
        var url = 'http://ordnet.dk/ddo/ordbog?query=' + info.selectionText;

        // Create a new window to the info page.
        chrome.tabs.create({
            url: url,
            index: tab.index + 1
        });
    };
};
