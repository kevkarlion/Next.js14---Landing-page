import Image from "next/image";
import { Hero } from '../components/home/Hero'
import { Description } from "app/components/home/Description/Description";

export default function Home() {
  return (
    <main >
      <Hero />
      <h1>Hola mundo</h1>
      <Description />
    </main>
  );
}
