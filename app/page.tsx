import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen relative">
      <Image
        alt="topimage"
        src="/DSC04982.jpg"
        layout="fill"
        objectFit="cover"
        className="absolute bottom-0 right-0"
      />
    </div>
  );
}
