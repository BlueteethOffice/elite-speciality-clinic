import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export default function Braces() {
  return (
    <ServicePageTemplate
      title="Braces"
      category="Orthodontics"
      categoryColor="#0D9488"
      icon="/icons/braces.png"
      heroImage="/images/treatments/Braces.png"
      tagline="High-quality metal and ceramic braces for precise tooth alignment — the trusted ..."
      description="Traditional braces use brackets bonded to your teeth and connected by archwires to gradually move teeth into correct alignment. Modern braces are far more comfortable and efficient than older versions — with smaller, lighter brackets and heat-activated nickel-titanium wires that exert gentle, continuous force. We offer metal braces for maximum effectiveness and ceramic (tooth-coloured) braces for improved aesthetics. Braces are the most reliable orthodontic treatment for complex cases including severe crowding, bite problems, and jaw misalignment."
      benefits={[
        "Treats all levels of crowding, spacing, and bite issues",
        "Most precise tooth movement control of any orthodontic system",
        "Ceramic (tooth-coloured) option for discretion",
        "Proven technology with 100+ years of clinical evidence",
        "Fixed to teeth — no compliance issues with wear time",
        "Suitable for all ages — children, teens, and adults",
              "Suitable for all age groups",
        "Improves oral hygiene and bite function",
      ]}
      steps={[
        { title: "Clinical Assessment", desc: "Clinical exam, OPG X-ray, and study models to fully plan treatment." },
        { title: "Treatment Planning", desc: "Detailed plan showing tooth movements, timeline, and expected outcome." },
        { title: "Bracket Bonding", desc: "Brackets bonded to each tooth with dental adhesive — no drilling." },
        { title: "Archwire Placement", desc: "Flexible archwire threaded through brackets and secured with elastics." },
        { title: "Monthly Adjustments", desc: "Regular visits to adjust wire tension and monitor tooth movement." },
        { title: "Progress X-Rays", desc: "Mid-treatment X-rays confirm root movement is on track." },
        { title: "Debonding & Retainers", desc: "Brackets removed, teeth polished, and retainers fitted to hold results." },
      ]}
      faqs={[
        { q: "How long does braces treatment take?", a: "Treatment typically takes 18–36 months depending on the severity of the case. Regular attendance at adjustment appointments is essential for staying on schedule." },
        { q: "Do braces hurt?", a: "The bonding procedure is painless. Mild soreness for 2–3 days after each adjustment is normal as teeth adapt to new pressure. Over-the-counter pain relievers provide easy relief." },
        { q: "What foods should I avoid with braces?", a: "Avoid hard, sticky, and chewy foods like chewing gum, hard candy, ice, and crusty bread. These can break brackets or bend wires, delaying treatment." },
        { q: "What is the difference between metal and ceramic braces?", a: "Metal braces are stronger and more cost-effective. Ceramic braces use tooth-coloured brackets for better aesthetics. Both use the same mechanism and produce equivalent results." },
        { q: "Can I eat normal food with braces?", a: "You should avoid hard, sticky, and chewy foods (like nuts, popcorn, caramel, and chewing gum) that can damage the brackets or wires. Soft foods are recommended." },
        { q: "Do I need to wear retainers after braces?", a: "Yes, retainers are essential to keep your teeth in their new positions. Without retainers, teeth tend to shift back to their original places." },
      ]}
      relatedServices={[
        { title: "Invisible Braces", desc: "Clear aligner alternative for discreet treatment.", icon: "/icons/Invisible Braces.png", link: "/invisible-braces" },
        { title: "Teeth Cleaning", desc: "Essential professional cleaning during treatment.", icon: "/icons/teeth Cleaning (2).png", link: "/teeth-cleaning" },
        { title: "Teeth Whitening", desc: "Whiten your smile after braces come off.", icon: "/icons/teeth-whitening.png", link: "/teeth-whitening" },
        { title: "Wisdom Teeth Extraction", desc: "Removal of wisdom teeth before/during orthodontic treatment.", icon: "/icons/wisdom-tooth.png", link: "/wisdom-teeth-extraction" },
      ]}
    />
  );
}
