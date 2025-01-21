// src/app/product/[id]/page.tsx
import { BreadCrumb } from "@/components/BreadCrumb";
import Product from "@/components/product/Product";
import FeedbackTabs from "@/components/feedback/FeedbackTabs";
import DisplayCard from "@/components/itemcards/DisplayCard";
import Container from "@/components/ui/Container";
import { getProductsCatalog } from "@/sanity/helpers";
// export interface Item {
//   id: string;
//   itemName: string;
//   image1: string;
//   image2: string;
//   image3: string;
//   image4: string;
//   actualPrice: number;
//   discountedPrice?: number;
//   rating: number;
//   discountpercent?: number;
//   section?: string;
// }
// export const items: Item[] = [
//   {
//     id: "1",
//     itemName: "One Life Graphic T-shirt",
//     image1: "/item/graphictshirt1.png",
//     image2: "/item/graphictshirt2.png",
//     image3: "/item/graphictshirt3.png",
//     image4: "/item/graphictshirt4.png",
//     discountedPrice: 260.0,
//     actualPrice: 300.0,
//     rating: 4.5,
//     discountpercent: 40,
//   },
//   {
//     id: "2",
//     itemName: "T-SHIRT WITH TAPE DETAILS",
//     image1: "/item/tshirt.png",
//     image2: "/item/tshirt.png",
//     image3: "/item/tshirt.png",
//     image4: "/item/tshirt.png",
//     actualPrice: 120.0,
//     rating: 3.5,
//     section: "newArrivals",
//   },
//   {
//     id: "3",
//     itemName: "SKINNY FIT JEANS",
//     image1: "/item/jeans.png",
//     image2: "/item/jeans.png",
//     image3: "/item/jeans.png",
//     image4: "/item/jeans.png",
//     discountedPrice: 240.0,
//     actualPrice: 260,
//     rating: 4.5,
//     discountpercent: 20,
//     section: "newArrivals",
//   },
//   {
//     id: "4",
//     itemName: "CHECKERED SHIRT",
//     image1: "/item/chekeredshirt.png",
//     image2: "/item/chekeredshirt.png",
//     image3: "/item/chekeredshirt.png",
//     image4: "/item/chekeredshirt.png",
//     actualPrice: 180.0,
//     rating: 4.5,
//     section: "newArrivals",
//   },
//   {
//     id: "5",
//     itemName: "SLEEVE STRIPED T-SHIRT",
//     image1: "/item/stripedshirt.png",
//     image2: "/item/stripedshirt.png",
//     image3: "/item/stripedshirt.png",
//     image4: "/item/stripedshirt.png",
//     discountedPrice: 160.0,
//     actualPrice: 130,
//     rating: 4.5,
//     discountpercent: 30,
//     section: "newArrivals",
//   },
//   {
//     id: "6",
//     itemName: "VERTICAL STRIPED SHIRT",
//     image1: "/item/vstripedshirt.png",
//     image2: "/item/vstripedshirt.png",
//     image3: "/item/vstripedshirt.png",
//     image4: "/item/vstripedshirt.png",
//     discountedPrice: 212.0,
//     actualPrice: 232,
//     rating: 5,
//     discountpercent: 20,
//     section: "topSellings",
//   },
//   {
//     id: "7",
//     itemName: "COURAGE GRAPHIC T-SHIRT",
//     image1: "/item/couragetshirt.png",
//     image2: "/item/couragetshirt.png",
//     image3: "/item/couragetshirt.png",
//     image4: "/item/couragetshirt.png",
//     actualPrice: 145.0,
//     rating: 4,
//     section: "topSellings",
//   },
//   {
//     id: "8",
//     itemName: "LOOSE FIT BERMUDA SHORTS",
//     image1: "/item/shorts.png",
//     image2: "/item/shorts.png",
//     image3: "/item/shorts.png",
//     image4: "/item/shorts.png",
//     actualPrice: 80.0,
//     rating: 3,
//     section: "topSellings",
//   },
//   {
//     id: "9",
//     itemName: "FADED SKINNY JEANS",
//     image1: "/item/skinnyjeans.png",
//     image2: "/item/skinnyjeans.png",
//     image3: "/item/skinnyjeans.png",
//     image4: "/item/skinnyjeans.png",
//     actualPrice: 210.0,
//     rating: 4.5,
//     section: "topSellings",
//   },
//   {
//     id: "10",
//     itemName: "Polo with Contrast Trims",
//     image1: "/item/polocontrast.png",
//     image2: "/item/polocontrast.png",
//     image3: "/item/polocontrast.png",
//     image4: "/item/polocontrast.png",
//     discountedPrice: 212.0,
//     actualPrice: 242,
//     rating: 4.0,
//     discountpercent: 29,
//     section: "recommeneded",
//   },
//   {
//     id: "11",
//     itemName: "Gradient Graphic T-shirt",
//     image1: "/item/gradienttshirt.png",
//     image2: "/item/gradienttshirt.png",
//     image3: "/item/gradienttshirt.png",
//     image4: "/item/gradienttshirt.png",
//     actualPrice: 145.0,
//     rating: 3.5,
//     section: "recommeneded",
//   },
//   {
//     id: "12",
//     itemName: "Polo with Tipping Details",
//     image1: "/item/polotipping.png",
//     image2: "/item/polotipping.png",
//     image3: "/item/polotipping.png",
//     image4: "/item/polotipping.png",
//     actualPrice: 180.0,
//     rating: 4.5,
//     section: "recommeneded",
//   },
//   {
//     id: "13",
//     itemName: "Black Striped T-shirt",
//     image1: "/item/blacktshirt.png",
//     image2: "/item/blacktshirt.png",
//     image3: "/item/blacktshirt.png",
//     image4: "/item/blacktshirt.png",
//     discountedPrice: 120.0,
//     actualPrice: 150,
//     rating: 5,
//     discountpercent: 30,
//     section: "recommeneded",
//   },
// ];
export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  // You can directly access the `id` from the `params` object
  const params = await props.params;
  const id = params.id;
  const catalog = await getProductsCatalog();
  return (
    <Container className="relative overflow-x-hidden">
      {catalog.length > 0 ? (
        catalog.map(
          (product) =>
            product._id === id && (
              <div key={product._id} className="flex flex-col">
                <BreadCrumb location={["Home", "Shop", "Men", "T-shirts"]} />
                <Product product={product} />
              </div>
            )
        )
      ) : (
        <p>No products available.</p>
      )}
      <FeedbackTabs />
      <DisplayCard heading="You might also like" button={false} id={id} />
    </Container>
  );
}
