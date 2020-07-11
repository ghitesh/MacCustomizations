// ~/.finicky.js

module.exports = {
  defaultBrowser: "Firefox",
  handlers: [
      {
      // Open apple.com and example.org urls in Safari
      match: ["www.1apple.com*", "example.org*"],
      browser: "Safari"
    },
    {
      
      // Open apple.com and example.org urls in Safari
      match: finicky.matchHostnames(["qapple.com" ]),
      browser: "Safari"

    },
    {
      match: ["amazon.in*"],
      browser: "Firefox"
    },
    {
      // Open google.com and *.google.com urls in Google Chrome
      match: [
        "apple.com*", // match google.com urls
        finicky.matchDomains(/.*\.apple.com/), // use helper function to match on domain only
        finicky.matchDomains(/.*(pagerduty|box|apple)\.com/)
      ],
      browser: "Safari"
    }
  ]
};
