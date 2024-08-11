/*
  Warnings:

  - You are about to drop the column `username` on the `Account` table. All the data in the column will be lost.
  - Added the required column `credname` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "username",
ADD COLUMN     "credname" TEXT NOT NULL;
