import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export default function TeethCleaning() {
  return (
    <ServicePageTemplate
      title="Teeth Cleaning"
      category="Preventive Care"
      categoryColor="#059669"
      icon="/icons/teeth Cleaning (2).png"
      heroImage="/images/treatments/Teeth Cleaning.png"
      tagline="Professional scaling & polishing that removes tartar, bacteria and deep stains for a healthy, bright smile."
      description="Teeth cleaning (prophylaxis) is a professional dental procedure performed to thoroughly clean your teeth. It goes beyond regular brushing and flossing, removing hardened plaque (tartar) and surface stains that home care cannot address. Regular professional cleaning every 6 months is one of the most effective ways to prevent gum disease, cavities, and bad breath — keeping your smile healthy and bright for life."
      benefits={[
        "Removes hardened tartar and plaque buildup",
        "Prevents gum disease and tooth decay",
        "Eliminates bad breath (halitosis)",
        "Brightens and polishes tooth surfaces",
        "Allows early detection of dental issues",
        "Recommended every 6 months for optimal health",
        "Reduces risk of systemic diseases linked to oral health",
        "Improves overall health and well-being",
      ]}
      steps={[
        { title: "Examination", desc: "Our dentist examines your teeth and gums to assess overall oral health before cleaning." },
        { title: "Scaling", desc: "Ultrasonic and hand scalers remove tartar and plaque from tooth surfaces and gumline." },
        { title: "Polishing", desc: "A gritty paste polishes your teeth, removing surface stains and smoothing enamel." },
        { title: "Flossing", desc: "Professional flossing clears debris and plaque from between teeth." },
        { title: "Fluoride Treatment", desc: "Fluoride application strengthens enamel and protects against decay." },
        { title: "Oral Hygiene Guidance", desc: "Our dentist provides personalised brushing and flossing instructions for home care." },
      ]}
      faqs={[
        { q: "How often should I get teeth cleaning done?", a: "We recommend professional cleaning every 6 months. Patients with gum disease may need more frequent visits — every 3–4 months." },
        { q: "Is teeth cleaning painful?", a: "No. The procedure is generally comfortable. You may feel slight pressure or sensitivity, but it is not painful. We use gentle techniques and can apply numbing gel if needed." },
        { q: "How long does a teeth cleaning session take?", a: "A typical cleaning takes 30–60 minutes depending on the amount of tartar buildup and the overall condition of your teeth and gums." },
        { q: "Can teeth cleaning whiten my teeth?", a: "Cleaning removes surface stains and gives your teeth a cleaner, brighter appearance, but it is not the same as teeth whitening treatment." },
        { q: "Will teeth cleaning make my teeth loose?", a: "No. Cleaning removes tartar that was masking bone loss or gum recession. Removing it is necessary to stop gum disease from making your teeth loose." },
        { q: "Can pregnant women get professional teeth cleaning?", a: "Yes. In fact, pregnancy hormones can increase the risk of gum inflammation (pregnancy gingivitis), making professional cleaning highly recommended." },
      ]}
      relatedServices={[
        { title: "Teeth Whitening", desc: "Brighten your smile beyond cleaning.", icon: "/icons/teeth-whitening.png", link: "/teeth-whitening" },
        { title: "Fillings", desc: "Restore cavities detected during cleaning.", icon: "/icons/filling.png", link: "/fillings" },
        { title: "Zoom Whitening", desc: "Advanced in-clinic whitening treatment.", icon: "/icons/Zoom Whitening.png", link: "/zoom-whitening" },
        { title: "Dental Implants", desc: "Replace missing teeth to restore overall oral health.", icon: "/icons/dental-implant.png", link: "/implants" },
      ]}
    />
  );
}
