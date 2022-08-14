import Head from "next/head";
import Link from "next/link";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title : "Peces Tropicales"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav className="bg-slate-800">
          <div className="container flex items-center justify-between h-12 px-12 max-w-5xl mx-auto">
            <Link href="/">
              <a className="text-lg font-bold">INICIO</a>
            </Link>
            <Link href="/fishes">
              <a className="text-lg font-bold">PECES TROPICALES</a>
            </Link>
          </div>
        </nav>
      </header>
      <main className="relative">{children}</main>
    </>
  );
}
