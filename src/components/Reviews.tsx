import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Linkedin, ExternalLink } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Sarah M.",
    role: "Career Switcher",
    text: "I had zero coding experience. This course made Python feel approachable and even fun. The built-in IDE removed all setup friction.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "James K.",
    role: "Computer Science Student",
    text: "The OOP section is gold. Building the banking app and virtual pet really solidified my understanding of classes and inheritance.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Priya R.",
    role: "Data Analyst",
    text: "Finally a Python course that respects my time. 15 hours, no fluff, real projects. The RegEx module alone was worth it.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Alex T.",
    role: "Self-taught Developer",
    text: "The Serpy AI assistant is a game-changer. Every time I got stuck, it explained things in a way that actually made sense.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Maria L.",
    role: "Marketing Professional",
    text: "The 3-in-1 format is brilliant. I watched videos on my commute, read lessons at my desk, and did exercises in the evening.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Daniel W.",
    role: "Freelancer",
    text: "The instant AI feedback on my code helped me develop better habits from day one. Highly recommend for beginners.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    linkedin: "https://linkedin.com/in/",
  },
];

const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(2);
const totalRatings = 312;

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
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of students who transformed their careers with Python.
          </p>

          {/* Overall Rating */}
          <div className="inline-flex flex-col items-center gap-1 glass-card rounded-2xl px-8 py-5">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold text-foreground">{averageRating}</span>
              <span className="text-xl text-muted-foreground">/5</span>
            </div>
            <div className="flex gap-0.5 my-2">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  className={`h-5 w-5 ${s < Math.round(Number(averageRating)) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Based on <span className="font-semibold text-foreground">{totalRatings}</span> ratings
            </p>
          </div>
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
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={review.image} alt={review.name} />
                  <AvatarFallback className="text-xs">{review.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
                <a
                  href={review.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${review.name}'s LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See all reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
          >
            See all reviews
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
