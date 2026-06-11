import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export default function Extraction() {
  return (
    <ServicePageTemplate
      title="Tooth Extraction"
      category="Oral Surgery"
      categoryColor="#DC2626"
      icon="/icons/Extraction.png"
      heroImage="/images/treatments/tooth extraction.png"
      tagline="Safe, virtually painless tooth removal under precise local anaesthesia — perform..."
      description="Tooth extraction is the removal of a tooth from its socket in the jawbone. While we always try to save natural teeth first, extractions become necessary when a tooth is severely decayed, broken beyond repair, infected, or causing overcrowding. At Elite Speciality Clinic, our experienced surgeons perform extractions with minimal trauma, ensuring a quick recovery and comfortable experience."
      benefits={[
        "Relieves severe toothache and infection instantly",
        "Prevents spread of infection to neighbouring teeth",
        "Creates space for orthodontic treatment",
        "Performed under comfortable local anaesthesia",
        "Quick procedure — typically 20–40 minutes",
        "Detailed aftercare guidance provided",
        "Minimally invasive with fast healing",
              "Quick and virtually painless procedure",
      ]}
      steps={[
        { title: "Assessment & X-Ray", desc: "We take an X-ray to understand the tooth's root structure before planning the extraction." },
        { title: "Anaesthesia", desc: "Local anaesthesia is injected to completely numb the area — you feel pressure, not pain." },
        { title: "Gum Separation", desc: "The gum tissue around the tooth is gently separated to allow safe instrument access." },
        { title: "Loosening the Tooth", desc: "The dentist uses an elevator instrument to gently loosen the tooth from its socket." },
        { title: "Extraction", desc: "The tooth is carefully removed using dental forceps with controlled, precise movements." },
        { title: "Socket Cleaning", desc: "The socket is gently cleaned and any infection or granulation tissue is removed." },
        { title: "Aftercare", desc: "Gauze is placed to control bleeding and detailed aftercare instructions are provided." },
      ]}
      faqs={[
        { q: "Is tooth extraction painful?", a: "No. With modern local anaesthesia, you feel only pressure, not pain. Post-extraction discomfort is manageable with prescribed pain relief." },
        { q: "How long does recovery take?", a: "Initial healing takes 1–3 days. Full socket healing takes 1–2 weeks. We provide detailed care instructions to ensure smooth recovery." },
        { q: "What should I avoid after extraction?", a: "Avoid smoking, drinking through straws, spitting forcefully, and eating hard or hot foods for 24–48 hours after extraction." },
        { q: "Do I need to replace the extracted tooth?", a: "Yes, we recommend replacing missing teeth with a dental implant, bridge, or denture to prevent bone loss and shifting of adjacent teeth." },
        { q: "How should I sleep after a tooth extraction?", a: "Sleep with your head elevated on a few pillows for the first 24-48 hours. This reduces blood pressure in the head and helps control bleeding and swelling." },
        { q: "When can I brush my teeth after extraction?", a: "You can brush your other teeth normally, but avoid the extraction site for the first 24 hours. Gently rinse with warm salt water instead." },
      ]}
      relatedServices={[
        { title: "Dental Implants", desc: "Best permanent replacement for extracted teeth.", icon: "/icons/dental-implant.png", link: "/implants" },
        { title: "Wisdom Teeth Extraction", desc: "Specialised removal of impacted wisdom teeth.", icon: "/icons/wisdom-tooth.png", link: "/wisdom-teeth-extraction" },
        { title: "Root Canal Treatment", desc: "Save the tooth before considering extraction.", icon: "/icons/Root canals.png", link: "/root-canal-treatment" },
        { title: "Tooth Colored Crown", desc: "Crown to protect and restore weak teeth.", icon: "/icons/Tooth Colored Crown.png", link: "/tooth-colored-crown" },
      ]}
    />
  );
}
