import FishDef from "../components/FishDef";
import Layout from "../components/Layout";
import Fishes from "../models/Fishes";
import db from "../utils/db";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { ease: "easeOut", delay: 0.5 * index },
  }),
};

const variants2 = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
  },
};

export default function FishesAll({ fishes }) {
  return (
    <Layout title={"Peces Tropicales"}>
      <div className="relative z-10 overflow-hidden px-10">
        <div className="fishes_bubble1"></div>
        <div className="fishes_bubble2"></div>
        <motion.div variants={variants2} initial="hidden" animate="visible">
          <h1 className="text-3xl font-semibold uppercase text-center mt-20 z-50">Peces tropicales</h1>
          <h1 className="text-3xl font-semibold uppercase text-center mt-6 z-50">para acuarios de agua dulce</h1>
        </motion.div>
        <div className="container max-w-5xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 mt-20 pb-20">
          {fishes.map((fish, index) => (
            <motion.div key={fish.slug} variants={variants} custom={index} initial="hidden" animate="visible" whileTap={{ scale: 0.95 }}>
              <FishDef fish={fish} />
            </motion.div>
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
