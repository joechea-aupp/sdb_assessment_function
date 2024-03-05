const fullName = require("./exercise_1_full_name");
const celsiusToFahrenheit = require("./exercise_2_weather_conversion");
const userInfo = require("./exercise_3_function_in_object");
const multiplyByTwo = require("./exercise_4_arrow_function");
const canVote = require("./exercise_5_iternary_operator");

// test exercise_1_full_name.js
test("fullName function should return full name", () => {
  expect(fullName("John", "Doe")).toBe("John Doe");
  expect(fullName("John", "Doe")).not.toBe("JohnDoe");
  expect(fullName("John", "Doe")).not.toBe("John  Doee");
});

// test exercise_2_weather_conversion.js
test("celsiusToFahrenheit function should return temperature in Fahrenheit", () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
  expect(celsiusToFahrenheit(0)).not.toBe(33);
});

// test exercise_3_function_in_object.js
test("userInfo object should return true if user is old enough to vote", () => {
  expect(userInfo.canVote()).toBe(false);
  expect(userInfo.canVote()).not.toBe(true);
});

// test exercise_4_arrow_function.js
test("multiplyByTwo function should return number multiplied by 2", () => {
  expect(multiplyByTwo(2)).toBe(4);
  expect(multiplyByTwo(2)).not.toBe(5);
});

// test exercise_5_iternary_operator.js
test("canVote function should return true if user is old enough to vote", () => {
  expect(canVote(17)).toBe(false);
  expect(canVote(17)).not.toBe(true);
});
