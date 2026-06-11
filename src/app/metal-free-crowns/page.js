import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export default function MetalFreeCrowns() {
  return (
    <ServicePageTemplate
      title="Metal Free Crowns"
      category="Restorative"
      categoryColor="#2563EB"
      icon="/icons/Metal Free Crowns.png"
      heroImage="/images/treatments/Metal Free Crowns.png"
      tagline="Premium Lava Zirconia crowns — biocompatible, ultra-durable, and virtually indis..."
      description="Metal-free crowns — especially Lava Essential Zirconia crowns — represent the pinnacle of modern restorative dentistry. Made from high-strength zirconium oxide ceramic, these crowns offer exceptional translucency and light reflection properties that mimic natural tooth enamel. They are 100% biocompatible, completely metal-free, and up to 5x stronger than conventional porcelain crowns. The result: a restoration so natural that even dentists have difficulty identifying it."
      benefits={[
        "Lava Zirconia — highest strength ceramic available",
        "Superior translucency — mimics natural enamel light play",
        "100% biocompatible — no metal allergy risk",
        "No dark metallic gumline over time",
        "Thinner design — minimal tooth preparation needed",
        "Exceptional durability — lasts 15–20+ years",
              "Biocompatible — no allergic reactions",
        "Natural tooth-coloured appearance",
      ]}
      steps={[
        { title: "Shade Matching", desc: "Digital shade analysis ensures crown matches your natural teeth perfectly." },
        { title: "Tooth Preparation", desc: "Minimal reduction preserves maximum natural tooth structure." },
        { title: "Digital Impression", desc: "Precise digital scan captures every contour for an exact-fitting crown." },
        { title: "Temporary Crown", desc: "Temporary crown placed to protect the tooth during fabrication." },
        { title: "CAD/CAM Milling", desc: "Crown milled from solid zirconia block with computer-aided precision." },
        { title: "Glazing & Finishing", desc: "Crown glazed and stained for a natural, lifelike appearance." },
        { title: "Permanent Bonding", desc: "Crown permanently bonded to your tooth with dental cement." },
      ]}
      faqs={[
        { q: "What makes Zirconia better than regular porcelain?", a: "Zirconia is significantly stronger (600–1000 MPa vs 60–100 MPa for porcelain), making it resistant to chipping and fracture. It also has superior biocompatibility and longevity." },
        { q: "Are metal-free crowns suitable for back teeth?", a: "Absolutely. Full-contour zirconia crowns are ideal for posterior (back) teeth due to their exceptional strength — they easily withstand heavy chewing forces." },
        { q: "Can I replace my old metal crowns with zirconia?", a: "Yes. Old PFM (porcelain-fused-to-metal) crowns can be replaced with modern zirconia crowns for better aesthetics, comfort, and longevity." },
        { q: "How do I care for zirconia crowns?", a: "Care is identical to natural teeth — regular brushing, flossing, and 6-monthly dental check-ups. Avoid using your teeth to open bottles or bite nails." },
        { q: "Are metal-free crowns allergy-friendly?", a: "Yes. Metal-free zirconia and ceramic crowns are highly biocompatible and hypoallergenic, making them completely safe for patients with metal sensitivities." },
        { q: "Will a metal-free crown look natural?", a: "Yes. Because they contain no dark metal core, they mimic the natural translucency and shade of your surrounding teeth perfectly." },
      ]}
      relatedServices={[
        { title: "Tooth Colored Crown", desc: "Standard ceramic crown option.", icon: "/icons/Tooth Colored Crown.png", link: "/tooth-colored-crown" },
        { title: "Dental Implants", desc: "Zirconia crown on implant for best result.", icon: "/icons/dental-implant.png", link: "/implants" },
        { title: "Emax Veneers", desc: "Premium veneers for front tooth aesthetics.", icon: "/icons/Emax Veneers.png", link: "/emax-veneers" },
        { title: "Root Canal Treatment", desc: "RCT treatment often required before crown placement.", icon: "/icons/Root canals.png", link: "/root-canal-treatment" },
      ]}
    />
  );
}
