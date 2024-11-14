import Image from "next/image";
import { people } from "./lib/data";
import Form from "./components/form";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-y-5 text-center">
      <h1 className="text-3xl font-semibold">People</h1>
 
      <Form />

      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}
