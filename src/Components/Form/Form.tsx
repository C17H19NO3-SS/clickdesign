import React, { useState } from "react";

export const BrandProjectInquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectDetails: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Proje Başlat:", formData);
  };

  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-32 font-sans selection:bg-red-600 selection:text-white">
      <div className="relative z-10 mx-auto max-w-360 px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Sol Kolon: Başlık */}
          <div className="lg:col-span-5 pt-8 lg:pt-14">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-normal leading-[1.28] tracking-tight text-neutral-900">
              Bir markayı oluşturmak
              <br />
              karmaşık olabilir,
              <br />
              işleri basitleştirelim.
            </h2>
          </div>

          {/* Sağ Kolon: Gri Form Kartı */}
          <div className="lg:col-span-7 relative">
            <div className="relative bg-[#f8f9fa] p-8 md:p-14 lg:p-16 pb-20 md:pb-24">
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* 1. Satır: İsim & Şirket */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="*İsim"
                    required
                    className="w-full bg-transparent pb-2.5 text-base text-neutral-900 border-b border-neutral-300 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Şirket"
                    className="w-full bg-transparent pb-2.5 text-base text-neutral-900 border-b border-neutral-300 focus:outline-none transition-colors"
                  />
                </div>

                {/* 2. Satır: E-Posta & Telefon (Kırmızı Vurgulu) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="*E-Posta"
                    required
                    className="w-full bg-transparent pb-2.5 text-base text-neutral-900 border-b border-neutral-300 focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="*Telefon"
                    required
                    className="w-full bg-transparent pb-2.5 text-base text-neutral-900 border-b border-neutral-300 focus:outline-none transition-colors"
                  />
                </div>

                {/* 3. Satır: Proje Detayı */}
                <div>
                  <input
                    type="text"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Projeniz Hakkında Kısa Bilgi Verin"
                    className="w-full bg-transparent pb-2.5 text-base text-neutral-900 border-b border-neutral-300 focus:outline-none transition-colors"
                  />
                </div>

                {/* Kırmızı Kare Vurgu ve "Proje Başlat" Butonu */}
                <div className="absolute left-8 sm:left-12 -bottom-7 sm:-bottom-8 flex flex-col items-start">
                  {/* Sol üstteki mimari kırmızı kare */}
                  <div className="w-4.5 h-4.5 bg-[#e51921] -mb-px -ml-4.5" />

                  {/* Buton */}
                  <button
                    type="submit"
                    className="px-10 sm:px-14 py-3.5 sm:py-4 bg-[#e51921] text-white text-base sm:text-lg font-normal tracking-wide hover:brightness-110 active:brightness-95 transition-all shadow-sm cursor-pointer"
                  >
                    Proje Başlat
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
