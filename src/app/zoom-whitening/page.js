import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export default function ZoomWhitening() {
  return (
    <ServicePageTemplate
      title="Zoom Whitening"
      category="Cosmetic"
      categoryColor="#DB2777"
      icon="/icons/Zoom Whitening.png"
      heroImage="/images/treatments/Zoom Whitening.png"
      tagline="Light-accelerated Zoom technology — up to 8 shades whiter in a single 60-minute ..."
      description="Zoom! Whitening is the world's most popular professional teeth whitening system, developed by Philips. It uses a specially formulated hydrogen peroxide whitening gel activated by a patented LED accelerating light to break down deep stains and discolouration. The result is dramatically whiter teeth — up to 8 shades in a single 60-minute session. Zoom is the go-to choice for patients wanting maximum, immediate whitening results before a special event."
      benefits={[
        "Up to 8 shades whiter in just 60 minutes",
        "Philips Zoom — world's most trusted whitening system",
        "LED light acceleration for maximum penetration",
        "Built-in enamel-safe pH booster technology",
        "Includes take-home trays for touch-ups",
        "Long-lasting results — up to 2 years",
              "Results visible in a single 60-minute session",
        "Safe for enamel with professional supervision",
      ]}
      steps={[
        { title: "Pre-Whitening Clean", desc: "Professional cleaning ensures gel works on clean enamel for best results." },
        { title: "Shade Recording", desc: "Current shade recorded — see before/after difference clearly." },
        { title: "Gum Protection", desc: "Lips, gums, and soft tissue are carefully covered before treatment." },
        { title: "Zoom Gel Applied", desc: "Philips Zoom whitening gel applied evenly to all visible teeth." },
        { title: "LED Activation", desc: "Zoom LED light activates gel — first 15-minute round begins." },
        { title: "Repeat Cycles", desc: "3 rounds of 15 minutes each for maximum, even whitening results." },
        { title: "Fluoride & Trays", desc: "Fluoride applied to reduce sensitivity. Take-home trays provided." },
      ]}
      faqs={[
        { q: "How is Zoom different from regular whitening?", a: "Zoom uses a proprietary LED light that accelerates the whitening gel, achieving in 60 minutes what regular whitening takes multiple sessions to accomplish. The results are more uniform and longer-lasting." },
        { q: "Who is Zoom whitening suitable for?", a: "Zoom is ideal for adults with healthy teeth and gums who want immediate, dramatic whitening results. It is not recommended for pregnant women or patients under 13." },
        { q: "How long do Zoom results last?", a: "Results typically last 12–24 months. With the included take-home trays and periodic touch-ups, you can maintain your bright smile indefinitely." },
        { q: "Does Zoom cause sensitivity?", a: "Some patients experience mild sensitivity during or after treatment. Zoom's pH booster formula minimises this, and post-treatment fluoride application further reduces sensitivity." },
        { q: "How many shades lighter can Zoom whitening make my teeth?", a: "Zoom whitening can make your teeth up to 8 shades lighter in just one session, depending on your initial tooth shade and stain type." },
        { q: "Is any special care required after a Zoom whitening session?", a: "Yes, follow the 'white diet' (avoiding colorful foods and drinks) for 48 hours, and use the desensitizing gel provided by our dentist if needed." },
      ]}
      relatedServices={[
        { title: "Teeth Whitening", desc: "Standard professional whitening option.", icon: "/icons/teeth-whitening.png", link: "/teeth-whitening" },
        { title: "Composite Veneers", desc: "Cover stains that whitening cannot remove.", icon: "/icons/omposite Veneers.png", link: "/composite-veneers" },
        { title: "Emax Veneers", desc: "Permanent shade change with porcelain veneers.", icon: "/icons/Emax Veneers.png", link: "/emax-veneers" },
        { title: "Teeth Cleaning", desc: "Professional cleaning before Zoom for best whitening results.", icon: "/icons/teeth Cleaning (2).png", link: "/teeth-cleaning" },
      ]}
    />
  );
}
