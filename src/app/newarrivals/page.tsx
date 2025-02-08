import { BreadCrumb } from "@/components/BreadCrumb";
import Container from "@/components/ui/Container";
import { getProductsCatalog } from "@/sanity/helpers";
import Card from "@/components/itemcards/Card";
import React from "react";

async function NewArrivals() {
  const catalogs = await getProductsCatalog();

  return (
    <Container className="flex flex-col items-start justify-center">
      <h1 className="text-3xl font-integralcf">New Arrivals</h1>
      <BreadCrumb location={["Home", "New Arrivals"]} />

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
        {catalogs
          .filter((catalog) => catalog.isNew)
          .map((catalog) => (
            <Card key={catalog._id} catalog={catalog} />
          ))}
      </div>
    </Container>
  );
}

export default NewArrivals;
