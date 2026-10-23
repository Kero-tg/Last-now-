import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Shirt,
  Smartphone,
  Tag,
  Coffee,
  Palette,
  Clock,
  CheckCircle2,
  ChevronLeft,
  ArrowUpRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { getServices } from '../lib/mock-api';
import { Service, ServiceCategory } from '../lib/types';

export const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('الكل');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices().then((res) => {
      setServices(res);
      setLoading(false);
    });
  }, []);

  const categories = [
    { id: 'الكل', label: 'كافة الخدمات' },
    { id: 'clothing', label: 'ملابس وهوديز' },
    { id: 'caps', label: 'كابات ومطرزات' },
    { id: 'stickers', label: 'استيكرات ولواصق' },
    { id: 'phone-cases', label: 'جرابات هواتف' },
    { id: 'mugs-gifts', label: 'مجّات وهدايا' },
    { id: 'custom-design', label: 'تصاميم مخصصة' },
  ];

  const filteredServices =
    activeCategory === 'الكل'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div className="py-12 sm:py-20 space-y-12 bg-[#F8F7F3] min-h-screen">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B5F55] bg-[#0B5F55]/10 px-3.5 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-[#E3A92F]" />
          <span>خدمات الطباعة والتخصيص في أسوان</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#073B35] font-display tracking-tight">
          خدمات الطباعة والتطريز المعتمدة
        </h1>
        <p className="text-sm sm:text-base text-[#4d6560] leading-relaxed">
          نقدم في «يوزرسيف» حلول طباعة مباشرة وتطريز على التيشرتات والهوديز والكابات والجرابات والاستيكرات بأعلى خامات القطن والفينيل المقاوم للعوامل الجوية.
        </p>
      </section>

      {/* Category Filter */}
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

      {/* Services Grid with Visual Photography */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-96 rounded-3xl bg-slate-200/60 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-[#073B35]/15 hover:border-[#0B5F55] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] bg-[#073B35] overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                  <div className="absolute top-3.5 inset-x-4 flex items-center justify-between z-10">
                    <span className="text-[11px] font-bold text-[#E3A92F] bg-[#073B35]/90 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E3A92F]/30">
                      {service.category === 'clothing' ? 'ملابس وهوديز' : service.category === 'caps' ? 'كابات' : service.category === 'stickers' ? 'استيكرات' : service.category === 'phone-cases' ? 'جرابات هواتف' : service.category === 'mugs-gifts' ? 'مجّات' : 'تصميم'}
                    </span>
                    {service.badge && (
                      <span className="text-[10px] font-black text-[#073B35] bg-[#E3A92F] px-2.5 py-0.5 rounded-full shadow-sm">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3.5 inset-x-4 z-10 flex items-end justify-between text-white">
                    <h3 className="font-bold text-base sm:text-lg text-white font-display drop-shadow-md">
                      {service.title}
                    </h3>
                    <span className="text-xs font-bold text-emerald-300 font-mono drop-shadow-sm">
                      {service.startingPrice}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <p className="text-xs text-[#4d6560] leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Features List */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {service.features.slice(0, 3).map((f, i) => (
                        <div key={i} className="text-xs text-[#073B35] flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0B5F55] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <Link to={`/request?service=${service.id}`} className="flex-1">
                      <Button className="w-full bg-[#0B5F55] hover:bg-[#073B35] text-white text-xs font-bold py-2.5 rounded-xl shadow-xs gap-1.5 cursor-pointer">
                        <span>ابدأ طلبك الآن</span>
                        <ArrowUpRight className="w-3.5 h-3.5 rtl:-scale-x-100" />
                      </Button>
                    </Link>

                    <Link to={`/services/${service.id}`}>
                      <Button variant="outline" className="text-xs border-[#073B35]/20 text-[#073B35] hover:bg-slate-50 px-3.5 py-2.5 rounded-xl font-semibold">
                        المواصفات
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
