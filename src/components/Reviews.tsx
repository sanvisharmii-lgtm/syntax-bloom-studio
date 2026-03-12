import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    role: "Career Switcher",
    text: "I had zero coding experience. This course made Python feel approachable and even fun. The built-in IDE removed all setup friction.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Computer Science Student",
    text: "The OOP section is gold. Building the banking app and virtual pet really solidified my understanding of classes and inheritance.",
    rating: 5,
  },
  {
    name: "Priya R.",
    role: "Data Analyst",
    text: "Finally a Python course that respects my time. 15 hours, no fluff, real projects. The RegEx module alone was worth it.",
    rating: 5,
  },
  {
    name: "Alex T.",
    role: "Self-taught Developer",
    text: "The Serpy AI assistant is a game-changer. Every time I got stuck, it explained things in a way that actually made sense.",
    rating: 5,
  },
  {
    name: "Maria L.",
    role: "Marketing Professional",
    text: "The 3-in-1 format is brilliant. I watched videos on my commute, read lessons at my desk, and did exercises in the evening.",
    rating: 4,
  },
  {
    name: "Daniel W.",
    role: "Freelancer",
    text: "The instant AI feedback on my code helped me develop better habits from day one. Highly recommend for beginners.",
    rating: 5,
  },
];

const Reviews = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="section-padding" ref={ref}>
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-white">
            Loved by learners.
          </h2>
          <p className="text-text-secondary text-lg">
            Join thousands of students who transformed their careers with Python.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`h-4 w-4 ${s < review.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-5">
                "{review.text}"
              </p>
              <div>
                <p className="text-sm font-medium text-foreground">{review.name}</p>
                <p className="text-xs text-text-tertiary">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
