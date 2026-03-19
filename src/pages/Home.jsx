import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome Bharath 👋</h1>
      <p>This is your React starter project</p>

      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default Home;