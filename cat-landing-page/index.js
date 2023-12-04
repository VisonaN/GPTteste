// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cat Paradise</title>
        <meta name="description" content="Discover the wonderful world of cats!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Cat Paradise!</h1>
        <p>Explore the fascinating universe of cats and find adorable photos, interesting facts, and more.</p>
        <img src="/cat.jpg" alt="Cute Cat" />
      </main>

      <footer>
        <p>&copy; 2023 Cat Paradise. All rights reserved.</p>
      </footer>
    </div>
  );
}
