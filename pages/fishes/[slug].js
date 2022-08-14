import Image from "next/image";
import Fishes from "../../models/Fishes";
import Layout from "../../components/Layout";
import db from "../../utils/db";

export default function ProductScreen(props) {
  const { fish } = props;

  return (
    <Layout title={fish.nombre}>
      <div className="relative z-20 overflow-hidden py-20 px-10">
        <div className="h-[50rem] w-[50rem] bg-gradient-to-r from-blue-900 to-blue-200 rounded-full absolute left-2/3 top-5 transform rotate-160 -z-10"></div>
        <div className="h-[50rem] w-[50rem] bg-gradient-to-r from-purple-400 via-violet-900 to-violet-500 rounded-full absolute -bottom-80 -left-1/2 transform rotate-180 -z-10"></div>
        <div className="z-50">
          <div className="grid md:grid-cols-4 card">
            <div className="md:col-span-2 flex  flex-col justify-center gap-6">
              <h1 className="text-xl font-bold">{fish.nombre}</h1>
              <ul className="flex flex-col gap-2">
                <li>PH: {fish.ph}</li>
                <li>GH: {fish.gh}</li>
                <li>KH: {fish.kh}</li>
                <li>Longitud: {fish.longitud}</li>
              </ul>
            </div>
            <div className="md:col-span-2 -order-1 mt-4 mb-10 md:order-1">
              <Image
                className="rounded-img"
                src={fish.imagen}
                alt={fish.nombre}
                width={440}
                height={440}
                objectFit="cover"
                priority
              ></Image>
            </div>
          </div>
          <div className="flex flex-col gap-10 mt-10 card">
            <div>
              <h1 className="text-lg font-bold mb-4">Descripción</h1>
              <p>{fish.descripcion}</p>
            </div>
            <div>
              <h1 className="text-lg font-bold mb-4">Dimorfismo sexual</h1>
              <p>{fish.dimorfismo}</p>
            </div>
            <div>
              <h1 className="text-lg font-bold mb-4">Alimentación</h1>
              <p>{fish.alimentacion}</p>
            </div>
            <div className="pb-8">
              <h1 className="text-lg font-bold mb-4">Compatibilidad</h1>
              <p>{fish.compatibilidad}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const fish = await Fishes.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      fish: fish ? db.convertDocToObj(fish) : null,
    },
  };
}
