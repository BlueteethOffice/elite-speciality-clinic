import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export default function EmaxVeneers() {
  return (
    <ServicePageTemplate
      title="Emax Veneers"
      category="Cosmetic"
      categoryColor="#DB2777"
      icon="/icons/Emax Veneers.png"
      heroImage="/images/treatments/Emax Veneers.png"
      tagline="Ultra-thin lithium disilicate porcelain veneers crafted for a flawless, Hollywoo..."
      description="Emax veneers are ultra-thin shells of lithium disilicate glass-ceramic — the most advanced porcelain material available in dentistry. They are fabricated in a lab to precise specifications and bonded to the front surface of your teeth, permanently transforming their colour, shape, and size. Emax offers superior translucency, light reflection, and natural appearance compared to all other veneer materials — creating a smile that is virtually indistinguishable from perfect natural teeth."
      benefits={[
        "Lithium disilicate ceramic — strongest veneer material",
        "Ultra-thin (0.3–0.5mm) — minimal tooth preparation",
        "Superior translucency and light reflection",
        "Stain-resistant — colour stable for 15–20 years",
        "Natural appearance that is virtually indistinguishable",
        "CAD/CAM precision fabrication for perfect fit",
              "Biocompatible — safe for all patients",
        "100% metal-free ceramic material",
      ]}
      steps={[
        { title: "Digital Smile Design", desc: "A digital mockup shows your new smile before any treatment begins." },
        { title: "Shade Selection", desc: "Precise shade analysis to match or enhance your desired tooth colour." },
        { title: "Minimal Preparation", desc: "Only 0.3–0.5mm of enamel removed — preserving maximum tooth structure." },
        { title: "Digital Impression", desc: "Precise digital scan of your teeth sent to our certified dental lab." },
        { title: "Temporary Veneers", desc: "Temporary veneers let you preview your new smile while Emax is crafted." },
        { title: "Try-In & Approval", desc: "Emax veneers are tried in — you approve the fit, shade, and shape." },
        { title: "Permanent Bonding", desc: "Veneers are etched, primed, and bonded with light-cure resin cement." },
      ]}
      faqs={[
        { q: "How long do Emax veneers last?", a: "Emax veneers typically last 15–20 years with proper care. Their superior ceramic strength makes them more resistant to chipping and staining than composite or older porcelain veneers." },
        { q: "Can Emax veneers fix crooked teeth?", a: "Yes. Veneers can create the appearance of straighter, more evenly spaced teeth. For severe crowding, we may recommend orthodontic treatment first for optimal results." },
        { q: "Will veneers look fake or too white?", a: "No. Our experienced cosmetic dentists carefully select the shade, shape, and translucency to complement your skin tone, face shape, and personal preference — creating a completely natural result." },
        { q: "Is the veneer procedure reversible?", a: "Since a thin layer of enamel is removed, Emax veneers are considered an irreversible procedure. However, they can always be replaced or updated as needed." },
        { q: "Do E.max veneers stain over time?", a: "No. E.max glass-ceramic is highly glazed and completely non-porous, making it highly resistant to staining from coffee, tea, or red wine." },
        { q: "How many sittings are required for E.max veneers?", a: "Usually, two sessions are needed: the first for tooth preparation and taking impressions, and the second for bonding the custom-made veneers." },
      ]}
      relatedServices={[
        { title: "Composite Veneers", desc: "Affordable same-day veneer alternative.", icon: "/icons/omposite Veneers.png", link: "/composite-veneers" },
        { title: "Zoom Whitening", desc: "Whiten remaining teeth to match veneers.", icon: "/icons/Zoom Whitening.png", link: "/zoom-whitening" },
        { title: "Metal Free Crowns", desc: "For teeth needing full coverage restoration.", icon: "/icons/Metal Free Crowns.png", link: "/metal-free-crowns" },
        { title: "Teeth Cleaning", desc: "Professional cleaning prior to veneer prep.", icon: "/icons/teeth Cleaning (2).png", link: "/teeth-cleaning" },
      ]}
    />
  );
}
