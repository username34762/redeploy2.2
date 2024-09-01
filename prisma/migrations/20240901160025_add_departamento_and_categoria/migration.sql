/*
  Warnings:

  - You are about to drop the column `departament` on the `Place` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Place" DROP COLUMN "departament",
ADD COLUMN     "department" TEXT;
