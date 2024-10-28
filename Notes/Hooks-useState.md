# React Hooks

## What is a Hook?
Hooks are functions that allow you to "hook into" React state and lifecycle features from function components. They let you use state and other React features without writing a class component.

## useState Hook
`useState` is a Hook that lets you add React state to function components. It returns an array with two values:
1. Current state value
2. Function to update that value

## Counter Example
```jsx
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
```

### Example Breakdown:
- `const [count, setCount] = useState(0)`: 
  - `count`: Current state value
  - `setCount`: Function to update count
  - `0`: Initial state value
- `onClick={() => setCount(count + 1)}`: Updates state when button is clicked
