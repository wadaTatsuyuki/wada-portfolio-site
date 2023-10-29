export default function Home() {
  return (
    <div className="grid grid-cols-1 max-w-screen-md mx-auto p-5">
      <div className="items-center">
        <h1 className="text-2xl font-bold mb-4 text-center">ノベルページ</h1>
        <p className="mb-4">
          このページでは僕が書いた小説を公開したいと思っています。
        </p>
        <p className="mb-4">
          ただ小説を載せるだけでは面白くないので、ティラノスクリプトなどを使ってサウンドノベルとして公開する予定です。
        </p>
        <p>
          公開まで少し時間がかかると思いますが、気長にお待ちいただければ幸いです。
        </p>
      </div>
    </div>
  );
}
