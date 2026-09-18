export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-900">ژیان‌لاین سلامت</h1>
          <nav className="flex gap-4">
            <button className="text-sm font-medium text-slate-600 hover:text-emerald-700">ورود کاربر</button>
            <button className="text-sm font-medium text-white bg-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-800 transition-colors">ورود سازمانی (EAP)</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        <section className="text-center space-y-6">
          <h2 className="text-5xl font-extrabold text-slate-900 leading-tight">
            تلفیق دانش علمی و روان‌درمانی<br/> برای سلامت روان پایدار
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            در ژیان‌لاین، جلسات شما با بالاترین استانداردهای رمزنگاری سرتاسری (E2EE) محافظت می‌شود تا با خیالی آسوده، مسیر بهبود را طی کنید.
          </p>
        </section>

        {/* Action Section */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 border-t-4 border-t-emerald-600">
            <h3 className="text-xl font-bold mb-4 text-emerald-900">شروع ارزیابی علمی</h3>
            <p className="text-slate-600 mb-6">با پاسخ به غربالگری اولیه، بهترین درمانگر متناسب با نیاز خود را بیابید.</p>
            <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 font-medium">شروع تست هوشمند</button>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 border-t-4 border-t-slate-900">
            <h3 className="text-xl font-bold mb-4 text-slate-900">جستجوی متخصصان</h3>
            <p className="text-slate-600 mb-6">مشاهده لیست متخصصان تأییدشده و رزرو جلسات آنلاینِ کاملاً امن و محرمانه.</p>
            <button className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 font-medium">لیست درمانگران</button>
          </div>
        </section>

        {/* Security & Trust Features */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            { title: "رمزنگاری سرتاسری (E2EE)", desc: "تمامی جلسات و گفتگوها با پروتکل‌های پیشرفته رمزنگاری شده‌اند تا محرمانگی شما ۱۰۰٪ حفظ شود." },
            { title: "دقت علمی بالا", desc: "انتخاب درمانگران بر اساس سوابق علمی، پژوهشی و نظارت‌های بالینی مستمر." },
            { title: "پشتیبانی چندزبانه", desc: "امکان برگزاری جلسات درمانی با متخصصان مسلط به چندین زبان برای هموطنان خارج از کشور." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-xl border border-slate-200">
              <h4 className="text-lg font-bold mb-3 text-slate-900">{item.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Voice Assistant Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="group flex items-center gap-3 bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-700 transition-all duration-300 hover:pr-6">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V7a3 3 0 116 0v4a3 3 0 01-3 3z" />
          </svg>
          <span className="hidden md:block font-medium">دستیار صوتی ژیان</span>
        </button>
      </div>

      <footer className="bg-slate-900 text-slate-400 py-12 mt-16 text-center text-sm">
        <p>© ۱۴۰۵ - ژیان‌لاین سلامت. تمامی حقوق برای پلتفرم محفوظ است.</p>
      </footer>
    </div>
  );
}
