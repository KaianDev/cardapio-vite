import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./button";
import { LogIn } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "./input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/data/User";
import { useAppDispatch } from "@/hooks/redux";
import { setToken } from "@/redux/token/slice";
import { Login, formSchemaLogin } from "@/lib/FormSchema";

export const FormLogin = () => {
  const form = useForm<Login>({ resolver: zodResolver(formSchemaLogin) });
  const dispatch = useAppDispatch();

  const handleLogin = (data: Login) => {
    //TODO: Implementar login
    const res = login(data);
    if (res) {
      dispatch(setToken(res.token));
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <LogIn size={25} />
          Fazer Login
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xs sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Fazer Login</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input {...form.register("email")} id="email" placeholder="Email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              {...form.register("password")}
              id="password"
              placeholder="Senha"
              type="password"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Entrar</Button>
            <DialogClose asChild>
              <Button variant={"destructive"}>Cancelar</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
