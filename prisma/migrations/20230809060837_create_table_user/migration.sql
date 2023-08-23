-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "createdat" TIMESTAMP(6),
    "updatedat" TIMESTAMP(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
