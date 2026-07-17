-- CreateTable
CREATE TABLE "Ucapan" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "nama" VARCHAR(100) NOT NULL,
    "asalDaerah" VARCHAR(100) NOT NULL,
    "noHp" TEXT NOT NULL,
    "isiUcapan" VARCHAR(1000) NOT NULL,
    "skor" INTEGER,
    "isHidden" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ucapan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventSetting" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventSetting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ucapan_clerkUserId_key" ON "Ucapan"("clerkUserId");

-- CreateIndex
CREATE INDEX "Ucapan_isHidden_skor_createdAt_idx" ON "Ucapan"("isHidden", "skor", "createdAt");

-- CreateIndex
CREATE INDEX "Ucapan_createdAt_idx" ON "Ucapan"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "EventSetting_key_key" ON "EventSetting"("key");
