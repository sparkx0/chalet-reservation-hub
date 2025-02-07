
import { CreditCard } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RoomRules = () => {
  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="rules">
        <AccordionTrigger className="text-xl font-serif text-wood-dark">
          Règles de la maison
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-3 text-stone-dark">
            <li>• Arrivée : 15h00 / Départ : 11h00</li>
            <li>• Lit enfant disponible sur demande</li>
            <li>• Les fêtes/événements ne sont pas autorisés</li>
            <li className="mt-4">Cartes bancaires acceptées :</li>
            <li className="flex gap-4">
              <CreditCard className="text-wood-dark" />
              <span>Visa, Mastercard, American Express, Maestro</span>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="info">
        <AccordionTrigger className="text-xl font-serif text-wood-dark">
          À savoir
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3 text-stone-dark">
            <p>Veuillez informer l'établissement Le chalet du Salève à l'avance de l'heure à laquelle vous prévoyez d'arriver. Vous pouvez indiquer cette information dans la rubrique « Demandes spéciales » lors de la réservation ou contacter directement l'établissement.</p>
            <p>Les enterrements de vie de célibataire et autres fêtes de ce type sont interdits dans cet établissement.</p>
            <p>Les clients âgés de moins de 18 ans doivent être accompagnés d'un parent ou d'un tuteur légal pour pouvoir s'enregistrer.</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default RoomRules;
