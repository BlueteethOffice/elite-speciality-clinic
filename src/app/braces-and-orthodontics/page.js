import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata = {
  title: "Orthodontics & Braces in Dwarka | Elite Speciality Clinic",
  description:
    "Metal braces, ceramic braces, and invisible aligners by MDS orthodontists at Elite Speciality Clinic, Dwarka. Achieve a perfectly straight smile.",
};

export default function BracesAndOrthodonticsPage() {
  return (
    <ServicePageTemplate
      title="Orthodontics & Braces"
      category="Orthodontics"
      categoryColor="#7C3AED"
      icon="/icons/braces.png"
      heroImage="/images/treatments/Braces.png"
      tagline="Straighten your smile with precision orthodontics — metal braces, ceramic braces, or invisible aligners."
      description="Orthodontics is the dental specialty dedicated to correcting misaligned teeth and jaws. Crooked or crowded teeth not only affect appearance but also make cleaning difficult, leading to decay and gum disease. At Elite Speciality Clinic, our MDS-qualified orthodontist offers a full range of teeth-straightening options — from traditional metal braces to virtually invisible clear aligners — personalised to your age, bite, and lifestyle goals."
      benefits={[
        "Straighter teeth for a more confident, attractive smile",
        "Improved oral hygiene — easier brushing and flossing",
        "Corrects bite issues — overbite, underbite, crossbite",
        "Reduces abnormal tooth wear from misalignment",
        "Relieves jaw pain (TMJ) caused by poor bite",
        "Options for all ages — children, teens, and adults",
        "Invisible aligner options for discreet treatment",
        "Long-lasting results with proper retainer use",
      ]}
      steps={[
        { title: "Clinical Examination", desc: "Comprehensive dental and jaw examination to assess teeth positions and bite alignment." },
        { title: "X-Rays & Records", desc: "Panoramic and cephalometric X-rays plus dental impressions for accurate diagnosis." },
        { title: "Customised Treatment Plan", desc: "Personalised plan showing estimated duration, appliance type, and expected results." },
        { title: "Appliance Placement", desc: "Braces bonded or aligners fitted — treatment begins with gentle, guided pressure." },
        { title: "Regular Adjustments", desc: "Monthly adjustment visits to activate wires and progress tooth movement on schedule." },
        { title: "Debonding", desc: "Braces removed and teeth professionally polished to reveal your new aligned smile." },
        { title: "Retainer Fitting", desc: "Custom retainer fitted immediately to hold teeth in their new, correct position." },
      ]}
      faqs={[
        { q: "How long does orthodontic treatment take?", a: "Treatment duration varies from 12 to 30 months depending on case complexity. Simple crowding cases may complete in 12–18 months, while severe bite corrections can take up to 2.5 years." },
        { q: "What types of braces are available?", a: "We offer traditional metal braces, tooth-coloured ceramic braces, and clear removable aligners (invisible braces). Our orthodontist will recommend the best option for your specific case." },
        { q: "Do braces hurt?", a: "Initial placement and each adjustment causes mild soreness for 2–4 days, manageable with over-the-counter pain relief. The discomfort reduces significantly as your mouth adapts to treatment." },
        { q: "Can adults get braces?", a: "Absolutely. There is no upper age limit for orthodontic treatment. Clear aligners are especially popular with adults who prefer a discreet option. Healthy teeth can be moved at any age." },
        { q: "What happens after braces are removed?", a: "A retainer is fitted immediately after debonding. You'll wear it full-time initially, then nights-only. Consistent retainer use is essential to maintain your results permanently." },
        { q: "Can orthodontics fix my bite?", a: "Yes. Braces and functional appliances can correct most bite problems including overbite, underbite, open bite, crossbite, and deep bite, often avoiding jaw surgery." },
      ]}
      relatedServices={[
        { title: "Invisible Braces", desc: "Clear aligners for discreet straightening.", icon: "/icons/Invisible Braces.png", link: "/invisible-braces" },
        { title: "Teeth Cleaning", desc: "Essential hygiene throughout orthodontic treatment.", icon: "/icons/teeth Cleaning (2).png", link: "/teeth-cleaning" },
        { title: "Emax Veneers", desc: "Enhance your smile after alignment.", icon: "/icons/Emax Veneers.png", link: "/emax-veneers" },
        { title: "Composite Veneers", desc: "Quick cosmetic finishing after braces.", icon: "/icons/omposite Veneers.png", link: "/composite-veneers" },
      ]}
    />
  );
}
