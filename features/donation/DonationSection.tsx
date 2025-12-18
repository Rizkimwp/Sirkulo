'use client';
import { DonationRecord } from "@/types/donation";
import { useState } from "react";
import DonationForm from "./DonationForm";
import DonationList from "./DonationList";

const dummyDonations: DonationRecord[] = [
    { id: 1, name: 'Rizky', itemName: 'Rice Cooker', category: 'Dapur', createdAt: 'Baru saja' },
    { id: 2, name: 'Dewi', itemName: 'Blender', category: 'Dapur', createdAt: '1 jam yang lalu' },
    { id: 3, name: 'Andi', itemName: 'PS4 Slim', category: 'Elektronik', createdAt: '2 jam yang lalu' },
];
export default function DonationSection() {
    const [donations, setDonations] = useState<DonationRecord[]>(dummyDonations);
    const categories = ['Dapur', 'Elektronik', 'Fashion', 'Lainnya'];
    function handleAddDonation(data: Omit<DonationRecord, "id" | "createdAt">) {
        const newDonation: DonationRecord = {
            id: Date.now(),
            createdAt: "Baru saja",
            ...data,
        };

        setDonations((prev) => [newDonation, ...prev]);
    }
    return (
        <>
            <DonationForm categories={categories} onSubmit={handleAddDonation} />
            <DonationList donations={donations} />
        </>
    )
}