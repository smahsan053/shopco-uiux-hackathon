import { BreadCrumb } from "@/components/BreadCrumb";
import DisplayedProducts from "@/components/DisplayedProducts";
import Container from "@/components/ui/Container";
import getAllProducts, { getProductsCatalog } from "@/sanity/helpers";

export default async function Shop() {
  const products = await getAllProducts();
  console.log(products);
  const catalog = await getProductsCatalog();

  return (
    <Container>
      <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
      <BreadCrumb location={["Home", "Casual"]} />
      <DisplayedProducts catalog={catalog} />
    </Container>
  );
}
