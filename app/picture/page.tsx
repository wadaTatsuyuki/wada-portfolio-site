import "font-awesome/css/font-awesome.min.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4 text-center">写真のページ</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="mb-4">
            このページでは僕が撮影した写真を公開したいと思っています。
          </p>
          <p className="mb-4">
            スライドショーを使っていろんな写真を見られるようにするのか。はたまたThree.jsなどを使ってWeb写真展のようなものを実現するのか。
          </p>
          <p className="mb-4">
            色々と楽しい構想を練っているのですが、少し時間がかかると思うので気長にお待ちいただけると幸いです。
          </p>
          <p className="mb-4">
            よろしければ、僕のInstagramもご覧いただけると嬉しいです。
          </p>
          <div className="text-center">
            <a
              href="https://www.instagram.com/tatsuyuki.wada/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl text-center"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/profile2.jpg"
            alt="プロフィール写真"
            width={500}
            height={500}
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
