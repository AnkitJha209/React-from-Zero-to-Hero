# React Components and Props Guide

## Components

### **Components are reusable building blocks in React. They can be created in two ways:**

### 1. Function Components
Simple JavaScript functions that accept props as an argument and return JSX to render UI.

```jsx
// Basic Function Component
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Arrow Function Component
const Button = () => {
  return <button>Click me</button>;
}
```

### 2. Class Components

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
```

## Props

Props allow you to pass data between components.

### Basic Props Usage

```jsx
// Parent Component
function App() {
  return (
    <div>
      <Welcome name="John" age={25} />
      <Welcome name="Jane" age={30} />
    </div>
  );
}

// Child Component
function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
    </div>
  );
}
```

### Props with Destructuring

```jsx
// Cleaner way using destructuring
function Welcome({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}
```

### Default Props

```jsx
function Button({ text = "Click me", color = "blue" }) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}
```

### Props with Children

```jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// Usage
<Card title="Welcome">
  <p>This is the content inside the card.</p>
</Card>
```

## Best Practices

1. Start component names with capital letters
2. Keep components focused on a single purpose
3. Use destructuring for cleaner props handling
4. Give meaningful names to components and props
