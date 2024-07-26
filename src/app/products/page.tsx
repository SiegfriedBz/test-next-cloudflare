export const runtime = "edge";

import Link from "next/link";

const page = () => {
  console.log("ALL PRODUCTS -> I am a SERVER component");
  return (
    <div className="flex flex-col gap-y-8">
      All products page
      <Link href="/products/123">Visit Prod 123</Link>
      <Link href="/products/abc">Visit Prod abc</Link>
    </div>
  );
};

export default page;
