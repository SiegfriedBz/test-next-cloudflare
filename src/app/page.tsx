const runtime = "edge";

import ButtonWrapper from "@/components/ButtonWrapper";
import Link from "next/link";

export default function Home() {
  console.log("HOME -> I am a SERVER component");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      HOME
      <Link href="/about">nav to About</Link>
      <ButtonWrapper>
        <TestSC />
      </ButtonWrapper>
    </main>
  );
}

const TestSC = () => {
  console.log("TestSC -> I am a SERVER component");
  return <div>TestSC</div>;
};
