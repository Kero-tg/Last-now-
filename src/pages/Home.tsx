import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ChevronLeft,
  Award,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Shirt,
  Coffee,
  Smartphone,
  Layers,
  Palette
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { BrandLogo } from '../components/BrandLogo';
import { EmbroideryHero } from '../components/EmbroideryHero';
import { BeforeAfterShowcase } from '../components/BeforeAfterShowcase';
import { ProductStudio } from '../components/ProductStudio';
import { SocialDesignsShowcase } from '../components/SocialDesignsShowcase';
import { generateWhatsAppLink, YUZERSEF_WHATSAPP } from '../lib/utils';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  // 6 Primary Brand Services matching the client brief with verified high-res assets
  const servicesList = [
    {
      id: 'hoodies',
      title: 'تيشرتات وهوديز مطبوعة',
      category: 'ملابس قطن 100%',
      image: '/services/service-hoodies.jpg',
      price: 'يبدأ من 180 ج.م',
      desc: 'طباعة DTF فوتوغرافية وتطريز بارز على خامات قطن مصري عالي الكثافة مع توزيع مقاسات دقيق.',
      btnText: 'ابدأ تصميم ملابسك',
      link: '/request?service=clothing-hoodies',
    },
    {
      id: 'caps',
      title: 'كابات ومطرزات عصرية',
      category: 'تطريز ميتاليك 3D',
      image: '/services/service-caps.jpg',
      price: 'يبدأ من 95 ج.م',
      desc: 'كابات بيسبول وسناب باك بتطريز ميتاليك بارز بخيوط حريرية متراصة تقاوم الشمس والغسيل.',
      btnText: 'طلب تطريز كاب',
      link: '/request?service=caps-embroidery',
    },
    {
      id: 'stickers',
      title: 'استيكرات ولواصق مخصصة',
      category: 'قص Die-Cut فينيل',
      image: '/services/service-stickers.jpg',
      price: 'يبدأ من 50 ج.م',
      badge: 'تسليم سريع',
      desc: 'استيكرات فينيل ألماني مقاومة للماء والخدش، مقصوصة بدقة دي-كت على حدود الشعار.',
      btnText: 'صمم استيكراتك',
      link: '/request?service=stickers-labels',
    },
    {
      id: 'mugs',
      title: 'مجّات وهدايا ترويجية',
      category: 'سيراميك وسبلميشن',
      image: '/services/service-mugs.jpg',
      price: 'يبدأ من 85 ج.م',
      desc: 'مجّات سيراميك ناصعة ومجّات سحرية حرارية وثرامس وبوكسات تذكارية للهدايا والمناسبات.',
      btnText: 'طلب مجّات وهدايا',
      link: '/request?service=mugs-promotional-gifts',
    },
    {
      id: 'cases',
      title: 'جرابات هواتف مخصصة',
      category: 'طباعة UV ثلاثية الأبعاد',
      image: '/services/service-cases.jpg',
      price: 'يبدأ من 120 ج.م',
      desc: 'كفرات سيليكون وصلبة مدعمة لكافة موديلات آيفون وسامسونج مع طباعة بارزة مانعة للانزلاق.',
      btnText: 'اختر موديل هاتفك',
      link: '/request?service=phone-cases',
    },
    {
      id: 'design',
      title: 'تصاميم مخصصة ومساعدة فنية',
      category: 'فيكتور وهوية بصرية',
      image: '/services/service-design.jpg',
      price: 'يبدأ من 70 ج.م',
      desc: 'فريق مصممي يوزرسيف جاهز لتحويل رسوماتك اليدوية وسكتشاتك إلى ملفات طباعة وفيكتور احترافية.',
      btnText: 'تواصل مع مصمم',
      link: '/request?service=custom-designs',
    },
  ];

  // Verified high-resolution portfolio models
  const portfolioHighlights = [
    {
      id: 'port-1',
      title: 'هوديز ملكية مطرزة لطلاب كلية الهندسة بأسوان',
      clientName: 'دفعة هندسة أسوان',
      category: 'ملابس وهوديز',
      serviceId: 'clothing-hoodies',
      description: 'تنفيذ 120 هودي أسود فاخر مع تطريز شعار الكلية بخيوط ميتاليك ذهبية ثلاثية الأبعاد على الصدر وتوزيع مقاسات دقيق.',
      imageUrl: '/showcase/premium-embroidered-hoodie.jpg',
    },
    {
      id: 'port-2',
      title: 'استيكرات فينيل Die-Cut مقاومة للماء والحرارة',
      clientName: 'براند أسوان كرافت',
      category: 'استيكرات فينيل',
      serviceId: 'stickers-labels',
      description: '500 استيكر Die-cut مقصوص على شكل الشعار بلمعان مطفي يتحمل رطوبة وشمس أسوان لتغليف حقائب المنتجات.',
      imageUrl: '/services/service-stickers.jpg',
    },
    {
      id: 'port-3',
      title: 'الباقة الشاملة لهوية ومقتنيات يوزرسيف الملكية',
      clientName: 'استوديو يوزرسيف الإبداعي',
      category: 'المجموعة الكاملة',
      serviceId: 'clothing-hoodies',
      description: 'استعراض متكامل للمجموعة الرسمية: هوديز، كابات مطرزة، مجات سيراميك، استيكرات دي-كت، ونوت بوك فاخر.',
      imageUrl: '/showcase/luxury-flat-lay.png',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden bg-[#F8F7F3]">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: Artisanal Hero with Golden Embroidery Animation
      ───────────────────────────────────────────────────────────── */}
      <EmbroideryHero />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: Sketch-to-Product (Before & After Slider)
      ───────────────────────────────────────────────────────────── */}
      <BeforeAfterShowcase />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: Services Catalogue (6 High-Fidelity Cards)
      ───────────────────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#0B5F55] font-bold text-xs mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>كتالوج الخدمات والمنتجات المعتمدة</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#073B35] font-display">
              خدمات الطباعة والتطريز في أسوان
            </h2>
            <p className="text-sm text-[#4d6560] mt-1 max-w-xl">
              نقدم حلولاً متكاملة للأفراد والمشاريع؛ من الملابس والكابات إلى الاستيكرات والمجات بأعلى مقاييس الفخامة.
            </p>
          </div>

          <Link to="/services">
            <Button variant="outline" className="gap-2 shrink-0 border-[#073B35]/20 hover:bg-white text-[#073B35] font-bold text-xs">
              <span>استعراض كل الخدمات الستة</span>
              <ChevronLeft className="w-4 h-4 rtl:rotate-0" />
            </Button>
          </Link>
        </div>

        {/* 6 Clean High-Resolution Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl border border-[#073B35]/15 hover:border-[#0B5F55] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#073B35]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Category & Badge */}
                <div className="absolute top-3.5 inset-x-4 flex items-center justify-between z-10">
                  <span className="text-[11px] font-bold text-[#E3A92F] bg-[#073B35]/90 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E3A92F]/30">
                    {service.category}
                  </span>
                  {service.badge && (
                    <span className="text-[10px] font-black text-[#073B35] bg-[#E3A92F] px-2.5 py-0.5 rounded-full shadow-sm">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Bottom title & price over scrim */}
                <div className="absolute bottom-3 inset-x-4 flex items-end justify-between z-10 text-white">
                  <h3 className="font-bold text-base sm:text-lg text-white font-display drop-shadow-md">
                    {service.title}
                  </h3>
                  <span className="text-xs font-bold text-emerald-300 font-mono drop-shadow-sm">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Description & Action */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[#4d6560] leading-relaxed">
                  {service.desc}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                  <Link to={service.link} className="flex-1">
                    <Button
                      className="w-full bg-[#0B5F55] hover:bg-[#073B35] text-white text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer shadow-xs gap-1.5"
                    >
                      <span>{service.btnText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 rtl:-scale-x-100" />
                    </Button>
                  </Link>

                  <Link to={`/services/${service.id}`}>
                    <Button
                      variant="outline"
                      className="text-xs border-[#073B35]/20 text-[#073B35] hover:bg-slate-50 px-3 py-2.5 rounded-xl font-semibold"
                    >
                      التفاصيل
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: Interactive 3D Product Studio Preview
      ───────────────────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#073B35]/15 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B5F55] bg-[#0B5F55]/10 px-3.5 py-1.5 rounded-full">
              <Palette className="w-3.5 h-3.5 text-[#E3A92F]" />
              <span>استوديو المعاينة التفاعلي 360°</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#073B35] font-display">
              عاين تصميمك وألوانك قبل بدء الطباعة
            </h2>
            <p className="text-xs sm:text-sm text-[#4d6560] leading-relaxed">
              اختر نوع المنتج، بدّل بين ألوان القماش، دوّر المج 360 درجة، وتأكد من تناسق الهوية وشعارك على الخامة الواقعية.
            </p>
          </div>

          <ProductStudio defaultProductId="tshirt" />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: Portfolio Highlights with "Use as Reference"
      ───────────────────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#0B5F55] font-bold text-xs mb-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>نماذج وأعمال نفذت بأسوان</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#073B35] font-display">
              أعمال حقيقية بجودة استثنائية
            </h2>
            <p className="text-sm text-[#4d6560] mt-1">
              اختر أي نموذج ينال إعجابك واضغط "استخدم كمرجع" ليتم إدراجه تلقائياً في معالج طلبك!
            </p>
          </div>

          <Link to="/portfolio">
            <Button variant="outline" className="gap-2 shrink-0 border-[#073B35]/20 hover:bg-white text-[#073B35] font-bold text-xs">
              <span>تصفح كافة أعمال المعرض</span>
              <ChevronLeft className="w-4 h-4 rtl:rotate-0" />
            </Button>
          </Link>
        </div>

        {/* 3 Prominent Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {portfolioHighlights.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-[#073B35]/15 hover:border-[#0B5F55] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden group"
            >
              {/* Card visual */}
              <div className="h-56 bg-[#073B35] relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                
                {/* Category Badge */}
                <div className="absolute top-3.5 start-3.5 z-10">
                  <span className="bg-[#E3A92F] text-[#073B35] font-black text-[11px] shadow-md px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Client info */}
                <div className="absolute bottom-3.5 inset-x-4 text-white z-10">
                  <span className="text-[11px] text-[#E3A92F] font-bold block">{item.clientName}</span>
                  <h3 className="text-sm font-black leading-snug mt-0.5 text-white drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[#4d6560] leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-slate-100">
                  <Button
                    size="sm"
                    onClick={() =>
                      navigate(`/request?service=${item.serviceId}&ref=${encodeURIComponent(item.title)}`)
                    }
                    className="w-full text-xs font-bold gap-2 bg-[#0B5F55] hover:bg-[#073B35] text-white py-2.5 rounded-xl cursor-pointer shadow-xs"
                  >
                    <span>استخدم هذا العمل كمرجع لطلبك</span>
                    <ArrowUpRight className="w-3.5 h-3.5 rtl:-scale-x-100" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: Distinctive Feature: "Request-Readiness Assistant"
      ───────────────────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#073B35] via-[#0B5F55] to-[#012C2B] text-white p-7 sm:p-12 shadow-2xl border border-emerald-600/40 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3A92F]/20 border border-[#E3A92F]/40 text-[#E3A92F] text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-[#E3A92F]" />
                <span>الميزة الحصرية لـ «يوزرسيف»</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white font-display leading-tight">
                مساعد جاهزية الطلب الذكي (Request-Readiness Assistant)
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-light">
                وفقاً لملاحظات عملاء ومعامل الطباعة بأسوان، فإن نقص البيانات وتفاوت المقاسات يمثل العائق الأكبر لتأخر الإنتاج. طورنا مساعداً ذكياً يفحص مدخلاتك لحظة بلحظة:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 bg-white/10 rounded-xl p-3 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#E3A92F] shrink-0 mt-0.5" />
                  <span className="text-xs text-white">فحص تطابق مجموع المقاسات (S..XXL) مع الكمية الكلية</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/10 rounded-xl p-3 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#E3A92F] shrink-0 mt-0.5" />
                  <span className="text-xs text-white">التحقق الإلزامي من تحديد موضع الطباعة (صدر، ظهر، كم)</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/10 rounded-xl p-3 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#E3A92F] shrink-0 mt-0.5" />
                  <span className="text-xs text-white">فحص ملفات التصميم أو توجيه طلب المساعدة الفنية</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/10 rounded-xl p-3 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#E3A92F] shrink-0 mt-0.5" />
                  <span className="text-xs text-white">حقول ديناميكية لموديل الهاتف وقص الاستيكرات Die-Cut</span>
                </div>
              </div>

              <div className="pt-3">
                <Link to="/request">
                  <Button className="bg-[#E3A92F] hover:bg-[#d49b24] text-[#073B35] font-black text-sm px-6 py-3 rounded-xl shadow-lg border-none">
                    <span>جرّب معالج الطلب والمساعد الذكي الآن</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              {/* Interactive Mock Preview Box */}
              <div className="w-full max-w-sm bg-[#052925] border-2 border-emerald-500/40 rounded-2xl p-5 shadow-2xl text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-emerald-800/80 pb-2">
                  <span className="font-bold text-[#E3A92F] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    لوحة فحص الجاهزية اللحظية
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono">
                    فحص نشط
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-200">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      الكمية والمنتج: 10 هوديز
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold">مكتمل</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-200">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      المقاسات: S(2) M(4) L(3) XL(1)
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold">مطابق 10/10</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-200">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      موضع الطباعة: الصدر + الظهر
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold">محدد</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-900/40 border border-emerald-500/30 text-emerald-100 text-[11px] text-center font-medium">
                  طلبك استوفى كافة شروط المعمل وجاهز للمراجعة الفورية!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: Social Campaigns & Brand Assets
      ───────────────────────────────────────────────────────────── */}
      <SocialDesignsShowcase />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: Customer Journey Workflow
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 border-y border-[#073B35]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-[#0B5F55] uppercase tracking-wider">سير العمل المعتمد بأسوان</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#073B35] font-display">
              رحلة طلبك من الفكرة حتى الاستلام
            </h2>
            <p className="text-sm text-[#4d6560]">
              خطوات منظمة ومباشرة تضمن عدم حدوث أي مفاجآت أو أخطاء في المقاسات والألوان.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'حدد المواصفات والكمية',
                desc: 'اختر المنتج والألوان ووزع المقاسات بدقة داخل معالج الطلب المرن.',
              },
              {
                step: '02',
                title: 'فحص الجاهزية الذكي',
                desc: 'يتأكد المساعد من تطابق المقاسات وتحديد موضع الطباعة ومرفقات التصميم.',
              },
              {
                step: '03',
                title: 'كود التتبع ومحادثة الواتساب',
                desc: 'احصل فوراً على كود متابعة رسمي (YZ-xxxx) ورسالة جاهزة لمعمل أسوان.',
              },
              {
                step: '04',
                title: 'التنفيذ والاستلام بأسوان',
                desc: 'مراجعة التصميم، بدء خطوط الإنتاج، والاستلام من مقرنا بأسوان أو عبر الشحن.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8F7F3] rounded-3xl p-6 border border-[#073B35]/10 shadow-xs relative overflow-hidden"
              >
                <span className="text-4xl font-black text-slate-300/40 absolute top-4 end-4 select-none pointer-events-none font-mono">
                  {item.step}
                </span>
                <div className="w-8 h-8 rounded-xl bg-[#0B5F55] text-white flex items-center justify-center font-bold text-xs mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-base text-[#073B35] mb-2">{item.title}</h3>
                <p className="text-xs text-[#4d6560] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/request">
              <Button size="lg" className="bg-[#E3A92F] hover:bg-[#d49b24] text-[#073B35] font-black px-8 py-3.5 rounded-xl shadow-md">
                ابدأ رحلة طلبك الآن
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: Final Direct WhatsApp Call to Action
      ───────────────────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#073B35] via-[#0B5F55] to-[#073B35] text-white p-8 sm:p-14 overflow-hidden shadow-2xl border-2 border-[#0B5F55]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-5 text-center sm:text-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3A92F]/20 text-[#E3A92F] text-xs font-bold">
                <span>تواصل مباشر بأسوان</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black leading-tight text-white font-display">
                هل لديك فكرة أو طلب خاص وتبحث عن لمسة تليق بك؟
              </h2>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-light">
                فريق يوزرسيف في أسوان في انتظارك. يمكنك البدء عبر معالج الطلب الذكي أو التواصل معنا مباشرة عبر الواتساب للاستشارة السريعة.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
                <Link to="/request" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-[#E3A92F] text-[#073B35] hover:bg-[#d49b24] font-black shadow-md border-none py-3.5 px-8 rounded-xl">
                    ابدأ معالج الطلب الذكي
                  </Button>
                </Link>
                
                <a
                  href={generateWhatsAppLink(undefined, 'مرحباً يوزرسيف، أود الاستفسار عن تفاصيل وخدمات الطباعة بأسوان.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="ghost" size="lg" className="w-full sm:w-auto text-white hover:bg-white/10 border border-white/30 gap-2 py-3.5 px-6 rounded-xl">
                    <MessageCircle className="w-4 h-4 text-emerald-300" />
                    <span>واتساب أسوان ({YUZERSEF_WHATSAPP})</span>
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="p-6 rounded-3xl bg-[#0B5F55]/40 border border-white/15 backdrop-blur-xs shadow-inner flex items-center justify-center">
                <BrandLogo
                  variant="white-on-green"
                  className="h-28 sm:h-36 w-auto drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
