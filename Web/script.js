console.log("Hello, World from script.js!");

window.addEventListener("load", () => {
    console.log("The page has fully loaded.");
    window.setInterval(() => {
        console.log("This message will be logged every 5 seconds.");
        fetch("button.cgi").then(response => {console.log("Response received!"); return response.text()}).then(data => {
            console.log("Response from button.cgi:", data);
        }).catch(error => {
            console.error("Error fetching button.cgi:", error);
        });
    }, 5000);
});