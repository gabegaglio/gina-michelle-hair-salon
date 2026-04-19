import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const reviews = [
  {
    author: "Jean Spinelli",
    meta: "3 reviews",
    date: "8 months ago",
    rating: 5,
    text: "I full heartedly recommend Gina! After many disappointing haircuts from other stylists, Gina knew exactly what haircut to recommend for my face shape and hair. She is also a color expert! Crafting the correct match for my hair. She and Michele have created a warm, inviting atmosphere in their shop. Bravo ladies! It's a pleasure.",
  },
  {
    author: "Michael Gamba",
    meta: "Local Guide · 94 reviews · 392 photos",
    date: "6 years ago",
    rating: 5,
    text: "The two ladies that own and operate this place are the best ever. I'm so happy finally ventured out on their own. They do men, women and children haircuts and styles. They are the best. I strongly recommend coming here.",
  },
  {
    author: "Francisco Collado",
    meta: "9 reviews · 4 photos",
    date: "5 years ago",
    rating: 5,
    text: "Skillful stylists who work miracles! This salon has a welcoming, clean, and friendly atmosphere for everyone. Gina and Michele are gems.",
  },
  {
    author: "Cooper S",
    meta: "Local Guide · 14 reviews",
    date: "2 years ago",
    rating: 5,
    text: "Gina is the best. I have thick curly hair and most people cut it and 2 weeks later it doesn't look right as it grows back in. I never have that problem with Gina. She knows what she is doing. She is extremely efficient too. Never have to wait longer than 10 minutes, she's great!",
  },
  {
    author: "Robyn S",
    meta: "3 reviews",
    date: "a year ago",
    rating: 5,
    text: "Had hair color, cut, and blowout at Gina Michele Hair Salon. First time trying this salon, and it was a wonderful experience! I am very happy and I will definitely be back! The owners are so nice and the service is terrific.",
  },
  {
    author: "Karyn Schuneman",
    meta: "1 review",
    date: "6 years ago",
    rating: 5,
    text: "Absolutely love this place. Both Gina and Michele gave me a complete new look. From cutting my hair short to bringing out a color more suited for me along with some highlights. They also make you feel welcome and comfortable unlike other salons. I recommend them for all of your hair needs!",
  },
  {
    author: "Balasaraswati Sriram",
    meta: "Local Guide · 40 reviews · 2 photos",
    date: "4 years ago",
    rating: 5,
    text: "Clean, personal touch, knowledgeable, friendly. My first visit to this salon and I walked out a happy person. Gina is excellent at her work. She accommodated me as a walk in customer. Can't thank her enough. They use good products and I got a lot of compliments on my hair. This will be my go to place.",
  },
  {
    author: "Raymond Russo",
    meta: "8 reviews · 1 photo",
    date: "6 years ago",
    rating: 5,
    text: "Amazing modern hair salon, Gina is an absolutely the best, she excels in everything she does. I've been coming to her for years and not one disappointment. Very kind and generous atmosphere, you won't regret coming here for all ages! Amazing location and plenty of parking! Prices are just right.",
  },
  {
    author: "Dennis Waszak",
    meta: "11 reviews · 4 photos",
    date: "6 years ago",
    rating: 5,
    text: "Gina and Michele are great at what they do — and even better people. They work hard and do terrific work, and have been doing so for years! This is a great new spot for them — and THE place to go for a great cut, styling, etc., for men, women and kids!",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!touchStartX.current) return;
    touchEndX.current = e.touches[0].clientX;
    const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current);
    if (deltaX > 10) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) {
      touchStartX.current = 0;
      touchEndX.current = 0;
      return;
    }

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    } else if (distance < -minSwipeDistance) {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? "text-[#1e3a5f]" : "text-[#1e3a5f]/20"}
      >
        ★
      </span>
    ));
  };

  const getVisibleReviews = () => {
    const visible = [];
    const count = Math.min(3, reviews.length);
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
  };

  return (
    <section
      id="reviews"
      className="py-24 bg-[#f8fafc] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2
            className="text-4xl md:text-5xl font-normal mb-4 text-[#1e3a5f]"
            style={{
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Customer Reviews
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-24 h-0.5 bg-[#1e3a5f] mb-16"
        ></motion.div>

        {/* Mobile: Horizontal scrolling carousel */}
        <div className="md:hidden mb-8">
          <div
            className="overflow-hidden relative w-full"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: "pan-y pinch-zoom" }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out will-change-transform"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="w-full flex-shrink-0 px-4"
                  style={{ minWidth: "100%", maxWidth: "100%" }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white border border-[#1e3a5f]/10 p-8 rounded-2xl shadow-md flex flex-col"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
                        {review.author.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p
                          className="font-normal text-[#1e3a5f]"
                          style={{
                            fontFamily:
                              "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                          }}
                        >
                          {review.author}
                        </p>
                        <div className="flex text-sm mt-1">
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-xs text-[#1e3a5f]/60 font-light mt-1">
                          {review.meta}
                        </p>
                      </div>
                    </div>
                    <p
                      className="text-[#1e3a5f]/80 italic leading-relaxed mb-4 flex-grow font-light"
                      style={{
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                      }}
                    >
                      "{review.text}"
                    </p>
                    <p className="text-xs text-[#1e3a5f]/60 font-light">
                      {review.date}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          <AnimatePresence mode="wait">
            {getVisibleReviews().map((review, idx) => (
              <motion.div
                key={`${currentIndex}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-[#1e3a5f]/10 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
                    {review.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p
                      className="font-normal text-[#1e3a5f]"
                      style={{
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {review.author}
                    </p>
                    <div className="flex text-sm mt-1">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-xs text-[#1e3a5f]/60 font-light mt-1">
                      {review.meta}
                    </p>
                  </div>
                </div>
                <p
                  className="text-[#1e3a5f]/80 italic leading-relaxed mb-4 flex-grow font-light"
                  style={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                  }}
                >
                  "{review.text}"
                </p>
                <p className="text-xs text-[#1e3a5f]/60 font-light">
                  {review.date}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-3 h-3 bg-[#1e3a5f]"
                  : "w-2 h-2 bg-[#1e3a5f]/30 hover:bg-[#1e3a5f]/50"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile: Swipe indicator */}
        <div className="md:hidden text-center mt-4">
          <p
            className="text-xs text-[#1e3a5f]/60 font-light"
            style={{
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Swipe to see more reviews
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://www.google.com/search?q=gina+michele+hair+salon"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#1e3a5f] hover:bg-[#0a1f3d] text-white font-normal px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            style={{
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Leave a Review on Google
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
