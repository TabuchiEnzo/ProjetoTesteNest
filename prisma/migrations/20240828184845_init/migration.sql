-- CreateTable
CREATE TABLE "Filme" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(80) NOT NULL,
    "avaliacao" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Filme_pkey" PRIMARY KEY ("id")
);
