// Send a message to the extension
let extensionId = "niabohgmmladbgipommcolmbobckcjjk"; // Replace with your actual extension ID

// Send a message to the extension
chrome.runtime.sendMessage(extensionId, { message: "This is a sample test message from the web app" }, function(response) {
  if (chrome.runtime.lastError) {
    console.error("Error sending message to extension:", chrome.runtime.lastError);
  } else {
    console.log("Message sent to extension:", response);
  }
});
