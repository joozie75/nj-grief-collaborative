import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'NJ Grief Collaborative',
    template: '%s | NJ Grief Collaborative',
  },
  description: 'A coalition of four NJ family bereavement centers supporting grief education in schools under P.L.2023, c.201.',
  keywords: ['grief education', 'New Jersey', 'bereavement', 'schools', 'P.L.2023 c.201', 'grief-informed schools'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
