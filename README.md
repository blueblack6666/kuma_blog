# くまの投資ブログ

## 仕組み

ブログは11tyを使って構築している。
ベースに使っているテーマは「Eleventy Duo」。

[Live demo](https://eleventyduo.netlify.app)

## ローカル実行

```
npm run dev
```

## ビルド方法

```
npm install --legacy-peer-deps

npm run build
```

これによって```public```配下にビルドされたコードが出力される。
ここから出力されたコードを Github Pages に反映させるには次のコマンドを実行する。

```
npm run build:publish
```

ビルドと反映をまとめて実行する場合

```
npm run publish
```



## Githubページの確認

https://blueblack6666.github.io/kuma_blog/
　↓
https://kumablog.blueblack6666.com/

Githubページのカスタムドメイン対応で参考にしたサイト
https://www.konosumi.net/entry/2018/07/01/190200
