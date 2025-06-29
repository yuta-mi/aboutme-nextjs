import Card from "@/components/Card";

export default function Skills() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            技術スキル・経歴
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            これまでの開発経験と技術スタックをご紹介いたします
          </p>
        </div>

        {/* Technical Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            技術スタック
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="フロントエンド"
              description="React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Vue.js"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            
            <Card
              title="バックエンド"
              description="Node.js, Express.js, Python, Django, Flask, REST API, GraphQL"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              }
            />
            
            <Card
              title="データベース"
              description="PostgreSQL, MySQL, MongoDB, Redis, Prisma, データベース設計・最適化"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              }
            />
            
            <Card
              title="クラウド・インフラ"
              description="AWS, Google Cloud, Docker, CI/CD, Vercel, Cloudflare"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              }
            />
            
            <Card
              title="開発ツール"
              description="Git, GitHub, VS Code, Figma, Notion, Slack, Jira"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
            
            <Card
              title="プロジェクト管理"
              description="アジャイル開発, スクラム, 要件定義, システム設計, 品質管理"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              }
            />
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            開発経験
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  フルスタック開発
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  継続中
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                小規模から中規模のWebアプリケーション開発を担当。要件定義からデプロイメントまで、
                開発プロセス全体を経験。モダンな技術スタックを活用した効率的な開発を実践。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  業務効率化システム開発
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  実績多数
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                企業の業務プロセス改善を目的としたシステム開発。データ処理の自動化、
                レポート生成システム、在庫管理システムなど、様々な業務領域での開発経験。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">Django</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">データ分析</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">自動化</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              プロジェクトのご相談
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              技術的な課題解決やシステム開発のご相談は、お気軽にお声かけください。
              お客様のニーズに合わせた最適なソリューションをご提案いたします。
            </p>
            <a
              href="/biz-inquiry"
              className="inline-flex items-center px-8 py-4 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              お問い合わせ
            </a>
          </div>
        </section>
      </div>
    </div>
  );
} 