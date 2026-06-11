import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export default function MicroscopicRootCanal() {
  return (
    <ServicePageTemplate
      title="Microscopic Root Canal"
      category="Endodontics"
      categoryColor="#7C3AED"
      icon="/icons/Microscopic Root Canal Treatment.png"
      heroImage="/images/treatments/Microscopic Root Canal.png"
      tagline="Microscope-enhanced precision root canal therapy — ideal for complex, retreatmen..."
      description="Microscopic Root Canal Treatment uses a high-powered dental operating microscope that magnifies the treatment field up to 20 times. This allows our endodontists to see and treat even the most complex root canal anatomy — hairline cracks, calcified canals, missed canals, and retreatment cases — with extraordinary precision. Combined with motorised rotary instruments, this technology delivers superior outcomes with minimal tooth structure removal."
      benefits={[
        "20x magnification for unmatched precision",
        "Detects missed canals and hairline cracks",
        "Ideal for retreatment of failed root canals",
        "Minimally invasive — preserves more tooth structure",
        "Superior success rate compared to conventional RCT",
        "Lifetime guarantee on every procedure",
              "Higher success rate with microscopic precision",
        "Preserves your natural tooth structure",
      ]}
      steps={[
        { title: "CBCT 3D X-Ray", desc: "Advanced 3D imaging maps the complete root canal system." },
        { title: "Microscope Setup", desc: "Operating microscope calibrated to 8–20x magnification." },
        { title: "Access Opening", desc: "Small opening made in crown to access the pulp chamber clearly." },
        { title: "Full Visualisation", desc: "All canals visualised including missed or calcified ones." },
        { title: "Precision Cleaning", desc: "Rotary instruments and ultrasonic irrigants clean every canal." },
        { title: "Obturation", desc: "Canals filled with gutta-percha using warm vertical compaction." },
        { title: "Crown Restoration", desc: "Ceramic crown placed to restore full strength and function." },
      ]}
      faqs={[
        { q: "What makes microscopic RCT different from regular RCT?", a: "The dental microscope provides up to 20x magnification, allowing the dentist to detect and treat canals and issues that are invisible to the naked eye — significantly improving outcomes." },
        { q: "Who needs microscopic root canal treatment?", a: "Patients with complex anatomy, previously failed root canals, calcified canals, persistent pain after treatment, or suspected cracks benefit most from microscopic RCT." },
        { q: "Is microscopic RCT more expensive?", a: "Yes, slightly more than conventional RCT due to specialised equipment and expertise. However, the superior precision and success rate make it the most cost-effective long-term option." },
        { q: "How long does the procedure take?", a: "A microscopic RCT session typically takes 60–90 minutes. Complex retreatment cases may require 2 sittings." },
        { q: "Does a microscope help in saving cracked teeth?", a: "Yes. The high magnification allows us to see micro-cracks inside the tooth structure and determine if the tooth can be successfully saved or not." },
        { q: "Is the recovery time different for microscopic RCT?", a: "No, the recovery is similar to regular RCT, but the treatment is more precise, which often leads to less post-operative discomfort." },
      ]}
      relatedServices={[
        { title: "Root Canal Treatment", desc: "Standard RCT for routine cases.", icon: "/icons/Root canals.png", link: "/root-canal-treatment" },
        { title: "Metal Free Crowns", desc: "Best crown option after microscopic RCT.", icon: "/icons/Metal Free Crowns.png", link: "/metal-free-crowns" },
        { title: "Dental Implants", desc: "If the tooth requires extraction instead.", icon: "/icons/dental-implant.png", link: "/implants" },
        { title: "Tooth Colored Crown", desc: "Crown to restore and protect the tooth after RCT.", icon: "/icons/Tooth Colored Crown.png", link: "/tooth-colored-crown" },
      ]}
    />
  );
}
