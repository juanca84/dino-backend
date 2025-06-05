import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDinosaur1749133610305 implements MigrationInterface {
    name = 'InitDinosaur1749133610305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dinosaur" ("occurrence_no" SERIAL NOT NULL, "name" character varying NOT NULL, "diet" character varying NOT NULL, "type" character varying NOT NULL, "length_m" double precision NOT NULL, "max_ma" double precision NOT NULL, "min_ma" double precision NOT NULL, "region" character varying NOT NULL, "lng" double precision NOT NULL, "lat" double precision NOT NULL, "class" character varying NOT NULL, "family" character varying NOT NULL, CONSTRAINT "PK_38f369823c4e5265474b4cb7545" PRIMARY KEY ("occurrence_no"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dinosaur"`);
    }

}
