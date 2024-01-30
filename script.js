// Connect to the extension and send a sample test message
let port = chrome.runtime.connect({ name: "sampleConnection" });
port.postMessage({ message: "This is a sample test message from the web app" });

// Listen for messages from the extension
port.onMessage.addListener(function(msg) {
  console.log("Message received from extension:", msg);
});

// Optionally, handle disconnection from the extension
port.onDisconnect.addListener(function() {
  console.log("Port disconnected");
});
