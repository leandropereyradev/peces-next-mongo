import mongoose from "mongoose";

const fishesSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    imagen: { type: String, required: true },
    ph: { type: String, required: true },
    gh: { type: String, required: true },
    kh: { type: String, required: true },
    longitud: { type: String, required: true },
    descripcion: { type: String, required: true },
    dimorfismo: { type: String, required: true },
    alimentacion: { type: String, required: true },
    compatibilidad: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Fishes = mongoose.models.Fishes || mongoose.model("Fishes", fishesSchema);
export default Fishes;
