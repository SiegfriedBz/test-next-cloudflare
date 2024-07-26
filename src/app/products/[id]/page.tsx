export const runtime = "edge";

type TParams = {
  params: { id: string };
};
const page = ({ params }: TParams) => {
  console.log(`PRODUCT ${params.id} -> I am a SERVER component`);

  return <div>Product {params.id} page</div>;
};

export default page;
