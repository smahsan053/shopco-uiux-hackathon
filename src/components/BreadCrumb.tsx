import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
interface PropType {
  location: string[];
}
export function BreadCrumb(props: PropType) {
  return (
    <div className="mt-12">
      <Breadcrumb>
        <BreadcrumbList>
          {props.location.map((location, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink href={`/`}>{location}</BreadcrumbLink>
              {index !== props.location.length - 1 && "/"}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
