import { addFood, getAllFoods } from "@/data/Foods";
import { queryClient } from "@/lib/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useAddFood = () =>
  useMutation({
    mutationFn: addFood,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["foods"],
      });
    },
  });

export const useFood = () =>
  useQuery({
    queryKey: ["foods"],
    queryFn: getAllFoods,
  });
