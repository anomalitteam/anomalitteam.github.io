import { StudioChrome } from "@/components/layout/StudioChrome";

export default function StudioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <StudioChrome>{children}</StudioChrome>;
}
