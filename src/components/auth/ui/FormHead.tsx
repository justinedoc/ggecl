import React from "react";

export function FormHead({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <header className="space-y-2 text-center">
      <h1 className="text-[1.9rem] font-bold leading-[0.9]">
        {title}
      </h1>
      <p className="text-md font-light">{children}</p>
    </header>
  );
}
