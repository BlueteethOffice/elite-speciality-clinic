import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export default function InvisibleBraces() {
  return (
    <ServicePageTemplate
      title="Invisible Braces"
      category="Orthodontics"
      categoryColor="#0D9488"
      icon="/icons/Invisible Braces.png"
      heroImage="/images/treatments/Invisible Braces.png"
      tagline="Custom clear aligners that straighten teeth discreetly — removable, comfortable,..."
      description="Invisible braces (clear aligners) are a modern alternative to traditional metal braces for straightening teeth. A series of custom-made, transparent plastic aligners gradually move your teeth into the desired position. Each set of aligners is worn for 1–2 weeks before moving to the next set. Because they are removable, you can eat, drink, brush, and floss normally. The virtually invisible appearance makes them the most popular orthodontic choice for adults and teenagers who want a discreet treatment."
      benefits={[
        "Virtually invisible — no one knows you are in treatment",
        "Removable — eat and drink anything you like",
        "Comfortable smooth plastic — no metal brackets or wires",
        "Fewer dental visits compared to traditional braces",
        "3D digital planning shows your final result before start",
        "Treats mild to moderate crowding, spacing, and bite issues",
              "Comfortable — no metal wires or brackets",
        "Virtually invisible during treatment",
      ]}
      steps={[
        { title: "Orthodontic Assessment", desc: "Clinical exam, X-rays, and digital scan to assess suitability for aligners." },
        { title: "3D Treatment Plan", desc: "Software creates a precise digital plan showing each tooth movement." },
        { title: "Aligner Fabrication", desc: "Full series of custom clear aligners manufactured from medical-grade plastic." },
        { title: "First Fitting", desc: "First aligners fitted with detailed wear instructions (20–22 hrs/day)." },
        { title: "Progress Reviews", desc: "Check-ups every 6–8 weeks to monitor movement and issue next aligners." },
        { title: "Final Alignment", desc: "Last aligner set worn — final result assessed and approved." },
        { title: "Retention Phase", desc: "Custom retainers fitted to permanently hold your beautiful new smile." },
      ]}
      faqs={[
        { q: "How long does aligner treatment take?", a: "Treatment duration varies from 6–24 months depending on complexity. Mild cases may complete in as little as 6 months." },
        { q: "Can I remove the aligners for eating?", a: "Yes. Aligners must be removed for eating and drinking (anything other than cold water). They should be worn 20–22 hours per day for effective tooth movement." },
        { q: "Are invisible braces as effective as metal braces?", a: "For mild to moderate cases, clear aligners achieve equivalent results to traditional braces. Severe skeletal discrepancies may still require traditional orthodontic appliances." },
        { q: "How do I clean my aligners?", a: "Rinse aligners with cold water and gently brush with a soft toothbrush. Avoid hot water as it can distort the plastic. Dedicated aligner cleaning tablets are also available." },
        { q: "Will clear aligners affect my speech?", a: "You may experience a slight lisp for the first day or two as your tongue adjusts, but your speech will return to normal very quickly." },
        { q: "How many hours a day do I need to wear aligners?", a: "For the best results, you must wear your clear aligners for 20 to 22 hours per day, removing them only to eat, brush, and floss." },
      ]}
      relatedServices={[
        { title: "Braces", desc: "Traditional metal braces option.", icon: "/icons/braces.png", link: "/braces" },
        { title: "Teeth Cleaning", desc: "Essential maintenance during aligner treatment.", icon: "/icons/teeth Cleaning (2).png", link: "/teeth-cleaning" },
        { title: "Emax Veneers", desc: "Final cosmetic touch after alignment.", icon: "/icons/Emax Veneers.png", link: "/emax-veneers" },
        { title: "Teeth Whitening", desc: "Brighten your smile after aligners complete.", icon: "/icons/teeth-whitening.png", link: "/teeth-whitening" },
      ]}
    />
  );
}
