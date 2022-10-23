import Head from "next/head";
import Button from "../components/Button";
import { Hero } from "../components/Hero";
import { Logo } from "../components/Logo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center h-screen bg-slate-100">
        <div className="flex flex-col bg-white w-[90vw] h-[90vh] items-center justify-center rounded-lg shadow-lg shadow-slate-500">
          <Logo />
          <Button>About</Button>
          <Button>Contact</Button>
          <Button>Blog</Button>
          <Button>Works</Button>
        </div>
      </main>
    </div>
  );
}
