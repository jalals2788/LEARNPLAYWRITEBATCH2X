// 120_Search_Check_Str.js
// String search and check examples
let text = "LearnPlaywright is fun and powerful.";
console.log("Index of 'fun':", text.indexOf("fun"));
console.log("Last index of 'and':", text.lastIndexOf("and"));
console.log("Contains 'powerful'?:", text.includes("powerful"));
// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// incudes
console.log(url.includes("staging"));
console.log(url.includes("production"));

// startsWith / endsWith
url.startsWith("https"); // true
url.startsWith("http://");  //fasle
url.endsWith("true");  // true


// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

console.log(url.indexOf("nothere"));
console.log(url.indexOf("x"));

//
console.log(url.search(/login/));
console.log(url.search(/vwo/));

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 

