import { render, screen } from '@testing-library/react';
import FizzBuzz from './FizzBuzz.js';

test('should return the numbers passed to it, for numbers that are not 3n or 5n and do not contain 3', () => {
  expect(FizzBuzz(1)).toBe(1);
  expect(FizzBuzz(2)).toBe(2);
  expect(FizzBuzz(4)).toBe(4);
  expect(FizzBuzz(7)).toBe(7);
  expect(FizzBuzz(8)).toBe(8);
  expect(FizzBuzz(11)).toBe(11);
  expect(FizzBuzz(14)).toBe(14);
  expect(FizzBuzz(16)).toBe(16);
  expect(FizzBuzz(17)).toBe(17);
  expect(FizzBuzz(19)).toBe(19);
  expect(FizzBuzz(22)).toBe(22);
});

test('should return the word fizz if number is 3n but not if also 5n or containing 3', () => {
expect(FizzBuzz(6)).toBe("fizz");
  expect(FizzBuzz(9)).toBe("fizz");
  expect(FizzBuzz(12)).toBe("fizz");
  expect(FizzBuzz(18)).toBe("fizz");
  expect(FizzBuzz(21)).toBe("fizz");
  expect(FizzBuzz(24)).toBe("fizz");
});

test('should return the word buzz if number is 5n but not if also 3n or containing 3', () => {
  expect(FizzBuzz(5)).toBe("buzz");
  expect(FizzBuzz(10)).toBe("buzz");
  expect(FizzBuzz(20)).toBe("buzz");
  expect(FizzBuzz(25)).toBe("buzz");
});
test('should return the word buzz if number is 15n and does not contain 3', () => {
  expect(FizzBuzz(15)).toBe("fizzbuzz");
});
test('should return the word lucky if the number contains a 3', () => {
  expect(FizzBuzz(3)).toBe("lucky");
  expect(FizzBuzz(13)).toBe("lucky");  
  expect(FizzBuzz(23)).toBe("lucky");
  expect(FizzBuzz(30)).toBe("lucky");

});