import React from 'react';
import Navigation from '@/components/Navigation';

const publicationsData = [
  {
    id: 1,
    title: "3rd place Award",
    image: "/assets/Sans titre (1350 x 1350 px).png",
    path: "https://www.instagram.com/p/DG09ohBoR_m/?igsh=aHdsMHIzZmo1dWsz"
  },
  {
    id: 2,
    title: "Mentioned in ArtX Gallery",
    image: "/assets/Design sans titre (71).png",
    path: "https://www.art-x.gallery/syrine-jemal"
  },
  {
    id: 3,
    title: "What if shops come to us : Design Therapy",
    image: "/assets/WhatsApp Image 2025-08-05 at 3.58.30 PM (1).jpeg",
    path: "https://www.linkedin.com/posts/designtherapy_aiarchitecture-midjourney-midjourneyarchitecture-activity-7268925639183773696-lLoS"
  },
  {
    id: 4,
    title: "Art Beacon Gallery",
    image: "/assets/syrine jemal.jpeg",
    path: "https://www.artbeacongallery.com/post/syrine-jemal"
  },
  {
    id: 5,
    title: "Honorable Mention : Futurly",
    image: "/assets/Sans titre (1350 x 1350 px) (3).png",
    path: "https://www.instagram.com/p/DJe2BLooa3q/?img_index=5&igsh=MTVpbjd0Ynk2aWF6ZA%3D%3D"
  },
  {
    id: 6,
    title: "Featured in Culted",
    image: "/assets/SnapInsta.to_468091058_1291042391831095_5771088012524780855_n.jpg",
    path: "https://www.instagram.com/p/DCuGHOzAa4Q/?igsh=cHF1MWg1ZWNxbWlo"
  },
  {
    id: 7,
    title: "The Bridge of Equality",
    image: "/assets/Capture d'écran 2025-08-05 164120.png",
    path: "https://www.unrisd.org/en/syrine-jemal"
  }
];

const Publications: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {publicationsData.map((item) => (
            <a
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
              className="group block cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-center">{item.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
