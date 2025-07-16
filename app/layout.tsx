import './globals.css'; // ✅ เพิ่มบรรทัดนี้ไว้ด้านบนสุด

export const metadata = {
  title: 'Valentine App',
  description: 'หัวใจลอยฟุ้ง น่ารักมาก 💖',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
