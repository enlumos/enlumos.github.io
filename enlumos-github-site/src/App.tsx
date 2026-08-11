import type { ReactNode } from "react";
import { cases, pressCoverage, recognition, services, siteConfig } from "./site-config";

type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

function SmartLink({ href, children, className = "", ariaLabel }: LinkProps) {
  if (!href || href === "#") {
    return (
      <span className={`${className} is-pending`} aria-label={`${ariaLabel || "連結"}，即將上線`} title="正式連結即將上線">
        {children}<small>即將上線</small>
      </span>
    );
  }
  return <a href={href} className={className} target="_blank" rel="noreferrer" aria-label={ariaLabel}>{children}</a>;
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main">跳至主要內容</a>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#top" aria-label="瀅瀅育兒神隊友首頁"><img className="brand-logo" src={siteConfig.logoUrl} alt="" /><span>{siteConfig.teamName}<small>{siteConfig.englishName}</small></span></a>
          <nav className="desktop-nav" aria-label="主要選單">
            <a href="#about">關於我們</a><a href="#services">服務項目</a><a href="#stories">活動案例</a><a href="#recognition">得獎與新聞</a><a href="#association">瀅瀅協會</a>
          </nav>
          <SmartLink href={siteConfig.registrationUrl} className="nav-cta" ariaLabel="前往活動報名網站">活動報名 <Arrow /></SmartLink>
          <details className="mobile-menu"><summary aria-label="開啟網站選單"><span></span><span></span><span></span></summary><nav aria-label="手機版主要選單"><a href="#about">關於我們</a><a href="#services">服務項目</a><a href="#stories">活動案例</a><a href="#recognition">得獎與新聞</a><a href="#association">瀅瀅協會</a></nav></details>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-art"><img src={siteConfig.mascotBoardUrl} alt="瀅仔的多種日常表情與動作" /><div className="mascot-sticker"><strong>{siteConfig.mascotName}</strong><span>陪爸媽一起發光 ✦</span></div></div>
          <div className="hero-content">
            <p className="eyebrow"><span></span> {siteConfig.englishName}・親子共學・家長支持</p>
            <h1>瀅瀅育兒<br /><em>神隊友</em></h1>
            <p className="hero-tagline">{siteConfig.tagline}</p>
            <p className="hero-lead">我們相信，好的陪伴不需要標準答案。enlumos 從每個家庭真實的日常出發，透過活動、教育與社群，讓孩子自在探索，讓大人更有力量。</p>
            <div className="hero-actions"><a className="button button-primary" href="#services">認識我們的服務 <span>↓</span></a><SmartLink href={siteConfig.registrationUrl} className="button button-ghost" ariaLabel="前往活動報名網站">查看近期活動 <Arrow /></SmartLink></div>
            <div className="hero-note"><img src={siteConfig.logoUrl} alt="enlumos Logo" /><p>每個孩子都用自己的速度發光，<br />瀅仔陪你一起找到方向。</p></div>
          </div>
        </section>

        <section className="ticker" aria-label="瀅瀅的核心價值"><div><span>enlumos</span> 育兒神隊友 <i>✦</i> <span>理解</span> UNDERSTAND <i>✦</i> <span>陪伴</span> ACCOMPANY <i>✦</i> <span>連結</span> CONNECT</div></section>

        <section className="section about" id="about">
          <div className="section-kicker">01 — ABOUT US</div>
          <div className="about-grid">
            <div><p className="eyebrow"><span></span> 關於 enlumos</p><h2>不是教孩子<br />成為某種樣子，<br /><em>而是陪他成為自己。</em></h2></div>
            <div className="about-copy">
              <p>瀅瀅育兒神隊友 enlumos 是一個關注兒童成長、家庭關係與教育實踐的團隊。我們把專業知識放回生活現場，用孩子能參與、大人能理解的方式，設計每一場活動與對話。</p>
              <p>我們不追求一次就做到完美，而是在真誠、安全與尊重中，和家庭一起累積改變。因為當照顧者被支持，孩子也就多了一個安心長大的空間。</p>
              <div className="social-row" aria-label="瀅瀅社群連結">{siteConfig.socialLinks.map((link) => <SmartLink key={link.label} href={link.href} className="social-link" ariaLabel={`瀅瀅 ${link.label}`}>{link.shortLabel} <Arrow /></SmartLink>)}</div>
            </div>
          </div>
          <div className="video-card">
            {siteConfig.youtubeEmbedUrl ? <iframe src={siteConfig.youtubeEmbedUrl} title="瀅瀅品牌介紹影片" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <><img className="video-mascots" src={siteConfig.mascotFriendsUrl} alt="瀅仔的各種陪伴日常" /><div className="video-scrim"></div><div className="play-button" aria-hidden="true">▶</div><div className="video-caption"><span>MEET ENLUMOS</span><strong>認識瀅瀅與瀅仔的陪伴日常</strong><small>YouTube 品牌影片上線後將在此播放</small></div></>}
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-heading"><div><div className="section-kicker">02 — WHAT WE DO</div><h2>讓每一次相遇，<br />都有成長發生。</h2></div><p>從孩子、照顧者到合作夥伴，我們依不同需求設計合適的學習與參與方式。</p></div>
          <div className="service-list">{services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div><a href="#contact" aria-label={`洽詢${service.title}`}>洽詢合作 <Arrow /></a></article>)}</div>
        </section>

        <section className="section stories" id="stories">
          <div className="section-heading light"><div><div className="section-kicker">03 — STORIES</div><h2>活動不只發生在當天，<br />也留在之後的日常裡。</h2></div><p>案例將結合照片、影片與家長回饋，完整記錄我們如何設計，也看見參與後的真實改變。</p></div>
          <div className="case-grid">{cases.map((item, index) => <article className="case-card" key={item.title}><div className={`case-visual ${item.accent}`} aria-label="活動照片版位"><span>0{index + 1}</span><small>案例架構</small><div></div></div><div className="case-body"><p>{item.label}</p><h3>{item.title}</h3><div>{item.description}</div><SmartLink href={siteConfig.registrationUrl} className="case-link" ariaLabel="查看活動詳情">活動詳情 <Arrow /></SmartLink></div></article>)}</div>
          <aside className="feedback-card"><div className="quote-mark" aria-hidden="true">“</div><div><p className="eyebrow"><span></span> 家長回饋</p><h3>真實回饋正在整理中</h3><p>我們將在取得同意後，依活動名稱與參與身分匿名刊登家長分享，讓每一段經驗被尊重，也讓正在尋找支持的家庭有所參考。</p></div><div className="feedback-meta"><span>COMING SOON</span><small>回饋內容將陸續更新</small></div></aside>
        </section>

        <section className="section recognition" id="recognition">
          <div className="section-kicker">04 — RECOGNITION & PRESS</div>
          <div className="recognition-grid">
            <div><h2>每一份肯定，<br />都是繼續前進的提醒。</h2><p>從青年行動到地方公共參與，我們把兒童發展與親職支持化為可實踐的方案；獎項證明與新聞報導將於資料確認後陸續補上。</p></div>
            <div className="recognition-list">
              {recognition.map((item) => <div key={`${item.year}-${item.title}`}><span>{item.year}</span><strong>{item.title}</strong><small>{item.result}</small></div>)}
            </div>
          </div>
          <div className="press-heading"><p className="eyebrow"><span></span> 新聞報導</p><h3>瀅瀅的行動，<br />被更多人看見。</h3><p>收錄政府機關、大學與媒體對瀅瀅行動、親職支持及青年公共參與成果的報導。</p></div>
          <div className="press-grid">
            {pressCoverage.map((item) => <a className="press-card" href={item.href} target="_blank" rel="noreferrer" key={item.href} aria-label={`閱讀${item.source}報導：${item.title}`}><div><span>{item.source}</span><time dateTime={item.date}>{item.date.replaceAll("-", ".")}</time></div><h4>{item.title}</h4><p>閱讀完整報導 <Arrow /></p></a>)}
          </div>
        </section>

        <section className="knowledge" id="knowledge"><div className="knowledge-copy"><div className="section-kicker">05 — KNOWLEDGE</div><p>瀅瀅知識專欄</p><h2>把專業說得好懂，<br />把方法帶回生活。</h2><p>從親子互動、情緒理解到日常教養，我們持續在 Blogger 分享能讀懂、能實踐的內容。</p><SmartLink href={siteConfig.bloggerUrl} className="button button-dark" ariaLabel="前往瀅瀅 Blogger 知識專欄">前往知識專欄 <Arrow /></SmartLink></div><div className="knowledge-art" aria-hidden="true"><div className="book"><span>瀅瀅<br />知識專欄</span><small>YING YING NOTES</small></div><div className="pencil"></div><span className="spark spark-one">✦</span><span className="spark spark-two">✦</span></div></section>

        <section className="section association" id="association">
          <div className="section-heading"><div><div className="section-kicker">06 — ASSOCIATION</div><p className="mini-label">瀅瀅協會</p><h2>把一次次陪伴，<br />延伸成更長久的支持。</h2></div><p>透過協會組織串連專業、家庭與社區資源，讓兒童與照顧者獲得穩定、可持續的支持。</p></div>
          <div className="association-grid"><article className="association-intro"><span>ASSOCIATION</span><h3>{siteConfig.association.name}</h3><p>我們以兒童福祉、家庭支持與教育推廣為核心，逐步展開公益倡議、專業交流與社區合作。</p><a href="#contact">聯絡協會 <span>→</span></a></article><div className="document-list"><SmartLink href={siteConfig.association.registrationProofUrl} className="document-link" ariaLabel="查看協會立案證明"><span>01</span><strong>立案證明</strong><small>PDF 文件</small><Arrow /></SmartLink><SmartLink href={siteConfig.association.articlesUrl} className="document-link" ariaLabel="查看協會組織章程"><span>02</span><strong>組織章程</strong><small>PDF 文件</small><Arrow /></SmartLink><SmartLink href={siteConfig.association.applicationFormUrl} className="document-link" ariaLabel="填寫加入協會申請表"><span>03</span><strong>加入協會</strong><small>線上申請表</small><Arrow /></SmartLink></div></div>
        </section>

        <section className="contact" id="contact"><div><p>READY TO CONNECT?</p><h2>一起為孩子，<br />創造更好的成長日常。</h2></div><div><p>想了解活動、合作提案或加入協會？<br />歡迎透過官方 LINE 與我們聯繫。</p><SmartLink href={siteConfig.socialLinks[4].href} className="button button-light" ariaLabel="加入瀅瀅官方 LINE">聯絡瀅瀅 <Arrow /></SmartLink><small>{siteConfig.association.contact}</small></div></section>
      </main>

      <footer><div className="footer-brand"><img className="brand-logo" src={siteConfig.logoUrl} alt="" /><strong>瀅瀅育兒神隊友<small>{siteConfig.englishName}・陪孩子，也陪大人。</small></strong></div><div className="footer-links"><a href="#about">關於我們</a><a href="#services">服務項目</a><a href="#stories">活動案例</a><a href="#association">瀅瀅協會</a></div><p>© {year} enlumos. All rights reserved.</p></footer>
    </>
  );
}
