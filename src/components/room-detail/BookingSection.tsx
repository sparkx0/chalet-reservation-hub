
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { differenceInDays } from "date-fns";

interface BookingSectionProps {
  price: number;
  dateRange: {
    from: Date | undefined;
    to: Date | undefined;
  };
  onDateSelect: (range: any) => void;
  calculateTotalPrice: () => number;
}

const BookingSection = ({ 
  price, 
  dateRange, 
  onDateSelect, 
  calculateTotalPrice 
}: BookingSectionProps) => {
  return (
    <div className="bg-wood-light/10 rounded-lg p-6 space-y-4">
      <h2 className="text-2xl font-serif text-wood-dark">Réserver cette chambre</h2>
      <div className="flex justify-between items-center">
        <span className="text-xl font-semibold text-wood-dark">
          {price}€ / nuit
        </span>
      </div>
      <Calendar
        mode="range"
        selected={dateRange}
        onSelect={onDateSelect}
        numberOfMonths={2}
        className="rounded-md border"
      />
      <div className="text-lg font-semibold text-wood-dark">
        Total: {calculateTotalPrice()}€
        {dateRange.from && dateRange.to && (
          <span className="text-sm font-normal ml-2">
            pour {differenceInDays(dateRange.to, dateRange.from)} nuits
          </span>
        )}
      </div>
      <Button className="w-full bg-wood hover:bg-wood-dark text-white">
        Réserver maintenant
      </Button>
    </div>
  );
};

export default BookingSection;
