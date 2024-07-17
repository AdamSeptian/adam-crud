import { CreateButton } from "@/components/button";
import ContactTable from "@/components/contact-table";
import Pagination from "@/components/pagination";
import Search from "@/components/search";
import { getContactPages } from "@/lib/data";
import { TableSkeleton } from "@/components/skeleton";
import { Suspense } from "react";

const Contacts = async ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await getContactPages(query);
  return (
    <div className="m-12">
      <div className="md:flex justify-between">
        <div className="mb-2">
          <CreateButton />
        </div>
        <Search />
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton/>}>
        <ContactTable query={query} currentPage={currentPage} />
      </Suspense>
      

      <div className="flex justify-center mt-10 ">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Contacts;
