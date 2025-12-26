'use client';

import { DonationRecord } from "@/types/donation";
import { useState } from "react";
import DonationForm from "./DonationForm";
import DonationList from "./DonationList";

const dummyDonations: DonationRecord[] = [
  { id: 1, name: 'Rizky', itemName: 'Rice Cooker', category: 'Kitchen', createdAt: 'Just now' },
  { id: 2, name: 'Dewi', itemName: 'Blender', category: 'Kitchen', createdAt: '1 hour ago' },
  { id: 3, name: 'Andi', itemName: 'PS4 Slim', category: 'Electronics', createdAt: '2 hours ago' },
];

export default function DonationSection() {
  const [donations, setDonations] = useState<DonationRecord[]>(dummyDonations);

  const categories = ['Kitchen', 'Electronics', 'Fashion', 'Others'];

  function handleAddDonation(
    data: Omit<DonationRecord, 'id' | 'createdAt'>
  ) {
    const newDonation: DonationRecord = {
      id: Date.now(),
      createdAt: 'Just now',
      ...data,
    };

    setDonations((prev) => [newDonation, ...prev]);
  }

  return (
    <>
      <DonationForm categories={categories} onSubmit={handleAddDonation} />
      <DonationList donations={donations} />
    </>
  );
}
