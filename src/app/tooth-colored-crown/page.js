import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export default function ToothColoredCrown() {
  return (
    <ServicePageTemplate
      title="Tooth Colored Crown"
      category="Restorative"
      categoryColor="#2563EB"
      icon="/icons/Tooth Colored Crown.png"
      heroImage="/images/treatments/Metal Free Crowns.png"
      tagline="Metal-free ceramic crowns that blend seamlessly with your natural teeth — strong..."
      description="A tooth-coloured crown (dental cap) is a custom-made ceramic restoration that covers the entire visible surface of a damaged, decayed, or root-canal-treated tooth. Made from high-quality dental ceramic or porcelain, these crowns are shade-matched to your natural teeth — making them completely undetectable. They restore the tooth's shape, size, strength, and appearance while providing long-lasting protection."
      benefits={[
        "Perfectly matches your natural tooth colour",
        "Metal-free — no dark gumline or allergic reaction",
        "Restores full chewing strength",
        "Protects weak or cracked teeth from fracture",
        "Required protection after root canal treatment",
        "Durable — lasts 10–15 years with proper care",
              "Matches natural tooth shade perfectly",
        "Durable ceramic — lasts 10–15 years",
      ]}
      steps={[
        { title: "Tooth Preparation", desc: "Tooth shaped to make room for the crown — minimal enamel removed." },
        { title: "Shade Selection", desc: "Crown shade matched precisely to your surrounding natural teeth." },
        { title: "Digital Impression", desc: "Precise digital scan of your prepared tooth sent to the dental lab." },
        { title: "Temporary Crown", desc: "Temporary crown protects the tooth while permanent one is crafted." },
        { title: "Crown Fabrication", desc: "Custom ceramic crown crafted in the lab to exact specifications." },
        { title: "Try-In & Approval", desc: "Crown tried in — you approve the fit, bite, and appearance." },
        { title: "Permanent Cementation", desc: "Crown checked for bite and permanently cemented into place." },
      ]}
      faqs={[
        { q: "How long does a dental crown last?", a: "With proper oral hygiene, tooth-coloured crowns last 10–15 years. Avoiding habits like grinding teeth or biting hard objects extends their life significantly." },
        { q: "Is the crown procedure painful?", a: "No. Local anaesthesia ensures the preparation is completely comfortable. You may experience mild sensitivity with the temporary crown, which resolves once the permanent crown is placed." },
        { q: "Can a crown be placed on a root canal treated tooth?", a: "Yes. A crown is strongly recommended — even mandatory — after root canal treatment to protect the tooth from cracking and restore normal function." },
        { q: "What is the difference between a crown and a veneer?", a: "A veneer covers only the front surface of a tooth and is used for cosmetic improvement. A crown covers the entire tooth and is used when structural restoration and strength are needed." },
        { q: "How is a tooth prepared for a crown?", a: "A thin layer of enamel is trimmed from all sides of the tooth to make room for the crown. The procedure is done under local anesthesia for complete comfort." },
        { q: "Do tooth-colored crowns change color or stain?", a: "No. High-quality ceramic and porcelain crowns are highly resistant to staining and will retain their shade for years." },
      ]}
      relatedServices={[
        { title: "Root Canal Treatment", desc: "Crown often needed after RCT.", icon: "/icons/Root canals.png", link: "/root-canal-treatment" },
        { title: "Metal Free Crowns", desc: "Premium Zirconia upgrade for your crown.", icon: "/icons/Metal Free Crowns.png", link: "/metal-free-crowns" },
        { title: "Dental Implants", desc: "Crown placed on top of implant.", icon: "/icons/dental-implant.png", link: "/implants" },
        { title: "Teeth Cleaning", desc: "Maintain your crown with regular professional cleanings.", icon: "/icons/teeth Cleaning (2).png", link: "/teeth-cleaning" },
      ]}
    />
  );
}
