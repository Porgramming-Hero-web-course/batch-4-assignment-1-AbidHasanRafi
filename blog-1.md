## The Significance of Union and Intersection types in Typescript

TypeScript is a super useful tool that builds on JavaScript by adding **types** to your code. This helps prevent errors and makes your code easier to read. Today, we will learn about **Union Types** and **Intersection Types** in TypeScript, which help you deal with different kinds of data in flexible and safe ways.

### What Are Union Types?

A **Union type** allows a variable to have **multiple types**. For example, you can make a variable that can either be a `string` or a `number`. It’s like saying, "this variable can be one of two types."

#### Example: Simple Union Type

Let’s create a function that accepts a **string** or a **number** as input.

```typescript
function greet(input: string | number) {
  if (typeof input === "string") {
    return "Hello, " + input;
  } else {
    return "Hello".padStart(input, " ");
  }
}

console.log(greet("Alice"));
console.log(greet(5));
```

In this example:

- The `input` can be a **string** (like "Alice") or a **number** (like 5).
- If it’s a string, we greet the person by name.
- If it’s a number, we add that many spaces before the word "Hello".

The `string | number` syntax means that `input` can be either a string **or** a number.

#### Why Use Union Types?

Union types are helpful when you don’t know in advance what type of data you will get. For example, when working with user inputs, you might not always know if the user will provide a number or a string. The union type lets you handle both!

### What Are Intersection Types?

An **Intersection type** combines **multiple types** into one. This means an object will have all the properties from multiple types at once.

#### Example: Simple Intersection Type

Let’s combine two types: one for user information and one for contact information.

```typescript
interface User {
  name: string;
  age: number;
}

interface Contact {
  email: string;
  phone: string;
}

type UserContact = User & Contact;

const person: UserContact = {
  name: "John",
  age: 30,
  email: "john@example.com",
  phone: "123-456-7890",
};

console.log(person);
```

In this example:

- We created two types: `User` (which has `name` and `age`) and `Contact` (which has `email` and `phone`).
- The `UserContact` type combines them, meaning an object of this type must have all the properties from both `User` and `Contact`.

#### Why Use Intersection Types?

Intersection types are useful when you need a combination of properties from multiple types. For example, if you want a person to have both personal and contact information, you can use an intersection type to combine the two.

### Discriminated Unions (A Helpful Trick)

Sometimes, when using union types, we want to know which type is being used. TypeScript helps us with **discriminated unions**. This means we add a special field (like `type`) to tell us which type is currently in use.

#### Example: Network State with Discriminated Union

Let’s say we have three possible network states: `loading`, `failed`, and `success`. We can use a discriminated union to easily handle them.

```typescript
type LoadingState = { status: "loading" };
type FailedState = { status: "failed"; errorMessage: string };
type SuccessState = { status: "success"; data: string };

type NetworkState = LoadingState | FailedState | SuccessState;

function handleNetworkState(state: NetworkState) {
  if (state.status === "loading") {
    console.log("Loading...");
  } else if (state.status === "failed") {
    console.log("Error: " + state.errorMessage);
  } else {
    console.log("Success: " + state.data);
  }
}

handleNetworkState({ status: "loading" });
handleNetworkState({ status: "failed", errorMessage: "Network error" });
handleNetworkState({ status: "success", data: "Data received" });
```

In this example:

- We define three types: `LoadingState`, `FailedState`, and `SuccessState`.
- The `NetworkState` type is a **union** of these three.
- In the `handleNetworkState` function, we check the `status` to see what kind of state we are dealing with and then handle it accordingly.

#### Why Use Discriminated Unions?

Discriminated unions are helpful when you need to work with different types that share a common field (like `status`). This makes it easier to safely check and handle each type.

**Union types** and **Intersection types** are powerful tools in TypeScript that help you manage different kinds of data more flexibly and safely.

#### Key Takeaways:

- **Union Types**: Use when a variable can have more than one type (e.g., `string | number`).
- **Intersection Types**: Use when you want to combine multiple types into one (e.g., `User & Contact`).
- **Discriminated Unions**: Use to handle different types that share a common field (like `status` in the network example).

With these features, you can write cleaner, safer, and more flexible code that can handle various types of data without errors.
