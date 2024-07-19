import AdminLayout from "@/layouts/AdminLayout";

export default function LayoutAdmin({ children, params: { locale } }: any) {
  return <AdminLayout>{children}</AdminLayout>;
}
