import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto">
      <div>
        <Image
          src="/profile.jpg"
          alt="プロフィール写真"
          width={500}
          height={500}
          className="mt-4 object-cover rounded-full mx-auto"
        />
        <p className="text-center text-2xl">和田 竜征 / WADA Tatsuyuki</p>
      </div>
      <div className="">
        <div className="pt-5 text-base">
          <p>1994年、大阪生まれ。</p>
          <p className="">
            使用技術:{" "}
            <a className="text-blue-400">React.js, Next.js, TailwindCSS</a>
          </p>
          <div className="mt-2"></div>
        </div>
      </div>
    </div>
  );
}
