import Image from "next/image";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "absolute" }}>
      <Image
        src="/DSC04982.jpg"
        alt="topImage"
        width={1920}
        height={1080}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        priority // このプロパティを追加
      />
    </div>
  );
}
