const logoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Fudan_University_Logo.svg/250px-Fudan_University_Logo.svg.png";

const auditoriumUrl =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Xianghui%20Auditorium.jpg?width=1000";

const facts = [
  ["1905", "创校年份，校名取自“日月光华，旦复旦兮”。"],
  ["4", "邯郸、江湾、枫林、张江四个主要校区。"],
  ["C9", "中国九校联盟成员，代表高水平研究型大学群体。"],
  ["17", "拥有多所附属医院，医学教育与临床资源深厚。"],
];

const campuses = [
  ["邯郸校区", "主校区之一，兼具历史建筑、教学科研与学生生活空间。"],
  ["江湾校区", "现代化校园区域，承载法学、生命科学等学科平台。"],
  ["枫林校区", "医学教育与临床医学体系的重要基地。"],
  ["张江校区", "面向信息科技、药学与产业创新的校区空间。"],
];

const timeline = [
  ["1905", "马相伯创办复旦公学，开启现代大学教育探索。"],
  ["1917", "学校发展为私立复旦大学，学科建制逐步完善。"],
  ["2000", "复旦大学与上海医科大学合并，医学学科进入新阶段。"],
  ["今天", "建设世界一流大学，推进交叉创新与全球学术合作。"],
];

const academics = [
  ["文", "人文社科", "哲学、中文、历史、新闻、国际关系、经济与管理等领域积淀深厚，重视中国问题与全球视野。"],
  ["理", "基础科学", "数学、物理、化学、生命科学等基础学科支撑高质量科研训练，也是交叉创新的重要源头。"],
  ["医", "医学体系", "依托上海医学院和附属医院，形成从基础医学、临床研究到公共卫生的完整培养链条。"],
  ["工", "信息与工程", "面向人工智能、芯片、数据科学、智能制造等方向，推动新工科与产业应用结合。"],
  ["创", "创新平台", "通过实验室、研究院和科创载体，连接高校基础研究、企业需求和城市创新资源。"],
  ["世", "国际合作", "与世界多地高校和机构建立交流合作，支持学生交换、联合培养与跨国研究网络。"],
];

const lifeItems = [
  ["书院生活", "本科生书院制强调跨专业交流、导师引导和共同体体验，让学习从课堂延伸到日常生活。"],
  ["文化艺术", "校园讲座、社团、展览与演出活动丰富，呈现综合性大学的人文气息。"],
  ["体育空间", "田径、球类、健身与竞赛活动共同构成活跃的校园体育文化。"],
  ["社会实践", "学生通过调研、志愿服务、基层实践和创新项目，把专业训练带入真实社会场景。"],
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回顶部">
          <img src={logoUrl} alt="复旦大学校徽" />
          <div>
            复旦大学<span>Fudan University</span>
          </div>
        </a>
        <nav className="nav" aria-label="页面导航">
          <a href="#overview">学校概览</a>
          <a href="#campus">四大校区</a>
          <a href="#history">历史沿革</a>
          <a href="#academic">学科科研</a>
          <a href="#life">校园生活</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow">上海 · 综合性研究型大学</p>
          <h1>复旦大学</h1>
          <p>
            以“博学而笃志，切问而近思”为校训，复旦在百余年办学历程中形成了文理医工交叉、开放包容、追求卓越的大学气质。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#overview">
              了解复旦
            </a>
            <a className="button" href="#campus">
              浏览校区
            </a>
          </div>
        </div>
      </section>

      <main>
        <section id="overview">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <p className="section-kicker">Overview</p>
                <h2>从江湾发端，到面向世界的学术共同体</h2>
              </div>
              <p>
                复旦大学创建于 1905 年，位于上海，是中国历史悠久、声誉卓著的高等学府之一，也是国家“双一流”建设高校。
              </p>
            </div>

            <div className="facts" aria-label="复旦大学关键数据">
              {facts.map(([value, label]) => (
                <div className="fact" key={value}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="overview-grid overview-detail">
              <article className="panel">
                <p className="lead">复旦是一所学科门类齐全、研究实力突出的综合性大学。</p>
                <p>
                  学校在基础学科、人文社会科学、医学、管理、信息科学等领域长期积累优势，并依托上海的国际化城市环境，持续拓展全球合作、交叉研究和创新创业平台。
                </p>
                <p>
                  复旦的大学精神既重视深厚的学术训练，也强调公共责任、独立思考与面向现实问题的行动能力。
                </p>
              </article>
              <aside className="panel quote">
                <p>
                  博学而笃志
                  <br />
                  切问而近思<span>复旦大学校训</span>
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="campus-band" id="campus">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <p className="section-kicker">Campuses</p>
                <h2>四个校区，连接学术、医学与创新</h2>
              </div>
              <p>
                复旦的校园空间分布在上海不同片区，承载不同学科生态，也共同构成学校统一的教学科研体系。
              </p>
            </div>

            <div className="campus-grid">
              {campuses.map(([name, description]) => (
                <article className="campus-card" key={name}>
                  <strong>{name}</strong>
                  <span>{description}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="history">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <p className="section-kicker">History</p>
                <h2>百廿复旦：在时代变迁中持续生长</h2>
              </div>
              <p>
                复旦的发展历史与中国现代高等教育的形成、迁徙、重建和全球化进程紧密相连。
              </p>
            </div>

            <div className="timeline">
              {timeline.map(([year, description]) => (
                <article className="time-item" key={year}>
                  <b>{year}</b>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="academic">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <p className="section-kicker">Academic</p>
                <h2>扎根基础学科，面向前沿问题</h2>
              </div>
              <p>
                复旦的学术格局强调“厚基础、宽口径、重交叉”，在多个领域形成高水平研究平台。
              </p>
            </div>

            <div className="academic-grid">
              {academics.map(([icon, title, description]) => (
                <article className="academic-item" key={title}>
                  <div className="icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="life" id="life">
          <div className="section-inner life-layout">
            <figure className="image-frame">
              <img src={auditoriumUrl} alt="复旦大学相辉堂" />
            </figure>
            <div>
              <p className="section-kicker">Student Life</p>
              <h2>在复旦，学习也发生在课堂之外</h2>
              <div className="life-list">
                {lifeItems.map(([title, description]) => (
                  <div className="life-row" key={title}>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span>复旦大学介绍单页面 · Next.js App Router</span>
          <span>
            资料参考：
            <a href="https://www.fudan.edu.cn/" target="_blank" rel="noreferrer">
              复旦大学官网
            </a>
            {" · "}图片：Wikimedia Commons
          </span>
        </div>
      </footer>
    </>
  );
}
