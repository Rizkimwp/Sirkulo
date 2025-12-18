import { StaticImageData } from "next/image";

export type Item = {
    id: number;
    name: string;
    category: string;
    image: StaticImageData;
    points: number;
    description?: string;
};
