import Button from "@/components/Button";
import meta from "@/setting/meta";

export default function Skills() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Profile Content */}
            <div className="space-y-8 animate-slide-in">
              {/* Profile Header */}
              <div className="text-center">
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                  スキル
                </h1>
                <p className="text-gray-600 leading-relaxed mb-4">
                  スキル一覧は鋭意制作中です。<br />
                  お問い合わせは下記の専用メールアドレスにご連絡ください。<br />
                  <a href={`mailto:${meta.email.address}`}>
                    <Button size="lg" className="rounded-full">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {meta.email.address}
                    </Button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
