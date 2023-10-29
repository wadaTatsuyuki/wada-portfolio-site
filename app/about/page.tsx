import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">About</h1>
      {/* 上部の2つのコンテナ */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6 items-center">
        <div className="col-span-6">
          <Image
            src="/profile.jpg"
            alt="プロフィール写真"
            width={500}
            height={500}
            className="object-cover rounded-full mx-auto"
          />
        </div>
        <div className="col-span-6 container">
          <p className="text-center text-2xl">和田 竜征 / WADA Tatsuyuki</p>
          <div className="mt-5 leading-relaxed">
            <p>1994年大阪生まれ.</p>
            <p>桃山学院大学 国際教養学部 メディア映像文化専修 卒業.</p>
            <p className="mt-5">
              卒業論文のタイトルは「Twitterによる擬似閉鎖的デジタル空間の構築~デジタルネイティブの投稿を起因とした炎上を例に~」
            </p>
            <p>インターネットメディアを研究する4年間を過ごしました.</p>
            <div className="mt-5">
              <p>大学卒業後はラグジュアリーアパレル業界に約3年ほど従事.</p>
              <p>
                現在はWeb制作(ちょっとだけ開発)のスキルを活かしてECサイト運営や、大学時代の研究を元にSNS運用に携わっています.
              </p>
              <div className="mt-5">
                <p>
                  経営や企業の意思決定に関わることができるお仕事に強い関心があります.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 中部の2つのコンテナ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-center">
        <div className="bg-gray-200 p-4">
          <h2 className="text-center">制作物</h2>
          <div className="mt-2">
            <a
              href="https://wadatatsuyuki.github.io/fujikawaTransport/html/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-blue-500 hover:underline"
            >
              https://wadatatsuyuki.github.io/fujikawaTransport/html/index.html
            </a>
          </div>
          <div className="mt-5">
            <a
              href="https://wadatatsuyuki.github.io/bootstrap-tutorial/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-blue-500 hover:underline"
            >
              https://wadatatsuyuki.github.io/bootstrap-tutorial/index.html
            </a>
          </div>
        </div>
        <div className="bg-gray-200 p-4">{/* コンテンツ2 */}</div>
      </div>

      <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
        <div className="bg-gray-300 p-4">
          <p>マルクス・アウレリウス 「自省録」</p>
        </div>
        <div className="bg-gray-300 p-4">
          <p>アダム・スミス 「道徳感情論」</p>
        </div>
        <div className="bg-gray-300 p-4">
          <p>オイゲン・ヘリゲル 「弓と禅」</p>
        </div>
        <div className="bg-gray-300 p-4">
          <p>小島秀夫 「メタルギアソリッド」</p>
        </div>
        <div className="bg-gray-300 p-4">
          <p>オーゼキコーキ 「逢える日」</p>
        </div>
        <div className="bg-gray-300 p-4">
          {/* 6つ目の小さなコンテナの内容 */}
        </div>
      </div>
    </div>
  );
}
