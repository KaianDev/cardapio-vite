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
import { LucidePlus } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "./label";
import { Input } from "./input";
import { AddForm, formSchema } from "@/lib/FormSchema";

type Props = {
  onSubmit: (data: AddForm) => void;
};

export const FormAddFood = ({ onSubmit }: Props) => {
  const form = useForm<AddForm>({ resolver: zodResolver(formSchema) });

  const submitForm = (data: AddForm) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <LucidePlus size={25} />
          Adicionar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Comida</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(submitForm)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              placeholder="Nome da Comida"
              {...form.register("title")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Preço</Label>
            <Input
              {...form.register("price", { valueAsNumber: true })}
              id="price"
              placeholder="Valor da Comida"
              type="number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input
              id="image"
              placeholder="Informe a url da imagem"
              {...form.register("image")}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="destructive">
                Cancelar
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit">Cadastrar</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
