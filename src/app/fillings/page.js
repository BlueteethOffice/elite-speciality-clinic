import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export default function Fillings() {
  return (
    <ServicePageTemplate
      title="Dental Fillings"
      category="Restorative"
      categoryColor="#2563EB"
      icon="/icons/filling.png"
      heroImage="/images/treatments/Dental fillings.png"
      tagline="Tooth-coloured composite fillings that restore decayed teeth to full strength — ..."
      description="Dental fillings are used to repair teeth damaged by decay or minor fractures. At Elite Speciality Clinic, we use tooth-coloured composite resin fillings that match your natural tooth shade perfectly. Unlike old metal amalgam fillings, composite fillings are mercury-free, aesthetically superior, and bond directly to your tooth structure — requiring less removal of healthy tooth material."
      benefits={[
        "Tooth-coloured — completely invisible filling",
        "Mercury-free, biocompatible composite resin",
        "Bonds directly to tooth — less drilling required",
        "Restores full biting strength",
        "Durable — lasts 7–10 years with proper care",
        "Prevents decay from spreading further",
        "Same-day procedure — completed in one visit",
              "Prevents further decay and damage",
      ]}
      steps={[
        { title: "Examination & X-Ray", desc: "We examine the extent of decay using X-rays to plan the filling accurately." },
        { title: "Anaesthesia", desc: "Local anaesthesia is applied to ensure a completely pain-free procedure." },
        { title: "Decay Removal", desc: "The decayed portion is carefully removed using precision dental instruments." },
        { title: "Cavity Cleaning", desc: "The cavity is thoroughly cleaned and disinfected to remove all bacteria." },
        { title: "Bonding Agent", desc: "A bonding agent is applied to the tooth surface to ensure the composite adheres perfectly." },
        { title: "Composite Placement", desc: "Tooth-coloured composite resin is layered and shaped to match your tooth." },
        { title: "Curing & Polishing", desc: "The filling is hardened with a UV light, then polished for a smooth, natural finish." },
      ]}
      faqs={[
        { q: "How long do composite fillings last?", a: "With proper oral hygiene and regular check-ups, composite fillings typically last 7–10 years. Avoiding hard foods and grinding habits extends their lifespan." },
        { q: "Are fillings painful?", a: "No. We administer local anaesthesia before the procedure. You will feel no pain during treatment. Post-procedure sensitivity is mild and temporary." },
        { q: "Can old metal fillings be replaced?", a: "Yes. We can safely remove old amalgam fillings and replace them with modern tooth-coloured composite fillings for better aesthetics and health." },
        { q: "How do I know if I need a filling?", a: "Symptoms include toothache, sensitivity to hot or cold, visible holes, or dark spots on teeth. A routine check-up will confirm if a filling is needed." },
        { q: "Can composite fillings match my exact tooth color?", a: "Yes. Composite resin comes in various shades, allowing us to perfectly match the color and translucency of your natural tooth enamel." },
        { q: "What is the difference between silver and composite fillings?", a: "Silver (amalgam) fillings are metal, highly visible, and require more tooth removal. Composite fillings are tooth-colored, bond directly to the tooth, and preserve more natural structure." },
      ]}
      relatedServices={[
        { title: "Teeth Cleaning", desc: "Prevent cavities with professional cleaning.", icon: "/icons/teeth Cleaning (2).png", link: "/teeth-cleaning" },
        { title: "Root Canal Treatment", desc: "For deeper decay reaching the pulp.", icon: "/icons/Root canals.png", link: "/root-canal-treatment" },
        { title: "Tooth Colored Crown", desc: "For heavily damaged teeth needing a cap.", icon: "/icons/Tooth Colored Crown.png", link: "/tooth-colored-crown" },
        { title: "Teeth Whitening", desc: "Brighten your teeth before receiving fillings.", icon: "/icons/teeth-whitening.png", link: "/teeth-whitening" },
      ]}
    />
  );
}
