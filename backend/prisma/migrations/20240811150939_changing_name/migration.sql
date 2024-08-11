/*
  Warnings:

  - You are about to drop the column `credname` on the `Account` table. All the data in the column will be lost.
  - Added the required column `credential` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "credname",
ADD COLUMN     "credential" TEXT NOT NULL;
