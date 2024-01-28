import type { Food } from "@/@types/Food";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

type FoodItemProps = {
  food: Food;
};

export const FoodItem = ({ food }: FoodItemProps) => {
  return (
    <Card key={food.id}>
      <CardHeader>
        <CardTitle>{food.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={food.image}
          alt={food.title}
          className="h-40 w-full rounded-lg object-cover"
        />
      </CardContent>
      <CardFooter className="justify-between">
        <p className="font-bold">Preço:</p>
        <p className="rounded-lg bg-slate-500 p-1 font-bold text-white">
          {food.price.toLocaleString("pt-Br", {
            currency: "BRL",
            style: "currency",
          })}
        </p>
      </CardFooter>
    </Card>
  );
};
