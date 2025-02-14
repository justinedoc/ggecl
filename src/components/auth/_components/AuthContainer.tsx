function AuthContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto p-6 w-fit flex items-center lg:max-w-[30rem]">
      <main className="rounded-xl flex md:border md:shadow-sm">
        {children}
      </main>
    </section>
  );
}

export default AuthContainer;
