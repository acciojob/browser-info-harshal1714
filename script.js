//your JS code here. If required.

// Get the reference to the browser-info element
const browserInfoElement = document.getElementById('browser-info');

// Get the browser name and version using the navigator object
const browserName = navigator.userAgent;
const browserVersion = navigator.appVersion;

// Create the message to be displayed
const message = "You are using " + browserName + " version " + browserVersion;

// Set the message as the content of the browser-info element
browserInfoElement.textContent = message;