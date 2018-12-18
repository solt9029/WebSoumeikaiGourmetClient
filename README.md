# Web版総明会グルメガイドCLIENT

## 環境構築

以下の2つが使用できる状態になっている必要があります。

- node

- yarn

以下のコマンドを打つと、ライブラリがインストールできます。

```
yarn install
```

以下のコマンドを打ち、APIの設定ファイルを生成します。

```
cp ./src/config/api.js.example ./src/config/api.js
```

以下のコマンドを打つと、開発できます。

```
yarn start
```

以下のコマンドを打つと、ビルドできます。

```
yarn build
```

## Docker

```
docker build --tag=solt9029/websoumeikaigourmetclient:latest .
docker push solt9029/websoumeikaigourmetclient:latest
```

```
docker pull solt9029/websoumeikaigourmetclient:latest
docker run -d -p 8059:80 solt9029/websoumeikaigourmetclient:latest
```
