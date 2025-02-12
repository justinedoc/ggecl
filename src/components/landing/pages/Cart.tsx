import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function Cart() {
  return (
    <section className="px-4 py-10 md:px-8 md:py-12">
      <main>
        <header className="flex gap-2 md:gap-10 flex-col md:flex-row mb-5">
          <h1 className="text-3xl font-semibold">Shopping cart</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-blue-500">
                  Shopping Cart
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="text-gray-500 border-b py-1">3 Courses in cart</div>

        <article>
            <div></div>
        </article>
      </main>
    </section>
  );
}

export default Cart;
