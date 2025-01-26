import { motion } from "framer-motion";
import { MessageSquare, User, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sophie Martin",
    rating: 5,
    date: "Janvier 2024",
    comment: "Un séjour inoubliable dans ce magnifique chalet. La vue sur le Mont Salève est à couper le souffle !"
  },
  {
    id: 2,
    name: "Pierre Dubois",
    rating: 5,
    date: "Décembre 2023",
    comment: "Parfait pour notre réunion de famille. Les espaces sont très bien pensés et le service est impeccable."
  },
  {
    id: 3,
    name: "Marie Laurent",
    rating: 5,
    date: "Novembre 2023",
    comment: "Un véritable havre de paix avec des prestations haut de gamme. Nous reviendrons !"
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-snow">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-wood-dark mb-6">
            Avis de nos clients
          </h2>
          <div className="flex items-center justify-center gap-2 text-wood mb-4">
            <MessageSquare className="w-6 h-6" />
            <span className="text-lg">Découvrez leurs expériences</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-wood/10 rounded-full p-2">
                  <User className="w-6 h-6 text-wood" />
                </div>
                <div>
                  <h3 className="font-serif text-wood-dark">{review.name}</h3>
                  <p className="text-sm text-stone-dark">{review.date}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-wood text-wood" />
                ))}
              </div>
              <p className="text-stone-dark">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;