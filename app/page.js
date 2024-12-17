import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-teal-500 font-medium text-4xl">Hello Welcome to Literature Festival</h1>
      <Image src="/logo.png" alt="NBT" width={200} height={200} />
    </>
  );
}
