import { motion } from "framer-motion";

const base = import.meta.env.BASE_URL;

const galleryImages = [
  { src: `${base}gallery/work-01.png`, alt: "Long hair with dimensional highlights and waves" },
  { src: `${base}gallery/work-02.png`, alt: "Shoulder-length color with cool-toned highlights" },
  { src: `${base}gallery/work-03.png`, alt: "Long hair with balayage and soft curls" },
  { src: `${base}gallery/work-04.png`, alt: "Balayage with loose waves" },
  { src: `${base}gallery/work-05.png`, alt: "Honey-blonde highlights with beachy waves" },
  { src: `${base}gallery/work-06.png`, alt: "Children's haircut and style" },
  { src: `${base}gallery/work-07.png`, alt: "Textured men's fade haircut" },
  { src: `${base}gallery/work-08.png`, alt: "High skin fade with styled top" },
  { src: `${base}gallery/work-09.png`, alt: "Men's haircut with beard grooming" },
  { src: `${base}gallery/work-10.png`, alt: "Taper fade with textured curls" },
  { src: `${base}gallery/work-11.png`, alt: "Precision taper fade from behind" },
  { src: `${base}gallery/work-12.png`, alt: "Men's haircut with salon branding in window" },
  { src: `${base}gallery/work-13.png`, alt: "Classic neat men's cut with tapered neckline" },
];

const fontSans = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const fontSerif = { fontFamily: "'Playfair Display', serif" };

const OurWork = () => {
  return (
    <section
      id="our-work"
      className="relative py-28 md:py-36 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #1e3a5f 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-[#1e3a5f]/60 font-light mb-4"
            style={fontSans}
          >
            — Portfolio —
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-normal text-[#1e3a5f] leading-tight"
            style={fontSerif}
          >
            Our <em className="italic font-light">Work</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-6 text-[#1e3a5f]/60 font-light max-w-2xl mx-auto"
            style={fontSans}
          >
            Color, cuts, and finishes from the chair—women&apos;s, men&apos;s,
            and kids&apos; styles.
          </motion.p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {galleryImages.map((item, index) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: Math.min(index * 0.04, 0.4), duration: 0.55 }}
              className="break-inside-avoid mb-4 rounded-lg overflow-hidden shadow-md shadow-[#1e3a5f]/10 ring-1 ring-[#1e3a5f]/5"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading={index < 6 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-auto object-cover"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
