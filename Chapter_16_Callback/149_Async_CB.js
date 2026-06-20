// 149_Async_CB.js
// Asynchronous callback example using setTimeout
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback({ value: 100 });
    }, 500);
}

fetchData(function (data) {
    console.log("Received:", data);
});
console.log("Test 1: started");

setTimeout(function () {
    console.log("Test 2 : API response received!")
}, 2000);

console.log("Test 3: Moving to next last");