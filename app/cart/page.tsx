'use client';
import { useCartStore, Product } from '@/lib/cartStore';

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">ตะกร้าสินค้า</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">ยังไม่มีสินค้าในตะกร้า</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item: Product, idx: number) => (
            <li key={idx} className="bg-white p-4 shadow rounded flex justify-between items-center">
              <span>{item.name}</span>
              <span>฿{item.price.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 text-xl text-right font-bold">รวมทั้งหมด: ฿{total.toLocaleString()}</div>
    </main>
  );
}
