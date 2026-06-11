import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export default function WisdomTeethExtraction() {
  return (
    <ServicePageTemplate
      title="Wisdom Teeth Extraction"
      category="Oral Surgery"
      categoryColor="#DC2626"
      icon="/icons/wisdom-tooth.png"
      heroImage="/images/treatments/Wisdom Teeth Extraction.png"
      tagline="Specialist surgical removal of impacted or painful wisdom teeth — with minimal d..."
      description="Wisdom teeth (third molars) typically erupt between ages 17–25. When there is not enough space in the jaw, they become impacted — growing at an angle or remaining trapped below the gumline. Impacted wisdom teeth cause severe pain, infection, damage to adjacent teeth, and cysts. Our oral surgeons specialise in safe, efficient removal with the latest surgical techniques, ensuring minimal discomfort and fast recovery."
      benefits={[
        "Eliminates pain and swelling from impacted wisdom teeth",
        "Prevents damage to adjacent healthy teeth",
        "Reduces risk of infection and cyst formation",
        "Performed under comfortable local or general anaesthesia",
        "Minimally invasive surgical technique",
        "Comprehensive post-operative care and follow-up",
              "Relieves pain and prevents crowding",
        "Prevents damage to adjacent teeth",
      ]}
      steps={[
        { title: "3D X-Ray / OPG", desc: "We take a panoramic X-ray to assess the exact position and angulation of the wisdom tooth." },
        { title: "Treatment Planning", desc: "Our surgeon explains the procedure, anaesthesia options, and what to expect during recovery." },
        { title: "Anaesthesia", desc: "Local or IV sedation is administered for a completely comfortable, pain-free experience." },
        { title: "Surgical Removal", desc: "Small incision is made if needed, bone is gently removed, and the tooth is extracted safely." },
        { title: "Suturing & Recovery", desc: "The site is sutured, gauze applied, and you receive detailed post-op care instructions." },
      ]}
      faqs={[
        { q: "When should wisdom teeth be removed?", a: "Removal is recommended when wisdom teeth are impacted, causing pain, infection, crowding, or damaging adjacent teeth. Early removal (before full root development) leads to faster recovery." },
        { q: "How long is the recovery period?", a: "Most patients feel comfortable within 3–5 days. Complete healing of soft tissue takes 2–3 weeks. We monitor your recovery with follow-up appointments." },
        { q: "Can all 4 wisdom teeth be removed at once?", a: "Yes, all four can be removed in one session under appropriate anaesthesia. This is often preferred to minimise total recovery time." },
        { q: "What is dry socket?", a: "Dry socket occurs when the blood clot dislodges from the extraction site, causing pain. It is rare when proper aftercare instructions are followed. We provide detailed guidance to prevent it." },
        { q: "What can I eat after a wisdom tooth extraction?", a: "Eat soft, cold or room-temperature foods like yogurt, pudding, soup, smoothies, and mashed potatoes. Avoid hot, spicy, or hard foods for a few days." },
        { q: "Should I use a straw after wisdom tooth removal?", a: "No. Do not use a straw or spit forcefully for at least 3-5 days. The suction force can dislodge the blood clot and cause dry socket." },
      ]}
      relatedServices={[
        { title: "Tooth Extraction", desc: "Simple extraction of non-impacted teeth.", icon: "/icons/Extraction.png", link: "/extraction" },
        { title: "Dental Implants", desc: "Replace teeth after extraction permanently.", icon: "/icons/dental-implant.png", link: "/implants" },
        { title: "Invisible Braces", desc: "Orthodontic treatment post-extraction.", icon: "/icons/Invisible Braces.png", link: "/invisible-braces" },
        { title: "Teeth Cleaning", desc: "Essential cleaning for healthy post-op recovery.", icon: "/icons/teeth Cleaning (2).png", link: "/teeth-cleaning" },
      ]}
    />
  );
}
