export default function Home() {
  const products = [
    {
      id: 1,
      name: "ชุดปลูกผักไฮโดรโปนิกส์",
      price: 499,
      image: "https://images.unsplash.com/photo-1582281298055-24fe3c2f33f7",
    },
    {
      id: 2,
      name: "เมล็ดพันธุ์ผักสวนครัว",
      price: 89,
      image: "https://images.unsplash.com/photo-1612010161086-4d6f3d6f40da",
    },
    {
      id: 3,
      name: "เครื่องพ่นน้ำอัตโนมัติ",
      price: 1290,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
    },
  ];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">ร้านขายของออนไลน์</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white shadow-md rounded-2xl overflow-hidden">
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="text-green-600 font-bold">฿{p.price.toLocaleString()}</p>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
                เพิ่มในตะกร้า
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
