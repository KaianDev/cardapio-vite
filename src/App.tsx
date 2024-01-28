import { Food } from "./@types/Food";
import { FormAddFood } from "./components/ui/FormAddFood";
import { AddForm } from "./lib/FormSchema";
import { FoodItem } from "./components/ui/FoodItem";
import { useAddFood, useFood } from "./hooks/Food";

const App = () => {
  const foods: Food[] = [];
  const { data, isFetching } = useFood();
  const { mutateAsync } = useAddFood();

  const handleAddFoodSubmit = async (data: AddForm) => {
    mutateAsync(data);
  };

  return (
    <div className="min-h-dvh bg-slate-700">
      <div className="mx-auto max-w-5xl">
        <h1 className="p-3 text-center text-3xl font-bold text-white">
          Cardápio
        </h1>
        <div className="flex justify-end pr-6">
          <FormAddFood onSubmit={handleAddFoodSubmit} />
        </div>
        <div className="grid grid-cols-2 gap-10 p-6 md:grid-cols-3">
          {data && data.map((item) => <FoodItem food={item} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
