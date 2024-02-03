import { FormAddFood } from "./components/ui/FormAddFood";
import { AddForm } from "./lib/FormSchema";
import { FoodItem } from "./components/ui/FoodItem";
import { useAddFood, useFood } from "./hooks/Food";
import { FormLogin } from "./components/ui/FormLogin";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { Button } from "./components/ui/button";
import { LogOut } from "lucide-react";
import { clearToken } from "./redux/token/slice";

const App = () => {
  const { data, isFetching } = useFood();
  const { mutateAsync } = useAddFood();
  const { token } = useAppSelector((state) => state.token);
  const dispatch = useAppDispatch();

  const handleAddFoodSubmit = async (data: AddForm) => {
    mutateAsync(data);
  };

  const handleLogout = () => {
    dispatch(clearToken());
  };

  return (
    <div className="min-h-dvh bg-slate-700">
      <div className="mx-auto max-w-5xl">
        <h1 className="p-3 text-center text-3xl font-bold text-white">
          Cardápio
        </h1>
        <div className="flex justify-between px-6">
          {token && <FormAddFood onSubmit={handleAddFoodSubmit} />}
          {token ? (
            <Button onClick={handleLogout} className="gap-2">
              <LogOut size={25} />
              Sair
            </Button>
          ) : (
            <FormLogin />
          )}
        </div>
        <h2 className="text-center text-xl font-bold text-white">
          Lista de Comidas
        </h2>
        <div className="grid grid-cols-1 gap-10 p-6 sm:grid-cols-2 md:grid-cols-3">
          {data && data.map((item) => <FoodItem food={item} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
