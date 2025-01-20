import { BreadCrumb } from "@/components/BreadCrumb";
import DisplayedProducts from "@/components/DisplayedProducts";
import Container from "@/components/ui/Container";
import { getAllCategory, getProductsCatalog } from "@/sanity/helpers";

export default async function Shop() {
  const catalog = await getProductsCatalog();
  const categoriesData = await getAllCategory();
  
  return (
    <Container>
      <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
      <BreadCrumb location={["Home", "All Products"]} />
      <DisplayedProducts catalog={catalog} categoriesData={categoriesData} />
    </Container>
  );
}
