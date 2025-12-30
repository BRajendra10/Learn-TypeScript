# Learn-TypeScript
This repo is created for learnings of my typescript from chai aur code / chai aur typescript. 

---

# TS - Practice Questions

⚠️ **Rule while practicing**

* Do NOT use `any` unless the question allows it
* Let TypeScript give errors → learn from them
* Think “what type should this be?” before writing code

---

# 1️⃣ Types & Inference — Practice Questions

1. Declare a variable where TypeScript **infers** the type automatically. Try reassigning a wrong type.
2. Create a variable that can hold **only** a number initially, then refactor it using inference.
3. Declare a variable using `unknown` and safely access it as a string.
4. What happens if you try to call a string method on `unknown`?
5. Create a function that returns nothing. What type should it have?
6. Create a variable that should **never** have a value.

---

# 2️⃣ Objects & Functions — Practice Questions

7. Create an object type for a user with required and optional properties.
8. Make one property read-only and try modifying it.
9. Write a function that accepts an object and returns a formatted string.
10. Write a function with optional parameters.
11. Write a function with a default parameter.
12. Write a function that returns either a string or a number based on input.

---

# 3️⃣ Arrays, Tuples & Unions — Practice Questions

13. Create an array that allows only numbers.
14. Create an array of objects with strict typing.
15. Create a union type for an ID that can be a number or string.
16. Restrict a variable to accept only `"loading" | "success" | "error"`.
17. Create a tuple representing an API response.
18. Try pushing extra values into a tuple — observe behavior.

---

# 4️⃣ Type Narrowing — Practice Questions

19. Write a function that accepts `string | number` and behaves differently for each.
20. Use `typeof` to narrow types inside a function.
21. Create two object types and narrow them using the `in` operator.
22. Write a custom type guard function.
23. Handle a value of type `unknown` safely.

---

# 5️⃣ Interfaces vs Types — Practice Questions

24. Create the same object shape using both `interface` and `type`.
25. Extend an interface and reuse it.
26. Create a union type using `type` and explain why interface cannot do it.
27. Use interface for an API response structure.
28. Decide where `type` is better than `interface` and why.

---

# 6️⃣ Generics — Practice Questions

29. Write a generic function that returns the same value passed to it.
30. Create a generic interface for API responses.
31. Use generics with arrays.
32. Add constraints to a generic type.
33. Write a function that works for strings and arrays using generics.
34. Compare a generic function vs `any`.

---

# 7️⃣ Utility Types — Practice Questions (IMPORTANT)

Assume this base type:

```ts
type User = {
  id: number
  name: string
  email: string
  password: string
}
```

35. Create a type for updating a user.
36. Create a type for sending user data to frontend.
37. Create a type that only includes `id` and `name`.
38. Make all properties required.
39. Make the user object read-only.
40. Create a role → permissions mapping type.

---

# 8️⃣ React + TypeScript — Practice Questions

41. Type props for a React component.
42. Add optional props and default values.
43. Type children properly.
44. Type `useState` for a number.
45. Type `useState` for an array of objects.
46. Type an input change event.
47. Type a button click event.

---

# 9️⃣ API Typing — Practice Questions

48. Create a type for API success response.
49. Create a type for API error response.
50. Write a generic API response type.
51. Type a fetch function return value.
52. Type an async function properly.
53. Ensure API response cannot include password.
54. Handle loading, success, and error states using types.

---

# 🔥 CHALLENGE QUESTIONS (Advanced Thinking)

55. Prevent a function from accepting empty strings.
56. Restrict object keys using literal types.
57. Create a type-safe config object.
58. Derive a new type from an existing type.
59. Prevent mutation of critical data.
60. Design types that represent frontend UI state.

---

## HOW TO PRACTICE (Best Method)

1. Pick **1 topic per day**
2. Solve **5–8 questions**
3. Don’t rush — read TS errors
4. Refactor bad typings
5. Revisit after 7 days

---
