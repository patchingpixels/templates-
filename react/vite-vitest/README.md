# Steps to setup

## install
- vitest
- jsdom
- @testing-library
  - react
  - jest-dom
  - user-event

## update tsconfig.app.json
  add the following types
  ```
  "types": ["vitest/globals","@testing-library/jest-dom"]
  ```

## add test to script
  ```
  "test": "vitest"
  ```

## add test setup
```
import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "vitest";
expect.extend(matchers);

afterEach(() => {
  cleanup();
});
```