import { ProductChrome } from "@/components/layout/ProductChrome";

export default function EazyShotLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ProductChrome>{children}</ProductChrome>;
}
