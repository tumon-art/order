import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className="font-extrabold text-4xl"> Order! </h1>
      <Button variant="destructive"> ShadeCDN Button!</Button>

    </main>
  );
}
