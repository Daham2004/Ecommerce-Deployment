import {Fragment} from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

function AdminProducts() {
    const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
    return (
        <Fragment>
          <div className="mb-5 w-full flex justify-end">
            <Button onClick={() => setOpenCreateProductsDialog(true)}>
              Add New Product
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
          <Sheet
        open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false);
        }}
          >
            <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>
             Add New Product
            </SheetTitle>
            </SheetHeader>
            </SheetContent>
          </Sheet>
          </Fragment>
    );
}
