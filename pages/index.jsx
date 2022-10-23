import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";
import { Hero } from "../components/Hero";
import { Logo } from "../components/Logo";
import Container from "../components/Container";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <>
      <Logo />
      <Button>Contact</Button>
      <Button>About</Button>
      <Button>Blog</Button>
      <Button>Work</Button>
    </>
  );
}
