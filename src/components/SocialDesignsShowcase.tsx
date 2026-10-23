import React, { useState } from 'react';
import { Download, Sparkles, Feather, Palette, Compass, Eye, Share2, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { BrandLogo } from './BrandLogo';
import { YUZERSEF_WHATSAPP, generateWhatsAppLink } from '../lib/utils';

export const SocialDesignsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'campaigns' | 'studio'>('campaigns');

  const hqShowcaseItems = [
    {
      id: 'luxury-flat-lay',
      title: 'استعراض تشكيلة المنتجات الكاملة (Studio Flat Lay)',
      subtitle: 'هوديز، تيشرتات، كابات مطرزة، مجات، وجرابات بأعلى معايير التشطيب',
      format: 'دقة فائقة (High Resolution Studio)',
      imageSrc: '/showcase/luxury-flat-lay.png',
      badge: 'التشكيلة الكاملة',
      tags: ['هوديز ملكية', 'كابات 3D', 'مجات سيراميك', 'جرابات فخمة'],
    },
    {
      id: 'premium-embroidered-hoodie',
      title: 'التطريز الميتاليك البارز (Metallic Embroidery Close-Up)',
      subtitle: 'تفاصيل دقيقة لغرز الحرير والذهب ثلاثية الأبعاد على قماش قطني فاخر',
      format: 'ماكرو كلوز أب (4K Macro View)',
      imageSrc: '/showcase/premium-embroidered-hoodie.jpg',
      badge: 'تطريز ميتاليك 3D',
      tags: ['خيوط ميتاليك', 'حبكة متراصة', 'قماش أسود فاحم', 'أصالة أسوان'],
    },
  ];

  const socialPosts = [
    {
      id: 'post-1',
      kicker: 'حملة خدمة الملابس المخصصة',
      headline: 'اطبع اللي في دماغك على تيشيرت وهودي فاخر',
      subhead: 'خامات قطن مصري 100% معالجة ضد الانكماش مع طباعة DTF تدوم للأبد وتطريز ميتاليك ثلاثي الأبعاد.',
      serviceTag: 'تيشرتات · هوديز · سويت شيرت',
      ctaText: 'اطلب من الموقع الآن',
      ctaLink: '/request?service=clothing-hoodies',
      aspectRatio: 'aspect-[4/5]',
      bgGradient: 'from-[#073B35] via-[#0B5F55] to-[#012C2B]',
      accentColor: '#E3A92F',
      imageUrl: '/services/service-hoodies.jpg',
    },
    {
      id: 'post-2',
      kicker: 'حملة الهوية والانطلاق الرقمي',
      headline: 'خلّيك مختلف.. خلّيك يوزرسيف',
      subhead: 'ارفع فكرتك أو تصميمك وابدأ طلبك في دقيقتين مع فحص الجاهزية الذكي بدون أي أخطاء في المقاسات.',
      serviceTag: 'كابات · استيكرات Die-Cut · مجات حرارية',
      ctaText: 'ابدأ طلبك الذكي',
      ctaLink: '/request',
      bgGradient: 'from-[#0B5F55] via-[#073B35] to-[#011C1B]',
      accentColor: '#5ee7cf',
      imageUrl: '/showcase/luxury-flat-lay.png',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F8F7F3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B5F55] bg-[#0B5F55]/10 px-3.5 py-1.5 rounded-full">
            <Feather className="w-3.5 h-3.5 text-[#E3A92F]" />
            <span>الهوية البصرية وتصاميم السوشيال ميديا</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#073B35] tracking-tight font-display">
            أسلوب يوزرسيف في التصميم والأناقة
          </h2>
          <p className="text-sm sm:text-base text-[#4d6560] leading-relaxed">
            استعراض الحملات التسويقية المعتمدة للمنصات الرقمية ومطابقة الهوية البصرية للعلامة التجارية في أسوان.
          </p>

          {/* Sub-Tabs Selector */}
          <div className="pt-2 flex justify-center gap-2">
            <button
              onClick={() => setActiveTab('campaigns')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'campaigns'
                  ? 'bg-[#0B5F55] text-white shadow-sm'
                  : 'bg-white text-[#073B35] border border-[#073B35]/15 hover:bg-[#F0EEE6]'
              }`}
            >
              تصاميم حملات السوشيال ميديا (2 Posts)
            </button>
            <button
              onClick={() => setActiveTab('studio')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'studio'
                  ? 'bg-[#0B5F55] text-white shadow-sm'
                  : 'bg-white text-[#073B35] border border-[#073B35]/15 hover:bg-[#F0EEE6]'
              }`}
            >
              أصول وتصوير الاستوديو عالي الدقة (Studio Assets)
            </button>
          </div>
        </div>

        {/* Tab 1: 2 Social Media Marketing Posts (Aspect Ratio 4:5) */}
        {activeTab === 'campaigns' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {socialPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#0B5F55]/40 flex flex-col justify-between relative group"
                style={{ aspectRatio: '4/5' }}
              >
                {/* Background Image with Deep Overlay */}
                <img
                  src={post.imageUrl}
                  alt={post.headline}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${post.bgGradient} opacity-90`} />

                {/* Top Bar of Social Post */}
                <div className="relative z-10 p-6 flex items-center justify-between">
                  <BrandLogo variant="white-on-green" className="h-8 w-auto drop-shadow-md" />
                  <span className="text-[11px] font-bold text-emerald-200/90 bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10">
                    {post.kicker}
                  </span>
                </div>

                {/* Center Content of Social Post */}
                <div className="relative z-10 px-6 sm:px-8 space-y-3 text-white">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold backdrop-blur-xs">
                    {post.serviceTag}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-display leading-tight text-white drop-shadow-md">
                    {post.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-light drop-shadow-sm">
                    {post.subhead}
                  </p>
                </div>

                {/* Bottom Action Footer */}
                <div className="relative z-10 p-6 pt-0 flex items-center justify-between gap-3 border-t border-white/10 pt-4 mt-2">
                  <a
                    href={post.ctaLink}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-black bg-[#E3A92F] hover:bg-[#d49b24] text-[#073B35] shadow-lg transition-all active:scale-[0.98]"
                  >
                    <span>{post.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
                  </a>

                  <a
                    href={generateWhatsAppLink(undefined, `أريد الاستفسار عن حملة: "${post.headline}"`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-all backdrop-blur-xs"
                    title="تواصل واتساب"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: High Resolution Studio Assets */}
        {activeTab === 'studio' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {hqShowcaseItems.map((item) => (
              <Card key={item.id} className="overflow-hidden border border-[#073B35]/20 hover:border-[#0B5F55] transition-all duration-300 shadow-xl bg-white flex flex-col justify-between group rounded-3xl">
                {/* Product Visual Container */}
                <div className="relative aspect-[4/3] bg-[#073B35] overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Format Tag & Badge */}
                  <div className="absolute top-3.5 start-3.5 z-10 flex items-center gap-2">
                    <span className="bg-[#E3A92F] text-[#073B35] font-black text-[11px] shadow-md px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                    <span className="bg-[#073B35]/90 text-white border border-[#E3A92F]/60 text-[10px] font-mono px-2.5 py-1 rounded-full backdrop-blur-xs">
                      {item.format}
                    </span>
                  </div>

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                  <div className="absolute bottom-3.5 inset-x-4 text-white z-10">
                    <h4 className="font-bold text-sm sm:text-base drop-shadow-md text-white font-display">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-emerald-200/90 line-clamp-1 drop-shadow-sm mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Details & Download Button */}
                <CardContent className="p-5 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#0B5F55]/10 text-[#0B5F55] font-bold">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                    <a
                      href={item.imageSrc}
                      download={`${item.id}.png`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full gap-2 bg-[#0B5F55] hover:bg-[#073B35] text-white text-xs font-bold py-2.5 rounded-xl cursor-pointer shadow-xs">
                        <Download className="w-4 h-4" />
                        <span>تحميل الصورة الأصلية بدقة عالية</span>
                      </Button>
                    </a>

                    <a
                      href={item.imageSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl" title="معاينة بكامل الشاشة">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Brand Editorial Philosophy Card */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-[#0B5F55]/40 bg-gradient-to-br from-[#073B35] via-[#0B5F55] to-[#012C2B] text-white p-7 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3A92F]/20 text-[#E3A92F] text-xs font-bold">
                <Feather className="w-3.5 h-3.5" />
                <span>فلسفة الأناقة والهوية البصرية</span>
              </span>
              <span className="font-mono text-xs text-emerald-200/70 tracking-wider">YUZERSEF ASWAN SIGNATURE</span>
            </div>

            {/* Quote */}
            <div className="space-y-3 border-r-4 border-[#E3A92F] pr-5 py-1">
              <h3 className="text-xl sm:text-3xl font-black text-[#E3A92F] font-display leading-snug">
                "الأناقة لا تصرخ.. بل تتحدث بهدوء من خلال أدق تفاصيل الغرز."
              </h3>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-light max-w-3xl">
                في <strong className="text-white font-bold">يوزرسيف</strong>، لا نكتفي بوضع شعارك على القماش، بل نصوغ قطعة حية تعكس هوية تفرض حضورها. نختار خيوط الحرير والميتاليك اللامعة بعناية فائقة، مع حبكة متراصة تدوم طويلاً، لنمزج روح الخط العربي الأصيل ببريق الفخامة المعاصرة.
              </p>
            </div>

            {/* Style Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
              <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xs">
                <div className="w-9 h-9 rounded-xl bg-[#E3A92F]/20 text-[#E3A92F] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  3D
                </div>
                <div>
                  <h5 className="font-bold text-sm text-white">تطريز ميتاليك بارز</h5>
                  <p className="text-xs text-emerald-100/80 mt-1 leading-relaxed">
                    بريق ذهبي وفضي متقن يمنح الشعار ملمساً ثلاثي الأبعاد لا يتأثر بالغسيل.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xs">
                <div className="w-9 h-9 rounded-xl bg-[#E3A92F]/20 text-[#E3A92F] flex items-center justify-center shrink-0 mt-0.5">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-white">باليت لوني ملكي</h5>
                  <p className="text-xs text-emerald-100/80 mt-1 leading-relaxed">
                    تناغم ساحر بين الأخضر الزمردي الداكن، الأسود الكربوني، والذهب العتيق.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xs">
                <div className="w-9 h-9 rounded-xl bg-[#E3A92F]/20 text-[#E3A92F] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-white">تشطيب مخصص لكل عميل</h5>
                  <p className="text-xs text-emerald-100/80 mt-1 leading-relaxed">
                    كل قطعة تمر بمراجعة دقيقة لنسب التصميم لضمان أعلى مستوى من الإبهار.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom WhatsApp CTA */}
            <div className="pt-4 border-t border-emerald-700/60 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-emerald-200 font-medium">صُمم ونُفّذ في أسوان بكل فخر وإتقان</span>
              <a
                href={generateWhatsAppLink(undefined, 'مرحباً يوزرسيف، أود استشارة حول تطبيق أسلوب وتطريز يوزرسيف على تصاميمي الخاصة.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="bg-[#E3A92F] hover:bg-[#d49b24] text-[#073B35] font-black text-xs gap-1.5 border-none px-6 py-2.5 rounded-xl">
                  <span>تواصل معنا للاستشارة الفنية</span>
                </Button>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
