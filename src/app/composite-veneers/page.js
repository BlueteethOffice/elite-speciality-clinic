import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export default function CompositeVeneers() {
  return (
    <ServicePageTemplate
      title="Composite Veneers"
      category="Cosmetic"
      categoryColor="#DB2777"
      icon="/icons/omposite Veneers.png"
      heroImage="/images/treatments/Composite Veneers.png"
      tagline="Same-day resin veneers that instantly mask cracks, chips, gaps, and discolourati..."
      description="Composite veneers are thin layers of tooth-coloured composite resin applied directly to the front surface of your teeth to improve their appearance. The entire procedure is completed in a single visit — no lab work required. Our cosmetic dentists sculpt and polish the resin artistically to correct chips, cracks, gaps, staining, and shape irregularities. Composite veneers are a reversible, affordable alternative to porcelain veneers, delivering a beautiful smile transformation on the same day."
      benefits={[
        "Same-day treatment — complete transformation in 1 visit",
        "No lab work required — done entirely chairside",
        "Minimal to no tooth reduction needed",
        "Reversible procedure — original teeth preserved",
        "Corrects chips, gaps, stains, and shape issues",
        "Significantly more affordable than porcelain veneers",
              "Same-day results in a single visit",
        "Fully reversible, non-invasive procedure",
      ]}
      steps={[
        { title: "Smile Consultation", desc: "We discuss your goals and design the ideal shape, size, and shade." },
        { title: "Tooth Etching", desc: "Minimal surface etching is done to help the resin bond securely." },
        { title: "Shade Selection", desc: "Perfect composite shade matched to your natural teeth or desired colour." },
        { title: "Resin Bonding", desc: "Composite resin is applied and built up layer by layer on each tooth." },
        { title: "Sculpting", desc: "Dentist sculpts the resin to the perfect natural shape and contour." },
        { title: "Light Curing", desc: "Each layer is hardened using a UV curing light for full strength." },
        { title: "Polish & Review", desc: "Final polish for a natural sheen and bite check for perfect comfort." },
      ]}
      faqs={[
        { q: "How long do composite veneers last?", a: "Composite veneers typically last 3–7 years. They may chip or stain more than porcelain veneers, but repairs are easy, quick, and affordable." },
        { q: "Can composite veneers be whitened?", a: "No. Composite resin does not respond to whitening agents. If you want a whiter shade, the composite needs to be replaced with a lighter shade material." },
        { q: "Are composite veneers better than porcelain?", a: "Both have advantages. Composite is faster, cheaper, and reversible. Porcelain (Emax) is more durable, stain-resistant, and longer-lasting. Your dentist will help you choose based on your goals and budget." },
        { q: "Does getting composite veneers hurt?", a: "No. The procedure is virtually painless and typically requires no anaesthesia. Most patients are surprised by how comfortable and quick the transformation is." },
        { q: "Can I get composite veneers in a single visit?", a: "Yes. Composite veneers are directly sculpted onto your teeth in a single appointment, unlike porcelain veneers which require laboratory fabrication." },
        { q: "How do I care for my composite veneers?", a: "Brush twice daily with non-abrasive toothpaste, floss regularly, and avoid biting on hard objects like ice or pens to prevent chipping." },
      ]}
      relatedServices={[
        { title: "Emax Veneers", desc: "Premium porcelain veneer upgrade.", icon: "/icons/Emax Veneers.png", link: "/emax-veneers" },
        { title: "Teeth Whitening", desc: "Whiten teeth before getting veneers.", icon: "/icons/teeth-whitening.png", link: "/teeth-whitening" },
        { title: "Zoom Whitening", desc: "Advanced whitening for the best base shade.", icon: "/icons/Zoom Whitening.png", link: "/zoom-whitening" },
        { title: "Teeth Cleaning", desc: "Professional cleaning prior to veneer prep.", icon: "/icons/teeth Cleaning (2).png", link: "/teeth-cleaning" },
      ]}
    />
  );
}
