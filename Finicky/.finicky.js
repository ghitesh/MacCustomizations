finicky.setDefaultBrowser('com.google.Chrome');



// Open Spotify links in client
finicky.onUrl(function(url, opts) {
  if (url.match(/^https?:\/\/open\.spotify\.com/)) {
    return {
      bundleIdentifier: "com.spotify.client"
    };
  }
});

// Rewrite all Bing links to DuckDuckGo instead
finicky.onUrl(function(url, opts) {
  var url = url.replace(
    /^https?:\/\/www\.bing\.com\/search/,
    "https://duckduckgo.com"
  );
  return {
    url: url
  };
});

// Always open links from Mail in Safari
finicky.onUrl(function(url, opts) {
  var sourceApplication = opts && opts.sourceBundleIdentifier;
  if (sourceApplication === "com.apple.mail") {
    return {
      bundleIdentifier: "com.apple.safari"
    };
  }
});

// By supplying an array of bundle identifiers, finicky opens the url in the first one
// that's currently running. If none are running, the first app in the array is started.
finicky.onUrl(function(url, opts) {

	//finicky.log ("It still came here?");
  return {
    bundleIdentifier: [
      "org.mozilla.firefox",
      "com.apple.Safari",
      "com.google.Chrome"
    ]
  };
});

// Open social network links in Google Chrome
finicky.onUrl(function(url, opts) {

  //finicky.log ("Got something");
  if (url.match(/^https?:\/\/.*(appleinc.webex)\.com/)) {
    //finicky.log ("Something Matched"+url); 
    return {
      bundleIdentifier: "com.apple.Safari"
    };
  }
});

// Open social network links in Google Chrome
finicky.onUrl(function(url, opts) {

  //finicky.log ("Got something");
  if (url.match(/^https?:\/\/.*(pagerduty|box|apple)\.com/)) {
    //finicky.log ("Something Matched"+url); 
    return {
      bundleIdentifier: "com.apple.Safari"
    };
  }
});