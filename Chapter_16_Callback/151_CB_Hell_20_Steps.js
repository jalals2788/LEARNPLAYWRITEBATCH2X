// 151_CB_Hell_20_Steps.js
// Long nested callback chain for demonstration purposes
function nextStep(stepNumber, callback) {
  setTimeout(() => {
    console.log(`Step ${stepNumber}`);
    callback(stepNumber + 1);
  }, 100);
}

nextStep(1, s1 => {
  nextStep(s1, s2 => {
    nextStep(s2, s3 => {
      nextStep(s3, s4 => {
        nextStep(s4, s5 => {
          console.log("Reached step 5 — more nesting available...");
        });
      });
    });
  });
});
