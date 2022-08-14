/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FishDef({ fish }) {
  return (
    <Link href={`/fishes/${fish.slug}`}>
      <div className="card cursor-pointer transition ease-in-out hover:scale-[1.025]">
        <Image
          className="rounded-img"
          src={fish.imagen}
          alt={fish.nombre}
          width={440}
          height={440}
          layout="responsive"
          objectFit="cover"
          priority
        ></Image>

        <div className="flex flex-col items-center justify-center p-5">
          <h2 className="text-lg">{fish.nombre}</h2>
        </div>
      </div>
    </Link>
  );
}
