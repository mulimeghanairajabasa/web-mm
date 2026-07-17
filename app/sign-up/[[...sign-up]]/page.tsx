import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-[#eeff00] to-[#fcfcfb]">
      <SignUp />;
    </main>
  );
}
