import { AppDataSource } from "../data-source";
import { Dinosaur } from "../entity/Dinosaur";
import fs from "fs";
import { parse } from "csv-parse/sync";

const BATCH_SIZE = 1000;

async function seed0001Dinosaurs() {
  await AppDataSource.initialize();

  const csvFilePath = __dirname + "/data/dinosaurs.csv";
  const fileContent = fs.readFileSync(csvFilePath, { encoding: "utf-8" });

  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });

  // Convierte campos numéricos
  for (const dino of records) {
    dino.occurrence_no = parseInt(dino.occurrence_no, 10);
    dino.length_m = parseFloat(dino.length_m);
    dino.max_ma = parseFloat(dino.max_ma);
    dino.min_ma = parseFloat(dino.min_ma);
    dino.lng = parseFloat(dino.lng);
    dino.lat = parseFloat(dino.lat);
  }

  // Inserta en lotes
  for (let i = 0; i < records.length; i += BATCH_SIZE) {
    const batch = records.slice(i, i + BATCH_SIZE);
    const dinosaurs = batch.map((dino: any) =>
      AppDataSource.manager.create(Dinosaur, dino)
    );
    await AppDataSource.manager.save(Dinosaur, dinosaurs);
    console.log(
      `Inserted batch ${i / BATCH_SIZE + 1} (${i + batch.length} registros)`
    );
  }

  console.log("Seeded all dinosaurs from CSV in batches!");
  await AppDataSource.destroy();
}

seed0001Dinosaurs().catch((err) => {
  console.error(err);
  process.exit(1);
});
