# Type 'string' is not assignable to type 'number'

This repository demonstrates a common type error in TypeScript: assigning a string value to a variable with a numeric type.

## Problem

The `bug.ts` file contains a function that adds two numbers.  However, if you try to pass a string to this function, TypeScript will throw an error.

## Solution

The `bugSolution.ts` file demonstrates how to fix this error using type guards or by ensuring the input values are numbers before performing calculations. This prevents runtime errors and makes the code more robust.

## How to Run

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run the TypeScript compiler: `tsc bug.ts` and `tsc bugSolution.ts`
4. Run the compiled JavaScript files.
