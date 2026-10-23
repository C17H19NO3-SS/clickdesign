import React, { useState, useEffect, useRef } from "react";

// Proje detay sayfalarının ortak parçaları: animasyonlu görsel, lightbox, başa dön butonu

export type SelectedImage = { src: string; title: string };

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
  /** Yüklenirken görünen iskelet rengi; null verilirse iskelet gösterilmez */
  skeletonClassName?: string | null;
  /** Görünmeden önceki (gizli) durum sınıfları */
  hiddenClassName?: string;
  /** Kapsayıcıya overflow-hidden uygula */
  clip?: boolean;
  /** "wrapper": kapsayıcı canlanır; "image": yalnızca görsel canlanır */
  mode?: "wrapper" | "image";
  threshold?: number;
  rootMargin?: string;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  className = "",
  wrapperClassName = "",
  skeletonClassName = "bg-neutral-100",
  hiddenClassName = "opacity-0 translate-y-8 scale-[0.97] blur-[2px]",
  clip = true,
  mode = "wrapper",
  threshold = 0.08,
  rootMargin = "0px 0px -40px 0px",
  onLoad,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // Ekranda belirdikçe (scroll edildikçe) tetiklenmesi için IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const shouldShow = isLoaded && isInView;
  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  if (mode === "image") {
    return (
      <div ref={containerRef} className={`relative overflow-hidden ${wrapperClassName}`}>
        <img
          ref={imgRef}
          {...props}
          onLoad={handleLoad}
          className={`transition-all duration-700 ease-out will-change-transform ${shouldShow ? "opacity-100 scale-100 translate-y-0" : hiddenClassName
            } ${className}`}
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${clip ? "overflow-hidden" : ""} transition-all duration-1000 ease-out will-change-transform will-change-opacity ${shouldShow ? "opacity-100 translate-y-0 scale-100 filter-none" : hiddenClassName
        } ${wrapperClassName}`}
    >
      {skeletonClassName && (
        <div
          className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${skeletonClassName} ${isLoaded ? "opacity-0" : "opacity-100 animate-pulse"
            }`}
        />
      )}
      <img
        ref={imgRef}
        {...props}
        onLoad={handleLoad}
        className={`w-full h-auto transition-opacity duration-500 ${className}`}
      />
    </div>
  );
};

/**
 * Tıklanınca görseli büyüten öğeler için ortak props: fare ile tıklama,
 * klavye ile Enter / Space ve ekran okuyucular için button rolü.
 */
export const zoomable = (open: () => void) => ({
  role: "button" as const,
  tabIndex: 0,
  onClick: open,
  onKeyDown: (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  },
});

/** Sayfa başlığını (document.title) ayarlar */
export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = title;
    }
  }, [title]);
};

interface LightboxModalProps {
  label: string;
  onClose: () => void;
  children: React.ReactNode;
  overlayClassName?: string;
}

/** Arka plana tıklayınca veya Escape ile kapanan modal kabuğu */
export const LightboxModal: React.FC<LightboxModalProps> = ({
  label,
  onClose,
  children,
  overlayClassName = "z-50 bg-black/80",
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
      className={`fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fadeIn ${overlayClassName}`}
    >
      <div className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {children}
      </div>
    </div>
  );
};

export const LightboxButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className = "",
  ...props
}) => (
  <button
    type="button"
    {...props}
    className={`w-8 h-8 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer ${className}`}
  />
);

interface ImageLightboxProps {
  image: SelectedImage | null;
  onClose: () => void;
  overlayClassName?: string;
}

/** Başlık + kapat butonu + görselden oluşan standart lightbox */
export const ImageLightbox: React.FC<ImageLightboxProps> = ({ image, onClose, overlayClassName }) => {
  if (!image) return null;
  return (
    <LightboxModal label={image.title} onClose={onClose} overlayClassName={overlayClassName}>
      <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50">
        <h3 className="text-sm font-semibold text-neutral-800">{image.title}</h3>
        <LightboxButton onClick={onClose} aria-label="Kapat">
          ✕
        </LightboxButton>
      </div>
      <div className="p-4 sm:p-6 overflow-auto max-h-[calc(90vh-70px)] flex items-center justify-center bg-[#FAFAFA]">
        <img src={image.src} alt={image.title} className="max-w-full max-h-[75vh] object-contain select-none" />
      </div>
    </LightboxModal>
  );
};

/** Lightbox için seçili görsel durumu */
export const useLightbox = () => {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  const close = React.useCallback(() => setSelectedImage(null), []);
  return { selectedImage, setSelectedImage, close };
};

interface ScrollTopButtonProps {
  /** Renk sınıfları, ör. "bg-[#1F5BFF] hover:bg-[#1647D6]" */
  colorClassName: string;
  id?: string;
}

/** 400px aşağı kaydırılınca beliren "Sayfanın Başına Dön" butonu */
export const ScrollTopButton: React.FC<ScrollTopButtonProps> = ({ colorClassName, id = "scroll-to-top-btn" }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      id={id}
      aria-label="Sayfanın Başına Dön"
      className={`fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${colorClassName}`}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};
