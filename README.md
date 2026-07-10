# 🌟 創意個人履歷網站 (Creative Portfolio Website)

這是一個基於 **Wix 創意履歷設計風格** 打造的質感個人網頁。採用純前端技術（HTML5, CSS3, JavaScript），結合了現代網頁設計的精髓，如 **磨砂玻璃擬態 (Glassmorphism)**、**動態漸層背景**、以及 **滑鼠感應互動光暈**。

本網頁專為展示個人簡介、專業技能及作品集而設計，並完美支援行動裝置（RWD 響應式佈局）。

🚀 **Live Demo**: https://ian0629082.github.io/L2-home-web/

---

## ✨ 核心特色

1. **👤 首頁自我介紹 (Hero)**
   - 首頁直接整合個人自我介紹文字與大頭照，訪客一進站就能快速了解你是誰、擅長什麼技術。
   - 社群連結（GitHub / LinkedIn / Email）直接放在介紹文字下方，方便快速聯繫。
2. **🗂️ 分類作品集 (Tabbed Portfolio)**
   - 作品依「課堂實作作品」與「專案作品」分頁籤呈現，切換分頁只顯示對應作品。
   - 每張作品卡片使用真實截圖當縮圖，**整張縮圖框皆可點擊**，直接開新分頁前往該作品的線上 Demo 網址。
3. **🏷️ 技術標籤 (Skill Chips)**
   - 專業技能區塊以標籤（chip）呈現實際使用過的技術，不做主觀熟練度評分。
4. **🌗 深淺主題一鍵切換**
   - 支援深色 (Dark) 與淺色 (Light) 模式切換。
   - 採用 `localStorage` 技術，當訪客重新整理或下次造訪網頁時，**會自動記憶**其先前選擇的主題狀態。
5. **💫 滑鼠感應光暈 (Interactive Ambient Glow)**
   - Wix 與 Dribbble 風格的背景漸層大光暈會隨滑鼠移動產生極細微的視差偏移（Parallax），增加視覺的深度與生命力。
6. **📱 完美響應式設計 (RWD)**
   - 從超大桌面螢幕到手機裝置，所有卡片排版、字型大小及導覽列（手機版自動收縮為漢堡選單）皆能完美呈現。
7. **⚡ 極簡高效無依賴**
   - 無需安裝繁重的 React / Vue 等框架，純 HTML / CSS / Vanilla JS 實作，網頁秒開，極致流暢。

---

## 📂 專案檔案結構

```text
HW2/
├── index.html            # 網頁結構，包含各語意化區塊與 DOM 節點
├── style.css             # 樣式表，包含主題變數、玻璃擬態樣式與媒體查詢
├── script.js             # 主題切換、導覽列、作品分頁籤及滑動監聽邏輯
├── IMG_1587.JPG          # 個人頭像照片
├── photo/                # 各作品的展示縮圖截圖
├── work_log_process.md   # GitHub 專案開發工作日誌流程指南（流程圖與規範）
├── daily_log.md          # 每日開發工作日誌（實際紀錄與範本）
└── README.md             # 本操作與部署指南說明文件
```

---

## 🛠️ 本機運行與操作步驟

您可以使用以下幾種方式在本機電腦上開啟並檢視網頁：

### 方法一：直接瀏覽器開啟 (最簡單)
- 在您的檔案總管中，直接連按兩下雙擊 `index.html`，即可使用預設瀏覽器（Chrome, Edge, Safari 等）開啟網頁。

### 方法二：使用 VS Code Live Server 插件 (推薦)
1. 用 VS Code 開啟 `HW2` 資料夾。
2. 在下方狀態列點擊 **"Go Live"**，或者在 `index.html` 上按右鍵選擇 **"Open with Live Server"**。
3. 瀏覽器將自動打開 `http://127.0.0.1:5500/index.html`，當您修改程式碼時，網頁會即時自動重新整理。

### 方法三：使用 Node.js 本機伺服器
若您已安裝 Node.js，可以在專案目錄下執行以下指令開啟本機伺服器：
```bash
# 使用 npx 啟動輕量伺服器
npx http-server ./ -p 3000
```
接著在瀏覽器輸入 `http://localhost:3000` 即可訪問。

---

## 🚀 如何部署至 GitHub Pages (上傳到 GitHub)

GitHub Pages 是一個免費的靜態網頁託管服務，您可以非常輕鬆地將這個個人網站上傳並部署，讓全世界的人都能看到。

### 第一步：在 GitHub 上建立儲存庫 (Repository)
1. 登入您的 [GitHub](https://github.com/) 帳號。
2. 點擊右上角的 **`+`** -> **`New repository`**。
3. 輸入儲存庫名稱（例如：`my-personal-website`）。
4. 選擇 **`Public`** (必須為公開儲存庫)。
5. 不要勾選 "Add a README file" (因為專案中已經有 README 了)。
6. 點擊 **`Create repository`**。

### 第二步：使用 Git 上傳程式碼
打開終端機（Terminal）或 PowerShell，進入您的專案目錄 `HW2`，依序輸入以下指令：

```bash
# 1. 初始化 Git 儲存庫
git init

# 2. 將所有檔案加入暫存區
git add .

# 3. 提交檔案並加上說明描述
git commit -m "feat: init personal portfolio website"

# 4. 設定分支名稱為 main
git branch -M main

# 5. 關聯到您剛才建立的 GitHub 遠端儲存庫 (請將下面的網址換成您自己的 GitHub 倉庫網址)
git remote add origin https://github.com/您的帳號/儲存庫名稱.git

# 6. 將程式碼推送上傳至 GitHub
git push -u origin main
```

### 第三步：開啟 GitHub Pages 服務
1. 開啟您的 GitHub 專案網頁，點擊上方的 **`Settings`** (設定)。
2. 在左側選單中找到 **`Code and automation`** 區塊，點擊 **`Pages`**。
3. 在 **`Build and deployment`** -> **`Source`** 部分，確保選擇了 **`Deploy from a branch`**。
4. 在 **`Branch`** 下拉選單中，將預設的 `None` 改為 **`main`**，資料夾選擇 **`/ (root)`**。
5. 點擊右側的 **`Save`**。
6. 稍等約 1 到 2 分鐘，重新整理頁面。您會在 Settings -> Pages 頁面最上方看到一行綠色字樣，顯示您的網站已經成功部署，例如：
   👉 `Your site is live at https://您的帳號.github.io/儲存庫名稱/`
7. 點擊該連結即可看到您精美的個人網頁！

---

## ✍️ 如何自訂修改成您的資訊？

本專案的程式碼結構清晰，您可以輕鬆做以下修改：

1. **修改名字與自我介紹**：
   - 開啟 [index.html](file:///index.html)，搜尋 `Ian Wang`，將姓名與 `hero-description` 段落改為您自己的自我介紹文字。
2. **替換個人頭像**：
   - 將您喜歡的個人頭像重新命名為 `IMG_1587.JPG`，並覆蓋專案根目錄下的同名檔案；或者在 [index.html](file:///index.html) 的頭像區域修改 `<img src="IMG_1587.JPG" ...>` 的路徑。
3. **調整技術標籤**：
   - 在 [index.html](file:///index.html) 的 `skills` 區塊中，新增或刪除 `<span class="skill-chip">` 項目即可調整顯示的技術標籤。
4. **修改作品內容**：
   - 在 `portfolio` 區塊下，`#tab-classroom` 與 `#tab-project` 分別對應「課堂實作作品」與「專案作品」兩個分頁。編輯各個 `<article class="project-card">` 內部的連結、縮圖、標題、文字與技術標籤；縮圖檔案建議放在 `photo/` 資料夾內。

---

## 📋 開發日誌流程

本專案附帶了一套標準化的「開發工作日誌流程」：
- 🛠️ **流程圖與規範說明**：請參考 [work_log_process.md](file:///d:/AI%20class/HW2/work_log_process.md)。
- 📝 **本專案開發紀錄與日誌範本**：請參考 [daily_log.md](file:///d:/AI%20class/HW2/daily_log.md)。
