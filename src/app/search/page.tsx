import { BreadCrumb } from "@/components/BreadCrumb";
import Card from "@/components/itemcards/Card";
import Container from "@/components/ui/Container";
import { searchCatalogsByName } from "@/sanity/helpers";
import React from "react";

async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  const query = (await searchParams).search;
  const catalogs = await searchCatalogsByName(query);
  console.log(catalogs);

  if (!catalogs?.length) {
    return (
      <Container className="flex flex-col justify-center p-4">
        <h1 className="text-3xl font-bold mb-3">
          No Products found for <span className="font-integralcf">{query}</span>
        </h1>
        <p className="text-gray-600">Try searching with different keywords</p>
      </Container>
    );
  }
  return (
    <Container className="flex flex-col items-start justify-center">
      <h1 className="text-3xl font-bold mb-3">
        Search results for <span className="font-integralcf">{query}</span>
      </h1>
      <BreadCrumb location={["Home", "Search"]} />

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
        {catalogs.map((catalog) => (
          <Card key={catalog._id} catalog={catalog} />
        ))}
      </div>
    </Container>
  );
}

export default SearchPage;
