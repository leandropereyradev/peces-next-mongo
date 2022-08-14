import FishDef from "../components/FishDef";
import Layout from "../components/Layout";
import Fishes from "../models/Fishes";
import db from "../utils/db";

export default function FishesAll({ fishes }) {
  return (
    <Layout title={"Peces Tropicales"}>
      <div className="relative z-10 overflow-hidden px-10">
        <div className="h-[50rem] w-[50rem] lg:h-[70rem] lg:w-[70rem] bg-gradient-to-r from-blue-900 to-blue-200 rounded-full absolute left-[50%] -top-20 transform rotate-160 -z-[1]"></div>
        <div className="h-[50rem] w-[50rem] lg:h-[65rem] lg:w-[65rem] bg-gradient-to-r from-purple-600 via-violet-900 to-violet-500 rounded-full absolute -bottom-40 -left-1/2 transform rotate-180"></div>
        <h1 className="text-3xl font-semibold uppercase text-center mt-20 z-50">Peces tropicales</h1>
        <h1 className="text-3xl font-semibold uppercase text-center mt-6 z-50">para acuarios de agua dulce</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-20 pb-20">
          {fishes.map((fish) => (
            <FishDef fish={fish} key={fish.slug}></FishDef>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const fishes = await Fishes.find().lean();
  return {
    props: {
      fishes: fishes.map(db.convertDocToObj),
    },
  };
}
