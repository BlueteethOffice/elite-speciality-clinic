import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export default function RootCanalTreatment() {
  return (
    <ServicePageTemplate
      title="Root Canal Treatment"
      category="Endodontics"
      categoryColor="#7C3AED"
      icon="/icons/Root canals.png"
      heroImage="/images/treatments/Root Canal Treatment.png"
      tagline="Save your natural tooth with our completely painless RCT — every procedure backe..."
      description="Root Canal Treatment (RCT) is a dental procedure to save a tooth that has become severely infected or decayed, reaching the inner pulp. The infected pulp is removed, the root canals are cleaned and shaped, then sealed with a biocompatible material. Contrary to popular belief, modern RCT is no more uncomfortable than getting a filling — and it saves your natural tooth permanently. We back every root canal with a lifetime guarantee."
      benefits={[
        "Saves your natural tooth — no extraction needed",
        "Completely eliminates toothache and infection",
        "Painless with modern techniques and anaesthesia",
        "Lifetime guarantee on every RCT performed",
        "Prevents spread of infection to jawbone",
        "Single or two-sitting procedure available",
        "95%+ success rate — most reliable tooth-saving treatment",
              "Saves your natural tooth from extraction",
      ]}
      steps={[
        { title: "Diagnosis & X-Ray", desc: "Digital X-ray confirms the extent of pulp infection and root canal anatomy." },
        { title: "Anaesthesia", desc: "Local anaesthesia ensures you feel zero pain throughout the procedure." },
        { title: "Access Opening", desc: "A small opening is made in the crown of the tooth to access the pulp chamber." },
        { title: "Canal Mapping", desc: "Electronic apex locators and X-rays map the length and curvature of each root canal." },
        { title: "Canal Cleaning", desc: "Infected pulp is removed using precision rotary instruments and antiseptic irrigation." },
        { title: "Filling & Sealing", desc: "Root canals are filled with gutta-percha and sealed to prevent reinfection." },
        { title: "Crown Placement", desc: "A tooth-coloured crown is placed over the tooth to restore full function and strength." },
      ]}
      faqs={[
        { q: "Is root canal treatment painful?", a: "No. With modern local anaesthesia and rotary techniques, RCT is as comfortable as a routine filling. Most patients report no pain during the procedure." },
        { q: "How many sittings are needed?", a: "Most cases are completed in 1–2 sittings. Complex or severe infections may require 3 visits. We aim to minimise the number of appointments needed." },
        { q: "What is the success rate of RCT?", a: "Root canal treatment has a 95%+ success rate. That is why we confidently offer a lifetime guarantee on every RCT performed at our clinic." },
        { q: "Do I need a crown after root canal?", a: "Yes. A crown is strongly recommended after RCT to protect the treated tooth from fracture and restore normal biting function." },
        { q: "Can a tooth that had a root canal get infected again?", a: "Yes, although rare. If the tooth develops new decay or a crack, bacteria can enter the canals. Re-treatment or microscopic RCT can resolve this." },
        { q: "What happens if I delay my root canal treatment?", a: "Delaying treatment can cause the infection to spread to the surrounding bone, leading to severe abscesses, intense pain, and eventual tooth loss." },
      ]}
      relatedServices={[
        { title: "Microscopic Root Canal", desc: "Advanced RCT with microscope precision.", icon: "/icons/Microscopic Root Canal Treatment.png", link: "/microscopic-root-canal" },
        { title: "Tooth Colored Crown", desc: "Crown to protect your treated tooth.", icon: "/icons/Tooth Colored Crown.png", link: "/tooth-colored-crown" },
        { title: "Dental Implants", desc: "If tooth cannot be saved — best replacement.", icon: "/icons/dental-implant.png", link: "/implants" },
        { title: "Metal Free Crowns", desc: "Premium zirconia crown option after RCT.", icon: "/icons/Metal Free Crowns.png", link: "/metal-free-crowns" },
      ]}
    />
  );
}
