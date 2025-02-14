import { Link } from "react-router";

export function CustomLink({
  children,
  to = "#",
}: {
  children: React.ReactNode;
  to?: string;
}) {
  return (
    <Link to={to} className="underline text-blue-500">
      {children}
    </Link>
  );
}
