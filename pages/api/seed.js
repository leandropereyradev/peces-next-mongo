import Fishes from '../../models/Fishes';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await Fishes.deleteMany();
  await Fishes.insertMany(data.fishes);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;
