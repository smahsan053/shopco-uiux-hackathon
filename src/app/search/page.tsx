import Container from "@/components/ui/Container";
import React from "react";

async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  const query = await searchParams;
  return <Container>{query.search}</Container>;
}

export default SearchPage;
