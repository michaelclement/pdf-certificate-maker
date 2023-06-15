/**
* Top level component.
*/
import { ExampleInterface} from '../interfaces/exampleInterface';
import { useState } from 'react';

export default function App() {
  const [userId, setUserId] = useState(1); // Example state

  return (
    <div className="w-full flex flex-col justify-start">
      <h1 className="text-2xl text-zinc-900 border-b-2 border-zinc-300">
        Basic React App (TypeScript, Tailwind, Webpack)
      </h1>
    </div>
  );
}
