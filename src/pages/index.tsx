// COMPONENTS
import Main from "@/components/homepage/main";
import Head from "next/head";


export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <main className="overflow-x-hidden">
      <Main />
    </main>
    </>
  );
}
