import React, { useState } from 'react';
import { Camera, X, ZoomIn, Image as ImageIcon } from 'lucide-react';

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: 'Classroom' | 'Creative Arts' | 'Montessori & Play' | 'Quiet & Care';
  alt: string;
  description: string;
}

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const photos: GalleryItem[] = [
    {
      id: 'photo-1',
      src: '/images/hero_classroom.jpg',
      title: 'Morning Interactive Circle & Story Session',
      category: 'Classroom',
      alt: 'Teacher and toddlers seated on a pastel rug engaged in storybook time',
      description: 'Our vibrant classroom brings children together for daily reading, listening comprehension, and social sharing.'
    },
    {
      id: 'photo-2',
      src: '/images/art_activity.jpg',
      title: 'Sensory Painting & Wooden Block Building',
      category: 'Creative Arts',
      alt: 'Toddlers smiling and exploring safe watercolor painting at low tables',
      description: 'Hands-on creative arts allow little fingers to strengthen motor skills and unleash spontaneous imagination.'
    },
    {
      id: 'photo-3',
      src: '/images/montessori_play.jpg',
      title: 'Montessori Wooden Sorting & Shape Exploration',
      category: 'Montessori & Play',
      alt: 'Children concentrating on wooden Montessori shape sorting blocks on a mint mat',
      description: 'Self-paced learning materials that develop problem-solving, spatial reasoning, and persistence.'
    },
    {
      id: 'photo-4',
      src: '/images/reading_corner.jpg',
      title: 'Cozy Reading Nook & Peaceful Daycare Haven',
      category: 'Quiet & Care',
      alt: 'Daycare rest corner with soft cushions, picture books, and plush animal toys',
      description: 'A comforting, soft corner where children recharge, listen to calming tales, or enjoy peaceful afternoon naps.'
    }
  ];

  const categories = ['All', 'Classroom', 'Creative Arts', 'Montessori & Play', 'Quiet & Care'];

  const filteredPhotos = activeCategory === 'All'
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white/70 border-t border-[#EFE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#166534] bg-[#DDF4E7] px-3 py-1 rounded-full border border-[#C8EDD7]">
            <Camera className="w-3.5 h-3.5" />
            <span>Campus Life & Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#203047] tracking-tight">
            See the Joy in Action
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Authentic glimpses into our classrooms, creative corners, and safe daycare spaces.
          </p>

          {/* Interactive Category Filter Tabs (Zero-pill compliant segmented buttons) */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#203047] text-white shadow-xs'
                    : 'bg-[#FFF9F3] text-[#64748B] hover:text-[#203047] border border-[#EFE7DE]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-3xl overflow-hidden border-2 border-[#EFE7DE] bg-[#FFF9F3] shadow-xs cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-16/10 overflow-hidden relative">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover overlay with zoom hint */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#203047] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/90 text-[#203047] shadow-xs backdrop-blur-xs">
                    {photo.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-base text-[#203047] group-hover:text-[#25A765] transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Close photo view"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-full max-h-[70vh] object-contain"
                />
              </div>

              <div className="p-6 bg-white space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#166534] bg-[#DDF4E7] px-2.5 py-0.5 rounded-full">
                    {selectedPhoto.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#203047]">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-[#64748B]">
                  {selectedPhoto.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
