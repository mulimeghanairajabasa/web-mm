import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// Wajib dynamic: auth() butuh konteks request asli (lewat middleware),
// yang tidak tersedia saat Next.js mencoba prerender route ini saat build.
export const dynamic = "force-dynamic";

export default async function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string } | undefined)?.role;

  if (role !== "admin") {
    redirect("/");
  }

  return <>{children}</>;
}
