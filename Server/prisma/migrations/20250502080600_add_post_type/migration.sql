-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('POST', 'ARTICLE');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "type" "PostType" NOT NULL DEFAULT 'POST';
