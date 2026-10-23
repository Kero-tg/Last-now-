import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Award,
  Sparkles,
  ArrowUpRight,
  Calendar,
  Layers,
  ZoomIn,
  X,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { getPortfolioItems } from '../lib/mock-api';
import { PortfolioItem } from '../lib/types';

export const Portfolio: React.FC = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('الكل');
  const [loading, setLoading] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

  useEffect(() => {
    getPortfolioItems().then((res) => {
      setItems(res);
      setLoading(false);
    });
  }, []);

  const categories = [
    { id: 'الكل', label: 'كافة الأعمال' },
    { id: 'clothing', label: 'ملابس وهوديز' },
    { id: 'caps', label: 'كابات ومطرزات' },
    { id: 'stickers', label: 'استيكرات Die-Cut' },
    { id: 'phone-cases', label: 'جرابات هواتف' },
    { id: 'mugs-gifts', label: 'مجّات وهدايا' },
    { id: 'custom-design', label: 'تصاميم وسكتشات' },
  ];

  const filteredItems =
    activeCategory === 'الكل'
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="py-12 sm:py-20 space-y-12 bg-[#F8F7F3] min-h-screen">
      {/* Header Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B5F55] bg-[#0B5F55]/10 px-3.5 py-1.5 rounded-full">
          <Award className="w-3.5 h-3.5 text-[#E3A92F]" />
          <span>معرض أعمال ونماذج يوزرسيف في أسوان</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#073B35] font-display tracking-tight">
          معرض الأعمال والتنفيذات المخصصة
        </h1>
        <p className="text-sm sm:text-base text-[#4d6560] leading-relaxed">
          استكشف نماذج حقيقية من التيشرتات، الهوديز، الكابات، الاستيكرات، وجرابات الموبايل التي نفذناها لعملائنا في أسوان. يمكنك اختيار أي عمل واستخدامه كمرجع مباشر لطلبك!
        </p>
      </section>

      {/* Categories Filter Tabs */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-3 justify-start sm:justify-center scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0B5F55] text-white shadow-sm'
                  : 'bg-white text-[#073B35] border border-[#073B35]/15 hover:bg-[#F0EEE6]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Items Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-96 rounded-3xl bg-slate-200/60 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-[#073B35]/15 hover:border-[#0B5F55] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Banner Container */}
                <div className="relative aspect-[16/11] bg-[#073B35] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Scrim for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 inset-x-4 flex items-center justify-between z-10">
                    <span className="text-[11px] font-bold text-[#E3A92F] bg-[#073B35]/90 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E3A92F]/30 shadow-xs">
                      {item.category === 'clothing'
                        ? 'ملابس وهوديز'
                        : item.category === 'stickers'
                        ? 'استيكرات دي-كت'
                        : item.category === 'phone-cases'
                        ? 'جرابات موبايل'
                        : item.category === 'caps'
                        ? 'كابات ومطرزات'
                        : item.category === 'custom-design'
                        ? 'تصميم وسكتش'
                        : 'هدايا ومجات'}
                    </span>

                    <button
                      type="button"
                      onClick={() => setLightboxImage({ url: item.imageUrl || '', title: item.title })}
                      className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
                      title="معاينة بكامل الشاشة"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Client name and title over image */}
                  <div className="absolute bottom-3.5 inset-x-4 z-10 text-white">
                    <div className="flex items-center gap-2 text-[11px] text-[#E3A92F] font-bold">
                      <span>{item.clientName}</span>
                      <span className="opacity-75 font-mono">· {item.year}</span>
                    </div>
                    <h3 className="text-base font-bold text-white font-display mt-0.5 leading-snug drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content & Action */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <p className="text-xs text-[#4d6560] leading-relaxed">
                      {item.description}
                    </p>

                    {item.highlight && (
                      <div className="p-2.5 rounded-xl bg-[#F8F7F3] border border-[#073B35]/10 flex items-start gap-2 text-[11px] text-[#073B35]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B5F55] shrink-0 mt-0.5" />
                        <span>{item.highlight}</span>
                      </div>
                    )}

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.tags.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] text-[#0B5F55] bg-[#0B5F55]/10 px-2.5 py-0.5 rounded-full font-semibold"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action CTA: Use as Reference */}
                  <div className="pt-3 border-t border-slate-100">
                    <Button
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
        )}
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-[#F8F7F3]">
              <h4 className="font-bold text-sm text-[#073B35]">{lightboxImage.title}</h4>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 bg-slate-950 flex items-center justify-center max-h-[75vh] overflow-hidden">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
