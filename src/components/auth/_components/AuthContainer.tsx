function AuthContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="dark:bg-gray-900 p-4 md:p-6 flex items-center w-full justify-center">
      <main className="w-full rounded-xl flex md:border dark:border-blue-300/30 md:shadow-sm lg:max-w-[30rem] lg:min-w-[25rem]">
        {children}
      </main>
    </section>
  );
}

export default AuthContainer;
