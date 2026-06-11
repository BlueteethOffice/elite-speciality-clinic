import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export default function TeethWhitening() {
  return (
    <ServicePageTemplate
      title="Teeth Whitening"
      category="Cosmetic"
      categoryColor="#DB2777"
      icon="/icons/teeth-whitening.png"
      heroImage="/images/treatments/Teeth whitening.png"
      tagline="Professional-grade whitening that safely removes years of staining from tea, cof..."
      description="Professional teeth whitening is the safest and most effective way to lighten the natural colour of your teeth without removing any tooth surface. Unlike over-the-counter whitening products, in-clinic treatments use clinically proven hydrogen peroxide gels at concentrations that deliver dramatic, lasting results. At Elite Speciality Clinic, we customise the treatment to your teeth's current shade and your desired outcome — typically achieving 4–8 shades whiter in a single visit."
      benefits={[
        "4–8 shades whiter in a single session",
        "Professional-grade — far superior to home kits",
        "Safe — supervised by qualified dental professionals",
        "Customised to your starting shade and goals",
        "Results last 1–3 years with proper care",
        "Instant confidence boost for any occasion",
        "No damage to enamel with professional technique",
              "Long-lasting results with proper maintenance",
      ]}
      steps={[
        { title: "Shade Assessment", desc: "We record your current tooth shade using a clinical shade guide." },
        { title: "Teeth Cleaning", desc: "Professional cleaning ensures gel works directly on clean enamel." },
        { title: "Gum Protection", desc: "A protective barrier shields your gums from the whitening gel." },
        { title: "Gel Application", desc: "Professional whitening gel is applied to all visible tooth surfaces." },
        { title: "Light Activation", desc: "The gel is activated by a special light for optimal penetration." },
        { title: "Repeat Cycles", desc: "2–3 cycles of gel application are done for maximum whitening." },
        { title: "Final Shade Check", desc: "Results are assessed and your new brighter shade is recorded." },
      ]}
      faqs={[
        { q: "How long do whitening results last?", a: "Results typically last 1–3 years depending on diet and habits. Avoiding tea, coffee, red wine, and tobacco extends longevity. Touch-up treatments are quick and affordable." },
        { q: "Is teeth whitening safe?", a: "Yes. Professional whitening performed by dentists is completely safe. The gel concentration and application time are carefully controlled to protect your enamel and gums." },
        { q: "Will whitening work on crowns or veneers?", a: "No. Whitening agents only work on natural tooth enamel. Crowns, veneers, and fillings will not change colour. If uniformity is important, we can discuss replacement options." },
        { q: "Does teeth whitening cause sensitivity?", a: "Some patients experience mild, temporary sensitivity during or after treatment. We use desensitising agents and can adjust treatment parameters to minimise this." },
        { q: "How long after whitening can I eat or drink colored food?", a: "We recommend avoiding highly pigmented food and drinks (like coffee, tea, soy sauce, and red wine) for at least 48 hours after the treatment." },
        { q: "What is the difference between home whitening kits and in-clinic whitening?", a: "In-clinic whitening uses stronger, professional-grade gels activated by light for immediate results in 1 hour. Home kits use milder gels and take days or weeks." },
      ]}
      relatedServices={[
        { title: "Zoom Whitening", desc: "Advanced light-activated whitening for maximum results.", icon: "/icons/Zoom Whitening.png", link: "/zoom-whitening" },
        { title: "Teeth Cleaning", desc: "Professional cleaning before whitening for best results.", icon: "/icons/teeth Cleaning (2).png", link: "/teeth-cleaning" },
        { title: "Emax Veneers", desc: "Permanent white smile with porcelain veneers.", icon: "/icons/Emax Veneers.png", link: "/emax-veneers" },
        { title: "Composite Veneers", desc: "Same-day veneers to cover stubborn stains instantly.", icon: "/icons/omposite Veneers.png", link: "/composite-veneers" },
      ]}
    />
  );
}
