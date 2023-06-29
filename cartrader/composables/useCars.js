//import cars from "../data/cars.json" 
import cars from "@/data/cars.json" // 可以用＠代表根目錄

export const useCars = () => {
    return {
        cars,
    };
};