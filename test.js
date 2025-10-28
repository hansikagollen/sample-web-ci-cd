const greet = require('./app');
if (greet("GitLab") === "Hello, GitLab!") {
  console.log("✅ Test Passed");
  process.exit(0);
} else {
  console.log("❌ Test Failed");
  process.exit(1);
}
