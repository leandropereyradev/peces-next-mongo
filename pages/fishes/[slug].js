import Image from "next/image";
import Fishes from "../../models/Fishes";
import Layout from "../../components/Layout";
import db from "../../utils/db";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ease: "easeOut", delay: 0.5 },
  },
};
const variants2 = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ease: "easeOut", delay: 0.8 },
  },
};

export default function ProductScreen(props) {
  const { fish } = props;

  return (
    <Layout title={fish.nombre}>
      <div className="relative z-20 overflow-hidden py-20 px-10">
        <div className="fish_bubble1"></div>
        <div className="fish_bubble2"></div>
        <div className="z-50 container max-w-5xl mx-auto">
          <motion.div variants={variants} initial="hidden" animate="visible" className="grid md:grid-cols-4 card">
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
          </motion.div>
          <motion.div variants={variants2} initial="hidden" animate="visible" className="flex flex-col gap-10 mt-10 card">
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
          </motion.div>
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
