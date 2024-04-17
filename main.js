// Test to see if it works
// Propmts when you visit a new url
console.log("The test is up and running!"); 

let images = document.getElementsByTagName('img');

for (elt of images) {
    elt.src = `${browser.runtime.getUrl("test.jpg")}`
    elt.alt = `an alt text`
}
