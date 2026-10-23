import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

/**
 * Belirtilen DOM elemanına veya id'ye yumuşak (smooth) şekilde kaydırma yapar.
 */
export function smoothScrollTo(
  target: HTMLElement | string | null,
  options?: { offset?: number; duration?: number }
) {
  if (!target) return false;
  const el = typeof target === "string" ? document.getElementById(target) : target;
  if (!el) return false;

  const { offset = 32, duration = 800 } = options || {};
  const targetPosition = Math.max(0, el.getBoundingClientRect().top + window.scrollY - offset);
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;

  // Zaten hedef konumdaysa işlem yapma
  if (Math.abs(distance) < 6) return true;

  // Kullanıcı azaltılmış hareket tercih ettiyse anında git
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, targetPosition);
    return true;
  }

  let startTime: number | null = null;
  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
  return true;
}

/**
 * Sayfa yönlendirmelerinde scroll davranışını yöneten bileşen:
 * 1. Her sayfa değişiminde daima sayfanın en üstünden (top: 0) başlar.
 * 2. Eğer URL'de bir hash veya belirli bir eleman belirtilmişse (örn: /#contact),
 *    önce sayfa en yukarıdan başlar, ardından o elemana doğru pürüzsüz (smooth) kaydırır.
 */
export function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const prevPathnameRef = useRef<string>(pathname);

  // Tarayıcının varsayılan scroll geri yüklemesini devre dışı bırak
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const isNewPage = prevPathnameRef.current !== pathname;
    prevPathnameRef.current = pathname;

    if (hash) {
      const targetId = decodeURIComponent(hash.replace("#", ""));

      if (isNewPage) {
        // Yeni bir sayfaya geçiş yapıldıysa: her zaman en üstten başla
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });

        // DOM ve görsel yerleşimleri tamamlandıktan sonra hedefe doğru smooth scroll yap
        let cancelled = false;
        const timer1 = setTimeout(() => {
          if (cancelled) return;
          const success = smoothScrollTo(targetId, { offset: 32, duration: 850 });
          if (!success) {
            // Bileşen gecikmeli mount oluyorsa ikinci bir kontrol
            const timer2 = setTimeout(() => {
              if (!cancelled) {
                smoothScrollTo(targetId, { offset: 32, duration: 850 });
              }
            }, 120);
            return () => clearTimeout(timer2);
          }
        }, 80);

        return () => {
          cancelled = true;
          clearTimeout(timer1);
        };
      } else {
        // Aynı sayfa içerisinde belirli bir elemana yönlendiriliyorsa doğrudan smooth scroll yap
        smoothScrollTo(targetId, { offset: 32, duration: 800 });
      }
    } else {
      // Herhangi bir eleman hedefi yoksa, her sayfa yönlendirmesinde kesinlikle en tepeden başla
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash, key]);

  return null;
}

export default ScrollToTop;
