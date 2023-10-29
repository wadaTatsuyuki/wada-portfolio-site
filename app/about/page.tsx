import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* 上部の2つのコンテナ */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6 items-center">
        <div className="col-span-5">
          <Image
            src="/profile.jpg"
            alt="プロフィール写真"
            width={500}
            height={500}
            className="object-cover rounded-full mx-auto"
          />
          <p className="text-center text-2xl">和田 竜征 / WADA Tatsuyuki</p>
        </div>
        <div className="col-span-7 container">
          <p>ここに経歴を記述</p>
        </div>
      </div>

      {/* 中部の2つのコンテナ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-center">
        <div className="bg-gray-200 p-4">
          <p>ここに実績を記述</p>
          <p className="break-words">
            https://wadatatsuyuki.github.io/fujikawaTransport/html/index.html
          </p>
          <p className="break-words">
            https://wadatatsuyuki.github.io/bootstrap-tutorial/index.html
          </p>
        </div>
        <div className="bg-gray-200 p-4">{/* コンテンツ2 */}</div>
      </div>

      <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
        <div className="bg-gray-300 p-4">
          {/* 1つ目の小さなコンテナの内容 */}
        </div>
        <div className="bg-gray-300 p-4">
          {/* 2つ目の小さなコンテナの内容 */}
        </div>
        <div className="bg-gray-300 p-4">
          {/* 3つ目の小さなコンテナの内容 */}
        </div>
        <div className="bg-gray-300 p-4">
          {/* 4つ目の小さなコンテナの内容 */}
        </div>
        <div className="bg-gray-300 p-4">
          {/* 5つ目の小さなコンテナの内容 */}
        </div>
        <div className="bg-gray-300 p-4">
          {/* 6つ目の小さなコンテナの内容 */}
        </div>
      </div>
    </div>
  );
}
