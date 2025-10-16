import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface CartItem {
  title: string;
  price: number;
  type: string;
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
