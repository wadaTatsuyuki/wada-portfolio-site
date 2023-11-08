import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-4xl font-bold lg:mb-10 mb-10 text-center">About</h2>
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
            <div className="mt-5">
              <p>1994年大阪生まれ。</p>
              <p>桃山学院大学 国際教養学部 メディア映像文化専修 卒業。</p>
            </div>
            <div className="mt-5">
              <p>映画やインターネットなどのメディア研究をしていました。</p>
            </div>
            <div className="mt-5">
              <p>
                服飾史にも関心があり、大学卒業後はラグジュアリーアパレル業界に3年ほど従事。
              </p>
            </div>
            <p>
              現在はWeb制作(ちょっとだけ開発)の技術を学び、アパレル事業会社にてWebディレクター兼エンジニアとして勤務。
            </p>
            <p>大学時代の研究を元にSNS運用にも携わっています。</p>
            <div className="mt-5">
              <p>
                経営やマーケティングなど、企業の意思決定に関わることができるお仕事に強い関心があります。
              </p>
            </div>
            <div className="mt-5">
              <p>趣味は写真撮影と小説執筆。</p>
              <p>どちらかというと犬派です。</p>
            </div>
          </div>
          <div className="mt-10 flex justify-center items-center">
            <p>使用技術：Next.js React TailwindCSS TypeScript </p>

            <p className="ml-2">
              <a
                href="https://github.com/wadaTatsuyuki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-center"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-bold my-10 text-center">Works</h2>

      <div className="bg-gray-100 p-4">
        <div className="p-4 relative">
          <div className="">
            <div className="mb-4">
              <h3 className="text-center font-bold">
                {" "}
                <a
                  href="https://dressingmyway.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words underline hover:text-blue-500 "
                >
                  Dressing My Way
                </a>
              </h3>
              <p className="text-center">
                -ラグジュアリーファッションレンタルサービス-
              </p>
            </div>
            <div className="grid grid-cols-12 gap-4 max-w-screen-xl">
              <div className="col-span-12 lg:col-span-7">
                <a
                  href="https://dressingmyway.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words text-blue-500 hover:underline"
                >
                  <Image
                    alt="Dressing My Way"
                    src="/dmw.jpg"
                    // layout="responsive"
                    width={400}
                    height={400}
                    objectFit="cover"
                    className="mx-auto"
                  />
                </a>
              </div>
              <div className="col-span-12 lg:col-span-5 mx-auto flex flex-col justify-center items-start">
                <div className="flex items-start mb-2">
                  <span className="mr-2">・</span>
                  <p className="">決済システム(Stripe)の導入。保守・運営。</p>
                </div>
                <div className="flex items-start mb-2">
                  <span className="mr-2">・</span>
                  <p>HTML,CSS,JavaScriptを用いたページ改修</p>
                </div>
                <div className="flex items-start mb-2">
                  <span className="mr-2">・</span>
                  <p>
                    SNS運用
                    <a
                      href="https://www.instagram.com/dmw_media/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-center"
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">・</span>
                  <p>
                    ブランド運営についての提案や顧客を増やすための施作の考案、実行も担当しています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-bold my-10 text-center">Portfolio Site</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-center">
        <div className="bg-gray-200 p-4">
          {" "}
          <div className="h-1/5">
            <p className="text-center my-3 underline hover:text-blue-500">
              <a
                href="https://wadatatsuyuki.github.io/fujikawaTransport/html/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                -藤川運輸様 ホームページ-
              </a>
            </p>
            <p className="mb-2">
              職業訓練校にて作成。実際にクライアントから要望をヒアリングし、6人チームで制作しています。私はディレクター兼コーダーを担当し、約60%程度のマークアップを実施しました。
            </p>
            <a
              href="https://wadatatsuyuki.github.io/fujikawaTransport/html/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="藤川運輸topページ"
                src="/fujikawaTop.png"
                // layout="responsive"
                width={400}
                height={400}
                objectFit="cover"
                className="mx-auto"
              />
            </a>
          </div>
        </div>
        <div className="bg-gray-200 p-4 ">
          <div className="">
            <p className="text-center my-3 underline hover:text-blue-500">
              <a
                href="https://wadatatsuyuki.github.io/bootstrap-tutorial/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                -BootStrapポートフォリオ-
              </a>
            </p>
            <p className="mb-2">
              BootStrapを学んだので、アウトプットとして作成しました。また、JavaScriptを用いて雪が降る演出を実装するなど、DOM操作も試してみました。
            </p>
            <a
              href="https://wadatatsuyuki.github.io/bootstrap-tutorial/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="藤川運輸topページ"
                src="/bootstrap-portfolio.png"
                // layout="responsive"
                width={400}
                height={400}
                objectFit="cover"
                className="mx-auto"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl md:text-4xl sm:text-3xl font-bold text-center">
          Six Pillars of Me
        </h2>
        <h3 className="text-xl md:text-xl sm:text-lg font-bold mb-10 text-center">
          -私を構成する6つ-
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 items-center justify-items-center">
          <div className="bg-gray-300 p-3 sm:p-4">
            <p>マルクス・アウレリウス 「自省録」</p>
          </div>
          <div className="bg-gray-300 p-3 sm:p-4">
            <p>アダム・スミス 「道徳感情論」</p>
          </div>
          <div className="bg-gray-300 p-3 sm:p-4">
            <p>オイゲン・ヘリゲル 「弓と禅」</p>
          </div>
          <div className="bg-gray-300 p-3 sm:p-4">
            <p>小島秀夫 「メタルギアソリッド」</p>
          </div>
          <div className="bg-gray-300 p-3 sm:p-4">
            <p>オーゼキコーキ 「逢える日」</p>
          </div>
          <div className="bg-gray-300 p-3 sm:p-4">
            <p>西川美和 「すばらしき世界」</p>
          </div>
        </div>
      </div>
    </div>
  );
}
