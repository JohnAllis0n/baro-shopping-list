import { InventoryFeatures } from "@/components/ColumnDef";
import { BaseItem } from "@/types/BaseItem";
import { Row } from "@tanstack/react-table";

export default interface ExportProps {
  count: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  rowSelection: Row<InventoryFeatures, BaseItem>[];
}
