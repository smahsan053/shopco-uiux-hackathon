import React from "react";
// import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

function FilterComment({
  setSortCriteria,
}: {
  setSortCriteria: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [showStatusBar, setShowStatusBar] = React.useState<boolean>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<boolean>(false);
  const [showPanel, setShowPanel] = React.useState<boolean>(false);

  const handleCheck = (checkedType: string) => {
    setSortCriteria(checkedType);
    if (checkedType === "status") {
      setShowStatusBar(true);
      setShowActivityBar(false);
      setShowPanel(false);
    } else if (checkedType === "activity") {
      setShowActivityBar(true);
      setShowStatusBar(false);
      setShowPanel(false);
    } else {
      setShowPanel(true);
      setShowStatusBar(false);
      setShowActivityBar(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Button className="rounded-full bg-black/10 hover:bg-black/20 active:bg-black/5 text-black hidden md:flex">
            {" "}
            {showStatusBar
              ? "Latest"
              : showActivityBar
              ? "Most Relevant"
              : showPanel
              ? "Oldest"
              : ""}
            <ChevronDown />
          </Button>
          <Image
            src="/customerfeedback/filter.png"
            alt="filter"
            width={48}
            height={48}
            className="rounded-full flex md:hidden cursor-pointer hover:scale-105 active:scale-95"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter Rewiews</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={() => {
            handleCheck("status");
          }}
          defaultChecked
        >
          Latest
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={() => {
            handleCheck("activity");
          }}
        >
          Most Relevant
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={() => {
            handleCheck("panel");
          }}
        >
          Oldest
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default FilterComment;
