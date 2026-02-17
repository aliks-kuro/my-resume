import React from 'react';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8 font-sans text-slate-800">
      {/* Header */}
      <header className="border-b-2 border-blue-500 pb-4 mb-8">
        <h1 className="text-4xl font-bold mb-2">Yuhsaku Nakai</h1>
        <div className="flex gap-4 text-blue-600">
          <a href="https://my-resume-beqkyo0ej-alik-kuros-projects.vercel.app" className="hover:underline">GitHub</a>
          <span>Email: your-email@example.com</span>
        </div>
      </header>

      {/* About */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 border-l-4 border-blue-500 pl-3">About</h2>
        <p className="leading-relaxed">
          大学4年生で、2026年4月からは大学院へ進学予定です。
          現在、量子計算や大規模言語モデル（LLM）に関心を持ち、研究と開発に励んでいます。
        </p>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 border-l-4 border-blue-500 pl-3">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold">Languages</h3>
            <p>C, C#(Unity), Python, Java, Kotlin, HTML/CSS, Javascript</p>
          </div>
          <div>
            <h3 className="font-bold">Tools & Frameworks</h3>
            <p>Next.js, FastAPI, Docker, AWS, Raspberry Pi</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 border-l-4 border-blue-500 pl-3">Research & Projects</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-blue-700">DHM-QAOA (Thesis Work)</h3>
            <p className="mt-1 text-sm text-slate-600">量子アルゴリズムを用いたゲームマッチングの最適化</p>
            <p className="mt-2 text-slate-700">
              QAOAや量子回路を活用し、マッチング精度を向上させるDHM-QAOAアルゴリズムを開発しました。
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-700">Raspberry Pi Development</h3>
            <p className="mt-2 text-slate-700">Raspberry Piを用いたハードウェア制御・IoT開発の経験があります。</p>
          </div>
        </div>
      </section>

      {/* Education & Future Plans */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 border-l-4 border-blue-500 pl-3">Education</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li><strong>大学名 理工学部</strong> (2022.04 - 2026.03)</li>
          <li>
            <strong>フランス ジャン・モネ大学 DMandMl研究室 留学予定</strong>
            <p className="text-sm text-slate-600 mt-1">
              現地の学術的な知見を深めるため、1年間の留学準備を進めています。
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}