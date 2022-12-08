## dockerをビルドして起動
```
docker-compose up --build
```
- --build <br>
イメージのビルドから始めてコンテナを起動 <br>
→ ビルド処理の変更をイメージに反映させたいときに付ける

## サーバ起動
```
docker-compose up
```

## サイトにアクセス
http://127.0.0.1:8000/team_d/freedom/


## コンテナの停止
```
docker-compose stop
```

## **Git**
## 非追跡ファイル設定
- 開発メンバ共通で非追跡にしたいファイルの非追跡設定 <br>
.gitignoreに書く <br>
- 個人的なファイルの非追跡設定<br>
.git/info/excludeに書く <br>

## Django
## バックエンド
- team_a/urls.py <br>
プロジェクトのURLを設定
- a_app/urls.py <br>
アプリのURL設定とa_app/views.py中のview関数と対応付け
- a_app/views.py <br>
データベースとのやりとり・必要な処理・次の遷移先ページといった内容を定義したview関数を書く
- a_app/models.py <br>
データベースのテーブルをclassとして定義

## フロントエンド
- static/ <br>
css・image・jsファイルの配置場所
- template/ <br>
テンプレート(HTML)ファイルの配置場所