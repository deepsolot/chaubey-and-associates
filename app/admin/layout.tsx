// Admin section has its own minimal layout (no main site Navbar/Footer)
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
