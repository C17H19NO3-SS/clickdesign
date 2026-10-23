import React from "react";
import { Link } from "react-router";
import {
  DesignCanvas,
  CanvasImage,
  ScrollTopButton,
  ImageLightbox,
  useLightbox,
  useDocumentTitle,
} from "@/Components/ProjectShowcase";
import { ProjectCredits } from "@/Components/ProjectCredits";

// Project Assets
import TTopicHero from "@/Resources/Projects/T-Topic.svg/T-TopicHero.svg";
import TTopicMain1 from "@/Resources/Projects/T-Topic.svg/T-TopicMain1.svg";
import TTopicMain2 from "@/Resources/Projects/T-Topic.svg/T-TopicMain2.svg";
import TTopicMain3 from "@/Resources/Projects/T-Topic.svg/T-TopicMain3.svg";
import TTopicMain4 from "@/Resources/Projects/T-Topic.svg/T-TopicMain4.svg";
import TTopicMain5 from "@/Resources/Projects/T-Topic.svg/T-TopicMain5.svg";
import TTopicMain6 from "@/Resources/Projects/T-Topic.svg/T-TopicMain6.svg";
import TTopicMain7 from "@/Resources/Projects/T-Topic.svg/T-TopicMain7.svg";
import TTopicMain8 from "@/Resources/Projects/T-Topic.svg/T-TopicMain8.svg";
import TTopicMain9 from "@/Resources/Projects/T-Topic.svg/T-TopicMain9.svg";
import TTopicMain10 from "@/Resources/Projects/T-Topic.svg/T-TopicMain10.svg";
import TTopicMain11 from "@/Resources/Projects/T-Topic.svg/T-TopicMain11.svg";
import TTopicMain12 from "@/Resources/Projects/T-Topic.svg/T-TopicMain12.svg";
import TTopicMain13 from "@/Resources/Projects/T-Topic.svg/T-TopicMain13.svg";
import TTopicMain14 from "@/Resources/Projects/T-Topic.svg/T-TopicMain14.svg";
import TTopicMain15 from "@/Resources/Projects/T-Topic.svg/T-TopicMain15.svg";
import TTopicMain16 from "@/Resources/Projects/T-Topic.svg/T-TopicMain16.svg";
import TTopicMain17 from "@/Resources/Projects/T-Topic.svg/T-TopicMain17.svg";
import TTopicMain18 from "@/Resources/Projects/T-Topic.svg/T-TopicMain18.svg";
import TTopicMain19 from "@/Resources/Projects/T-Topic.svg/T-TopicMain19.svg";
import TTopicMain20 from "@/Resources/Projects/T-Topic.svg/T-TopicMain20.svg";
import TTopicMain21 from "@/Resources/Projects/T-Topic.svg/T-TopicMain21.svg";
import TTopicMain22 from "@/Resources/Projects/T-Topic.svg/T-TopicMain22.svg";
import TTopicMain23 from "@/Resources/Projects/T-Topic.svg/T-TopicMain23.svg";
import TTopicMain24 from "@/Resources/Projects/T-Topic.svg/T-TopicMain24.svg";
import TTopicMain25 from "@/Resources/Projects/T-Topic.svg/T-TopicMain25.svg";
import TTopicMain26 from "@/Resources/Projects/T-Topic.svg/T-TopicMain26.svg";
import TTopicMain27 from "@/Resources/Projects/T-Topic.svg/T-TopicMain27.svg";
import TTopicMain28 from "@/Resources/Projects/T-Topic.svg/T-TopicMain28.svg";
import TTopicMain29 from "@/Resources/Projects/T-Topic.svg/T-TopicMain29.svg";
import TTopicMain30 from "@/Resources/Projects/T-Topic.svg/T-TopicMain30.svg";
import TTopicMain31 from "@/Resources/Projects/T-Topic.svg/T-TopicMain31.svg";

export const TTopic = () => {
  const { selectedImage, setSelectedImage, close: closeLightbox } = useLightbox();
  useDocumentTitle("Ti-Potic (T-Topic) - Bebek Patikleri & Ürün Fotoğrafçılığı | Click Design Studio");

  return (
    <div className="min-h-screen bg-white text-[#2C2623] flex flex-col items-center selection:bg-[#E8A598] selection:text-white">
      {/* Top Breadcrumb & Project Info Bar */}
      <nav aria-label="Proje Detay Navigasyonu" className="w-full max-w-[1440px] px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100">
        <Link
          to="/projects"
          id="back-to-home-link"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-neutral-600 hover:text-[#D98A7B] transition-colors group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Tüm Projeler
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FAECE8] text-[#C26B5C] uppercase tracking-wider">
            Ürün & Marka Fotoğrafçılığı
          </span>
          <span className="text-xs text-neutral-400 font-medium">
            Ti-Potic &copy; 2024
          </span>
        </div>
      </nav>

      {/* Main Container */}
      <main className="w-full flex flex-col items-center">
        <h1 className="sr-only">Ti-Potic (T-Topic) - Premium Bebek Patikleri & Çocuk Koleksiyonu</h1>
        {/* Figma "T-Potic" frame'i: 1440×11273 tasarım tuvali, ekran genişliğine oranlı */}
        <DesignCanvas height={11273} onOpen={setSelectedImage} imageProps={{ skeletonClassName: "bg-[#F9F4F0]", clip: false }}>
          <CanvasImage src={TTopicHero} x={0} y={0} w={1440} h={810} eager title="Ti-Potic - Bebek Patik Koleksiyonu Hero" alt="Ti-Potic - Bebek patikleri illüstratif logo ve doğa sevimli hayvan figürleri" />
          <CanvasImage src={TTopicMain1} x={83} y={895} w={550} h={550} radius={50} title="Sonbahar Yapraklı Bebek Patiği" alt="Ti-Potic Sonbahar Yaprak Desenli Siyah Patik" />
          <CanvasImage src={TTopicMain2} x={678} y={895} w={688} h={688} radius={50} title="Unicorn & Tatlı Bulutlar Bebek Patiği" alt="Ti-Potic Unicorn ve Bulutlar Pembe Bebek Patiği" />
          <CanvasImage src={TTopicMain3} x={83} y={1500} w={715} h={715} radius={50} title="Doğal Pamuk Yağmur Damlası Patik" alt="Ti-Potic Elde Tutulan Su Damlalı Yeşil Bebek Patiği" />
          <CanvasImage src={TTopicMain4} x={849} y={1630} w={517} h={919} radius={50} title="Denizci & Pusula Bebek Patiği" alt="Ti-Potic Deniz Temalı Mavi Bebek Patiği ve Dümen" />
          <CanvasImage src={TTopicMain5} x={83} y={2258} w={427} h={759} radius={50} title="Taze Kiraz Desenli Patik" alt="Ti-Potic Kiraz Desenli Beyaz Bebek Patiği" />
          <CanvasImage src={TTopicMain8} x={814} y={2716} w={552} h={982} radius={50} title="Pastel Çemberler Pembe Kürsü Patik" alt="Ti-Potic Pembe Kürsü Üzerinde Pastel Desenli Patik" />
          <CanvasImage src={TTopicMain7} x={86} y={3060} w={638} h={638} radius={50} title="Sevimli İnek Desenli Patik" alt="Ti-Potic İnek Figürlü Kahverengi Ahşap Zemin Bebek Patiği" />
          <CanvasImage src={TTopicMain6} x={554} y={2405} w={526} h={526} radius={50} title="Bıyık & Çam Ağacı Desenli Yeşil Patik" alt="Ti-Potic Yeşil Zemin Bıyık ve Ağaç Desenli Bebek Patiği" />
          <CanvasImage src={TTopicMain9} x={74} y={3741} w={409} h={409} radius={50} title="Sarı Zemin Örgü Ayıcıklı Patik" alt="Ti-Potic Sarı Zemin Spiral Bebek Patiği" />
          <CanvasImage src={TTopicMain11} x={957} y={3741} w={409} h={409} radius={50} title="Altın Geometrik Spiral Patik" alt="Ti-Potic Altın Aksesuarlı Pudra Spiral Bebek Patiği" />
          <CanvasImage src={TTopicMain10} x={515} y={3741} w={410} h={409} radius={50} title="Papatya Tarlası Bebek Patiği" alt="Ti-Potic Papatya Çiçekli Mavi Zemin Patik" />
          <CanvasImage src={TTopicMain12} x={74} y={4193} w={851} h={851} radius={50} title="Peluş Tavşan & Balıklı Organik Bebek Patiği" alt="Ti-Potic Peluş Tavşan ve Yıldız Çıngırak Eşliğinde Balıklı Bebek Patiği" />
          <CanvasImage src={TTopicMain13} x={957} y={4193} w={409} h={409} radius={50} title="Doğal Taş & Yeşil Kelebekli Patik" alt="Ti-Potic Taş Platform Üzerinde Kelebek ve Yaprak Bebek Patiği" />
          <CanvasImage src={TTopicMain14} x={957} y={4636} w={408} h={408} radius={50} title="Tilki & Gökkuşağı Bebek Patiği" alt="Ti-Potic Ahşap Tilki ve Çıngıraklı Mint Bebek Patiği" />
          <CanvasImage src={TTopicMain16} x={754} y={5116} w={611} h={611} radius={50} title="Sarı Tulum & Ekose Bebek Patiği" alt="Ti-Potic Sarı Örgü Tulum ve Ekoseli Siyah Beyaz Patik" />
          <CanvasImage src={TTopicMain15} x={67} y={5116} w={611} h={611} radius={50} title="Renkli Eğitici Bloklar & Otobüslü Patik" alt="Ti-Potic Mavi Zemin Renkli Ahşap Bloklar ve Otobüs Desenli Patik" />
          <CanvasImage src={TTopicMain17} x={74} y={5799} w={799} h={799} radius={50} title="Oyun Odası & Meyveli Patik" alt="Ti-Potic Renkli Halı ve Oyuncak Karpuz Eşliğinde Tropik Patik" />
          <CanvasImage src={TTopicMain18} x={780} y={5896} w={559} h={559} radius={50} title="Yıldızlı Gece Tulumu & Mutlu Bebek" alt="Ti-Potic Yatakta Gülen Bebek ve Gece Yıldızları Patik" />
          <CanvasImage src={TTopicMain20} x={651} y={6560} w={714} h={714} radius={50} title="Mavi Gökyüzü & Yaprak Desenli Patik" alt="Ti-Potic Mavi Bulutlar ve Peluş Ayı ile Yaprak Bebek Patiği" />
          <CanvasImage src={TTopicMain19} x={62} y={6750} w={524} h={524} radius={50} title="Bordo Kadife & Örgü Ayıcık Patik" alt="Ti-Potic Bordo Süet/Kadife Yumuşak Bebek Patiği" />
          <CanvasImage src={TTopicMain22} x={502} y={7349} w={863} h={863} radius={50} title="Yeni! Peek Serisi Kırmızı Petek Patik" alt="Ti-Potic Yeni Peek Serisi Kırmızı Dokulu Patik ve Puantiyeli Tulum" />
          <CanvasImage src={TTopicMain21} x={62} y={7426} w={563} h={563} radius={50} title="Ahşap Zemin Sevimli Maymun Patik" alt="Ti-Potic Maymun Figürlü Bebek Patiği ve Örgü Bere" />
          <CanvasImage src={TTopicMain23} x={62} y={8050} w={563} h={563} radius={50} title="Canlı Sarı Süet Bebek Patiği" alt="Ti-Potic Sarı Süet Patik ve Beyaz Bebek Zıbını" />
          <CanvasImage src={TTopicMain24} x={695} y={8278} w={670} h={670} radius={50} title="Bal Arısı & Ahşap Sepet Patik" alt="Ti-Potic Bal Arısı Desenli Sarı Patik ve Bal Kavanozu" />
          <CanvasImage src={TTopicMain25} x={62} y={8674} w={567} h={567} radius={50} title="Işıklı Bulut & Gece Patikleri" alt="Ti-Potic Işıklı Bulut Lambası ve Ay Dede Bebek Patiği" />
          <CanvasImage src={TTopicMain26} x={555} y={9014} w={810} h={810} radius={50} title="Yeni! Mee Potic Pamuklu Sepet Koleksiyonu" alt="Ti-Potic Yeni Mee Potic Pamuk ve Peluş Bebek Patikleri" />
          <CanvasImage src={TTopicMain27} x={62} y={9387} w={437} h={437} radius={50} title="Yeni! Peek Serisi Krem Patik & Hediye Paketi" alt="Ti-Potic Mavi Polar Zemin Hediye Paketli Krem Patik" />
          <CanvasImage src={TTopicMain29} x={743} y={9903} w={622} h={622} radius={50} title="Çamaşır İpi & Örgü Tulum" alt="Ti-Potic Çamaşır İpinde Asılı Beyaz Tulum ve Mint Yeşili Patik" />
          <CanvasImage src={TTopicMain28} x={62} y={9903} w={622} h={622} radius={50} title="Mavi Polar & Şişeli Patik" alt="Ti-Potic Mavi Polar Zemin Peluş Deniz Kızı ve Gri Bebek Patiği" />
          <CanvasImage src={TTopicMain30} x={62} y={10579} w={622} h={622} radius={50} title="Gri Örgü Patik & Çizgili Elbise" alt="Ti-Potic Çizgili Elbise Bez Bebek ve Gri Süet Patik" />
          <CanvasImage src={TTopicMain31} x={743} y={10579} w={622} h={622} radius={50} title="Yeni! Mee Potic Pembe Bukle Patik" alt="Ti-Potic Ahşap Zemin Pembe Bukle Kürk Bebek Patiği" />
        </DesignCanvas>

        <ProjectCredits
          title="Ti-Potic (T-Topic) Koleksiyonu"
          description="Bebek ve çocuk patikleri için hazırlanan doğal konseptli ürün fotoğrafçılığı, yaratıcı sahneleme, marka kimliği ve katalog sunumu."
        />
      </main>

      {/* Lightbox Modal */}
      <ImageLightbox image={selectedImage} onClose={closeLightbox} />

      {/* Floating Scroll to Top Button */}
      <ScrollTopButton colorClassName="bg-[#2C2623] hover:bg-[#C26B5C]" />
    </div>
  );
};

export default TTopic;
