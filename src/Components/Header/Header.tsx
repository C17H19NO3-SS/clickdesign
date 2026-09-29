import React, { useState, useEffect } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ESC tuşuna basıldığında menüyü kapat
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Header Alanı */}
      <header className="relative z-50 h-20 px-4 flex justify-end items-center">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isOpen}
          className="p-2 cursor-pointer focus:outline-none"
        >
          <svg
            width="40"
            height="22"
            viewBox="0 0 40 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            {/* Çizgi 1: Merkeze inip +45° döner (Açıldığında beyaz olur) */}
            <rect
              y="2"
              width="40"
              height="4"
              fill={isOpen ? "#FFFFFF" : "#1A1A1A"}
              className="menu-div1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                transform: isOpen
                  ? "translateY(8px) rotate(45deg)"
                  : "translateY(0) rotate(0deg)",
              }}
            />

            {/* Çizgi 2: Açıldığında giderek şeffaflaşır (opacity: 0) */}
            <rect
              y="10"
              width="40"
              height="4"
              fill={isOpen ? "#FFFFFF" : "#1A1A1A"}
              className="menu-div2 transition-all duration-200 ease-in-out"
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                opacity: isOpen ? 0 : 1,
                transform: isOpen
                  ? "scaleX(0.7) translateX(-4px)"
                  : "scaleX(1) translateX(0)",
              }}
            />

            {/* Çizgi 3: Merkeze çıkıp -45° döner (Açıldığında beyaz olur) */}
            <rect
              y="18"
              width="40"
              height="4"
              fill={isOpen ? "#FFFFFF" : "#1A1A1A"}
              className="menu-div3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                transform: isOpen
                  ? "translateY(-8px) rotate(-45deg)"
                  : "translateY(0) rotate(0deg)",
              }}
            />
          </svg>
        </button>
      </header>

      {/* Arka Plan Karartması (Backdrop) */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sağdan Açılan Koyu Menü Paneli */}
      <aside
        className={`fixed top-0 right-0 z-40 h-full w-70 sm:w-[320px] bg-[#121212] text-white shadow-2xl flex flex-col justify-start pt-30 px-10 sm:px-12 py-12 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menü Linkleri */}
        <nav className="flex flex-col space-y-6 sm:space-y-7">
          {["Hakkımızda", "Projeler", "İletişim"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-[22px] sm:text-[24px] font-normal tracking-[-0.01em] text-white hover:text-neutral-300 transition-colors cursor-pointer w-fit"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Sosyal Medya İkonları */}
        <div className="mt-12 sm:mt-14 flex items-center text-white">
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-neutral-300 hover:scale-110 active:scale-95 transition-all p-1"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 52 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.8956 17.4579C20.7736 15.7228 23.3206 14.748 25.9765 14.748C28.6324 14.748 31.1794 15.7228 33.0574 17.4579C34.9354 19.1929 35.9904 21.5462 35.9904 24C35.9904 26.4538 34.9354 28.8071 33.0574 30.5422C31.1794 32.2772 28.6324 33.252 25.9765 33.252C23.3206 33.252 20.7736 32.2772 18.8956 30.5422C17.0176 28.8071 15.9626 26.4538 15.9626 24C15.9626 21.5462 17.0176 19.1929 18.8956 17.4579ZM23.4888 29.5488C24.2775 29.8507 25.1228 30.006 25.9765 30.006C27.7006 30.006 29.354 29.3732 30.5731 28.2469C31.7922 27.1205 32.4771 25.5929 32.4771 24C32.4771 22.4071 31.7922 20.8795 30.5731 19.7531C29.354 18.6268 27.7006 17.994 25.9765 17.994C25.1228 17.994 24.2775 18.1494 23.4888 18.4512C22.7001 18.753 21.9835 19.1954 21.3799 19.7531C20.7762 20.3108 20.2974 20.9729 19.9707 21.7016C19.644 22.4303 19.4759 23.2113 19.4759 24C19.4759 24.7887 19.644 25.5697 19.9707 26.2984C20.2974 27.0271 20.7762 27.6892 21.3799 28.2469C21.9835 28.8046 22.7001 29.247 23.4888 29.5488Z"
                fill="white"
              />
              <path
                d="M38.2104 16.1264C38.6543 15.7163 38.9037 15.16 38.9037 14.58C38.9037 14 38.6543 13.4437 38.2104 13.0336C37.7665 12.6234 37.1644 12.393 36.5366 12.393C35.9088 12.393 35.3067 12.6234 34.8628 13.0336C34.4189 13.4437 34.1695 14 34.1695 14.58C34.1695 15.16 34.4189 15.7163 34.8628 16.1264C35.3067 16.5366 35.9088 16.767 36.5366 16.767C37.1644 16.767 37.7665 16.5366 38.2104 16.1264Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.9446 6.108C20.0227 6.0204 20.6851 6 25.9765 6C31.2692 6 31.9303 6.0216 34.0071 6.108C36.0814 6.1956 37.4997 6.5016 38.7388 6.9444C40.0382 7.39663 41.2154 8.10507 42.1884 9.0204C43.1795 9.91959 43.9463 11.0077 44.4354 12.2088C44.9173 13.3536 45.2472 14.6628 45.342 16.5792C45.4368 18.4992 45.4589 19.1112 45.4589 24C45.4589 28.8888 45.4368 29.5008 45.342 31.4208C45.2472 33.3372 44.9173 34.6464 44.4367 35.7912C43.9472 36.9918 43.1804 38.0794 42.1897 38.9784C41.2156 39.8952 40.0376 40.6032 38.7388 41.0544C37.4997 41.4996 36.0827 41.8044 34.0084 41.892C31.9303 41.9796 31.2679 42 25.9765 42C20.6851 42 20.0227 41.9796 17.9446 41.892C15.8704 41.8044 14.4533 41.4996 13.2143 41.0556C11.9148 40.6033 10.7376 39.8949 9.76458 38.9796C8.77228 38.0796 8.00597 36.9912 7.51761 35.7912C7.03575 34.6464 6.70585 33.3372 6.61103 31.4208C6.51622 29.5008 6.49414 28.89 6.49414 24C6.49414 19.11 6.51752 18.4992 6.61103 16.5804C6.70585 14.664 7.03705 13.3536 7.51632 12.2088C8.00579 11.0082 8.77257 9.92056 9.76328 9.0216C10.7374 8.1048 11.9154 7.3968 13.2143 6.9456C14.4533 6.5004 15.8704 6.1956 17.9446 6.108ZM33.85 9.348C31.7952 9.2616 31.1783 9.2436 25.9765 9.2436C20.7747 9.2436 20.1578 9.2616 18.103 9.348C16.2042 9.4284 15.1729 9.7212 14.4858 9.9684C13.6395 10.2564 12.8739 10.7161 12.2453 11.3136C11.5648 11.9436 11.1413 12.5436 10.7894 13.3836C10.5205 14.0184 10.2049 14.9712 10.1179 16.7256C10.0243 18.624 10.0049 19.194 10.0049 24C10.0049 28.806 10.0243 29.376 10.1179 31.2744C10.2049 33.0288 10.5218 33.9816 10.7894 34.6164C11.1012 35.3982 11.5987 36.1055 12.2453 36.6864C12.874 37.2839 13.6396 37.7435 14.4858 38.0316C15.1729 38.28 16.2042 38.5716 18.103 38.652C20.1578 38.7384 20.7734 38.7564 25.9765 38.7564C31.1796 38.7564 31.7952 38.7384 33.85 38.652C35.7489 38.5716 36.7801 38.2788 37.4672 38.0316C38.3135 37.7437 39.0792 37.284 39.7077 36.6864C40.3543 36.1056 40.8519 35.3983 41.1637 34.6164C41.4325 33.9816 41.7481 33.0288 41.8352 31.2744C41.9287 29.376 41.9482 28.806 41.9482 24C41.9482 19.194 41.9287 18.624 41.8352 16.7256C41.7481 14.9712 41.4312 14.0184 41.1637 13.3836C40.8117 12.5436 40.3896 11.9436 39.7077 11.3136C39.0258 10.6848 38.3764 10.2936 37.4672 9.9684C36.7801 9.72 35.7489 9.4284 33.85 9.348Z"
                fill="white"
              />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-neutral-300 hover:scale-110 active:scale-95 transition-all p-1"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 52 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.0582 6.58063C15.3643 6.58063 6.66131 14.3253 6.65754 23.8432C6.65503 26.887 7.54996 29.8575 9.24681 32.4739L6.49414 41.4193L16.7796 39.019C19.6406 40.4017 22.8218 41.1229 26.0507 41.1209H26.0582C36.7521 41.1209 45.4551 33.3751 45.4589 23.8571C45.4614 19.2468 43.4453 14.9071 39.7813 11.645C36.1186 8.38179 31.2481 6.58179 26.0582 6.58063ZM26.0582 38.2049H26.0519C23.1585 38.2049 20.3203 37.5128 17.8442 36.2051L17.2534 35.8939L11.1523 37.3177L12.7813 32.0222L12.3979 31.4799C10.7877 29.2109 9.93049 26.5564 9.93183 23.8432C9.93561 15.9313 17.1705 9.49663 26.0645 9.49663C30.3707 9.49779 34.4193 10.9924 37.4648 13.704C40.5103 16.4156 42.1858 20.0214 42.1833 23.856C42.1795 31.7679 34.9459 38.2049 26.0569 38.2049H26.0582ZM34.9032 27.4571C34.418 27.2423 32.0349 26.1983 31.5899 26.0531C31.1462 25.9103 30.8232 25.836 30.5002 26.268C30.1784 26.7 29.2483 27.672 28.9667 27.9588C28.6827 28.2468 28.3999 28.2817 27.9147 28.0668C27.4295 27.8508 25.8672 27.3956 24.017 25.9254C22.5753 24.7827 21.6024 23.3706 21.3196 22.9374C21.0368 22.5066 21.2894 22.2731 21.532 22.0583C21.7495 21.8667 22.0172 21.5555 22.2585 21.3035C22.4998 21.0515 22.5803 20.8715 22.7437 20.5835C22.9046 20.2966 22.8241 20.0435 22.7022 19.8286C22.5803 19.6115 21.6125 17.4886 21.2065 16.6258C20.8143 15.785 20.4146 15.8977 20.1167 15.8837C19.8339 15.8721 19.5121 15.8686 19.1866 15.8686C18.8661 15.8686 18.3394 15.9766 17.8945 16.4086C17.4508 16.8406 16.1976 17.8835 16.1976 20.0063C16.1976 22.1303 17.9347 24.1811 18.1773 24.4691C18.4199 24.756 21.5961 29.1143 26.4592 30.984C27.6155 31.4264 28.518 31.6924 29.2231 31.8921C30.3845 32.2208 31.4416 32.1731 32.2762 32.0628C33.2063 31.9386 35.1445 31.02 35.5467 30.0131C35.9515 29.0063 35.9515 28.1423 35.8308 27.9623C35.7127 27.7823 35.3884 27.6743 34.9032 27.4571Z"
                fill="white"
              />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-neutral-300 hover:scale-110 active:scale-95 transition-all p-1"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 52 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.8439 10.8294C44.7057 11.2915 46.1785 12.6523 46.6787 14.3724C47.5957 17.5046 47.6235 24.0001 47.6235 24.0001C47.6235 24.0001 47.6235 30.5213 46.7065 33.6279C46.2063 35.348 44.7335 36.7087 42.8717 37.1709C39.5093 38.0181 25.9764 38.0181 25.9764 38.0181C25.9764 38.0181 12.4435 38.0181 9.08114 37.1709C7.21933 36.7087 5.74655 35.348 5.24636 33.6279C4.32935 30.4957 4.32935 24.0001 4.32935 24.0001C4.32935 24.0001 4.32935 17.5046 5.21857 14.3981C5.71876 12.6779 7.19154 11.3172 9.05335 10.8551C12.4157 10.0078 25.9486 9.98218 25.9486 9.98218C25.9486 9.98218 39.4815 9.98218 42.8439 10.8294ZM32.8679 24.0002L21.6414 30.0079V17.9925L32.8679 24.0002Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </aside>
    </>
  );
};
