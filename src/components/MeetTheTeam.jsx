import { motion } from "framer-motion";

const base = import.meta.env.BASE_URL;
const teamPhoto = `${base}team/meet-the-team.png`;

const SILIVE_ARTICLE =
  "https://www.silive.com/news/2019/12/peru-native-and-single-mom-team-up-to-open-salon.html";

const fontSans = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const fontSerif = { fontFamily: "'Playfair Display', serif" };

const MeetTheTeam = () => {
  return (
    <section
      id="team"
      className="relative py-28 md:py-36 bg-[#f8fafc] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 w-[28rem] h-[28rem] bg-[#1e3a5f]/[0.06] rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-0 w-80 h-80 bg-[#1e3a5f]/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-[#1e3a5f]/60 font-light mb-4"
            style={fontSans}
          >
            — The Salon —
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-normal text-[#1e3a5f] leading-tight"
            style={fontSerif}
          >
            Meet the <em className="italic font-light">Team</em>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative rounded-2xl overflow-hidden shadow-xl shadow-[#1e3a5f]/15 ring-1 ring-[#1e3a5f]/10"
          >
            <img
              src={teamPhoto}
              alt="Gina and Michele, owners of Gina Michele Hair Salon"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-center lg:text-left"
          >
            <p
              className="text-xl md:text-2xl text-[#1e3a5f] font-light leading-relaxed mb-8"
              style={fontSerif}
            >
              Gina and Michele have been perfecting their craft for 30+ years
              and work hard to bring your hair to life.
            </p>
            <a
              href={SILIVE_ARTICLE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-light text-[#1e3a5f] border-b border-[#1e3a5f]/35 hover:border-[#1e3a5f] pb-1 transition-colors"
              style={fontSans}
            >
              Read their story in the Staten Island Advance
              <span aria-hidden className="text-lg leading-none">
                ↗
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
