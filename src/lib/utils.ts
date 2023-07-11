import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function calculateAge(birthdate: Date) {
    const today = new Date();
    const year = birthdate.getFullYear();
    const month = birthdate.getMonth();
    const date = birthdate.getDate();

    let age = today.getFullYear() - year;

    if (
        today.getMonth() < month ||
        (today.getMonth() === month && today.getDate() < date)
    ) {
        age--;
    }

    return age;
}
