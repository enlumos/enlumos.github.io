# 瀅瀅育兒神隊友 enlumos 官方網站

適合部署至 GitHub Pages 的響應式品牌官網，內容包含團隊介紹、六大服務、活動案例架構、獲獎與行動紀錄、Blogger 知識專欄、社群連結及「臺灣瀅瀅兒童發展與親職支持協會」資訊。

## 更新正式資料

社群、Blogger、活動報名、協會文件及申請表連結集中在 `src/site-config.ts`。尚未提供的連結使用 `#`，畫面會自動顯示「即將上線」。

YouTube 影片請使用嵌入網址，例如 `https://www.youtube.com/embed/影片代碼`。

網站目前使用已取得的 Canva 品牌預覽素材。取得正式原檔後，可直接覆蓋以下檔案，不需修改版面程式：

- `public/enlumos-logo.png`
- `public/enlumos-mascot-board.png`
- `public/enlumos-mascot-friends.png`
- `public/og.png`

## GitHub Pages

推送到 `main` 分支後，內建的 GitHub Actions 會自動建置並發佈。第一次使用時，請至 repository 的 **Settings → Pages**，將來源設定為 **GitHub Actions**。

若使用自訂網域，請同步修改 `.github/workflows/deploy-pages.yml` 中的 `VITE_SITE_URL`。
