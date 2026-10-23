import React, { useState } from "react";

type FormFields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectDetails: string;
};

interface FieldProps {
  id: string;
  name: keyof FormFields;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelClassName?: string;
  className?: string;
}

// Figma: çizgi (#DEDEDE) alanın üstünde, etiket çizginin hemen altında (Montserrat 18px).
// Odaklanınca / doluyken etiket çizginin üstüne küçülerek çıkar.
const Field = ({
  id,
  name,
  label,
  type = "text",
  required,
  value,
  onChange,
  labelClassName = "text-black",
  className = "",
}: FieldProps) => (
  <div className={`relative ${className}`}>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder=" "
      required={required}
      className="peer w-full h-8 bg-transparent pt-[5px] pb-1 text-base lg:text-[18px] leading-normal text-black border-t border-[#DEDEDE] focus:border-black focus:outline-none transition-colors"
    />
    <label
      htmlFor={id}
      className={`pointer-events-none absolute left-0 top-[5px] text-base lg:text-[18px] leading-normal transition-all duration-200 ease-out peer-focus:-top-5 peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs ${labelClassName}`}
    >
      {label}
    </label>
  </div>
);

export const BrandProjectInquiry = () => {
  const [formData, setFormData] = useState<FormFields>({
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
    // lg+: Figma 1440 çerçevesindeki konumlar; yükseklik = kart (400px) + butonun alttan taşması (34px)
    <section className="relative w-full pb-20 lg:pb-0 lg:mb-[166px] lg:h-[434px] font-montserrat selection:bg-red-600 selection:text-white">
      {/* Başlık (Figma: Montserrat Regular 42px, kartın sol kenarına biner) */}
      <h2 className="relative z-10 px-6 md:px-16 lg:px-0 lg:absolute lg:left-[106px] lg:top-[69px] text-3xl md:text-4xl lg:text-[42px] font-normal leading-normal text-black lg:whitespace-nowrap">
        Bir markayı oluşturmak
        <br />
        karmaşık olabilir,
        <br />
        İşleri basitleştirelim.
      </h2>

      {/* Mobilde kartın içeriğini saran kutu; lg'de çocuklar section'a göre konumlanır */}
      <div className="relative mt-10 mx-6 md:mx-16 px-8 md:px-14 pt-14 pb-24 lg:static lg:m-0 lg:p-0">
        {/* Gri Kart (Figma: #F8F8F8, sayfanın sağ kenarına kadar uzanır) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#F8F8F8] lg:inset-auto lg:left-[calc(33.33%+22px)] lg:right-0 lg:top-0 lg:h-[400px]"
        />

        <form
          id="brand-inquiry-form"
          onSubmit={handleSubmit}
          className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 lg:absolute lg:left-[calc(50%+50px)] lg:top-[95px] lg:w-[500px] lg:grid-cols-[228px_228px] lg:gap-x-[44px] lg:gap-y-[26px]"
        >
          <Field id="form-name" name="name" label="*İsim" required value={formData.name} onChange={handleChange} />
          <Field id="form-company" name="company" label="Şirket" value={formData.company} onChange={handleChange} />
          <Field id="form-email" name="email" type="email" label="*E-Posta" required value={formData.email} onChange={handleChange} />
          <Field
            id="form-phone"
            name="phone"
            type="tel"
            label="*Telefon"
            required
            value={formData.phone}
            onChange={handleChange}
            labelClassName="text-[#F21414]"
          />
          <Field
            id="form-projectDetails"
            name="projectDetails"
            label="Projeniz Hakkında Kısa Bilgi Verin"
            value={formData.projectDetails}
            onChange={handleChange}
            className="sm:col-span-2 lg:mt-[15px]"
          />
        </form>

        {/* "Proje Başlat" Butonu (Figma: 265×62, Montserrat 30px) ve sol üstündeki 20px kırmızı kare */}
        <div className="absolute left-12 -bottom-7 lg:left-[calc(41.67%+10px)] lg:bottom-auto lg:top-[372px]">
          <div className="absolute -top-4 -left-4 w-4 h-4 lg:-top-5 lg:-left-5 lg:w-5 lg:h-5 bg-[#F21414]" />
          <button
            type="submit"
            form="brand-inquiry-form"
            className="px-10 sm:px-14 py-3 sm:py-3.5 lg:p-0 lg:w-[265px] lg:h-[62px] bg-[#F21414] text-white text-lg lg:text-[30px] font-normal leading-normal hover:brightness-110 active:brightness-95 transition-all cursor-pointer"
          >
            Proje Başlat
          </button>
        </div>
      </div>
    </section>
  );
};
