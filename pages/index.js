import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title={"Inicio"}>
      <div className="h-[90vh] bg-betta bg-cover bg-right container max-w-5xl mx-auto px-12">
        <h1 className="text-2xl uppercase pt-20">Práctica con</h1>
        <h1 className="text-5xl pt-10">NextJS - MongoDB Atlas</h1>
      </div>
    </Layout>
  );
}
