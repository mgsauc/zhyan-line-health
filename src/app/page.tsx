export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16 bg-white rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          ژیان‌لاین سلامت
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          ژیان لاین؛ شروع مسیر سلامتی و شادابی با درمانگران باتجربه و کارآمد
        </p>
      </section>

      {/* Security Message */}
      <section className="my-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
        <h2 className="text-xl font-bold text-blue-900 mb-2">امنیت و حریم خصوصی</h2>
        <p className="text-slate-700">
          در ژیان‌لاین، جلسات شما با بالاترین استانداردهای رمزنگاری سرتاسری محافظت می‌شود تا با خیالی آسوده، مسیر سلامتی، شادابی و بهبود را آغاز کنید.
        </p>
      </section>

      {/* Grid Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Specialists Placeholder */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold mb-4">متخصصان ژیان‌لاین</h2>
          <p className="text-slate-500">لیست درمانگران مجرب ما به زودی اینجا قرار می‌گیرد...</p>
        </div>

        {/* Scientific Findings Placeholder */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold mb-4">یافته‌های علمی</h2>
          <p className="text-slate-500">آخرین مقالات و یافته‌های علمی در حوزه سلامت روان...</p>
        </div>
      </div>
    </main>
  );
}
