# lookhook-store

個人のクロシェブランド向けの **ブランドサイト（Next.js）+ BASE導線** です。  
ECの決済/在庫は **BASE**、ブランド体験/SEO/導線は **Vercel** 上のサイトで担う想定です。

- **本番（Vercel）**: [`https://lookhook-store.vercel.app`](https://lookhook-store.vercel.app)
- **GitHub**: [`https://github.com/hanaeogura/lookhook-store`](https://github.com/hanaeogura/lookhook-store)

## ローカル開発

```bash
npm install
npm run dev
```

`http://localhost:3000` を開いてください。

## 環境変数

`.env.example` を参考に、ローカルは `.env.local` を作成します（`.gitignore` でコミットされません）。

- **`NEXT_PUBLIC_SITE_URL`**: 公開URL（VercelのEnvironment Variablesに設定）
- **`NEXT_PUBLIC_BASE_SHOP_URL`**: BASEショップのトップURL（未設定なら、Itemsの購入導線で注意表示）

## デプロイ

GitHubに接続済みのため、`main` へpushするとVercelがデプロイします。  
手元からCLIで投げる場合:

```bash
npx vercel@latest --prod
```
