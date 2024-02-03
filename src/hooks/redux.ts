import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/root-reducer";
import { AppDispatch } from "@/redux/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
