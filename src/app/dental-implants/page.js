import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata = {
  title: "Dental Implants in Dwarka | Elite Speciality Clinic",
  description:
    "Permanent titanium dental implants by MDS specialists at Elite Speciality Clinic, Dwarka. Replace missing teeth with natural-looking, lifetime solutions.",
};

export default function DentalImplantsPage() {
  return (
    <ServicePageTemplate
      title="Dental Implants"
      category="Implantology"
      categoryColor="#1D4ED8"
      icon="/icons/dental-implant.png"
      heroImage="/images/treatments/Dental implant.png"
      tagline="Permanent titanium tooth roots topped with natural-looking crowns — the gold standard in tooth replacement."
      description="Dental implants are titanium posts surgically placed into the jawbone to replace missing tooth roots. Once integrated with the bone (osseointegration), a custom ceramic crown is attached on top — creating an artificial tooth that looks, feels, and functions exactly like a natural tooth. Unlike dentures or bridges, implants are permanent, do not require adjacent teeth to be altered, and preserve jawbone density for long-term facial structure."
      benefits={[
        "Looks, feels, and functions like a natural tooth",
        "Permanent solution — lasts a lifetime with proper care",
        "Preserves jawbone and prevents bone loss",
        "No damage to adjacent healthy teeth",
        "No removable parts — fixed securely in the jaw",
        "Restores full biting force and chewing confidence",
        "Best long-term value among all tooth replacements",
        "Zero impact on neighbouring teeth",
      ]}
      steps={[
        { title: "Consultation & CBCT Scan", desc: "3D bone scan assesses density and plans precise implant position." },
        { title: "Treatment Planning", desc: "Digital surgical guide designed for accurate, safe implant placement." },
        { title: "Implant Placement", desc: "Titanium implant placed into jawbone under local anaesthesia — painless procedure." },
        { title: "Osseointegration", desc: "Implant fuses with bone over 6–12 weeks — forming a permanent root." },
        { title: "Abutment Fitting", desc: "Connector piece attached to implant to support the final crown." },
        { title: "Crown Fabrication", desc: "Custom ceramic crown crafted to match your natural teeth perfectly." },
        { title: "Final Placement", desc: "Crown permanently fixed on implant — your new tooth is complete!" },
      ]}
      faqs={[
        { q: "How long do dental implants last?", a: "With proper care, dental implants can last a lifetime. The crown on top may need replacement after 15–20 years due to normal wear." },
        { q: "Is implant surgery painful?", a: "No. The surgery is performed under local anaesthesia. Post-operative discomfort is mild and managed with prescribed medication. Most patients return to normal activities the next day." },
        { q: "Am I a candidate for dental implants?", a: "Most adults with good general health and adequate bone density are candidates. Conditions like uncontrolled diabetes or smoking may require pre-treatment. A CBCT scan determines candidacy." },
        { q: "How do I care for dental implants?", a: "Care for implants exactly like natural teeth — brush twice daily, floss, and visit your dentist every 6 months. Implants cannot get cavities but surrounding gum tissue needs regular care." },
        { q: "Can dental implants fail?", a: "Implant failure is rare, with a success rate of over 95%. Failure is usually due to poor oral hygiene, smoking, or uncontrolled medical conditions." },
        { q: "Are dental implants better than bridges or dentures?", a: "Yes. Implants are permanent, do not require altering adjacent teeth like bridges, and prevent jawbone loss that occurs with dentures." },
      ]}
      relatedServices={[
        { title: "Tooth Extraction", desc: "Safe extraction before implant placement.", icon: "/icons/Extraction.png", link: "/extraction" },
        { title: "Metal Free Crowns", desc: "Premium zirconia crown fitted on your implant.", icon: "/icons/Metal Free Crowns.png", link: "/metal-free-crowns" },
        { title: "Teeth Cleaning", desc: "Maintain implant health with professional cleaning.", icon: "/icons/teeth Cleaning (2).png", link: "/teeth-cleaning" },
        { title: "Root Canal Treatment", desc: "Save natural teeth before considering implants.", icon: "/icons/Root canals.png", link: "/root-canal-treatment" },
      ]}
    />
  );
}
