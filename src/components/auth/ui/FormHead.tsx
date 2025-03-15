import React from "react";

export function FormHead({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="space-y-1 text-center">
      <h1 className="text-2xl md:text-3xl font-bold leading-tight">{title}</h1>
      <p className="text-sm font-light">{children}</p>
    </header>
  );
}
